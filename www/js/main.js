/*global confirm:false CKEDITOR:false alert:false console:false angular:false*/

var myAppModule = angular.module('myApp', ['ngView',
                                           // 'ui',
                                           // 'ui.bootstrap'
                                          ]);



// Turn off automatic editor creation first.
// CKEDITOR.disableAutoInline = true;


var mainCntl = function ($scope, $http) {
    initPersona($scope, $http);
    
    function saveFile(fileName, data) {
        if (!fileName) {
            console.log('no filename, so not saving', data);
        }
        console.log('Saving file ' + fileName);
        $http.post('save?path=' + fileName, data).
            success(function(data, status, headers, config) {
                console.log(data, status, config);
                if (!data.success) {
                    console.log('Failed to save on the server ', data.error);
                    alert('Warning: this file did not save to the server!!');
                    if (data.error === 'Not authorized.')
                        $scope.signedIn = false;
                }
                console.log("Success. Data saved to:", fileName);
                
            }).
            error(function(data, status, headers, config) {
                console.log('Failed to post data!!', data, status, headers, config);
                alert('Warning: this file did not save to the server!!\n' +
                      'Reason:' + data.error);
            });
       
    } 
    
    
    
    
    $scope.contentEditable = false;
    $scope.mode = 'edit';
    var partials;
    
    var regexp = /<!--partial:([^>]*)-->/;
    $scope.toggleEditable = function() {
        $scope.contentEditable = !$scope.contentEditable;
        if ($scope.contentEditable) {
            setTimeout(function() {
                CKEDITOR.inlineAll();
                console.log(CKEDITOR.instances);
                partials = {};
                Object.keys(CKEDITOR.instances).forEach(function(id) {
                    var data = CKEDITOR.instances[id].getData();
                    var fileName = regexp.exec(data);
                    partials[id] = {
                        data: data,
                        fileName: fileName ? fileName[1] : null
                    };
                });
                
            },10);
        }
        else {
            Object.keys(CKEDITOR.instances).forEach(function(id) {
                CKEDITOR.instances[id].destroy();
            });
        }
    };
    
    $scope.printEditable = function() {
        Object.keys(CKEDITOR.instances).forEach(function(id) {
            var data = CKEDITOR.instances[id].getData();
            console.log(data);
        }); 
        console.log(partials);
    };
    
    $scope.saveEditable = function() {
        console.log('saving editable');
       var count = 0; 
        Object.keys(CKEDITOR.instances)
            .filter(function(id) {
                return CKEDITOR.instances[id].checkDirty();
            })
            .forEach(function(id) {
                console.log('saving ', id);
                count++;
                var data = CKEDITOR.instances[id].getData();
                saveFile(partials[id].fileName, data);
            });
        if (!count) console.log('Nothing to save!!');
        
    };
    
    $scope.undoEditable = function() {
        var result = confirm('Are your sure?\n\nThis will undo all your edits. Don\'t forget you can also undo per inline block.');
        if (!result) return;
        Object.keys(CKEDITOR.instances).forEach(function(id) {
            CKEDITOR.instances[id].setData(partials[id].data);
        }); 
        CKEDITOR.instances['test--'].setData();
    };
    
    $scope.signout = function($event) {
        $event.preventDefault();
        console.log('Logging out');
        navigator.id.logout();
        
    };
    
    $scope.signin = function($event) {
        $event.preventDefault();
        console.log('Logging in');
        navigator.id.request();
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
