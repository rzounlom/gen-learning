import { Game, gamesScreens } from '../data/games';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface GameSlice {
  selectedGameList: Game[];
  selectedCard: Game | null;
}

const initialState: GameSlice = {
  selectedGameList: gamesScreens,
  selectedCard: null,
};

export const gameSlice = createSlice({
  name: 'games',
  initialState,
  reducers: {
    handleGameList: (state, action) => {
      state.selectedGameList = action.payload;
    },
    handleGameCard: (state, action) => {
      state.selectedCard = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { handleGameList, handleGameCard } = gameSlice.actions;

export default gameSlice.reducer;
