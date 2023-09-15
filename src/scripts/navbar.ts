function openMobileNav (menu: HTMLElement, btn: HTMLElement): void {
  menu.classList.add('navbar__menu--expanded');
  btn.setAttribute('disabled', 'true');
  btn.setAttribute('aria-expanded', 'true');
}

function closeMobileNav (menu: HTMLElement, btn: HTMLElement): void {
  menu.classList.remove('navbar__menu--expanded');
  btn.removeAttribute('disabled');
  btn.setAttribute('aria-expanded', 'false');
}

export function initNavbar (navbar: HTMLElement | null): void {
  if (!navbar) return;

  const height = getComputedStyle(navbar).height;
  const nextEl = navbar.nextElementSibling;
  const menu = navbar.querySelector<HTMLElement>('.navbar__menu');
  const menuBtn = document.getElementById('navbar__menu-btn');
  const menuCloseBtn = document.getElementById('navbar__menu-close-btn');

  if (nextEl) {
    (nextEl as HTMLElement).style.marginTop = height;
  }

  if (menu && menuBtn && menuCloseBtn) {
    menuBtn.addEventListener('click', () => {
      openMobileNav(menu, menuBtn);
    });

    menuCloseBtn.addEventListener('click', () => {
      closeMobileNav(menu, menuBtn);
    });
  }

  navbar.querySelectorAll('.navbar__link')?.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();

      const isEl = e.target instanceof Element;
      const href = (isEl && e.target.getAttribute('href')) || '';
      const targetEl = document.querySelector<HTMLElement>(href);

      if (
        !isEl ||
        !targetEl ||
        !href ||
        !href.startsWith('#') ||
        href.length < 2
      ) return;

      window.scrollTo({
        top: targetEl.offsetTop - navbar.offsetHeight,
        behavior: 'smooth'
      });

      if (menu && menuBtn) closeMobileNav(menu, menuBtn);
    });
  });
}
