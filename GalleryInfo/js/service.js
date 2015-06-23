var galleryServices = angular.module('galleryServices', ['ngResource']);

galleryServices.factory('Gallery', ['$resource',
    function ($resource) {
    return $resource('data/:galleryId.html', {}, {
        query: { method: 'GET', params: { galleryId: 'galleriesInfo' }, isArray: true }
    });
}]);