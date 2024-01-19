import { Selector, fixture } from "testcafe";
import XPahtSelector from "./xpath-selector";
import { ClientFunction } from "testcafe";
import xpathSelector from "./xpath-selector";
import Funciones from "./page-model2";

let tiempo = 100;
let sp = 0.6;

fixture("Empezando con TestCafe").page(
  "https://devexpress.github.io/testcafe/example/"
);

test("Navigate Url", async (t) => {
  await t
    .maximizeWindow()
    .wait(tiempo)

    .navigateTo("https://github.com/Devexpress/testcafe");

  const bt = XPahtSelector("//input[contains(@aria-label,'Go to file')]");

  await Funciones.T_max(2000);

  await t
    // .maximizeWindow()
    // .wait(tiempo)
    .typeText(bt, "hola", { speed: sp })
    .wait(tiempo)

    await Funciones.T_pantalla_true("C:/Users/dhari/Documents/cursos/testCafe/curso/screenshots")
});
