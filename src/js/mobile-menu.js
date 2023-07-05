(() => {
  const refs = {
    openMenuBtn: document.querySelector('[data-menu-open]'),
    closeMenuBtn: document.querySelector('[data-menu-close]'),
    menu: document.querySelector('[data-menu]'),
    closeMenuLink: document.querySelectorAll('.header-mob-link'),
  };
  refs.openMenuBtn.addEventListener('click', toggleMenu);
  refs.closeMenuBtn.addEventListener('click', toggleMenu);
  refs.closeMenuLink.forEach(item =>
    item.addEventListener('click', toggleMenu)
  );
  function toggleMenu() {
    refs.menu.classList.toggle('is-hidden');
    document.body.classList.toggle('no-scroll');
  }
})();
