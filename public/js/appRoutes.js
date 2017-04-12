angular.module('appRoutes', []).config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('login', {
            url: '/',
            templateUrl: 'views/login.html',
            controller: 'MainController as mainCtrl'

        })
        .state('registration', {
            url: '/registration',
            templateUrl: 'views/registration.html',
            controller: 'MainController as mainCtrl'

        })
        .state('home', {
            url: '/home',
            templateUrl: 'views/home.html',
            controller: 'MainController as mainCtrl'
        })

    .state('settings', {
        url: '/settings',
        templateUrl: 'views/settings.html',
        controller: 'SettingsController as settingsCtrl'
    })

    .state('profile', {
        url: '/profile',
        templateUrl: 'views/profile.html',
        controller: 'ProfileController as profileCtrl'
    });
});