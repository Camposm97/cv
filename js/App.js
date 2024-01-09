class App {
    launch() {
        // this.initFadeInAnimations();
        this.initNavBarHandlers();
        this.initIconHandlers();
        this.initSkillTiles();
        // this.initEasterEgg();
    }

    initEasterEgg() {
        const bitClass = 'bit-on';
        let bits = document.getElementsByClassName('bit');
        for (let i = 0; i < bits.length; i++) {
            bits[i].onclick = (ev) => {
                if (bits[i].classList.contains(bitClass)) {
                    bits[i].classList.remove(bitClass);
                } else {
                    bits[i].classList.add(bitClass);
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
        // const BLINK_NUM = 5;
        // let close = function() {};
        let navbarToggle = document.getElementsByClassName('navbar-toggler');
        // console.log(close);
        let elems = document.getElementsByClassName("nav-link");
        for (let i = 0; i < elems.length; i++) {
            // elems[i].onmouseover = (ev) => {
            //     elems[i].style.color = "lime";
            // };
            // elems[i].onmouseout = (ev) => {
            //     elems[i].style = "";
            // };
            
            switch (elems[i].id) {
                case "item-about":
                    elems[i].onmousedown = (ev) => {
                        console.info('show about')
                        if (navbarToggle) navbarToggle[0].click();
                        this.scrollToElem("about-section");
                    };
                    break;
                case "item-skills":
                    elems[i].onmousedown = (ev) => {
                        console.info('show skills')
                        if (navbarToggle) navbarToggle[0].click();
                        this.scrollToElem("skills-section")
                        // this.scrollToElemAndBlink("work-page", "header-work", BLINK_NUM);
                    };
                    break;
                case "item-experience":
                    elems[i].onmousedown = (ev) => {
                        console.info('show experience')
                        if (navbarToggle) navbarToggle[0].click();
                        this.scrollToElem("xp-section")
                        // this.scrollToElemAndBlink("xp-page", "header-xp", BLINK_NUM);
                    };
                    break;
                case "item-projects":
                    elems[i].onmousedown = (ev) => {
                        console.info('show projects')
                        if (navbarToggle) navbarToggle[0].click();
                        this.scrollToElem("projects-section")
                        // this.scrollToElemAndBlink("contact-page", "header-contact", BLINK_NUM);
                    };
                    break;
            }
        }
    }
    
    initIconHandlers() {
        let icons = document.getElementsByClassName("social-icon");
        for (let i = 0; i < icons.length; i++) {
            icons[i].onmouseover = (ev) => {
                icons[i].classList.remove("inactive");
            }
            icons[i].onmouseout = (ev) => {
                icons[i].classList.add("inactive");
            }
        }
        document.getElementById("icon-github").onclick = (ev) => {
            window.open('https://github.com/CamposmDev');
        }
        document.getElementById("icon-linkedin").onclick = (ev) => {
            window.open('https://www.linkedin.com/in/michael-campos1/');
        }
    }
    
    initFadeInAnimations() {
        let elems = document.getElementsByClassName("fade-in");
        for (let i = 0; i < elems.length; i++) {
            this.fadeInElem(0, elems[i]);
        }
    }
    
    scrollToElem(id) {
        document.getElementById(id).scrollIntoView({
            behavior: 'auto'
        });
    }

    initSkillTiles() {
        const skillMap = new Map([
            ['Java', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg'],
            ['HTML 5', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg'],
            ['CSS 3', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg'],
            ['Javascript', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'],
            ['Typescript', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg'],
            ['Node', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg'],
            ['React', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'],
            ['MongoDB', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg'],
            ['MUI', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg'],
            ['MySQL', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg'],
            ['SQLite', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg']
        ]);
        let skillList = document.getElementById('skill-list');
        for (const entry of skillMap) {
            skillList.appendChild(this.initSkillItem(entry[0], entry[1]));
        }
    }

    /**
     * @param {string} displayName
     * @param {string} imgSrc
     */
    initSkillItem(displayName, imgSrc) {
        let pName = document.createElement('p');
        pName.className = 'text-center';
        pName.style = 'font-size: 100%; margin-top: 4px;';
        pName.innerHTML = displayName;
        let imgElem = document.createElement('img');
        imgElem.src = imgSrc;
        let skillTile = document.createElement('div');
        skillTile.className = 'text-center skills-tile';
        skillTile.appendChild(imgElem);
        skillTile.appendChild(pName);
        let spanElem = document.createElement('span');
        spanElem.appendChild(skillTile);
        let listItem = document.createElement('li');
        listItem.className = 'list-inline-item mx-3 skill-icon'
        listItem.appendChild(spanElem);
        return listItem;
    }
    
    // fadeInElem(opacity, elem) {
    //     let self = this;
    //     if (opacity < 1) {
    //         opacity += .01;
    //         setTimeout(function() {
    //             self.fadeInElem(opacity, elem)
    //         }, 0.1); // 0.1 Milliseconds
    //     }
    //     elem.style.opacity = opacity;
    // }
    
    // blinkerElem(amount, elem) {
    //     let self = this;
    //     if (amount > 0) {
    //         setTimeout(function() {
    //             elem.style.color = "lime";
    //             setTimeout(function() {
    //                 elem.style.color = "";
    //                 self.blinkerElem(amount-1, elem);
    //             }, 200);
    //         }, 200);
    //     }
    //     elem.style.color = "";
    // }

    // scrollToElemAndBlink(idToScrollTo, idToBlink, amount) {
    //     this.scrollToElem(idToScrollTo);
    //     this.blinkerElem(amount, document.getElementById(idToBlink));
    // }
}

export default App;
