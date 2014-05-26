/*global EpicCntl:false HomeCntl:false DefaultCntl:false EpicEditor:false $:false angular:false*/
/*jshint strict:false unused:true smarttabs:true eqeqeq:true immed: true undef:true*/
/*jshint maxparams:6 maxcomplexity:10 maxlen:190 devel:true*/

angular.module('ngView', [], function($routeProvider, $locationProvider) {
    
    var baseDir = '/built/';
    var mapping =
        [
            inserthere

        ];
    
    mapping.forEach(function(m) {
        $routeProvider.when('/' + m[0], { 
            templateUrl: '//' + document.location.host + m[1], controller: m[2] ? m[2] : DefaultCntl });
    });
    
    $routeProvider.otherwise( { 
        templateUrl: '//' + document.location.host +
            '/built/home.html', controller: HomeCntl });
    
    $locationProvider.html5Mode(false);
    // console.log($locationProvider.hashPrefix());
    $locationProvider.hashPrefix( '!');
    // console.log($locationProvider.hashPrefix());
});
 


