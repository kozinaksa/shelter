import '../../styles/_defaultStyle.scss';

import header from "./header";
import ourFriends from './our-friends';

const ourPets = document.getElementById("pets-page");
ourPets.append(header);
ourPets.append(ourFriends);