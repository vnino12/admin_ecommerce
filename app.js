    const bodyParser = require('body-parser')
    const express = require('express')
    const app = express()
    const routes = require('./routes/router.js')


    app.set("view engine", 'ejs');
    app.use(bodyParser.urlencoded({extended:true}));
    app.use('/', routes);
    app.use(express.static('public'));
    app.use('/uploads', express.static('uploads'));


    app.listen(1218, ()=>{
        console.log('server is runnong on http://localhost:1218')
    })