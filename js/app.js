var app = angular.module('app',['ngRoute','ngAnimate']);

app.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'js/views/page-home.html',
            controller: 'mainController'
        })
        .when('/about', {
            templateUrl: 'js/views/page-about.html',
            controller: 'aboutController'
        })
        .when('/contact', {
            templateUrl: 'js/views/page-contract.html',
            controller: 'contactController'
        });
});