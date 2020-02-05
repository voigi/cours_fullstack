const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Product = require('../models/Products');
    // GET all products
router.get('/', (req,res,next) => {
Product.find((err, products) => {
if(err){ return next(err);
} res.json(products);
})
})

//GET SINGLE PRODUCT

 router.get('/:id', (req, res, next) =>{ 
 const id = req.params.id;
 Product.findById(id, (err, product) => { 
 if(err) return next(err)
 res.json(product);   
}) 
})

//ADD PRODUCT 
router.post('/add', (req, res, next)=>{ 
const newProduct = req.body; 
Product.create(newProduct, (err, product) => { 
if(err) return next(err) 
res.json(product)  
  })
})

//DELETE PRODUCT
 router.delete('/delete/:id', (req, res, next) =>{ 
 const id = req.params.id;  
 Product.findByIdAndDelete(id,(err,product)=>{   
 if(err) return next(err) 
 res.json(product);  
 }) 
 }) 

 //UPDATE PRODUCT
  router.put('/:id', (req, res, next) => { 
  const id = req.params.id;  
  const updatedProduct = req.body; 
  Product.findByIdAndUpdate(id, updatedProduct, (err, product) => { 
  if(err) return next(err)   
  res.json(product);   
  })
}) 

 module.exports = router;