import { Selector } from "testcafe";
import XPathSelector from "../xpath-selector";

let tiempo = 500;

fixture("Empezando con testCafe").page(
  "https://devexpress.github.io/testcafe/example/"
);

test("Mi primer test", async (t) => {
  await t
  .typeText("#developer-name", "Carlos Text")
  .click("#submit-button");
});

test("Mi segundo test", async (t) => {
  await t
    .typeText("#developer-name", "Carlos Text")
    .click("#remote-testing")
    .click("#reusing-js-code")
    .click("#submit-button");
  //.expect(Selector('#article-header').innerText).eql('Thank you, Carlos Text!');

  await t
    .expect(Selector("#article-header").innerText)
    .eql("Thank you, Carlos Text!");
});

test("Mi tercer test tres", async (t) => {
  const check1 = XPathSelector("//input[@id='remote-testing']");
  const check2 = XPathSelector("//input[@id='reusing-js-code']");
  const sub = XPathSelector("//button[@id='submit-button']");
  await t
    .maximizeWindow()
    .wait(tiempo)
    .typeText("#developer-name", "Carlos Text")
    .click(check1)
    .wait(tiempo)
    .click(check2)
    .wait(tiempo)
    .click(sub)
    .wait(tiempo)
    .expect(Selector('#article-header').innerText).eql('Thank you, Carlos Text!');

});
