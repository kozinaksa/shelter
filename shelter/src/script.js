import Header from './pages/main/header';
import Not_only from './pages/main/not-only';
import About from './pages/main/about';
import Pets from './pages/main/our-friends';

const main = document.getElementById('main-page');
main.append(Header);
main.append(Not_only);
main.append(About);
main.append(Pets);