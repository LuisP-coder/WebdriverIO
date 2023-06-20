// Pages
import { Card } from '../pageobjects/credit.page.js';

describe('Verify Card Page is okay', () => {
    const pageUrl = 'https://luisp-coder.github.io/CreditCardStyle/';

    before(async() => {
        await browser.url(pageUrl);
    });

    it('Verify Card is displayed', async() => {
        // Checking if whole card is shown
        await expect(Card.wholeCard).isDisplayed();
    });

    it('Verify Chip and signal image are shown', async() => {
        // Checking if Chip Icon is shown
        await expect(Card.chipIcon).isplayed();
        // Checking if wifi icon is shown
        await expect(Card.wifiIcon).isDisplayed();
    });

    it('Verify Card Number is correct', async() => {
        // Verifies card number
        await expect(Card.cardNum).toHaveText(
            '1234 2222 3434 5656'
        );
    });

    it('Check Card holder name and expiration date', async() => {
        // Verifies card holder name and expiration date
        await expect(Card.holder).toHaveText(
            'CARD HOLDER',
            'John Doe'
        );
        // Verifies good thru date
        await expect(Card.valid).toHaveText(
            'GOOD THRU',
            '09/25'
        );
    });

    it('Check Visa icon is displayed', async() => {
        // Visa Icon
        await expect(Card.visa).isDisplayed();
    });
});
