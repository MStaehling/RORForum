/* global sweetAlert */
'use strict';

var app = angular.module('32ResultsApp');

app.run(function($log) {
  $log.debug('App Run');
});

app.controller('MainCtrl', function($scope, $mdDialog) {
  var vm = this;

  var action = function(event) {
    $mdDialog.show(
      $mdDialog.alert()
      .title('Secondary Action')
      .content('Secondary actions can be used for one click actions')
      .ariaLabel('Secondary click demo')
      .ok('Neat!')
      .targetEvent(event)
    );
  };

  // download the data into a local object
  //vm.contact = $firebaseArray(ref);

  vm.submit = function() {
    sweetAlert('Thank You for signing up.', 'You will now receive future product updates.', 'success');
        vm.contact.$add({
          lastName: vm.lastName,
          firstName: vm.firstName,
          email: vm.email
        });
        vm.lastName = '';
        vm.firstName = '';
        vm.email = '';
      };


  vm.cancel = function() {
    sweetAlert('Hi');
    vm.lastName = '';
    vm.firstName = '';
    vm.email = '';
  };
});
