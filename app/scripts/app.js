'use strict';

/**
 * @ngdoc overview
 * @name projetApp
 * @description
 * # projetApp
 *
 * Main module of the application.
 */
angular
  .module('projetApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .controller('MainController',function( $scope, $http, $location ){

    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $http.get("data/data.json").success(function(data){
      $scope.data = data;
    });

    $scope.changeView = function(path){
      $location.path(path);
    }

  })
  .config(function ($routeProvider) {
    $routeProvider
      .when('/',{
        templateUrl: 'views/profils.html',
        controller: 'ProfilsCtrl'
      })
      .when('/contact',{
        templateUrl: 'views/contact.html',
        controller: 'ContactCtrl'
      })
      .when('/education',{
        templateUrl: 'views/education.html',
        controller: 'EducationCtrl'
      })
      .when('/experience',{
        templateUrl: 'views/experience.html',
        controller: 'ExperienceCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });


