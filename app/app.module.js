'use strict';

// Define the `phonecatApp` module
var app = angular.module('weatherApp', [
]);

app.controller('weatherapiController', function($scope, $http) {
    $scope.placeid = 1;
    $scope.placeData = "";
    $scope.cityname = "Atlanta";
    $scope.citytemp = "";
    $http.get("http://jsonplaceholder.typicode.com/todos/"+$scope.placeid).success(function(response) {$scope.placeData= response;});
    $http.get("https://gentle-dusk-58723.herokuapp.com/weatherapi/"+$scope.cityname).success(function(response) {$scope.citytemp = response;});
 	
 $scope.updatePlaceData = function (placeid) {
        console.log("PlaceID" + placeid)
        $scope.placeData = $http.get("http://jsonplaceholder.typicode.com/todos/"+placeid).success(function(response) {$scope.placeData= response;
        return $scope.placeData;
        });
     };

     $scope.updateCityTemp= function (cityname) {
        console.log("CityName" + cityname)
        $scope.citytemp = $http.get("https://gentle-dusk-58723.herokuapp.com/weatherapi/"+cityname).success(function(response) {$scope.citytemp = response;
        return $scope.citytemp;
        });
     };     
 });
