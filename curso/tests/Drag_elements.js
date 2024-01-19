import { Selector, fixture, test } from "testcafe";
import XPathSelector from './xpath-selector';
import { ClientFunction } from "testcafe";
import Funciones from './page-model2';
import xpathSelector from "./xpath-selector";

let tiempo = 1000;

fixture("Empezando con testCafe")
    .page("https://devexpress.github.io/testcafe/example/");

test("Drag test", async (t) => {
    const triedCheckbox = Selector('label').withText('I have tried TestCafe');

    await t
        .maximizeWindow()
        .wait(tiempo)
        .click(triedCheckbox)
        .drag('#slider', 360, 0, {offsetX: 10, offsetY: 10})
        .wait(tiempo);

});

test.page("https://testpages.herokuapp.com/styled/drag-drop-javascript.html")
("Drag test dos",async t =>{
    const origen = xpathSelector("(//div[@class='draggable'])[1]");
    const destino = XPathSelector("//div[contains(@id,'droppable1')]");

    await t
        .maximizeWindow()
        .wait(tiempo)
        .dragToElement(origen, destino, {speed:0.1})
        .wait(tiempo);
});
