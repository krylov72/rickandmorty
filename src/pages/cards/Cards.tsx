import styled from 'styled-components';
import logo from '../assets/pngwing.com.png';
import Card from './Card';
import { useEffect } from 'react';
import { useAppDispatch } from '../../common/useAppDispatch';
import { fetchCards } from './cards-reducer';
import { useSelector } from 'react-redux';
import { cardsSelector } from './cardsSelector';

export const Cards = () => {
  const dispatch = useAppDispatch();
  const cards = useSelector(cardsSelector);
  useEffect(() => {
    dispatch(fetchCards());
  });
  return (
    <CardsContainer>
      {cards.map((c) => {
        return (
          <Card
            key={c.id}
            status={c.status}
            location={c.location.name}
            name={c.name}
            species={c.species}
            stateBorn={c.origin.name}
            avatar={c.image}
          ></Card>
        );
      })}
    </CardsContainer>
  );
};

const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(200px, 1fr));
  gap: 10px;
`;
