'use strict';

angular.module('projApp.auth', ['projApp.constants', 'projApp.util', 'ngCookies', 'ngRoute'])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
