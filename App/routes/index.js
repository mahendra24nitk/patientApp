var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');                     // mongoose for mongodb
    var morgan = require('morgan'); 
    var mongodb = require('mongodb'); 
    
/* GET home page. */
   var patientlist = mongoose.model('patientlist', {
        firstname : String,
        lastname :String,
        email :String,
        age: Number,
        mobile : Number,
        date : Date,
        message :String,
        gender :String
    });
   
router.get('/',function(req,res){   
    res.render('index');
    });

router.post('/patientlist',function(req,res){ 
 patientlist.create(
 {
  firstname:req.body.firstname,
  lastname:req.body.lastname,
  email:req.body.email,
  age:req.body.age,
  mobile:req.body.mobile,
  date:req.body.date,
  gender : req.body.gender,
  message : req.body.message
}, function(err,results) {
            if (err)
                res.send(err);
           });
   
  
    });
router.get('/patientlist',function(req,res){ 
  patientlist.find({},function(err, results) {
                if (err){
                    res.send(err)
                   }
                   
                  res.json( results);
            }); 
         
  
    });
router.delete('/patientlist/:id',function(req,res){ 
  var id = req.params.id;
    console.log(id);

  patientlist.remove({
    
    _id: mongoose.Types.ObjectId(id)
  
  },function(err, doc) {
                if (err){
                    res.send(err)
                   }
                   console.log(doc);
                   res.json(doc);
                 
            }); 

  });
router.get('/patientlist/:id',function(req,res){ 
  var id = req.params.id;
    console.log(id);

  patientlist.findOne({
    
    _id: mongoose.Types.ObjectId(id),
    
  
  },function(err, doc) {
                if (err){
                    res.send(err)
                   }
                   console.log(doc);
                   res.json(doc);
                 
            }); 

  });

 

module.exports = router;
