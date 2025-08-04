class MobileNavbar {
  constructor(mobileMenu, navList, navLinks) {
    this.mobileMenu = document.querySelector(mobileMenu);
    this.navList = document.querySelector(navList);
    this.navLinks = document.querySelectorAll(navLinks);
    this.activeClass = "active";

    this.handleClick = this.handleClick.bind(this);
    this.closeMenuOnLinkClick = this.closeMenuOnLinkClick.bind(this);
  }

  animateLinks() {
    this.navLinks.forEach((link, index) => {
      link.style.animation = link.style.animation
        ? ""
        : `navLinkFade 0.5s ease forwards ${index / 4 + 0.3}s`;
    });
  }

  handleClick() {
    this.navList.classList.toggle(this.activeClass);
    this.mobileMenu.classList.toggle(this.activeClass);
    document.body.classList.toggle("body-menu-open"); // 👈 aqui
    this.animateLinks();
  }

  closeMenuOnLinkClick() {
    this.navList.classList.remove(this.activeClass);
    this.mobileMenu.classList.remove(this.activeClass);
    document.body.classList.remove("body-menu-open"); // 👈 e aqui
    this.navLinks.forEach(link => (link.style.animation = ""));
  }

  addClickEvent() {
    this.mobileMenu.addEventListener("click", this.handleClick);

    // 🔧 Aqui adiciona o evento de fechar ao clicar em qualquer link
    this.navLinks.forEach(link => {
      link.addEventListener("click", this.closeMenuOnLinkClick);
    });
  }

  init() {
    if (this.mobileMenu && this.navList && this.navLinks.length) {
      this.addClickEvent();
    }
    return this;
  }
}

// ⛔ Aqui você usou ".nav-list li" (que são as <li>), CORRIJA para os links <a>:
const mobileNavbar = new MobileNavbar(
  ".mobile-menu",
  ".nav-list",
  ".nav-list li a" // <-- CORRETO: links, não li
);
mobileNavbar.init();
