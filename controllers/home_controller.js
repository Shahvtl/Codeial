const Post = require('../models/post');
const User = require('../models/user');

module.exports.home = async function(req, res){
    try{
            //populate the user of each posts
        let posts = await Post.find({})
        .populate('user')
        .populate({
            path: 'comments',
            populate: {
                path: 'user'
          }
        })
        let users = await User.find({});
        return res.render('home', {
            title: "Codeial | Home",
            posts: posts,
            all_users: users
        });
    }catch(err){
        console.log("Error",err);
        return;
    }
}
    // console.log(req.cookies);
    // res.cookie ('user_id', 100);

    //     Post.find({}, function(err, posts){
    //         return res.render('home', {
    //             title: "Codeial | Home",
    //             posts: posts
    //         });
    //     });

   