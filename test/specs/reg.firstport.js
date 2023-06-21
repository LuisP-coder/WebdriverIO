import { FirstPort } from '../pageobjects/firstport.page.js';

describe('Verify first porfolio page', async() => {
    let weatherUrl = 'https://luisp-coder.github.io/WeatherApp/index.html';
    let greenUrl = 'https://luisp-coder.github.io/GreenUpMock/';
    let scoreUrl = 'https://luisp-coder.github.io/ScoreKeeper/';
    let toDoUrl = 'https://luisp-coder.github.io/To-Do/';
    let gitUrl = 'https://github.com/LuisP-coder';
    let linkedinUrl = 'https://www.linkedin.com/in/luis-perez-6a9338184/';

    before(async() => {
        await browser.url('https://luisp-coder.github.io/LuisP-coder/');
    });

    it('Verify first section text and photo', async() => {
        await expect(FirstPort.hello).toHaveText('Hello');
        await expect(FirstPort.skills).toHaveText(
            `I'm Luis, a 22 year old upcoming Software Engineer `,
            'located in the Bay Area California. Before pursuing ',
            'a career in Software Engineer I was a QA Engineer at ',
            'Momentive.ai for a year. In January 2021 I enrolled ',
            'in the YearUp program. The program helps young adults ',
            'develop communication, time management, coding, and much more. ',
            'I landed an internship at Momentive.ai in August 2021 as a QA intern ', 
            'and converted to a full time QA Engineer 6 months later. I always want ',
            `to learn more and improve my overall skills. I'm hard working, `,
            'curious, committed, and a fast learner!!'
        );

        await expect(FirstPort.portrait).toBeDisplayed();
    });

    it('Verify Second Section', async() => {
        await expect(FirstPort.showcase).toHaveText('Some of my Projects');

        await expect(FirstPort.projects(1)).toBeDisplayed();
        await expect(FirstPort.captions(1)).toHaveText('Weather App');
        await expect(FirstPort.projects(1)).click();
        await browser.toHaveUrlContaining(weatherUrl);
        await browser.pause(3000);
        await browser.closeTab();
        await browser.switchTab([0]);
    
        await expect(FirstPort.projects(2)).toBeDisplayed();
        await expect(FirstPort.captions(2)).toHaveText('Green Energy Website Mock');
        await expect(FirstPort.projects(2)).click();
        await browser.toHaveUrlContaining(greenUrl);
        await browser.pause(3000);
        await browser.closeTab();
        await browser.switchTab([0]);

        await expect(FirstPort.projects(3)).toBeDisplayed();
        await expect(FirstPort.captions(3)).toHaveText('Score Keeper');
        await expect(FirstPort.projects(3)).click();
        await browser.toHaveUrlContaining(scoreUrl);
        await browser.pause(3000);
        await browser.closeTab();
        await browser.switchTab([0]);

        await expect(FirstPort.projects(4)).toBeDisplayed();
        await expect(FirstPort.captions(4)).toHaveText('To-Do App');
        await expect(FirstPort.projects(4)).click();
        await browser.toHaveUrlContaining(toDoUrl);
        await browser.pause(3000);
        await browser.closeTab();
        await browser.switchTab([0]);
    });

    it('Verify Work History text and links', async() => {
        await expect(FirstPort.portfolio).toHaveText(
            'Work History',
            'Momentive.ai',
            'Growth QA Intern August 2021 - January 2022',
            'Quality Assurance Engineer February 2022 - February 2023'
        );

        await expect(FirstPort.links(1)).click();
        await browser.toHaveUrlContaining(gitUrl);
        await browser.pause(3000);
        await browser.closeTab();
        await browser.switchTab([0]);

        await expect(FirstPort.links(w)).click();
        await browser.toHaveUrlContaining(linkedinUrl);
        await browser.pause(3000);
        await browser.closeTab();
        await browser.switchTab([0]);
    });
});