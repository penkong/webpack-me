import '../styles/image_viewer.css';
import big from '../assets/norbu.jpg';
import small from '../assets/200.jpg';
const image = document.createElement('img');
image.src = small;

document.body.appendChild(image);

const image2 = document.createElement('img');
image2.src = big;

document.body.appendChild(image2);