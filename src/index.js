'use strict';
import { renderMenuPage } from './menu';
import { renderContactsPage } from './contacts';

(function() {
    const displayController = (() => {
        const content = document.querySelector('.content');

        return {
            // Render the nav bar
            renderNav: () => {
                // Nav container
                let navDiv = document.createElement('div');
                navDiv.classList.add('nav');

                // Home nav link
                let homeDiv = document.createElement('div');
                homeDiv.classList.add('home-link');
                let homeBtn = document.createElement('button');
                homeBtn.innerHTML = 'Home';

                // Menu nav link
                let menuDiv = document.createElement('div');
                menuDiv.classList.add('menu-link');
                let menuBtn = document.createElement('button');
                menuBtn.innerHTML = 'Menu';

                // Contact Us nav link
                let contactDiv = document.createElement('div');
                contactDiv.classList.add('contact-link');
                let contactBtn = document.createElement('button');
                contactBtn.innerHTML = 'Contact Us';
                
                // Append buttons to divs
                homeDiv.appendChild(homeBtn);
                menuDiv.appendChild(menuBtn);
                contactDiv.appendChild(contactBtn);
            
                // Append divs to container
                navDiv.appendChild(homeDiv);
                navDiv.appendChild(menuDiv);
                navDiv.appendChild(contactDiv);

                // Append navbar to content container
                content.appendChild(navDiv);
            },
            // Render the home page
            renderHomePage: () => {
                document.title = 'Luigi\'s Italian Restaurant';
                // Clear the content container
                if(content.childElementCount >= 2) { 
                    content.removeChild(content.lastChild);
                }

                // Home page container
                let homeDiv = document.createElement('div');
                homeDiv.classList.add('home-container');

                // Banner
                let bannerDiv = document.createElement('div');
                bannerDiv.classList.add('banner');
                
                let bannerImg = document.createElement('img');
                bannerImg.setAttribute('src', '../img/Italian-flag.jpg');
                bannerImg.setAttribute('alt', 'Picture of the Italian flag');

                let headlineDiv = document.createElement('div');
                headlineDiv.classList.add('headline');
                headlineDiv.innerHTML = '~ Luigi\'s Italian Restaurant ~';

                let blurbDiv = document.createElement('div');
                blurbDiv.classList.add('blurb');

                let blurbP = document.createElement('p');
                blurbP.classList.add('blurb-text');
                blurbP.innerHTML = 'We have the best pizza, calzones, meatballs, and pasta within a 30 yard radius, and we are one of <em>the</em> Italian restaurants in town! We have been in business since 1932, and offer an authentic Italian experience. Come on in and make yourself at home! Ciao! ';

                bannerDiv.appendChild(bannerImg);
                blurbDiv.appendChild(blurbP);

                homeDiv.appendChild(bannerDiv);
                homeDiv.appendChild(headlineDiv);
                homeDiv.appendChild(blurbDiv);

                content.appendChild(homeDiv)
                
            },
        }
    })();

    displayController.renderNav();
    displayController.renderHomePage();

    // Nav Event Listeners
    let homeBtn = document.querySelector('.home-link button');
    let menuBtn = document.querySelector('.menu-link button');
    let contactBtn = document.querySelector('.contact-link button');

    homeBtn.addEventListener('click', displayController.renderHomePage);
    menuBtn.addEventListener('click', renderMenuPage);
    contactBtn.addEventListener('click', renderContactsPage);
})();
