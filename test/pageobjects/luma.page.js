class luma {
    whiteContent(num) {
        return $(`.content:nth-of-type(${num})`);
    }

    get mainImg() {
        return $('.block-promo .home-main');
    }

    get homePants() {
        return $('.block-promo .home-pants')
    }

    get shirts() {
        return $('block-promo .home-t-shirts');
    }
}

const Luma = new luma();
export { Luma }
