'use strict';

module.exports = {
  template: require('raw!./view.index.html'),
  data: {
    msg: 'aaa'
  },
  methods: {
    myalert: function() {
      alert('aaa');
    },
    tapped: function() {
      alert('tapped');
    },
    panned: function(args) {
      console.log('panned', args.deltaX, args.deltaY);
    },
    notify: function() {
      quasar.notify({
        html: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
        icon: 'alarm', timeout: 0
      });
      _.forEach(['success', 'error', 'info', 'warning'], function(type) {
        quasar.notify[type]({html: _.capitalize(type) + ' message', timeout: 0});
      });
    },
    modal: function() {
      quasar.dialog({html: '<div v-for="n in 50">Lorem ipsus dolorem icit avat lorem ipsum dolorem</div>', title: 'Agreement', buttons: [{label: 'ok', dismiss: true}]});
      /*quasar.dialog({
        title: 'Modal Title',
        html: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
        buttons: [
          {label: 'Cancel'},
          {label: 'OK'}
        ]
      });*/
    },
    modal2: function() {
      quasar.dialog({
        vm: {data: {fall: 'yesssss'}},
        html: '<div>{{fall}}Lorem ipsus dolorem icit avat lorem ipsum dolorem</div>',
        title: 'Agreement',
        buttons: [{label: 'ok', fn: function() {console.log(this.fall);}, dismiss: true}],
        icon: 'alarm'
      });
    }
  },
  ready: function() {
    console.log('Page index ready');
    quasar.add.fab({
      icon: 'alarm',
      class: 'primary',
      buttons: [
        {
          icon: 'alarm',
          class: 'secondary',
          fn: function() {
            alert('1');
          }
        },
        {
          icon: 'mail',
          class: 'tertiary',
          fn: function() {
            alert('2');
          }
        }
      ]
    });
    /*quasar.add.fab({
      icon: 'alarm',
      class: 'primary',
      fn: function() {
        console.log('simple!');
      }
    });*/
  },
  destroyed: function() {
    console.log('Page index destroyed');
  }
};