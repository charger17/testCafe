import { fixture, test } from "testcafe";

let tiempo = 1000;

fixture('Empezando con testcafé')
    .page('https://js.devexpress.com');

test('Hover test', async t=> {
    await t
        .maximizeWindow()
        .wait(tiempo)
        .hover('.header-button', {speed: 0.1})
        .wait(tiempo)
        .hover('#treelist', {speed:0.1})
        .wait(2000);
})