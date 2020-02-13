const sequelize= require('sequelize');
const Country= require ('../models').Country;



exports.country_list=(req,res,next)=>{
    Country.findAll()
    .then(countries=>{
        res.json(countries);
    })
    .catch(error=>{
        res.status(400);
        res.json(error);
    })
}

exports.country_id=(req,res,next)=>{
    const id = req.params.id;
    Country.findAll({
        where:{id:id}
    })
    .then(countries=>{
        
        res.json(countries);
    })
    .catch(error=>{
        res.status(400);
        res.json({message:'que dalle'});
    })
}

exports.country_add = (req,res,next) => {
    Country.create(req.body)
    .then(countries => {
        res.json(countries);
    })
     .catch(error=>{
        res.status(400);
        res.json({error});
    })
 }