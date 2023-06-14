class GreenUp {
    get nav() {
        return $('.navbar');
    }

    get navTitle() {
        return $('.navbar-brand');
    }

    navLink(num) {
        return $(`.nav-link:nth-of-type(${num})`);
    }

    get home() {
        return $('#home');
    }

    get slide() {
        return $('.slide');
    }

    get prevBtn() {
        return $('.carousel-control-prev');
    }

    get nextBtn() {
        return $('.carousel-control-next');
    }

    get info() {
        return $('.company-info');
    }

    card(num) {
        return $(`.card:nth-of-type(${num})`);
    }

    faq(num) {
        return $(`.question-title:nth-of-type(${num})`);
    }

    faqButton(num) {
        return $(`question-button:nth-of-type(${num})`);
    }

    innerFaq(num) {
        return $(`.inner-text:nth-of-type(${num})`);
    }

    get contactInfo() {
        return $('.contact-text');
    }

    inputCont(num) {
        return $(`.name:nth-of-type(${num})`)
    }

    get inputEmail() {
        return $('.email');
    }

    future(num) {
        return $(`.future:nth-of-type(${num})`);
    }
}

const Green = new GreenUp();
export { Green }