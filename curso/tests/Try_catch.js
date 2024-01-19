import { Selector, fixture } from "testcafe";
import XPahtSelector from "./xpath-selector";
import { ClientFunction } from "testcafe";
import xpathSelector from "./xpath-selector";
import Funciones from "./page-model2";

let tiempo = 1000;
let sp = 0.6;

fixture('Empezando con TestCafe')
    .page('https://devexpress.github.io/testcafe/example/');

test("Try Catch Uno", async (t) => {
    await Funciones.T_max();

    // const name = XPahtSelector("//input[contains(@id,'developer-name')]");
    // await Funciones.T_text_limpiar(name, "Carlos", 0.2);

    try {
        const name = XPahtSelector("//input[contains(@id,'developer-name12')]");
        await Funciones.T_text_limpiar(name, "Carlos", 0.2);
    } catch (error) {
        console.error(error, "No se encuentra el elemento pero la prueba pasa");
    }

    await Funciones.T_click_xpath("//input[contains(@id,'remote-testing')]");
    await Funciones.T_tiempo(2000);
});
