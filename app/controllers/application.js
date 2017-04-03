import Ember from 'ember';
import { storageFor } from 'ember-local-storage';
 
const {
  remote,
  BrowserWindow
} = require('electron')

const currentWindow = remote.getCurrentWindow()

const Themes = {
  base: 'base',
  dark: 'dark'
}

const {
  computed,
  Controller,
  get,
  set,
  $
} = Ember;

const {
  alias
} = computed;

export default Controller.extend({
  config: storageFor('config'),
  zoomLevel: 100,

  dutyOfficer: alias('config.dutyOfficer'),
  callsign:  alias('config.callsign'),

  actions: {
    toggleFullScreen() {
      currentWindow.setFullScreen(!currentWindow.isFullScreen());
    },
    switchCss(theme) { // This is a dodgy hack to switch out our whole stylesheet since ember doesn't like dynamic theming.
      let newTheme = Themes[theme];
      if (newTheme) {
        $('link#main-stylesheet').attr('href', 'assets/' + newTheme + '.css'); // this is not IE safe, but electron uses chromium
      }
    },

    zoom(zoomIn) {
      let zoom = get(this, 'zoomLevel');
      var step = 20;

      if (zoomIn) {
        zoom += step;
      } else {
        zoom -= step;
      }

      set(this, 'zoomLevel', zoom)
      $('body').css('zoom', ' ' + zoom + '%');
    },

  }


});
