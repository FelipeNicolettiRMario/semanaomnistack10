const axios = require('axios');
const Dec = require('../models/Dev');
const ParseStringAsArrray = require('../utils/ParseStringAsArray');

module.exports = {
    async index(req,res){
        const devs = await Dec.find();

        return res.json(devs)
    },

    async store(req,res){
    const {github_username,techs,latitude,longitude} = req.body;

    let dev = await Dec.findOne({github_username});

    if(!dev){
        const response = await axios.get('https://api.github.com/users/'+github_username);

        const {name = login,avatar_url,bio} = response.data;
    
        const techsArray = ParseStringAsArrray(techs);
    
        const location = {
            type:'Point',
            coordinates:[longitude,latitude]    
        }
    
         dev = await Dec.create({
            github_username,
            name,
            avatar_url,
            bio,
            tech:techsArray,
            location
    
        })
    }


    return res.json(dev);
}
}