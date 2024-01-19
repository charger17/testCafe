import { Selector, fixture } from "testcafe";
import XPahtSelector from "./xpath-selector";
import { ClientFunction } from "testcafe";
import xpathSelector from "./xpath-selector";
import Funciones from "./page-model2";
import dotenv from 'dotenv'

let tiempo = 1000;
let sp = 0.6;

const datos = ['Carlos', 'Perez', 'rdo@gmail.com', '78876', 'Dirección demo', 'php'];
dotenv.config();

fixture('Empezando con TestCafe')
    .page('https://testingqarvn.com.es/datos-personales/');

test("Parametros tres", async (t) => {
    await Funciones.T_max();

    const nom = XPahtSelector("//input[contains(@id,'wsf-1-field-21')]");
    const ap = XPahtSelector("//input[contains(@id,'wsf-1-field-22')]");
    const email = XPahtSelector("//input[contains(@id,'wsf-1-field-23')]");
    const tel = XPahtSelector("//input[contains(@id,'wsf-1-field-24')]");
    const dir = XPahtSelector("//textarea[contains(@id,'wsf-1-field-28')]");

    // await Funciones.T_text_limpiar(nom, "Carlos", 0.3);
    // await Funciones.T_text_limpiar(ap, "Perez", 0.3);
    // await Funciones.T_text_limpiar(email, "rdo@gmail.com", 0.3);
    // await Funciones.T_text_limpiar(tel, "78876", 0.3);
    // await Funciones.T_text_limpiar(dir, "Dirección demo", 0.3);


    //CODIGO ASCCI 96
    console.log(process.env)
    console.log(process.env.nombre);
console.log(process.env.apellido);
console.log(process.env.email);
console.log(process.env.telefono);
console.log(process.env.dir);

    // await Funciones.T_text_limpiar(nom, process.env.nombre, sp);
    // await Funciones.T_text_limpiar(ap, process.env.apellido, sp);
    // await Funciones.T_text_limpiar(email, process.env.email, sp);
    // await Funciones.T_text_limpiar(tel, process.env.telefono, sp);
    // await Funciones.T_text_limpiar(dir, process.env.dir, sp);

    
});
