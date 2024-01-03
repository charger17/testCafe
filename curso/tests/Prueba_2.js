import {Selector} from 'testcafe';

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
    .click("#submit-button")
    //.expect(Selector('#article-header').innerText).eql('Thank you, Carlos Text!');

    await t.expect(Selector('#article-header').innerText).eql('Thank you, Carlos Text!');
});
