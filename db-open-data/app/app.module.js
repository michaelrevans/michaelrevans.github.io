var bahnApp = angular.module('BahnApp', ['ui.router']);

                      .config(['$urlRouterProvider', '$stateProvider', function() {
                        $stateProvider
                          .state('bahnApp', {
                            url: '/',
                            views: {}
                          })
                        $urlRouterProvider.otherwise('/');
                      }]);
