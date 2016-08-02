myApp.factory('menuFactory', function($http){
    var factory = {};

    factory.like = function(callback){
        $http.post('/like').success(function(data){
            callback(data);
        })
    }
    return factory;
})
