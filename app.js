const express = require('express');
const connection = require('./model/connectionDB');
const app = express();
const path = require("path");
const expressHandlebars = require('express-handlebars');
const bodyparser = require('body-parser');

//controllers
const contactController = require("./controllers/contacts");

//bodyParser middleware
app.use(bodyparser.urlencoded({
    extended:true
}));

//setting up the view path
app.set('views',path.join(__dirname,"/views/"));

//setting up the view engine
app.engine("hbs",expressHandlebars({
    extname:"hbs",
    defaultLayout:"mainLayout",
    layoutsDir:__dirname+"/views/layouts"
}));

app.set("view engine","hbs");

//routes
app.use('/contacts',contactController);


app.get('/',(req,res)=>{
    res.render("index",{});
});










app.listen(8000,()=>{
    console.log('app listening at port 8000');
})