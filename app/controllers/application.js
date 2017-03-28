import Ember from 'ember';

const Themes = {
  base: 'base',
  dark: 'dark'
}

const {
  $
} = Ember;


export default Ember.Controller.extend({


  actions: {
    switchCss(theme) { // This is a dodgy hack to switch out our whole stylesheet since ember doesn't like dynamic theming.
      let newTheme = Themes[theme];
      if (newTheme) {
        $('link#main-stylesheet').attr('href', 'assets/' + newTheme + '.css'); // this is not IE safe, but electron uses chromium
      }
    },
  }


});
