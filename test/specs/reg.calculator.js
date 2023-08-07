import { Calculator } from '../pageobjects/calculator.page.js';

describe('Verify Calculator Page', async() => {
    it('Verify Addition functionaluty works', async() => {
        await browser.url('https://luisp-coder.github.io/Calculator/');
        await expect(Calculator.input).toHaveText('0');
        await expect(Calculator.button).selectByAttribute('value','2');
        await Calculator.selectByVisibleText('2');
        
        await expect(Calculator.operator(1)).click();

        await expect(Calculator.button).selectByAttribute('value','2');
        await Calculator.selectByVisibleText('2');

        await expect(Calculator.equal).click()
        await expect(Calculator.input).toHaveText('4');

        await browser.pause(2000);
        await expect(Calculator.clear).click();
    });

    it('Verify Subtraction functionaluty works', async() => {
        await expect(Calculator.input).toHaveText('0');
        await expect(Calculator.button).selectByAttribute('value','7');
        await Calculator.selectByVisibleText('7');
        
        await expect(Calculator.operator(2)).click();

        await expect(Calculator.button).selectByAttribute('value','3');
        await Calculator.selectByVisibleText('3');

        await expect(Calculator.equal).click()
        await expect(Calculator.input).toHaveText('4');

        await browser.pause(2000);
        await expect(Calculator.clear).click();
    });

    it('Verify Multiplication functionaluty works', async() => {
        await expect(Calculator.input).toHaveText('0');
        await expect(Calculator.button).selectByAttribute('value','3');
        await Calculator.selectByVisibleText('3');
        
        await expect(Calculator.operator(3)).click();

        await expect(Calculator.button).selectByAttribute('value','3');
        await Calculator.selectByVisibleText('3');

        await expect(Calculator.equal).click()
        await expect(Calculator.input).toHaveText('9');

        await browser.pause(2000);
        await expect(Calculator.clear).click();
    });

    it('Verify Division functionaluty works', async() => {
        await expect(Calculator.input).toHaveText('0');
        await expect(Calculator.button).selectByAttribute('value','9');
        await Calculator.selectByVisibleText('9');
        
        await expect(Calculator.operator(4)).click();

        await expect(Calculator.button).selectByAttribute('value','3');
        await Calculator.selectByVisibleText('3');

        await expect(Calculator.equal).click()
        await expect(Calculator.input).toHaveText('3');

        await browser.pause(2000);
        await expect(Calculator.clear).click();
    });
});
