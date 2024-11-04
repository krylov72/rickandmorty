import styled from 'styled-components';
import Card from './Card';
import { useEffect, useState } from 'react';
import { useAppDispatch } from '../../common/useAppDispatch';
import { fetchCards } from './cards-reducer';
import { useSelector } from 'react-redux';
import { cardsSelector, isLoadingSelector } from './cardsSelector';
import { Info } from '../../api/cardsApi';
import { Loader } from '../../common/Loader';
import { ParticlesSX } from '../../common/Particles';
import { Button, Filter } from '../filter/Filter';
import { filterSelect } from '../filter/filterSelect';
import { filterActions } from '../filter/filter-slice';
import { useLocation, useNavigate } from 'react-router-dom';
import { PATHS } from '../../common/PATH';
import { useCards } from './hooks/useCards';

export const Cards = () => {
  const isLoading = useSelector(isLoadingSelector);
  const filter = useSelector(filterSelect);
  const cards = useSelector(cardsSelector);

  const { changeFilterHandler, info, nextPageHandler, prevPageHandler } = useCards();

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <ParticlesSX />
      <CardsContainer>
        <CardsGrid>
          {cards.map((c) => {
            return (
              <Card
                key={c.id}
                status={c.status}
                location={c.location.name}
                name={c.name}
                species={c.species}
                gender={c.gender}
                avatar={c.image}
              />
            );
          })}
        </CardsGrid>
        <Filter name={filter} onChangeFilter={changeFilterHandler} />
      </CardsContainer>

      <Button onClick={prevPageHandler} disabled={!info?.prev}>
        PREV
      </Button>
      <Button onClick={nextPageHandler} disabled={!info?.next}>
        NEXT
      </Button>
    </>
  );
};

const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr minmax(200px, 400px);
  gap: 20px;
  height: auto;
  min-height: 100vh;
`;

const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(200px, 900px)); /* Адаптивная сетка для карточек */
  gap: 5px;
  height: fit-content;
`;
