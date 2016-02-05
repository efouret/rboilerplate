"use strict";
const app       = require('koa')();
const mongoose  = require('mongoose');

const projects  = require('./routes/projects');
const chapters  = require('./routes/chapters');
//require('./routes/scenes');

mongoose.connect('mongodb://localhost/test');
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log('Mongoose connected!');
});

app
    .use(projects.routes())
    .use(chapters.routes())
    .use(projects.allowedMethods())
    .use(chapters.allowedMethods());

app.listen(3000);
