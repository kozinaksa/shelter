import header from './pages/main/header';
import notOnly from './pages/main/not-only';
import about from './pages/main/about';
import ourFriends from './pages/main/our-friends';
import help from './pages/main/help';
import inAddition from './pages/main/in-addition';

const main = document.getElementById('main-page');
main.append(header);
main.append(notOnly);
main.append(about);
main.append(ourFriends);
main.append(help);
main.append(inAddition);