import { Selector, fixture, t, test } from "testcafe";
import XPathSelector from "./xpath-selector";
import { ClientFunction } from "testcafe";
import Funciones from "./page-model2";

let tiempo = 100;
let dp = 0.6;

fixture("Empezando con testCafe").page(
  "https://devexpress.github.io/testcafe/example/"
);

test("Abrir Nueva Ventana", async () => {
  await t
    .maximizeWindow()
    .wait(tiempo);
  await t.openWindow("https://js.devexpress.com/");
  await t
    .maximizeWindow()
    .wait(tiempo);

    const url = await t.eval(() => document.documentURI);
    await t.expect(url).eql("https://js.devexpress.com/");
    await t.wait(tiempo);
});

test.only("Abrir segundo Demo", async (t) => {
    await t
        .maximizeWindow()
        .wait(tiempo);
    const window1 = await t.getCurrentWindow();
    const window2 = await t.openWindow("https://devexpress.com/");
    const window3 = await t.openWindow("https://github.com/");

    await t.switchToWindow(window1);
    await t
        .maximizeWindow()
        .wait(tiempo)
    const url = await t.eval(() => document.documentURI);
    await t.expect(url).eql("https://devexpress.github.io/testcafe/example/");
    await t.wait(3000);

    await t.switchToWindow(window2);
    await t
        .maximizeWindow()
        .wait(3000)
    const url2 = await t.eval(() => document.documentURI);
    await t.expect(url2).eql("https://devexpress.com/");

    await t.switchToWindow(window3);
    await t
        .maximizeWindow()
        .wait(3000)
    const url3 = await t.eval(() => document.documentURI);
    await t.expect(url3).eql("https://github.com/");
});
