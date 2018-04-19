'use strict'

import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import cors from 'koa2-cors';
import config from './config';
import mongoose from 'mongoose';

const db = mongoose.connect(config.database);
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function() {
//   console.log(`Connected to ${process.env.NODE_ENV}`); 
// });
const app = new Koa();

app.use(cors({
    origin: '*',
    exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'],
    maxAge: 5,
    credentials: true,
    allowMethods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
    allowHeaders: ['Content-Type', 'Authorization', 'Accept']
  }));
app.use(bodyParser());

const modules = require('./modules');

modules(app)

app.listen(config.port, ()=>{
    console.log(`Listening on port ${config.port}`);
});

