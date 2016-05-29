'use strict';

var app = angular.module('footballApp', []);

app.controller('TableController', ['$scope', function($scope) {

         $scope.teams = [
           {
             name: 'Tottenham',
             played: 38,
             wins: 19,
             draws: 13,
             losses: 6,
             goals_for: 69,
             goals_against: 35,
             points: 70,
           },
           {
             name: 'Arsenal',
             played: 38,
             wins: 20,
             draws: 11,
             losses: 7,
             goals_for: 65,
             goals_against: 36,
             points: 71,
           },
           {
             name: 'Leicester',
             played: 38,
             wins: 23,
             draws: 12,
             losses: 3,
             goals_for: 68,
             goals_against: 36,
             points: 81,
           },
           {
             name: 'Man City',
             played: 38,
             wins: 19,
             draws: 9,
             losses: 10,
             goals_for: 71,
             goals_against: 41,
             points: 66,
           },
           {
             name: 'West Ham',
             played: 38,
             wins: 16,
             draws: 14,
             losses: 8,
             goals_for: 65,
             goals_against: 51,
             points: 62,
           },
           {
             name: 'Stoke',
             played: 38,
             wins: 14,
             draws: 9,
             losses: 15,
             goals_for: 41,
             goals_against: 55,
             points: 51,
           },
           {
             name: 'Liverpool',
             played: 38,
             wins: 16,
             draws: 12,
             losses: 10,
             goals_for: 63,
             goals_against: 50,
             points: 60,
           },
           {
             name: 'Southampton',
             played: 38,
             wins: 18,
             draws: 9,
             losses: 11,
             goals_for: 59,
             goals_against: 41,
             points: 63,
           },
           {
             name: 'Chelsea',
             played: 38,
             wins: 12,
             draws: 14,
             losses: 12,
             goals_for: 59,
             goals_against: 53,
             points: 50,
           },
           {
             name: 'Everton',
             played: 38,
             wins: 11,
             draws: 14,
             losses: 13,
             goals_for: 59,
             goals_against: 53,
             points: 47,
           },
           {
             name: 'Watford',
             played: 38,
             wins: 12,
             draws: 9,
             losses: 17,
             goals_for: 40,
             goals_against: 50,
             points: 46,
           },
           {
             name: 'West Brom',
             played: 38,
             wins: 10,
             draws: 13,
             losses: 15,
             goals_for: 34,
             goals_against: 48,
             points: 43,
           },
           {
             name: 'Crystal Palaca',
             played: 38,
             wins: 11,
             draws: 9,
             losses: 18,
             goals_for: 39,
             goals_against: 51,
             points: 42,
           },
           {
             name: 'Bournemouth',
             played: 38,
             wins: 11,
             draws: 9,
             losses: 18,
             goals_for: 45,
             goals_against: 67,
             points: 42,
           },
           {
             name: 'Swansea',
             played: 38,
             wins: 12,
             draws: 11,
             losses: 15,
             goals_for: 42,
             goals_against: 52,
             points: 47,
           },
           {
             name: 'Sunderland',
             played: 38,
             wins: 9,
             draws: 12,
             losses: 17,
             goals_for: 48,
             goals_against: 62,
             points: 39,
           },
           {
             name: 'Norwich',
             played: 38,
             wins: 9,
             draws: 7,
             losses: 22,
             goals_for: 39,
             goals_against: 67,
             points: 34,
           },
           {
             name: 'Newcastle',
             played: 38,
             wins: 9,
             draws: 10,
             losses: 19,
             goals_for: 44,
             goals_against: 65,
             points: 37,
           },
           {
             name: 'Aston Villa',
             played: 38,
             wins: 3,
             draws: 8,
             losses: 27,
             goals_for: 27,
             goals_against: 76,
             points: 17,
           },
           {
             name: 'Man Utd',
             played: 38,
             wins: 19,
             draws: 9,
             losses: 10,
             goals_for: 49,
             goals_against: 35,
             points: 66,
           },
         ]
       }])


$(document).ready(function() {
  var number_relegated_teams = 3;


  var teams = $('tbody>tr>td:nth-child(1)');
  for (var i = 0; i < teams.length; i++) {
    teams[i].innerHTML = i + 1
  }

  var $team_rows = $('.team-row');
  var teams_in_relegation_zone = $team_rows.slice(-number_relegated_teams);
  var top_team = $team_rows.slice(0,1);

  teams_in_relegation_zone.addClass('danger');
  top_team.addClass('success');


});
