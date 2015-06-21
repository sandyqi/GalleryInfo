var galleryControllers = angular.module('galleryControllers', []);

galleryControllers.controller('listController', ['$scope', '$http',
    function ($scope, $http) {
        $http.get('data/galleriesInfo.html').success(function (data) {
            $scope.galleries = data;
        })
        $scope.ordered = 'name';
    }]);

galleryControllers.controller('detailController', ['$scope', '$routeParams','$http',
    function ($scope, $routeParams, $http) {
        $scope.galleryId = $routeParams.galleryId;
        $http.get('data/'+$routeParams.galleryId+'.html').success(function (data) {
            $scope.gallery = data;
        });
    }]);