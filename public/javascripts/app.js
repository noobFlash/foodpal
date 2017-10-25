
var app = angular.module('angularjsNodejsTutorial',[]);
app.controller('myController', function($scope, $http) {
    $scope.data = [];
    var request = $http.get('http://api.giphy.com/v1/gifs/search?api_key=dc6zaTOxFJmzC&q=cat');
    request.success(function(data) {
        $scope.data = data;
        console.log(data);

    });
    request.error(function(data){
        console.log('Error: ' + data);
    });
});

// var app = angular.module('angularjsNodejsTutorial',[]);
// app.controller('myController', function($scope, $http) {
//     $scope.data = [];
//     var request = $http.get('/data');
//     request.success(function(data) {
//         $scope.data = data;
//     });
//     request.error(function(data){
//         console.log('Error: ' + data);
//     });
// });
