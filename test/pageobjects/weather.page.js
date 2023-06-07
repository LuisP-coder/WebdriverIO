class Climate {
    get container() {
        return $('.container');
    }

    get input() {
        return $('.search-box input');
    }

    get search() {
        return $('.search-box button');
    }

    get weatherImg() {
        return $('.weather-box img');
    }

    get temp() {
        return $('.temperature span');
    }

    get humidity() {
        return $('.humidity');
    }
    
    get wind() {
        return $('.wind');
    }
}

const Weather = new Climate();

export { Weather };