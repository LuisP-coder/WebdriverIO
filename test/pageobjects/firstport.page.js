class portfolio { 
    get navBar() {
        return $('.navbar-header');
    }

    get hello() {
        return $('.col .mt-5')
    }

    get bio() {
        return $('.skills');
    }

    get portrait() {
        return $('.img-fluid');
    }

    get showcase() {
        return $('#showcase');
    }

    projects(num) {
        return $(`figure:nth-of-type(${num})`);
    }

    captions(num) {
        return $(`figcaption:nth-of-type(${num})`);
    }

    get portfolio() {
        return $('.portfolio');
    }

    links(num){
        return $(`.links:nth-of-type(${num})`);
    }
}

const FirstPort = new portfolio();
export { FirstPort };