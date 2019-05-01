const mobileMenuButton = document.querySelectorAll('.btn-mobile-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const mainMenuLink = document.querySelectorAll('.main-menu-link');
const main = document.querySelector('.main');

mobileMenuButton.forEach(function (item) {
    item.addEventListener('click', function() {
        if (mobileMenu.style.display === 'block') {
            mobileMenu.style.display = 'none';
            document.querySelector('body').style.overflowY = 'auto'
        } else {
            mobileMenu.style.display = 'block';
            document.querySelector('body').style.overflowY = 'hidden'
        }
    });
});

if (main) {
    document.querySelectorAll('.not-main-page').forEach(function (item) {
        item.classList.remove('not-main-page');
        item.classList.add('main-page')
    })
}

mainMenuLink.forEach(function (item) {
   if (`http://foji.adigezalov.ru/${item.getAttribute('href')}` === window.location.href) {
       item.classList.add('active')
   }
});

document.querySelector('.btn-mobile-menu-close').addEventListener('click', function () {
    mobileMenu.style.display = 'none';
    document.querySelector('body').style.overflowY = 'auto'
});

if (main) {
    window.onscroll = function () {
        let scrolled = window.pageYOffset || document.documentElement.scrollTop;
        if (scrolled > document.querySelector('.slider').offsetHeight - document.querySelector('.header').offsetHeight) {
            document.querySelectorAll('.main-page').forEach(function (item) {
                item.classList.remove('main-page');
                item.classList.add('not-main-page')
            })
        } else {
            document.querySelectorAll('.not-main-page').forEach(function (item) {
                item.classList.remove('not-main-page');
                item.classList.add('main-page')
            })
        }
    };
}

document.querySelectorAll('.btn-filter-projects').forEach(function (item) {
    item.addEventListener('click', function() {
        if (document.querySelector('.filter-form').style.display === 'block') {
            document.querySelector('.filter-form').style.display = 'none';
        } else {
            document.querySelector('.filter-form').style.display = 'block'
        }
    });
});

document.querySelector('.btn-filter-projects-close').addEventListener('click', function () {
    document.querySelector('.filter-form').style.display = 'none';
});