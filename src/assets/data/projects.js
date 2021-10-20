import { v4 as uuidv4 } from 'uuid';
import ProjectImg from '../images/projectImg.png';
import UTrackerImg from '../images/utracker.jpg';
import GreenCtgImg from '../images/greenctg.jpg';
import CoinTrackerImg from '../images/cointracker.jpg';
import CavinImg from '../images/cavinimg.jpg';

const projects = [
  {
    id: uuidv4(),
    name: 'Chat Web App',
    desc:
      'A web application where group of people can chat with each other privately',
    img: UTrackerImg,
  },
  {
    id: uuidv4(),
    name: 'Snake Game',
    // eslint-disable-next-line prettier/prettier
    desc:
      'It is snake game you can play this game and start the game.',
    img: GreenCtgImg,
  },
  {
    id: uuidv4(),
    name: 'Portfolio Site',
    desc:
      'This is a protfolio site technology used in this site is HTML+CSS+JS',
    img: CoinTrackerImg,
  },
  {
    id: uuidv4(),
    name: "Cavin's Portfolio",
    desc:
      'A portfolio for Cavin jr. A artist from New york city. The portfolio is made using ReactJs and GatsbyJs.',
    img: CavinImg,
  },
  {
    id: uuidv4(),
    name: 'Tracking Soft',
    desc:
      'A tracking website that will show the performance of the website. Also you will get some useful advice to improve the performance.',
    img: ProjectImg,
  },
];

export default projects;
