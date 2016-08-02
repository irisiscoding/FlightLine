var Menu = mongoose.model('menu');

module.exports = {
    like: function(req, res){
        console.log(menu.likes);
            menu.likes ++;
            menu.save(function(err){
                if(err) res.json({'status': false, 'errors': 'err'});
                else res.json({success: true});
            })
    }
};
