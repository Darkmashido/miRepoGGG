var ar = angular.module("app", ['ui.grid', 'ui.grid.edit', 'ui.grid.selection', 'ui.bootstrap']);

ar.controller("appController", function($scope, $http, $filter, $uibModal, $rootScope) {

    holas();
    function holas(){
        alert("Hola putoo!!");
    }
});