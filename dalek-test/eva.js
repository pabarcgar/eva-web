URL = 'http://mysite.com/apps/eva-web/src/index.html';

module.exports = {
    'Page title is correct': function (test) {
        test
            .open(URL)
            .resize({width: 1680, height: 1050})
            .click('#cookie-dismiss')
            .assert.title().is('European Variation Archive', 'It has title')
            .wait(5000)
            .screenshot('dalek-test/:browser/my_file.png')
            .end()

            .click('#variant-browser-link')
            .wait(5000)
            .execute(function () {
                $("[name='region']").val('1:310000-500000')
            })
            .click('#vb-submit-button-btnEl')
            .screenshot('dalek-test/:browser/study_page.png')
            .wait(5000)
            .done();
    }
};