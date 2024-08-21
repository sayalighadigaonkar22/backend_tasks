const express = require('express');
// const path = require('path');
const app = express();

app.set('view engine' , 'ejs');
app.set('views' , 'views');

app.get('/' ,(re,res) =>{
    res.render('index' , {title:'Express with EJS'});
});

const port = 2000;
app.listen(port , () =>{
    console.log(`Server is running on ${port}`)
})