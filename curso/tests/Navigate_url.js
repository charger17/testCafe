import { Selector, fixture } from "testcafe";
import XPahtSelector from './xpath-selector';
import { ClientFunction } from "testcafe";
import xpathSelector from "./xpath-selector";
import Funciones from './page-model2';

let tiempo = 100;
let sp = 0.6;

fixture('Empezando con TestCafe')
    .page('https://devexpress.github.io/testcafe/example/');

test("Navigate Url", async (t) => {
    await t
        .maximizeWindow()
        .wait(tiempo)

        .navigateTo('https://github.com/Devexpress/testcafe');

    const bt = XPahtSelector("//input[contains(@aria-label,'Go to file')]");

    await Funciones.T_max(2000);

    await t
        // .maximizeWindow()
        // .wait(tiempo)
        .typeText(bt, 'hola', {speed: sp})
        .wait(tiempo)

    .navigateTo('https://js.devexpress.com/jQuery/Demos/WidgetsGallery/Demo/FileUploader/FileSelection/light/');
    const name = XPahtSelector("//input[contains(@name, 'FirstName')]");
    const last = XPahtSelector("//input[contains(@name, 'LastName')]");

    await t
        .maximizeWindow()
        .switchToIframe('.demo-frame')
        .typeText(name, 'Rodrigo', {replace:true, speed: 0.3})
        .typeText(last, 'Rodrigo', {replace:true, speed: 0.3});
    
    await Funciones.T_text_limpiar(name, "juan", 0.2);
    await Funciones.T_text_limpiar(last, "perez", 0.2);
    
    const urla = await Funciones.T_url_actual();
    console.log(urla);
    await Funciones.T_validar_url('https://demoqa.com/text-box')

});
