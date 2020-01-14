const mongoose = require('mongoose');
const PointScheema = require('./utils/PointScheema');

const DevScheema = new mongoose.Schema({
    name:String,
    github_username:String,
    bio:String,
    avatar_url:String,
    tech:[String],
    location:{
        type:PointScheema,
        index:'2dsphere'
    }

});

module.exports = mongoose.model("Dev",DevScheema);