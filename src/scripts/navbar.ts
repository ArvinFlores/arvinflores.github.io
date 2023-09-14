export function initNavbar (navbar: HTMLElement | null): void {
  if (!navbar) return;

  const height = getComputedStyle(navbar).height;
  const nextEl = navbar.nextElementSibling;
  const menu = navbar.querySelector('.navbar__menu');
  const menuBtn = document.getElementById('navbar__menu-btn');
  const menuCloseBtn = document.getElementById('navbar__menu-close-btn');

  if (nextEl) {
    (nextEl as HTMLElement).style.marginTop = height;
  }

  if (menu && menuBtn && menuCloseBtn) {
    menuBtn.addEventListener('click', () => {
      menu.classList.add('navbar__menu--expanded');
      menuBtn.setAttribute('disabled', 'true');
      menuBtn.setAttribute('aria-expanded', 'true');
    });

    menuCloseBtn.addEventListener('click', () => {
      menu.classList.remove('navbar__menu--expanded');
      menuBtn.removeAttribute('disabled');
      menuBtn.setAttribute('aria-expanded', 'false');
    });
  }
}