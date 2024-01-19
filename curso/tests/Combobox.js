import { Selector, fixture } from "testcafe";
import XPahtSelector from "./xpath-selector";
import { ClientFunction } from "testcafe";
import xpathSelector from "./xpath-selector";
import Funciones from "./page-model2";

let tiempo = 1000;
let sp = 0.6;

fixture('Empezando con TestCafe')
    // .page('https://devexpress.github.io/testcafe/example/');
    .page('https://testingqarvn.com.es/combobox/');

test("Opcion select combobox", async (t) => {
    
    await Funciones.T_max();
    await Funciones.T_comboBox("//select[contains(@id,'preferred-interface')]", "Both", sp);
    await Funciones.T_tiempo(tiempo);
    await Funciones.T_comboBox("//select[contains(@id,'preferred-interface')]", "Command Line", sp);
    await Funciones.T_tiempo(tiempo);
    
});

test.only("Opcion select comobobox dos", async (t) => {
    // await Funciones.T_Open_Window("https://testingqarvn.com.es/combobox/");
    await Funciones.T_max();
    await Funciones.T_texto_limpiar_xpath("//input[contains(@id,'wsf-1-field-45')]","Carlos");
    await Funciones.T_texto_limpiar_xpath("//input[contains(@id,'wsf-1-field-46')]", "Perez");
    await Funciones.T_tiempo(2000);

    await Funciones.T_scrollSel_xpath("//select[contains(@id,'wsf-1-field-53')]");
    await Funciones.T_tiempo(3000);
    await Funciones.T_comboBox("//select[contains(@id,'wsf-1-field-53')]", "Linux", sp);
    await Funciones.T_tiempo(tiempo);
    await Funciones.T_comboBox("//select[contains(@id,'wsf-1-field-53')]", "Mac", sp);
    await Funciones.T_tiempo(tiempo);
    await Funciones.T_comboBox("//select[contains(@id,'wsf-1-field-53')]", "Windows", sp);
    await Funciones.T_tiempo(tiempo);

});
