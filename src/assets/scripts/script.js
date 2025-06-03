class Menu {
  constructor(menuIconSelector, navbarSelector) {
    this.menuIcon = document.querySelector(menuIconSelector);
    this.navbar = document.querySelector(navbarSelector);
    this.init();
    this.footer();
  }
  init() {
    this.menuIcon.onclick = () => {
      this.menuIcon.classList.toggle('bx-x');
      this.navbar.classList.toggle('active');
    };
  }

  closeMenu() {
    this.menuIcon.classList.remove('bx-x');
    this.navbar.classList.remove('active');
  }

  footer() {
    const currentYear = new Date().getFullYear();
    const footer = document.querySelector('.footer-text p');
    footer.innerHTML = `Copyright &copy; ${currentYear} by @kinnitchi | All Rights Reserved.`;
  }
}

class Navigation {
  constructor(sectionSelector, navLinkSelector, headerSelector, menuInstance) {
    this.sections = document.querySelectorAll(sectionSelector);
    this.navLinks = document.querySelectorAll(navLinkSelector);
    this.header = document.querySelector(headerSelector);
    this.menu = menuInstance;
    this.init();
  }
  init() {
    window.addEventListener('scroll', () => this.onScroll());
  }
  onScroll() {
    this.sections.forEach(sec => {
      let top = window.scrollY;
      let offset = sec.offsetTop - 150;
      let height = sec.offsetHeight;
      let id = sec.getAttribute('id');
      if (top >= offset && top < offset + height) {
        this.navLinks.forEach(links => {
          links.classList.remove('active');
        });
        let activeLink = document.querySelector('header nav a[href*=' + id + ']');
        if (activeLink) activeLink.classList.add('active');
      }
    });
    this.header.classList.toggle('sticky', window.scrollY > 100);
    this.menu.closeMenu();
  }
}

class SwiperSlider {
  constructor(selector, options) {
    this.swiper = new Swiper(selector, options);
  }
}

class DarkMode {
  constructor(iconSelector, bodyClass) {
    this.icon = document.querySelector(iconSelector);
    this.bodyClass = bodyClass;
    this.init();
  }
  init() {
    this.icon.onclick = () => {
      this.icon.classList.toggle('bx-sun');
      document.body.classList.toggle(this.bodyClass);
    };
  }
}

class Reveal {
  constructor() {
    ScrollReveal({
      // reset: true,
      distance: '100px',
      duration: 2000,
      delay: 100
    });
    ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
    ScrollReveal().reveal('.home-img img, .services-container, .portfolio-box, .testimonial-wrapper, .contact form', { origin: 'bottom' });
    ScrollReveal().reveal('.home-content h1, .about-img img', { origin: 'left' });
    ScrollReveal().reveal('.home-content h3, .home-content p, .about-content', { origin: 'right' });
  }
}

// Inicialização dos componentes
const menu = new Menu('#menu-icon', '.navbar');
const navigation = new Navigation('section', 'header nav a', '.header', menu);
const swiperSlider = new SwiperSlider('.mySwiper', {
  slidesPerView: 1,
  spaceBetween: 50,
  loop: true,
  grabCursor: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
const darkMode = new DarkMode('#darkMode-icon', 'dark-mode');
const reveal = new Reveal();