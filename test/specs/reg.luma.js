import { Luma } from '../pageobjects/luma.page.js';

describe('Verify Luma home page', async() => {
    before(async() => {
        await browser.url('https://magento.softwaretestingboard.com/');
    });

    it('Verify text in images are correct', async() => {
        await expect(Luma.mainImg).isDisplayed();
        await expect(Luma.whiteContent(2)).toHaveText('New Luma Yoga Collection');

        await expect(Luma.homePants).isDisplayed();
        await expect(Luma.whiteContent(3)).toHaveText('Luma pants when you shop today');

        await expect(Luma.shirts).isDisplayed();
        await expect(Luma.whiteContent(4)).toHaveText('Buy 3 Luma tees get 4th free');
    });
});
