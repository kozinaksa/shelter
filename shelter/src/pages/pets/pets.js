import '../../styles/_defaultStyle.scss';

import header from "./header";
import ourFriends from './our-friends';
import footer from '../main/footer'

import '../main/self-assessment';

const ourPets = document.getElementById("pets-page");
ourPets.append(header);
ourPets.append(ourFriends);
ourPets.append(footer);