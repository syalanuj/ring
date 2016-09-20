// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic','pascalprecht.translate','app.constants','app.strings', 'starter.controllers', 'app.login', 'app.home', 'app.request','app.loaderSent'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

  .state('app.search', {
    url: '/search',
    views: {
      'menuContent': {
        templateUrl: 'templates/search.html'
      }
    }
  })

  .state('app.browse', {
      url: '/browse',
      views: {
        'menuContent': {
          templateUrl: 'templates/browse.html'
        }
      }
    })
    .state('app.playlists', {
      url: '/playlists',
      views: {
        'menuContent': {
          templateUrl: 'templates/playlists.html',
          controller: 'PlaylistsCtrl'
        }
      }
    })
  .state('app.single', {
    url: '/playlists/:playlistId',
    views: {
      'menuContent': {
        templateUrl: 'templates/playlist.html',
        controller: 'PlaylistCtrl'
      }
    }
  })
  //Ring URLs
  .state('app.login', {
      url: '/login',
      views: {
        'menuContent': {
          templateUrl: 'src/components/login/login.html',
          controller: 'LoginCtrl'
        }
      }
    })
  .state('app.home', {
      url: '/home',
      views: {
        'menuContent': {
          templateUrl: 'src/components/home/home.html',
          controller: 'HomeCtrl'
        }
      }
    })
  .state('app.request', {
      url: '/request/:type',
      views: {
        'menuContent': {
          templateUrl: 'src/components/request/request.html',
          controller: 'RequestCtrl'
        }
      }
    })
  // .state('request', {
  //     url: '/request/:type',
  //     templateUrl: 'src/components/request/request.html',
  //     controller: 'RequestCtrl'
  //   })
  .state('app.dealList', {
      url: '/dealList',
      views: {
        'menuContent': {
          templateUrl: 'src/components/dealList/dealList.html',
          controller: 'DealListCtrl'
        }
      }
    })
  .state('app.dealDetails', {
      url: '/dealDetails',
      views: {
        'menuContent': {
          templateUrl: 'src/components/dealDetails/dealDetails.html',
          controller: 'DealDetailsCtrl'
        }
      }
    })
  .state('app.loaderSent', {
      url: '/loaderSent/:type',
      views: {
        'menuContent': {
          templateUrl: 'src/components/loaderSent/loaderSent.html',
          controller: 'LoaderSentCtrl'
        }
      }
    })
  .state('app.preOrderRequest', {
      url: '/preOrderRequest',
      views: {
        'menuContent': {
          templateUrl: 'src/components/preOrderRequest/preOrderRequest.html',
          controller: 'PreOrderRequestCtrl'
        }
      }
    })
  .state('app.preOrderConfirm', {
      url: '/preOrderConfirm',
      views: {
        'menuContent': {
          templateUrl: 'src/components/preOrderConfirm/preOrderConfirm.html',
          controller: 'PreOrderConfirmCtrl'
        }
      }
    })
  .state('app.restaurants', {
      url: '/restaurants',
      views: {
        'menuContent': {
          templateUrl: 'src/components/restaurants/restaurants.html',
          controller: 'RestaurantsCtrl'
        }
      }
    })
  .state('app.preOrderVoucher', {
      url: '/preOrderVoucher',
      views: {
        'menuContent': {
          templateUrl: 'src/components/preOrderVoucher/preOrderVoucher.html',
          controller: 'PreOrderVoucherCtrl'
        }
      }
    })
  .state('app.preOrderVoucherBooking', {
      url: '/preOrderVoucherBooking',
      views: {
        'menuContent': {
          templateUrl: 'src/components/preOrderVoucherBooking/preOrderVoucherBooking.html',
          controller: 'PreOrderVoucherBookingCtrl'
        }
      }
    })
  ;
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/playlists');
});
