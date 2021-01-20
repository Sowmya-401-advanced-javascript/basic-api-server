'use strict';

const express = require('express');
const Todo = require('../models/todo');
const todo = new Todo();

const router = express.Router();

// RESTful routes
router.get('/todo', getTodoItems);
router.get('/todo/:id', getOneTodoItem);
router.post('/todo', createTodoItem);
router.put('/todo/:id', updateTodoItem);
router.delete('/todo/:id', deleteTodoItem);

// RESTful route handlers
function getTodoItems(req, res) {
    console.log('Route has been hit');
    const allTodo = todo.get()
    res.status(200).json(allTodo);
}

function getOneTodoItem(req, res) {
    const id = req.params.id;
    const oneTodoItem = todo.get(id);
    console.log(oneTodoItem);
    res.status(200).json(oneTodoItem);
}

function createTodoItem(req, res) {
    console.log("reached")
    console.log(req.body)
    const obj = req.body;
    const newTodoItem = todo.create(obj)
    res.status(200).json(newTodoItem);
}

function updateTodoItem(req, res) {
    console.log(req.params.id);
    console.log(req.body);
    const newIDToBeGiven = req.params.id;
    const todoObjToBeUpdated = req.body;
    const newUpdatedTodoItem = todo.update(newIDToBeGiven, todoObjToBeUpdated);
    res.status(200).json(newUpdatedTodoItem);
}

function deleteTodoItem(req, res) {
    todo.delete(req.params.id);
    res.status(200).json('deleting todo item');
}

module.exports = router;

