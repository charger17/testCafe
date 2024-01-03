import { Selector } from "testcafe";
import XPathSelector from "./xpath-selector";
import xpathSelector from "./xpath-selector";

let tiempo = 1500;

fixture("Empezando con testCafe").page(
  "https://devexpress.github.io/testcafe/example/"
);

test
  ('Type Text', async t => {
      const name = Selector("#developer-name");

      await t
        .maximizeWindow()
        .wait(tiempo)
        .typeText(name, "Carlos")
        .wait(tiempo)
        .typeText(name, "Perez", {replace: true})
        .wait(tiempo);
  }).skipJsErrors();

test
('Type Text teimpo', async t => {
  const name = Selector("#developer-name");

  await t
        .maximizeWindow()
        .wait(tiempo)
        .typeText(name, "Carlos", {speed: 0.5})
        .wait(tiempo)
        .typeText(name, "Perez", {replace: true})
        .wait(tiempo);
}).skipJsErrors();

test
('Type Text teimpo', async t => {
  const name = Selector("#developer-name");

  await t
        .maximizeWindow()
        .wait(tiempo)
        .typeText(name, "Peter", {speed: 0.5})
        .wait(tiempo)
        .typeText(name, "Parker", { replace: true, speed: 0.3})
        .wait(tiempo)
        .typeText(name, '--', {caretPos: 3, speed: 0.1})
        .wait(tiempo)
        .expect(name.value).eql('Par--ker');
}).skipJsErrors();