var bahnApp = angular.module('BahnApp', ['ui.router']);

                      .config(['$urlRouterProvider', '$stateProvider', function() {
                        $urlRouterProvider.otherwise('/');
                      }]);
