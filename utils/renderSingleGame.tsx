import Counting from '../components/MathGames/Counting';
import { SingleGames } from '../types';

export const renderSingleGame = (game: SingleGames) => {
  switch (game) {
    case SingleGames.counting:
      return <Counting />;
    default:
      break;
  }
};
