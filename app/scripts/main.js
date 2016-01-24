'use strict';

var app = angular.module('32ResultsApp');

app.run(function($log) {
  $log.debug('App Run');
});

app.controller('MainCtrl', function($scope, $mdDialog, email) {
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

  vm.submit = function() {
    sweetAlert('Thank You for signing up.', 'You will now receive future product updates.', 'success');
        vm.email.push({
          lastName: vm.lastName,
          firstName: vm.firstName,
          email: vm.email
        });
        vm.lastName = '';
        vm.firstName = '';
        vm.email = '';
      };
  vm.cancel = function() {
    vm.lastName = '';
    vm.firstName = '';
    vm.email = '';
  };
});
