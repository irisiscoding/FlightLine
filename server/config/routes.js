var review = require('../controllers/reviews.js');
var menu = require('../controllers/menus.js');

module.exports = function(){

    app.get('/reviews', function(req, res){
        review.show(req, res);
    });

    app.post('/reviews', function(req, res){
        review.create(req, res);
    });

    app.get('/reviews/:id', function(req, res){
        console.log(review);
        review.showOne(req, res);
    });

    app.post('/like/:id', function(req, res){
        review.like(req, res);
    });

}
