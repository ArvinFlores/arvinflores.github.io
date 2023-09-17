import 'flexboxgrid/css/flexboxgrid.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
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
import { createCarousel } from './scripts/lib/carousel';

initNavbar(document.getElementById('navbar'));
initFooter(document.getElementById('footer'));
createCarousel(document.querySelector('.carousel') as HTMLElement).init();
