var myApp = angular.module('myApp', [
        'ngRoute',
        'galleryControllers',
        'galleryFilters',
        'galleryServices'
]);

myApp.config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider.
            when('/gallery', {
                templateUrl: 'partial/galleryList.html',
                controller: 'listController'
            }).
            when('/gallery/:galleryId', {
                templateUrl: 'partial/galleryDetail.html',
                controller: 'detailController'
            }).
            otherwise({
                redirectTo: '/gallery'
            });

}]);