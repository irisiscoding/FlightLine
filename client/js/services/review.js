myApp.factory('reviewFactory', function($http){
    var factory = {};

    factory.create = function(Review, callback){
        $http.post('/reviews', Review).success(function(data){
            if(!data.status) {
                console.log(data);
            }
            callback();
        })
    };

    factory.show = function(callback){
        $http.get('/reviews').success(function(data){
            callback(data);
        })
    };

    factory.showOne = function(id, callback){
        console.log(id);
        $http.get('/reviews/' + id).success(function(data){
            callback(data);
        })
    };

    factory.like = function(review_id, callback){
        console.log(review_id);
        $http.post('/like/' + review_id).success(function(data){
            callback();
        })
    }

    return factory;
})
