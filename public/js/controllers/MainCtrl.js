angular.module('MainCtrl', []).controller('MainController', ['$scope', '$http', '$window', function($scope, $http, $window) {

    var vm = this;
    vm.tagline = 'Home Page';
    $scope.signin = function() {
        $http.post('/signin', {
            "name": $scope.name,
            "username": $scope.username,
            "email": $scope.email,
            "password": $scope.password
        }).then(function(suc) {
            console.log('succsess')
            console.log(suc)
            $window.location.href = '#!/login'
        }, function(err) {
            console.log('error')
            console.log(err)
        });
    }
    $scope.signup = function() {
        $http.post('/signup', {
            "email": $scope.email,
            "password": $scope.password
        }).then(function(suc) {
            console.log('succsess')
            console.log(suc)
            $window.location.href = '#!/home'
        }, function(err) {
            console.log('error')
            console.log(err)

        });
    }
}]);