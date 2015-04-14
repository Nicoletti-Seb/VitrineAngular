'use strict';

/**
 * @ngdoc function
 * @name projetApp.controller:ContactCtrl
 * @description
 * # ContactCtrl
 * Controller of the projetApp
 */
angular.module('projetApp')
.controller('ContactCtrl', function ($scope) {
    
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.email = { "nom": "", "email": "", "sujet": "", "message":"" };

    $scope.sendMail = function(){
     	alert( "Envoyé !!!" );
    };

  });
