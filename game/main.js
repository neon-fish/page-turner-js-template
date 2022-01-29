import { MCGE } from 'mcge';
import '../node_modules/mcge/dist/styles.css';
import { pages } from './pages';
import './styles.css';

// The entry point into the game from index.html

const game = new MCGE({
  settings: {
    containerEl: "#mcge",
    content: {
      height: "80%",
      top: "10%",
    },
    images: {
      holdBgImage: true,
    },
  },
  pages: pages,
});