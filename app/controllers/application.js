import Ember from 'ember';

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
  get,
  set,
  $
} = Ember;


export default Ember.Controller.extend({
  zoomLevel: 100,


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
