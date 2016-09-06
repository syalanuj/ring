'use strict';

angular.module('projApp', ['projApp.auth', 'projApp.admin', 'projApp.constants', 'ngCookies',
    'ngResource', 'ngSanitize', 'ngRoute', 'ui.bootstrap', 'validation.match'
  ])
  .config(function($routeProvider, $locationProvider) {
    $routeProvider.otherwise({
      redirectTo: '/'
    });

    $locationProvider.html5Mode(true);
  });
