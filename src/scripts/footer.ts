export function initFooter (footer: HTMLElement | null) {
  if (!footer) return;
  footer.textContent = footer.textContent?.replace('{year}', new Date().getFullYear().toString()) || '';
}
