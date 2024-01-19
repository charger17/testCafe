import { Selector, fixture } from "testcafe";
import XPahtSelector from "./xpath-selector";
import { ClientFunction } from "testcafe";
import xpathSelector from "./xpath-selector";
import Funciones from "./page-model2";

let tiempo = 1000;
let sp = 0.6;

const datos = ['Carlos', 'Perez', 'rdo@gmail.com', '78876', 'Dirección demo'];

fixture('Empezando con TestCafe')
    .page('https://testingqarvn.com.es/datos-personales/');

test("Parametros Uno", async (t) => {
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
    await Funciones.T_text_limpiar(nom, `${datos[0]}`, 0.3);
    await Funciones.T_text_limpiar(ap, `${datos[1]}`, 0.3);
    await Funciones.T_text_limpiar(email, `${datos[2]}`, 0.3);
    await Funciones.T_text_limpiar(tel, `${datos[3]}`, 0.3);
    await Funciones.T_text_limpiar(dir, `${datos[4]}`, 0.3);

});
