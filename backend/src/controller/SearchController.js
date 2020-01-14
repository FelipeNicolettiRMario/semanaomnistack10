const ParseStringAsArrray = require('../utils/ParseStringAsArray');
const Dev = require('../models/Dev')

module.exports = {
    async index(req,res){
        const {latitude,longitude,techs} = req.query;
    
        const techsArray = ParseStringAsArrray(techs);
        const devs = await Dev.find({
            tech:{
                $in:techsArray,
            },
            location:{
                $near:{
                    $geometry:{
                        type:'Point',
                        coordinates:[longitude,latitude]
                    },
                    $maxDistance:10000
                }
            }
        })

        return res.json({devs})
    }

};

