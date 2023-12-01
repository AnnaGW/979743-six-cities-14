import { createAction } from '@reduxjs/toolkit';
import { TOffers } from '../types/offers';
import { AuthorizationStatus } from '../const';
import { TUserData } from '../types/user-data';
import { TOfferInfo } from '../types/offer-info';

export const offersLoading = createAction<boolean>('offersLoading'); // процесс загрузки

export const serverError = createAction<string | null>('serverError'); // ошибка в ответ сервера

export const loadedOffers = createAction<TOffers>('loadOffers'); // загружаем массив офферов, при старте

export const favoritesOffers = createAction<TOffers>('favoritesOffers');

export const cityChange = createAction<string>('main/cityChange'); // если вызвать с аргументом, то он подставится в поле payload.

export const offersListChange = createAction('main/offersListChange'); // нужен ли??

export const sortingChange = createAction<string>('main/sortingChange');

export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');

export const userInfo = createAction<TUserData>('user/info');

export const offerInfoLoading = createAction<TOfferInfo>('offer/info');
