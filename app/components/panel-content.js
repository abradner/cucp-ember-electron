import Ember from 'ember';

const { Component, computed, get, set } = Ember;
const { match } = computed;

const Incoming = 'incoming';
const Outgoing = 'outgoing';
const Monitored = 'monitored';


export default Component.extend({
  fields: {
    "message": [
      {"serial": "A", "type": "text", "name": "body", "label": "Message", "placeholder": "A concise summary of the radio traffic"}      
    ],
    "loc-stat": [
      {"serial": "A", "type": "text", "name": "location", "label": "Location (GR)", "placeholder": "012987"},
      {"serial": "B", "type": "checkbox", "name": "moving", "label": "Moving?", "helpBlock": "Ticked if moving, cleared if halted"},
      {"serial": "C", "type": "text", "name": "comment", "label": "Direction of movement - or - length of halt", "placeholder": "eg 'NW' or '5m'"}
    ],
    "strength-state": [
      {"serial": "A1", "type": "number", "name": "own", "label": "Number of own cadets", "placeholder": "e.g. 30"},
      {"serial": "A2", "type": "number", "name": "attachments", "label": "Number of attachments", "placeholder": "e.g. 3"},
      {"serial": "A3", "type": "number", "name": "staff",  "label": "Number of staff", "placeholder": "e.g. 3"},
      {"serial": "B1", "type": "number", "name": "expectedAttachments",  "label": "Number of expected ATTachments (in 24h)", "placeholder": "e.g. 1"},
      {"serial": "B2", "type": "number", "name": "expectedDetachments", "label": "Number of expected DETachments (in 24h)", "placeholder": "e.g. 1"},
      {"serial": "C", "type": "number", "name": "total", "label": "Total number of personel", "placeholder": "(A1+A2+A3+B1-B2"},
      {"serial": "X", "type": "special", "name": "special-total", "label": "Calculated number of personel. This must equal C", "placeholder": "(complete A1..B2)"}
    ],
    "maint-dem": [
      {"serial": "A", "type": "text", "name": "demandNumber", "label": "Demand Number", "placeholder": "e.g. D420"},
      {"serial": "B", "type": "number", "name": "priority", "label": "Priority", "placeholder": "enter 1, 2 or 3"},
      {"serial": "C1", "type": "number", "name": "quantityRations", "label": "Ration Packs (Quantity)", "placeholder": "e.g. 90"},
      {"serial": "C2", "type": "number", "name": "quantityWater",  "label": "20L Water (Quantity)", "placeholder": "e.g. 10"},
      {"serial": "C3", "type": "number", "name": "quantityFruit", "label": "Fruit (Quantity)", "placeholder": "e.g. 90"},
      {"serial": "C4", "type": "text", "name": "quantityOtherItems", "label": "Other Items And Quantity", "placeholder": "e.g. 'entrenching tool: 2; rope: 40m; carabiner: 10'"},
      {"serial": "D1", "type": "text", "name": "deliveryLocation", "label": "(GR) Location of delivery", "placeholder": "012987"},
      {"serial": "D2", "type": "text", "name": "deliveryTime", "label": "(DTG) Time of delivery", "placeholder": "251000"},      
      {"serial": "D3", "type": "text", "name": "deliveryMode", "label": "Mode of delivery", "placeholder": "playtime/pickup etc"},  
      {"serial": "E", "type": "text", "name": "comment", "label": "Remarks", "placeholder": "(free text)"}      
      
    ],
    "cas-evac": [
      {"serial": "PRI", "type": "number", "name": "priority", "label": "Priority", "placeholder": "enter 1, 2 or 3"},
      {"serial": "A", "type": "text", "name": "patientID", "label": "Patient Identifier", "placeholder": "e.g. C11"},
      {"serial": "B1", "type": "number", "name": "quantityStretcher",  "label": "Stretcher cases (Quantity)", "placeholder": "e.g. 1"},
      {"serial": "B2", "type": "number", "name": "quantitySitting", "label": "Sitting cases (Quantity)", "placeholder": "e.g. 2"},
      {"serial": "C", "type": "text", "name": "specialEquipment", "label": "Requirements for special equipment", "placeholder": "e.g. 'epipen, compression bandage, neck brace' etc"},
      {"serial": "D1", "type": "text", "name": "rvLocation", "label": "(GR) Location of RV", "placeholder": "012987"},
      {"serial": "D2", "type": "text", "name": "rvContact", "label": "Callsign & Channel at RV", "placeholder": "e.g. 2/unit net"},      
      {"serial": "E", "type": "text", "name": "comment", "label": "Remarks", "placeholder": "(free text)", "helpBlock": "This is listed as serial D in the SOI. since 2000ish. someone really should fix it."},      
      {"serial": "E(GR)", "type": "text", "name": "currLocation", "label": "(GR) Current Location (if GR supplied)", "placeholder": "012987", "helpBlock": "Optional. only enter a valid GR, otherwise use Serial E above"},
      {"serial": "LINK", "type": "special", "name": "special-noti-cas", "label": "Link to NotiCas", "placeholder": "(not yet implimented)"}
    ],
    "noti-cas": [
      {"serial": "A", "type": "text", "name": "patientID", "label": "Patient Identifier", "placeholder": "e.g. C11"},
      {"serial": "B", "type": "text", "name": "patientRank",  "label": "Patient Rank", "placeholder": "e.g. SSGT"},
      {"serial": "C", "type": "text", "name": "patientName", "label": "Patient Name", "placeholder": "e.g. Oldmate"},
      {"serial": "D", "type": "text", "name": "specialEquipment", "label": "Requirements for special equipment", "placeholder": "e.g. 'epipen, compression bandage, neck brace' etc"},
      {"serial": "E", "type": "text", "name": "injuryLocation", "label": "(GR) Location of injury", "placeholder": "012987"},
      {"serial": "F", "type": "text", "name": "injuryTime",  "label": "(DTG) Time of delivery", "placeholder": "251000"},      
      {"serial": "G", "type": "text", "name": "treatment", "label": "Treatment administered", "placeholder": "(free text)"},      
      {"serial": "H", "type": "text", "name": "currLocation", "label": "Remarks and present location (use field below for GR)", "placeholder": "(free text)"},      
      {"serial": "H(GR)", "type": "text", "name": "currLocation", "label": "(GR) Present Location (if GR supplied)", "placeholder": "012987", "helpBlock": "Optional. only enter a valid GR, otherwise use Serial H above"}

    ],
    "sit-rep": [
      {"serial": "A", "type": "text", "name": "time", "label": "(DTG) Time", "placeholder": "251000"},      
      {"serial": "B", "type": "text", "name": "situationOwn",  "label": "Own situation", "placeholder": "(free text)"},
      {"serial": "C", "type": "text", "name": "situationOthers", "label": "Patient Name", "placeholder": "(free text)"},
      {"serial": "D", "type": "text", "name": "future", "label": "Future intentions and relevant general information", "placeholder": "(free text)"}
    ],
    "int-rep": [
      {"serial": "A", "type": "text", "name": "time", "label": "(DTG) Time", "placeholder": "251000"},      
      {"serial": "B", "type": "text", "name": "location", "label": "(GR) Location of injury", "placeholder": "012987"},
      {"serial": "C", "type": "text", "name": "comment", "label": "Brief Description of Incident", "placeholder": "(free text)"},
      {"serial": "D", "type": "text", "name": "evaluation", "label": "Commander's evaluation", "placeholder": "(free text)"}
    ],
    "move-req": [
      {"serial": "A", "type": "text", "name": "rvCallsigns", "label": "Callsign(s) at RV", "placeholder": "e.g. 9A, 9B, 3"},      
      {"serial": "B", "type": "text", "name": "rvLandmark", "label": "Known landmark of RV", "placeholder": "e.g. 'CHQ'"},
      {"serial": "B([GR)", "type": "text", "name": "rvLocation", "label": "(GR) Location of RV", "placeholder": "012987"},
      {"serial": "C1", "type": "number", "name": "quantityPassengers",  "label": "Persons to be transported (Quantity)", "placeholder": "e.g. 2"},
      {"serial": "C2", "type": "text", "name": "configuration", "label": "Configuration of Troops (marching or patrol order)", "placeholder": "(free text)"},
      {"serial": "D1", "type": "text", "name": "cargo", "label": "Description of any cargo", "placeholder": "e.g. '4 rucksacks'"},
      {"serial": "D2", "type": "text", "name": "cargoVehicles", "label": "Estimated number of vehicle loads of cargo", "placeholder": "(free text)"},
      {"serial": "D3", "type": "checkbox", "name": "hasLoadingCrew", "label": "Is loading/unloading party available at loc",  "helpBlock": "Ticked if party  will be available"},
      {"serial": "E", "type": "text", "name": "pickupTime", "label": "(DTG) Time of pickup at location", "placeholder": "251000"},      
      {"serial": "F", "type": "text", "name": "rvLandmark", "label": "Known landmark of RV", "placeholder": "e.g. 'HQ'"},
      {"serial": "F([GR)", "type": "text", "name": "rvLocation", "label": "(GR) Location of RV", "placeholder": "012987"}
    ],
    "starlight-req": [
      {"serial": "A", "type": "text", "name": "rvCallsign", "label": "Callsign(s) at RV", "placeholder": "e.g. 3"},      
      {"serial": "B", "type": "text", "name": "rvLocation", "label": "(GR) Location of RV", "placeholder": "012987"},
      {"serial": "C", "type": "text", "name": "injury", "label": "Nature of illness or injury", "placeholder": "e.g. 'possible sprain'"},      
      {"serial": "D", "type": "text", "name": "rvLandmark", "label": "Any RV Details", "placeholder": "e.g. 'CHQ'"},
      {"serial": "E", "type": "text", "name": "comment", "label": "Remarks", "placeholder": "(free text)"},

    ],
    "sentry-rep": [
      {"serial": "A", "type": "text", "name": "numberPlate", "label": "Vehicle Number Plate", "placeholder": "ABC123"},      
      {"serial": "B", "type": "text", "name": "status", "label": "Status: Returning/Leaving", "placeholder": "Returning/Leaving"},
      {"serial": "C", "type": "text", "name": "passengers", "label": "Passengers (PAX)", "placeholder": "eg 'Sunray, Playtime', etc"},      
      {"serial": "D", "type": "text", "name": "destination", "label": "Destination", "placeholder": "eg 'coles"}, 
      {"serial": "E", "type": "text", "name": "estimatedReturn", "label": "(DTG) Estimated time of return", "placeholder": "eg '25100"},      
      {"serial": "F", "type": "text", "name": "comment", "label": "Other/Remarks", "placeholder": "(free text)"},

      
    ]
  },
  
  trafficDirection: null, 
  returnValues: {},

  showCallsignFrom: match('trafficDirection', /^(incoming|monitored)$/),
  showCallsignTo: match('trafficDirection', /^(outgoing|monitored)$/),

  subpanel: computed('recordType', function() {
    let type = get(this, 'recordType');
    return "record-"+type;
  }),

  returnFields: computed('recordType', function() {
    let recordType = this.get('recordType');
    return get(this, 'fields')[recordType];
  }),

  actions: {
    doChange(fieldName, value) {
      set(this, 'returnValues.'+fieldName, value);
      console.log(fieldName, value);
    },

    doSave(print) {
      this.sendAction(
        'saveRecord', 
        get(this,'recordType'),
        get(this,'returnValues'), 
        get(this,'callsigns'),
        print
      );
    }
  }
});
