// var User = mongoose.model('user');
var Review = mongoose.model('review');
var Menu = mongoose.model('menu');

module.exports = {
        create: function(req, res){
            var reviewInfo = req.body;
            console.log('in create controller server side');
            var newReview = new Review(reviewInfo);
            newReview.save(function(err){
                if(err) {
                    console.log('it breaks in review controller server side');
                    res.json({'status': false, 'error': 'err'});
                }
                else {
                    res.json({success: true});
                }
            })
        },

        //this will return ALL reviews
        show: function(req, res){
            Review.find({}, function(err, reviews){
                if(err) {
                    res.json(err);
                }
                else {
                    res.json(reviews);
                }
            })
        },

        showOne: function(req, res){
            Review.findOne({_id: req.params.id}).exec(function(err, review){
                if(err) res.json({'status': false, 'errors': 'err'});
			    else {
                    res.json(review);
                    console.log(review);
                }
            })
        },

        like: function(req, res){
            Review.findOne({_id: req.params.id}, function(err, review){
                review.likes ++;
                review.save(function(err){
                    if(err) res.json({'status': false, 'errors': 'err'});
				    else res.json({success: true});
                })
            })
        }
};
