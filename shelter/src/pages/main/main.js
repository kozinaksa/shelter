import '../../styles/_defaultStyle.scss';

import header from './header';
import notOnly from './not-only';
import about from './about';
import ourFriends from './our-friends';
import help from './help';
import inAddition from './in-addition';
import footer from './footer';

import './self-assessment';

const main = document.getElementById('main-page');
main.append(header);
main.append(notOnly);
main.append(about);
main.append(ourFriends);
main.append(help);
main.append(inAddition);
main.append(footer);