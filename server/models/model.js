
//used for reviews page
var reviewSchema = new mongoose.Schema({
    review: {type: String, required: true, minlength: 5},
    rate: {type: Number, default: 0},
    name: {type: String, required: true, minlength: 3, maxlength: 45},
    likes: {type: Number, default: 0}
}, {timestamps: true});

//used for Menu page, stars for each food items
var menuSchema = new mongoose.Schema({
    likes: {type: Number, default: 0},

}, {timestamps: true});

//initiating model
mongoose.model('review', reviewSchema);
mongoose.model('menu', menuSchema);
