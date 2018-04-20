'use strict'

import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import cors from 'koa2-cors';
import config from './config';
import mongoose from 'mongoose';
import {errorMiddleware} from './middleware/error-handler';

mongoose.connect(config.database).catch(err=>{
    console.log(err);
    proccess.exit(1)
})
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
app.use(errorMiddleware());
const modules = require('./modules');

modules(app)

app.listen(config.port, ()=>{
    console.log(`Listening on port ${config.port}`);
});

