import express from 'express';
import cors from 'cors';
import { model1 } from './interfaces/model_1.js';
import { message_model } from '../uiclient/config/clientUI/message_model.js';

const appUI = new express();
appUI.use(cors());

appUI.get('/', (req, res) => {
    res.send(model1);
})

appUI.get('/getMessage', (req, res) => {
    res.send(message_model);
})

appUI.listen(3000, ()=>{
    console.log("UI Server running.")
});