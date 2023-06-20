// Registering component in log-component.js
AFRAME.registerComponent('log', {
    schema: {
      message: {type: 'string', default: 'Hi! its me bipanchi'}
    },
    init: function () {
        console.log(this.data.message);
      }
  });

