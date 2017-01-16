angular.module('MainController', ['dbInfoService'])

.controller('MainController', ['$scope', '$stateParams', 'dbInfoService', function($scope, $stateParams, dbInfoService) {
  $scope.bland = 'Hello again world';
  $scope.return = dbInfoService.apiCall();
}])
