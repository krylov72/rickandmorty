import { RootState } from '../../app/store';

export const cardsSelector = (state: RootState) => state.cards.cards;
export const isInitializedSelector = (state: RootState) => state.cards.isInitialized;
export const isLoadingSelector = (state: RootState) => state.cards.loading;
