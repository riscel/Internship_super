var express = require('express');
var router = express.Router();
var Message = require ('../models/message');

router.get('/', function(req, res, next) {
    res.render('index');
});

router.get('/tes', function(req,res,next){
    res.send("haii");
})

router.get('/messages', function (req,res,next){
    Message.find(function(err,messages){
        if(err){
            console.log("huhu");
            return res.status(500).json({
                message: 'Error while fetching data'
            });
        }
        res.status(200).json({
            dataRes:messages
        })
    });
})
router.post('/message', function(req,res,next){
    console.log('tesss');
    var message= new Message({
        content: req.body.content
    });
    message.save(function (err,result){
        if(err){
            console.log("huhu");
            return res.status(500).json({
                message: 'Error while saving data'
            });
        }
        res.status(201).json({
            message:'Saved data successfully!'
        });
    });
});

module.exports = router;
