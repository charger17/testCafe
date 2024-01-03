fixture('Empezando con testCafe')
    .page('https://devexpress.github.io/testcafe/example/');

test('Mi primer test', async t => {
    await t 
        .typeText('#developer-name', 'Carlos Text')
        .click('#submit-button');
});