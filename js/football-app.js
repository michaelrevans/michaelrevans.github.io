'use strict';

var app = angular.module('footballApp', []);

app.controller('TableController', ['$scope', function($scope) {

         $scope.teams = [
           {
             name: 'Tottenham',
             played: 28,
             wins: 15,
             draws: 9,
             losses: 4,
             goals_for: 49,
             goals_against: 22,
             points: 54,
           },
           {
             name: 'Arsenal',
             played: 28,
             wins: 15,
             draws: 6,
             losses: 7,
             goals_for: 44,
             goals_against: 28,
             points: 51,
           },
           {
             name: 'Leicester',
             played: 28,
             wins: 16,
             draws: 9,
             losses: 3,
             goals_for: 51,
             goals_against: 31,
             points: 57,
           },
           {
             name: 'Man City',
             played: 27,
             wins: 14,
             draws: 5,
             losses: 8,
             goals_for: 48,
             goals_against: 31,
             points: 47,
           },
           {
             name: 'West Ham',
             played: 28,
             wins: 12,
             draws: 10,
             losses: 6,
             goals_for: 42,
             goals_against: 31,
             points: 46,
           },
           {
             name: 'Stoke',
             played: 28,
             wins: 12,
             draws: 6,
             losses: 10,
             goals_for: 30,
             goals_against: 33,
             points: 42,
           },
           {
             name: 'Liverpool',
             played: 27,
             wins: 11,
             draws: 8,
             losses: 8,
             goals_for: 41,
             goals_against: 36,
             points: 41,
           },
           {
             name: 'Southampton',
             played: 28,
             wins: 11,
             draws: 7,
             losses: 10,
             goals_for: 35,
             goals_against: 28,
             points: 40,
           },
           {
             name: 'Chelsea',
             played: 28,
             wins: 10,
             draws: 9,
             losses: 9,
             goals_for: 42,
             goals_against: 38,
             points: 39,
           },
           {
             name: 'Everton',
             played: 27,
             wins: 9,
             draws: 11,
             losses: 7,
             goals_for: 49,
             goals_against: 36,
             points: 38,
           },
           {
             name: 'Watford',
             played: 28,
             wins: 10,
             draws: 7,
             losses: 11,
             goals_for: 29,
             goals_against: 29,
             points: 37,
           },
           {
             name: 'West Brom',
             played: 28,
             wins: 9,
             draws: 9,
             losses: 10,
             goals_for: 29,
             goals_against: 36,
             points: 36,
           },
           {
             name: 'Crystal Palaca',
             played: 28,
             wins: 9,
             draws: 6,
             losses: 13,
             goals_for: 31,
             goals_against: 37,
             points: 33,
           },
           {
             name: 'Bournemouth',
             played: 28,
             wins: 8,
             draws: 8,
             losses: 12,
             goals_for: 32,
             goals_against: 44,
             points: 32,
           },
           {
             name: 'Swansea',
             played: 28,
             wins: 7,
             draws: 9,
             losses: 12,
             goals_for: 27,
             goals_against: 37,
             points: 30,
           },
           {
             name: 'Sunderland',
             played: 28,
             wins: 6,
             draws: 6,
             losses: 16,
             goals_for: 34,
             goals_against: 53,
             points: 24,
           },
           {
             name: 'Norwich',
             played: 28,
             wins: 6,
             draws: 6,
             losses: 16,
             goals_for: 31,
             goals_against: 53,
             points: 24,
           },
           {
             name: 'Newcastle',
             played: 27,
             wins: 6,
             draws: 6,
             losses: 15,
             goals_for: 27,
             goals_against: 50,
             points: 24,
           },
           {
             name: 'Aston Villa',
             played: 28,
             wins: 3,
             draws: 7,
             losses: 18,
             goals_for: 22,
             goals_against: 51,
             points: 16,
           },
           {
             name: 'Man Utd',
             played: 28,
             wins: 13,
             draws: 8,
             losses: 7,
             goals_for: 37,
             goals_against: 26,
             points: 47,
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
