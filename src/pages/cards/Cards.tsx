import styled from 'styled-components';
import logo from '../assets/pngwing.com.png';
import Card from './Card';
import { useEffect, useState } from 'react';
import { useAppDispatch } from '../../common/useAppDispatch';
import { fetchCards } from './cards-reducer';
import { useSelector } from 'react-redux';
import { cardsSelector } from './cardsSelector';
import { Info } from '../../api/cardsApi';
import { RootState } from '../../app/store';
import { Loader } from '../../common/Loader';

export const Cards = () => {
  const isLoading = useSelector((state: RootState) => state.loading);
  const [currentApiUrl, setCurrentApiUrl] = useState<string>('https://rickandmortyapi.com/api/character/?page=1');
  const [info, setInfo] = useState<Info | null>(null);

  const nextPageHandler = () => {
    if (info?.next) {
      setCurrentApiUrl(info?.next);
    }
  };

  const prevPageHandler = () => {
    if (info?.prev) {
      setCurrentApiUrl(info?.prev);
    }
  };
  const dispatch = useAppDispatch();

  const cards = useSelector(cardsSelector);
  useEffect(() => {
    dispatch(fetchCards(currentApiUrl)).then((res) => {
      if (typeof res.payload !== 'string' && res.payload) {
        setInfo(res.payload.info);
      }
    });
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
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
      <button onClick={prevPageHandler} disabled={!info?.prev}>
        PREV
      </button>
      <button onClick={nextPageHandler} disabled={!info?.next}>
        NEXT
      </button>
    </>
  );
};

const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(200px, 1fr));
  gap: 10px;
`;
