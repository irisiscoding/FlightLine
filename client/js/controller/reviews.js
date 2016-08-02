myApp.controller('reviewController', function(reviewFactory, $location, $routeParams){
    var self = this;
    self.reviews = {};
    self.user_session = {};
    self.newReview = {};
    self.review_id = $routeParams;

    reviewFactory.show(function(reviews){
        console.log(reviews);
        self.reviews = reviews;
    });

    // reviewFactory.showOne(self.review_id, function(review){
    //     self.review = review;
    // });

    self.create = function(){
        reviewFactory.create(self.newReview, function(){
            $location.url('/reviews');
        })
    };

    self.like = function(review_id){
        console.log(review_id);
        reviewFactory.like(review_id, function(){
            reviewFactory.show(function(review){
                self.reviews = review;
            })
        })
    }
})
