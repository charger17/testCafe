import { Selector, fixture, test } from "testcafe";
import XPathSelector from './xpath-selector';
import Funciones from './page-model2';

let tiempo = 1000;

fixture("Empezando con testCafe")
    .page("https://devexpress.github.io/testcafe/example/");


test('Select Text', async (t) => { 
    const nameInput = Selector('#developer-name');

    await t
        .maximizeWindow()
        .wait(tiempo)
        .typeText('#developer-name', 'Carlos', {speed:0.3})
        .pressKey("ctrl+a")
        .pressKey('delete')
        .wait(tiempo);

}).skipJsErrors();

test('Select Text 2', async (t) => { 
    const nameInput = Selector('#developer-name');

    await Funciones.T_max();
    await Funciones.T_texto_limpiar_xpath("//input[@id='developer-name']", "Carlos", 0.3);
    await Funciones.T_key("ctrl+a",0.3);
    await Funciones.T_key("delete",0.3);
    await Funciones.T_texto_limpiar_xpath("//input[@id='developer-name']", "Perez", 0.3);

}).skipJsErrors();