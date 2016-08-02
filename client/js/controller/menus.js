myApp.controller('menuController', function(menuFactory){
    var self = this;
    self.like = {};

    self.like = function(){
        menuFactory.like(self.like, function(like){
            console.log(like);
            self.like = like;
        })
    }
})
