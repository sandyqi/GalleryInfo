angular.module('galleryFilters', []).filter('checkParkingFilter', function () {
    return function (input) {
        return input ? '\u2713' : '\u2718';
    };
});