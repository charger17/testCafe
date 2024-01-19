import { Selector, fixture } from "testcafe";
import XPahtSelector from "./xpath-selector";
import { ClientFunction } from "testcafe";
import xpathSelector from "./xpath-selector";
import Funciones from "./page-model2";

let tiempo = 1000;
let sp = 0.6;

const datos = ['Carlos', 'Perez', 'rdo@gmail.com', '78876', 'Dirección demo', 'php'];

fixture('Empezando con TestCafe')
    .page('https://testingqarvn.com.es/prueba-de-campos-checkbox/');

test("Parametros Uno", async (t) => {
    await Funciones.T_max();

    const nom = XPahtSelector("//input[contains(@id,'wsf-1-field-29')]");
    const ap = XPahtSelector("//input[contains(@id,'wsf-1-field-30')]");
    const email = XPahtSelector("//input[contains(@id,'wsf-1-field-31')]");
    const tel = XPahtSelector("//input[contains(@id,'wsf-1-field-32')]");
    const dir = XPahtSelector("//textarea[contains(@id,'wsf-1-field-33')]");

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

    if (`${datos[5]}`.toUpperCase() == "PHP") {
        await Funciones.T_click_xpath("//label[contains(@id,'wsf-1-label-36-row-1')]",sp);
    } else if (`${datos[5]}`.toUpperCase() == "PYTHON"){
        await Funciones.T_click_xpath("//label[contains(@id,'wsf-1-label-36-row-2')]",sp);
    } else if (`${datos[5]}`.toUpperCase() == "JS"){
        await Funciones.T_click_xpath("//label[contains(@id,'wsf-1-label-36-row-3')]",sp);
    } else {
        await Funciones.T_click_xpath("//label[contains(@id,'wsf-1-label-36-row-1')]",sp);
    }

    await Funciones.T_tiempo(2000);
});
