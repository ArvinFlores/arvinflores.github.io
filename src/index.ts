import 'flexboxgrid/css/flexboxgrid.min.css';
import './styles/base.css';
import './styles/util.css';
import './styles/button.css';
import './styles/carousel.css';
import './styles/navbar.css';
import './styles/hero.css';
import './styles/about.css';
import './styles/review.css';
// post.css must be imported AFTER ALL other stylesheets
import './styles/post.css';

import { initNavbar } from './scripts/navbar';
import { initFooter } from './scripts/footer';
import { initFontAwesome } from './scripts/font-awesome';
import { initDesktopStyles } from './scripts/desktop-styles';
import { createCarousel } from './scripts/lib/carousel';

initNavbar(document.getElementById('navbar'));
initFooter(document.getElementById('footer'));
initFontAwesome();
initDesktopStyles();
createCarousel(document.querySelector('.carousel') as HTMLElement).init();
