'use strict'

angular.module('appRoutes', ['ngRoute'])
    .config(function ($routeProvider, $locationProvider, ) {
        $routeProvider
            .when('/', {
                templateUrl: 'Partials/home/home.html',
                controller: 'homeController'
            })
            .otherwise({ redirectTO: '/' });

        $locationProvider.html5Mode({
            enable: true,
            requireBase: false
        });

    });

