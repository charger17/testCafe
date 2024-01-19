import { Selector, fixture, userVariables } from "testcafe";
import XPathSelector from "./xpath-selector";
import Funciones from "./page-model2";

let tiempo = 1000;

fixture('Empezando con testCafe')
.page(userVariables.url);
    // .page("https://testpages.eviltester.com/styled/basic-html-form-test.html");

test("testingQA 1", async t => {
    await Funciones.T_max();

    await Funciones.T_texto_xpath("//input[contains(@name,'username')]", userVariables.nombre);
    await Funciones.T_tiempo();
    await t.takeScreenshot();
});

test.page("https://testingqarvn.com.es/datos-personales/")
('https://testingqarvn.com.es/', async t => {
    await Funciones.T_max();

    await Funciones.T_texto("#wsf-1-field-21", "Carlos", 0.3);

    await Funciones.T_tiempo(9000);
    await t.takeScreenshot();
});

test('Prueba Pagina Testing QA 2', async t =>{
    await Funciones.T_max();
    await Funciones.T_texto_xpath("//input[contains(@name,'username')]", "Carlos");
    await Funciones.T_tiempo(2000);
    await t.takeScreenshot();
});

test.only('POM Click', async t =>{
    await Funciones.T_max();
    await Funciones.T_click_xpath("//input[contains(@name,'username')]", 0.1);
    await Funciones.T_click_derecho_xpath("//input[contains(@type,'reset')]", 0.1);
    await Funciones.T_tiempo(4000);
    
});
