/**
 * Created by Sajini on 08-Feb-18.
 */
var app = angular.module('ToDo', []);
app.controller('formController', function($scope) {
  $scope.task = "John";
  $scope.date = "Doe";
  $scope.description = "Doe";
});
