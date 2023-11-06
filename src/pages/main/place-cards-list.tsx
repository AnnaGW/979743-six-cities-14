import { OfferInfoProps } from '../offer/offer';
import PlaceCard from './place-card';
// import { useState } from 'react';

type PlaceCardsListProps = {
  offers: OfferInfoProps[];
  setState(id: number): void;
};

function PlaceCardsList({offers, setState}: PlaceCardsListProps): JSX.Element {
  // const [state, setState] = useState(offers[0].id); // по идеее длжно быть что-то типа null
  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (
        <article
          key = {offer.id}
          className="cities__card place-card"
          onMouseOver = {() => setState(offer.id)}
        >
          <PlaceCard offer = {offer} />
        </article>
      ))}
    </div>
  );
}

export default PlaceCardsList;
