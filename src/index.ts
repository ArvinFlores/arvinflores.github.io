import 'flexboxgrid/css/flexboxgrid.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './styles/base.css';
import './styles/util.css';
import './styles/button.css';
import './styles/navbar.css';
import './styles/hero.css';
import './styles/about.css';

import { initNavbar } from './scripts/navbar';

initNavbar(document.getElementById('navbar'));
