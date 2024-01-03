import { Selector } from "testcafe";
import XPathSelector from "./xpath-selector";
import xpathSelector from "./xpath-selector";

let tiempo = 1500;

fixture("Empezando con testCafe").page(
  "https://demoqa.com/text-box"
);

test
  ('Press key', async t => {
      const name = xpathSelector("//input[contains(@id,'userName')]");

      await t
        .maximizeWindow()
        .wait(tiempo)
        .typeText(name, "Carlos")
        .pressKey('space')
        .typeText(name, "Perez")
        .pressKey('space')
        .typeText(name, 'Salazar')
        .pressKey('space')
        .typeText(name, "Sal")

        .wait(tiempo);
  }).skipJsErrors();

test
('Press key focus', async t => {
  const name = XPathSelector("//input[contains(@id,'userName')]");
  const email = XPathSelector("//input[contains(@id,'userEmail')]");

  await t
    .maximizeWindow()
    .wait(tiempo)
    .typeText(name, "Carlos")
    .pressKey('ctrl+a')

    .wait(tiempo);
}).skipJsErrors();