"use strict";
const app       = require('koa')();
const mongoose  = require('mongoose');
const serve     = require('koa-static');

const projects  = require('./routes/projects');
const chapters  = require('./routes/chapters');
const scenes    = require('./routes/scenes');

mongoose.connect('mongodb://localhost/test');
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log('Mongoose connected!');
});

app
    .use(serve('web'))
    .use(projects.routes())
    .use(chapters.routes())
    .use(scenes.routes())
    .use(projects.allowedMethods())
    .use(chapters.allowedMethods())
    .use(scenes.allowedMethods());

app.listen(3000);
