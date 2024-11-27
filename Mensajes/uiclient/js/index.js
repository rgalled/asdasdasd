import { HttpFetch } from "./modules/HttpFetch.js";
import { UIBuilder } from "./modules/UIBuilder.js";
import { message_model } from "../config/clientUI/message_model.js";

function hola(a){
    console.log('Datos listos' + a)
}


const httpFetch = new HttpFetch('http://localhost:3000');
const message = message_model;

httpFetch.obtenerUI('', (datos) => {
    UIBuilder.build(datos);
    UIBuilder.build(message);
});
