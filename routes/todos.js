var express = require('express');
var router = express.Router();
var knex = require('../db/knex');
var bodyParser = require("body-parser");

//create
router.get('/',function(req,res){
    knex("todos").then(function(todos){
      res.format({
          json:function(){
            res.send({todos})
          }
        })    
    })
  })

router.post('/',function(req,res){
  knex("todos").insert(req.body.todo, "*")
      .then(function (todo){
        res.format({
          json:function(){
            res.send({todo})
          }
        })
      })
  });


router.get('/:id',function(req,res){
  knex('todos').where({id: +req.params.id}).first().then(function(todo){
      res.send({todo})
  })
})

router.get('/:id/edit', function(req,res){

})

router.put('/:id',function(req,res){
   knex('todos').where({id: +req.params.id}).update(req.body.todo).then(function(todo){
      res.send({todo})
  })
})

router.delete('/:id',function(req,res){
  knex('todos').where({id: +req.params.id}).del().then(function(){
    res.send({})
  });
})





module.exports = router;