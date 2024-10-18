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
import { Filter } from '../filter/Filter';
import { filterSelect } from '../filter/filterSelect';
import { filterActions } from '../filter/filter-slice';
import { useLocation, useNavigate } from 'react-router-dom';

export const Cards = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isLoading = useSelector(isLoadingSelector);
  const filter = useSelector(filterSelect);
  const cards = useSelector(cardsSelector);

  const currentApiUrl = `https://rickandmortyapi.com/api/character${location.search}`;

  const [info, setInfo] = useState<Info | null>(null);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchCards(currentApiUrl)).then((res) => {
      console.log(res);

      if (typeof res.payload !== 'string' && res.payload) {
        setInfo(res.payload.info);
      }
    });
  }, [currentApiUrl, dispatch]);

  const changeFilterHandler = (name: string) => {
    dispatch(filterActions.setFilterName({ name }));
    const params = new URLSearchParams(location.search);
    params.set('name', name); // Замените 'filter' на нужный вам параметр

    navigate(`?${params.toString()}`);
  };

  const nextPageHandler = () => {
    if (info?.next) {
      navigate(`${info?.next.slice(32)}`);
    }
  };

  const prevPageHandler = () => {
    if (info?.prev) {
      navigate(`${info?.prev.slice(32)}`);
    }
  };

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
