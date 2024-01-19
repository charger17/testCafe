import { Selector, fixture } from "testcafe";
import XPahtSelector from "./xpath-selector";
import { ClientFunction } from "testcafe";
import xpathSelector from "./xpath-selector";
import Funciones from "./page-model2";

let tiempo = 1000;
let sp = 0.6;

fixture("Empezando con TestCafe").page(
  "https://js.devexpress.com/jQuery/Demos/WidgetsGallery/Demo/FileUploader/FileSelection/light/"
);

test("Upload Files test", async (t) => {
    const name = XPahtSelector("//input[contains(@name, 'FirstName')]");
    const last = XPahtSelector("//input[contains(@name, 'LastName')]");
    const upload = XPahtSelector('//*[@id="file-uploader"]/div/div/div/div[1]/div[2]/input');
    const cargar = XPahtSelector("//span[@class='dx-button-text'][contains(.,'Update profile')]");

    await t
        .maximizeWindow()
        .wait(tiempo)
        .switchToIframe('.demo-frame')
        .typeText(name, 'Rodrigo', {replace:true, speed: 0.3})
        .typeText(last, 'Rodrigo', {replace:true, speed: 0.3})
        .setFilesToUpload(upload, [
            'C:/Users/dhari/Documents/cursos/testCafe/curso/screenshots/2024-01-03_16-48-35/test-2/Chrome_122.0.0.0_Windows_11/1.png'
        ])
        .wait(tiempo)
        .click(cargar);
});

test.only("Upload Files test 2", async (t) => {
    const name = XPahtSelector("//input[contains(@name, 'FirstName')]");
    const last = XPahtSelector("//input[contains(@name, 'LastName')]");
    const upload = XPahtSelector('//*[@id="file-uploader"]/div/div/div/div[1]/div[2]/input');
    const cargar = XPahtSelector("//span[@class='dx-button-text'][contains(.,'Update profile')]");

    await Funciones.T_max();

    await t
        // .maximizeWindow()
        // .wait(tiempo)
        .switchToIframe('.demo-frame');
    
    await Funciones.T_text_limpiar(name, "Carlos", 0.4);
    await Funciones.T_text_limpiar(last, "Perez", 0.4);

    await t.setFilesToUpload(upload, [
        'C:/Users/dhari/Documents/cursos/testCafe/curso/screenshots/2024-01-03_16-48-35/test-2/Chrome_122.0.0.0_Windows_11/1.png'
    ]);

    await Funciones.T_tiempo(tiempo);
    await Funciones.T_click(cargar);
});