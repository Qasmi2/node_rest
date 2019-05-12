const express = require ('express');
const app = express();
const bodyparse = require('body-parser');
const mongoose = require('mongoose');

Genre = require('../models/genres');
Book = require('../models/books');

app.use(bodyparse.json());
//connect to mongoose
mongoose.connect('mongodb://localhost/bookstore');
const db = mongoose.connection;

app.get('/',(req,res)=>{
    res.send("hello home page ");
});

app.get('/api/genres',(req,res)=>{
    Genre.getGenres((err,genres)=>{
        if(err){
            throw err;
        }
        res.json(genres);
    });
});

app.get('/api/books',(req,res)=>{
    Book.getBooks((err,books)=>{
        if(err){
            throw err;
        }
        res.json(books);
    });
});
const PORT = process.env.PORT || 3000;
app.listen(PORT,()=>{console.log("server is running ...")});