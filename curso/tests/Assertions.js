import { Selector, fixture } from "testcafe";
import XPahtSelector from "./xpath-selector";
import { ClientFunction } from "testcafe";
import xpathSelector from "./xpath-selector";
import Funciones from "./page-model2";

let tiempo = 1000;
let sp = 0.6;

fixture('Empezando con TestCafe')
    .page('https://devexpress.github.io/testcafe/example/');

test("Assertions uno", async (t) => {
    await Funciones.T_max();

    // Validar un selectro name

    // await t.expect(Selector('#developer-name').filterVisible().exists).ok();
    // await Funciones.T_validar_selector_existe('#developer-name');

    await Funciones.T_validar_selector_existe_xpath("//input[contains(@id,'developer-name')]");
    await Funciones.T_texto_limpiar_xpath("//input[contains(@id,'developer-name')]", "Carlos");

    //Contains
    const text1 = XPahtSelector("//p[contains(.,'This webpage is used as a sample in TestCafe tutorials.')]")

    await Funciones.T_validar_contiene_texto(text1, "This web");

    // Metodos
    // Eql
    await t.expect(20).eql(20);
    await Funciones.T_validar_igualdad(20,20);
    await Funciones.T_validar_igualdad("Carlos", "Carlos");

    // Metodos
    //Not Eql
    await t.expect(15).notEql(20);
    await Funciones.T_validar_diferentes("Carlos", "Carlos1");

    // gt(x>y)
    await t.expect(21).gt(20);
    await Funciones.T_validar_mayorxy(10,5);
    await Funciones.T_validar_mayor_igualxy(10,10);

    //lte
    await Funciones.T_validar_menor_igualxy(8,10);

    //Contains
    await t.expect(['x', 'y']).contains('y');
    await t.expect('Username: steve@example.com').contains('Username');
    await t.expect('Rodrigo').contains("Ro");
    await Funciones.T_valdiar_contiene_xy("Rodrigo", "Ro");

    // No contiene
    await Funciones.T_valdiar_no_contiene_xy("Rodrigo", "Ror");

    // Numeric Range
    await t.expect(10).within(1,20); // succes
    // await t.expect(22).within(1,20);  // failre
    await t.expect(18).within(1,20); // succes

    // notWithin
    await t.expect(22).notWithin(1,20) //success
    // await t.expect(10).notWithin(1,20) //failure
});

test.only("Assertions Dos", async (t) => {
    const text1 = XPahtSelector("//input[contains(@id,'developer-name12')]");
    // await t.expect(text1.exists).ok();

    const visibleSelectors = Selector(text1).filterVisible();

    if (visibleSelectors) {
        console.log("El xpath existe para poder localizarlo")
        // await Funciones.T_text_limpiar(text1, "Carlos", 0.2);
    } else {
        console.log("No existe el path")
    }

});
