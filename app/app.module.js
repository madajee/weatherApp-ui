'use strict';

// Define the `phonecatApp` module
var app = angular.module('weatherApp', [
]);

app.controller('weatherapiController', function($scope, $http) {
    $http.get("https://gentle-dusk-58723.herokuapp.com/weatherapi/Atlanta").success(function(response) {$scope.data = response;});
    //$http.get("http://rest-service.guides.spring.io/greeting").success(function(response) {$scope.todos = response;});
 });
