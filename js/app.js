var app = angular.module('app',['ngRoute']);

app.config(['$routeProvider', function($routeProvider){
	$routeProvider.
        when('/page1',{
            templateUrl:'views/page1.html',
            controller:'controllers/controller1'
        }).
        otherwise({
		redirectTo:'/'
	});
}]);