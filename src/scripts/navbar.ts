export function initNavbar (navbar: HTMLElement | null): void {
  if (!navbar) return;

  const height = getComputedStyle(navbar).height;
  const nextEl = navbar.nextElementSibling;

  if (nextEl) {
    (nextEl as HTMLElement).style.marginTop = height;
  }
}
