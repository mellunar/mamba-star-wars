import Home from './routes/Home.html';
import History from './routes/History.html';
import Character from './routes/Character.html';

export default {
  '/': Home,
  '/history': History,
  '/character': Character,
  '/character/:id': Character,
};
