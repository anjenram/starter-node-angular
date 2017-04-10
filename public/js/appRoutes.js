angular.module('appRoutes', []).config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('login',{
            url: '/',
            templateUrl: 'views/login.html',
            controller: 'MainController as mainCtrl'

        })
        .state('home', {
            url: '/home',
            templateUrl: 'views/home.html',
            controller: 'MainController as mainCtrl'
        })

        .state('nerds', {
            url: '/nerds',
            templateUrl: 'views/nerd.html',
            controller: 'NerdController as nerdCtrl'
        })

        .state('geeks', {
            url: '/geeks',
            templateUrl: 'views/geek.html',
            controller: 'GeekController as geekCtrl'
        });
});