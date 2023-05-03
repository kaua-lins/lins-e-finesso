class MobileNavBar {
    constructor(mobileMenu, navList, navLinks) {
     this.mobileMenu = document.querySelector(mobileMenu)
     this.navList = document.querySelector(navList)
     this.navLinks = document.querySelectorAll(navLinks)
     this.activeClass = 'active';
     
     this.handleClick = this.handleClick.bind(this);
    }

    animateLinks() {
        this.navLinks.forEach((link, index) => {
            link.style.animation
                ? (link.style.animation = '')
                : (link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`);
        })
    }

    handleClick() {
        this.navList.classList.toggle(this.activeClass)
        this.mobileMenu.classList.toggle(this.activeClass)
        this.animateLinks();
    }

    addClickEvent() {
        this.mobileMenu.addEventListener('click', this.handleClick);
    }
    
    init() {
        if (this.mobileMenu) {
            this.addClickEvent();
        }

        return this;
    }
}

const mobileNavbar = new MobileNavBar (
    '.mobile-menu',
    '.nav-list',
    '.nav-list li',
);

mobileNavbar.init();

/* Botão para aparecer e desaparecer as informações dos prod */

/* const produtoBtn = document.querySelector('.produto-button')
const produtoInfo = document.querySelector('.produto-dropdown')

produtoBtn.forEach(button => {
    button.addEventListener('click', function(event) {

        if (produtoInfo.style.display === 'none') {
            produtoInfo.style.displat = 'block';
        } else {
            produtoInfo.style.display = 'none'
        }
    });
}); */

function mostrarLista(id) {
  const lista = document.querySelector(`#${id}`);
  if (lista.style.display === 'none') {
    lista.style.display = 'block';
  } else {
    lista.style.display = 'none';
  }
}

mostrarLista(id);