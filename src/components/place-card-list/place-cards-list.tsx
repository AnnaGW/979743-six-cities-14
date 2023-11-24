import { TOffers } from '../../types/offers';
import PlaceCard from '../place-card/place-card';

type ClassListProps = {
  containerClassList: string;
  itemClassList: string;
  cardClassList: string;
};

type PlaceCardsListProps = {
  offers: TOffers;
  // setState(id: number | null): React.SetStateAction<number | null>;
  setState(id: number | null): void | null;
  classList: ClassListProps;

};

function PlaceCardsList({offers, setState, classList}: PlaceCardsListProps): JSX.Element {
  const {containerClassList, itemClassList, cardClassList} = classList;

  return (
    <div className={containerClassList}>
      {offers.map((offer) => (
        <article
          key = {offer.id}
          className={itemClassList}
          onMouseOver = {() => setState(offer.id)}
          onMouseOut = {() => setState(null)}
        >
          <PlaceCard offer = {offer} cardClassList = {cardClassList}/>
        </article>
      ))}
    </div>
  );
}

export default PlaceCardsList;
