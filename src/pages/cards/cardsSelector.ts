import { RootState } from '../../app/store';

export const cardsSelector = (state: RootState) => state.cards;
export const isInitializedSelector = (state: RootState) => state.isInitialized
export const isLoadingSelector = (state: RootState) => state.loading
