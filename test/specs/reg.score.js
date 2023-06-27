import Score from '../pageobjects/score.page.js';

describe('Verify Score Keeper App', () => {
    it('Open page and verify Card is displayed', async() => {
        await browser.url('https://luisp-coder.github.io/ScoreKeeper/');
        await expect(Score.card).isDisplayed();
    });

    it('Verify titles and subtitle are correct', async() => {
        await expect(Score.title).toHaveText('Score Keeper');
        await expect(Score.counter).toHaveText('0 to 0');
        await expect(Score.subtitle).toHaveText('Use the buttons below to keep score');
    });

    it('Select dropdown and select number', async() => {
        await (Score.dropdown).selectByAttribute('value', '5');
        await browser.pause(4000);
        await (Score.dropdown).selectByVisibleText('5');
        await browser.pause(4000);
    });

    it('Add score to player one and verify score', async() => {
        for(let i = 0; i < 6; i++) {
            await (Score.p1Button).click();
        }

        await expect(Score.counter).toHaveText('5 to 0');
    }); 

    it('Reset score', async() => {
        await expect(Score.reset).toHaveText('0 to 0');
    });
});
