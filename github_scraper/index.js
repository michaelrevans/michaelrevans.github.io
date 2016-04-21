var app = angular.module('githubApp', []);

app.controller('ListController', ['$scope', function($scope) {

          $scope.len = 0;

          $scope.repos = []

          $scope.submit = function(usr) {
            var requrl = 'https://api.github.com/users/' + usr + '/repos';
            $.ajax({
              method: 'GET',
              url: requrl,
              success: function(repositories) {
                $('.row-content').hide(200);
                var usrVal = $('#username-input').val();
                $scope.repos = repositories;
                $scope.len = repositories.length;
                $scope.usr = usr;
                if ($scope.len == 0) {
                  $('#no-results').show(200);
                } else if (usrVal === '') {
                  $('#invalid').show(200);
                } else {
                  $('#results').show(200);
                }
              },
              error: function(jqXHR, textStatus, errorThrown) {
                console.log("Status code: " + jqXHR.status + " - " + errorThrown);
                $('.row-content').hide(200);
                $('#invalid').show(200);
              },
              async: false
            })
          };

}]);
