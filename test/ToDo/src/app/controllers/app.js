/**
 * Created by Sajini on 08-Feb-18.
 */
var app = angular.module("ToDo", ["ngRoute"]);
app.config(function($routeProvider) {
  $routeProvider
    .when("/", {
      templateUrl : "form.html",
      controller : "formController"
    })
    .when("/updateForm", {
      templateUrl : "updateForm.html",
      controller : "updateFormController"
    })
    .when("/viewTable", {
      templateUrl : "viewTable.html",
      controller : "viewTableController"
    })
    .when("/editForm", {
      templateUrl : "editForm.html",
      controller : "editFormController"
    });
});
