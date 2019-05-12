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

// home page
app.get('/',(req,res)=>{
    res.send("hello home page ");
});

// get genres from mongo
app.get('/api/genres',(req,res)=>{
    Genre.getGenres((err,genres)=>{
        if(err){
            throw err;
        }
        res.json(genres);
    });
});

// get books from mongo
app.get('/api/books',(req,res)=>{
    Book.getBooks((err,books)=>{
        if(err){
            throw err;
        }
        res.json(books);
    });
});

// port 
const PORT = process.env.PORT || 3000;
app.listen(PORT,()=>{console.log("server is running ...")});