import Weather from '../pageobjects/weather.page.js'

describe('Verify Weather App displays correct', () => {
    it('Verify container exists', async() => {
        await browser.url('https://luisp-coder.github.io/WeatherApp/index.html');

        await expect(Weather.container).waitForDisplayed();
        await expect(Weather.container).isExisting();
    });

    it('Enter city and verify weather info is shown', async() => {
        // Inputs San Francisco in the search box
        await expect(Weather.input).setValue('San Francisco');
        await expect(Weather.search).click();

        // Checks if a weather type picture is displayed
        await expect(Weather.weatherImage).waitForExist({ setTimeout: 5000 });
        await expect(Weather.weatherImage).isDisplayed();

        // Verify text is shown
        await expect(Weather.temperature).toHaveText('°C');
        
        // Verify Humidity is displayed
        await expect(Weather.humidity).isDisplayed();
        
        // Verify Wind speed is displayed
        await expect(Weather.wind).isDisplayed();
    });
});
