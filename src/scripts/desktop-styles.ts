import { isMobile } from 'src/scripts/util/is-mobile';

export function initDesktopStyles () {
  if (!isMobile()) {
    document.querySelectorAll('.btn--primary').forEach(btn => {
      btn.classList.add('btn--primary-hover');
    });

    document.querySelectorAll('.navbar .util-desktop-only .navbar__link').forEach(link => {
      link.classList.add('navbar__link--hover');
    });
  }
}