import {createReducer} from '@reduxjs/toolkit';
import { cityChange, sortingChange, loadedOffers, favoritesOffers } from './action';
import { DEFAULT_CITY, DEFAULT_SORTING_TYPE } from '../const';
import { OfferInfoProps } from '../pages/offer/offer';
import { selecFavorites } from '../util';

type TInitialState = {
  city: string;
  offers: OfferInfoProps[];
  byCityOffers: OfferInfoProps[];
  favoritesOffers: OfferInfoProps[];
  sorting: string;
};
const initialState: TInitialState = {
  city: DEFAULT_CITY,
  // список офферов для всех городов - так получаем с сервера
  offers: [],
  byCityOffers: [],
  favoritesOffers: [],
  sorting: DEFAULT_SORTING_TYPE,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(loadedOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(favoritesOffers, (state, action) => {
      state.favoritesOffers = selecFavorites(action.payload); // получает ВСЕ офферы
    })
    .addCase(cityChange, (state, action) => {
      state.city = action.payload;
      // выборку офферов делает компонент MainPages
      // или правильнее это сделать здесь?
    })
    .addCase(sortingChange, (state, action) => {
      state.sorting = action.payload;
    });
});

export {reducer};
