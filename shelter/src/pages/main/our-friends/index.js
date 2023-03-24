import htmlToElements from "../../../utils/htmlToElements";
import Pets from './our-friends.html';
import './our-friends.scss';

const pets = htmlToElements(Pets);

export default pets;