import { Selector, fixture, test } from "testcafe";
import XPathSelector from './xpath-selector';
import Funciones from './page-model2';

let tiempo = 1000;

fixture("Empezando con testCafe")
    .page("https://js.devexpress.com/");

test("Scroll element into view", async (t) => {
    const target = XPathSelector("(//a[@class='tab-button'][contains(.,'LeanMore')])[5]");

    await t
        .maximizeWindow()
        .scrollIntoView(target,{speed:0.1})
        .click(target,{speed:0.1})
        .wait(tiempo);
});
