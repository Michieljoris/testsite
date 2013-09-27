/*global angular:false*/

var myAppModule = angular.module('myApp', ['ngView',
                                           // 'ui',
                                           // 'ui.bootstrap'
                                          ]);



// Turn off automatic editor creation first.
// CKEDITOR.disableAutoInline = true;


var mainCntl = function ($scope) {
    $scope.contentEditable = false;
    $scope.mode = 'edit';
    var instance;
    $scope.toggleEditable = function() {
        $scope.contentEditable = !$scope.contentEditable;
        if (!instance) instance = CKEDITOR.inline( 'editable' );
        else {
            instance.destroy(); instance = false;
        }
        window.instance = instance;
    };
    $scope.printEditable = function() {
        var data = CKEDITOR.instances.editable.getData();
        console.log(data);
    };
    
    $scope.saveEditable = function() {
        console.log('saving editable');
        var data = CKEDITOR.instances.editable.getData();
        console.log(data);
        
    };
};

var HomeCntl = function ($scope) {
    $scope.test = "In controller for home";
};

var page1Cntl = function ($scope) {
    
    $scope.test = "in controller for page1";
};


var page2Cntl = function ($scope) {
    $scope.test = "in controller for page2";
};
