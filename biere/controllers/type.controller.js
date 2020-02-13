const sequelize= require('sequelize');
const Type= require ('../models').Type;


exports.type_list=(req,res,next)=>{
    Type.findAll()
    .then(types=>{
        res.json(types);
    })
    .catch(error=>{
        res.status(400);
        res.json(error);
    })
}

exports.type_id=(req,res,next)=>{
    const id = req.params.id;
    Type.findAll({
        where:{id:id}
    })
    .then(type=>{
        
        res.json(type);
    })
    .catch(error=>{
        res.status(400);
        res.json({message:'que dalle'});
    })
}


exports.type_add = (req,res,next) => {
    Type.create(req.body)
    .then(type => {
        res.json(type);
    })
     .catch(error=>{
        res.status(400);
        res.json({error});
    })
 }

 exports.type_del=(req,res,next)=>{
    const id = req.params.id;
    Type.destroy({
        where:{id:id}
    })
    .then(type=>{
        
        res.json({message:'La type a été supprimée'});
    })
    .catch(error=>{
        res.status(400);
        res.json({error});
    })
}

exports.type_maj=(req,res,next)=>{
    const id = req.params.id;
    //const body= req.body;
    Type.update(req.body,{
    
        where:{id:id}
    })
    .then(type=>{
        
        res.json({message:'Le type a été mise à jour'});
    })
    .catch(error=>{
        res.status(400);
        res.json({error});
    })
}
