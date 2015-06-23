var galleryControllers = angular.module('galleryControllers', []);

galleryControllers.controller('listController', ['$scope', 'Gallery',
    function ($scope, Gallery) {
        $scope.galleries = Gallery.query();
        $scope.ordered = 'name';
    }]);

galleryControllers.controller('detailController', ['$scope', '$routeParams','Gallery',
    function ($scope, $routeParams, Gallery) {
        $scope.galleryId = $routeParams.galleryId;
        $scope.gallery = Gallery.get({ galleryId: $routeParams.galleryId }, function (gallery) {
            $scope.mainImg = gallery.image[0];
        });

        $scope.setImg = function (img) {
            $scope.mainImg = img;
        };
    }]);
