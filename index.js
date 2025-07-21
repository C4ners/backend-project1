const express = require('express')
const app = express()
const handlebars = require('express-handlebars')

//Conection with the database
const Sequelize = require('sequelize')
const sequelize = new Sequelize('backend_project1', 'root', '123',{
    host: 'localhost',
    dialect: 'mysql'
})

//Config
    //Template Engine
    app.engine('handlebars', handlebars.engine({defaultLayout: 'main'}))
    app.set('view engine', 'handlebars')


app.listen(7777, function(){
    console.log('server is online')
})