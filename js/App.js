class App {
    launch() {
        this.initFadeInAnimations();
        this.initNavBarHandlers();
        this.initIconHandlers();
        let bits = document.getElementsByClassName('bit');
        for (let i = 0; i < bits.length; i++) {
            bits[i].onclick = (ev) => {
                if (bits[i].classList.contains('on')) {
                    bits[i].classList.remove('on');
                } else {
                    bits[i].classList.add('on');
                }

                let bit0 = document.getElementById('bit-0');
                let bit1 = document.getElementById('bit-1');
                let bit2 = document.getElementById('bit-2');
                let bit3 = document.getElementById('bit-3');
                let bit4 = document.getElementById('bit-4');

                if (!bit0.classList.contains('on') && !bit1.classList.contains('on') 
                && bit2.classList.contains('on') && bit3.classList.contains('on') 
                && bit4.classList.contains('on')) {
                    window.open("https://mcbendorjee-vs-robots.firebaseapp.com/");
                }
            }
        }
    }

    initNavBarHandlers() {
        let elems = document.getElementById("nav-bar").children;
        for (let i = 0; i < elems.length; i++) {
            elems[i].onmouseover = (ev) => {
                elems[i].style.color = "lime";
            };
            elems[i].onmouseout = (ev) => {
                elems[i].style = "";
            };
            
            const BLINK_NUM = 5;
            switch (elems[i].id) {
                case "bt-about":
                    elems[i].onmousedown = (ev) => {
                        this.scrollToElemAndBlink("about-page", "header-about", BLINK_NUM);
                    };
                    break;
                case "bt-xp":
                    elems[i].onmousedown = (ev) => {
                        this.scrollToElemAndBlink("xp-page", "header-xp", BLINK_NUM);
                    };
                    break;
                case "bt-work":
                    elems[i].onmousedown = (ev) => {
                        this.scrollToElemAndBlink("work-page", "header-work", BLINK_NUM);
                    };
                    break;
                case "bt-contact":
                    elems[i].onmousedown = (ev) => {
                        this.scrollToElemAndBlink("contact-page", "header-contact", BLINK_NUM);
                    };
                    break;
            }
        }
    }
    
    initIconHandlers() {
        let icons = document.getElementsByClassName("social-icon");
        for (let i = 0; i < icons.length; i++) {
            let icon = icons[i];
            icon.onmouseover = (ev) => {
                icon.classList.add("filter-green");
            }
            icon.onmouseout = (ev) => {
                icon.classList.remove("filter-green");
            }
        }
        document.getElementById("icon-github").onclick = (ev) => {
            window.open('https://github.com/Camposm97');
        }
        document.getElementById("icon-linkedin").onclick = (ev) => {
            window.open('https://www.linkedin.com/in/michael-campos1/');
        }
    }
    
    initFadeInAnimations() {
        let elems = document.getElementsByClassName("fade-in");
        let timer = 10;
        for (let i = 0; i < elems.length; i++) {
            this.fadeInElem(0, elems[i]);
        }
    }
    
    scrollToElem(id) {
        document.getElementById(id).scrollIntoView({
            behavior: 'smooth'
        });
    }
    
    fadeInElem(opacity, elem) {
        let self = this;
        if (opacity < 1) {
            opacity += .01;
            setTimeout(function() {
                self.fadeInElem(opacity, elem)
            }, 0.1); // 0.1 Milliseconds
        }
        elem.style.opacity = opacity;
    }
    
    blinkerElem(amount, elem) {
        let self = this;
        if (amount > 0) {
            setTimeout(function() {
                elem.style.color = "lime";
                setTimeout(function() {
                    elem.style.color = "";
                    self.blinkerElem(amount-1, elem);
                }, 200);
            }, 200);
        }
        elem.style.color = "";
    }

    scrollToElemAndBlink(idToScrollTo, idToBlink, amount) {
        this.scrollToElem(idToScrollTo);
        this.blinkerElem(amount, document.getElementById(idToBlink));
    }
}

window.onload = () => {
    let app = new App();
    app.launch();
}
