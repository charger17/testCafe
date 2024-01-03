import { Selector } from "testcafe";
import XPathSelector from "./xpath-selector";

let tiempo = 1500;

fixture("Empezando con testCafe").page(
  "https://demoqa.com/buttons"
);

test("click sencillo", async (t) => {
    const button1 = Selector('button').withText('Click Me').nth(2);
  await t
    .maximizeWindow()
    .wait(tiempo)
    .click(button1)
    .wait(tiempo);
}).skipJsErrors();

test("click derecho", async (t) => {
    const button1 = Selector('button').withText('Right Click Me');
  await t
    .maximizeWindow()
    .wait(tiempo)
    .rightClick(button1)
    .wait(tiempo);
}).skipJsErrors();

test("Double click", async (t) => {
    const button1 = Selector('button').withText('Double Click Me');
  await t
    .maximizeWindow()
    .wait(tiempo)
    .doubleClick(button1)
    .wait(tiempo);
}).skipJsErrors();