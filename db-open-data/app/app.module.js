var app = angular.module('bahnApp', ['ui.router', 'MainController', 'dbInfoService'])

.config(function($urlRouterProvider, $stateProvider) {
  $stateProvider.state('home', {
      url: '/',
      views: {
          'content': {
            templateUrl: 'app/components/home/homeView.html'
          }
      }
  })
  $urlRouterProvider.otherwise('/');
});
