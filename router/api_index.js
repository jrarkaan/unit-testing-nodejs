const express = require('express');
const todos = require('../utils/dummy.js');

const router = express.Router();

router.get('/', function(req, res, next){
    try{
        res.status(200).json({
            message: "All todos",
            todos
        })
    }catch(err){
        return res.status(500).json({
            message: "Internal server errror"
        })
    }
});

router.get('/:id', function(req, res, next){
    try{
        const { id } = req.params;
        const findTodo = todos.find(todo => todo.id === Number(id));

        if(findTodo){
            res.status(200).json({
                message: "All todos",
                todo: findTodo
            });
        }else{
            res.status(404).json({
                message: "not found"
            })
        }
    }catch(err){
        return res.status(500).json({
            message: "Internal server errror"
        })
    }
});

module.exports = router;