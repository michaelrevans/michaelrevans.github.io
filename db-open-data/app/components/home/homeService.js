angular.module('dbInfoService', [])

.service('dbInfoService', ['$http', function($http) {
  this.apiKey = 'DBhackFrankfurt0316';
  this.base = 'https://open-api.bahn.de/bin/rest.exe/location.name?authKey=DBhackFrankfurt0316&lang=de&input=Frankfurt+hbf&format=json';
  this.apiCall = function() {
    $http({
      method: 'GET',
      url: this.base
    }).then(function() {
      console.log('working');
      return 'all good';
    }, function() {
      console.log('not working');
      return 'not working';
    })
  }
  this.simple = function() {
    return "I'm simple";
  }
}])
