const sequelize= require('sequelize');
const Brewery= require ('../models').Brewery;

exports.brewery_list=(req,res,next)=>{
    Brewery.findAll()
    .then(breweries=>{
        res.json(breweries);
    })
    .catch(error=>{
        res.status(400);
        res.json(error);
    })
}

exports.brewery_id=(req,res,next)=>{
    const id = req.params.id;
    Brewery.findAll({
        where:{id:id}
    })
    .then(brewery=>{
        
        res.json(brewery);
    })
    .catch(error=>{
        res.status(400);
        res.json({message:'que dalle'});
    })
}


exports.brewery_add = (req,res,next) => {
    Brewery.create(req.body)
    .then(brewery => {
        res.json(brewery);
    })
     .catch(error=>{
        res.status(400);
        res.json({error});
    })
 }

 exports.brewery_del=(req,res,next)=>{
    const id = req.params.id;
    Brewery.destroy({
        where:{id:id}
    })
    .then(brewery=>{
        
        res.json({message:'La brasserie a été supprimée'});
    })
    .catch(error=>{
        res.status(400);
        res.json({error});
    })
}

exports.brewery_maj=(req,res,next)=>{
    const id = req.params.id;
    //const body= req.body;
    Brewery.update(req.body,{
    
        where:{id:id}
    })
    .then(brewery=>{
        
        res.json({message:'La brasserie a été mise à jour'});
    })
    .catch(error=>{
        res.status(400);
        res.json({error});
    })
}

