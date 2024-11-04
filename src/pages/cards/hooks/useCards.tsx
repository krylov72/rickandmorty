import { useEffect, useState } from 'react';
import { useAppDispatch } from '../../../common/useAppDispatch';
import { fetchCards } from '../cards-reducer';
import { filterActions } from '../../filter/filter-slice';
import { useLocation, useNavigate } from 'react-router-dom';
import { Info } from '../../../api/cardsApi';

export const useCards = () => {
  const dispatch = useAppDispatch();
  const location = useLocation();
  const currentApiUrl = `https://rickandmortyapi.com/api/character${location.search}`;
  const [info, setInfo] = useState<Info | null>(null);
  const navigate = useNavigate();

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
    params.delete('page');
    params.set('name', name);
    if (name === '') {
      params.delete('name');
    }

    navigate(`?${params}`);
  };

  const nextPageHandler = () => {
    if (info?.next) {
      const url = new URL(info.next);
      const page = url.searchParams.get('page');
      const params = new URLSearchParams(location.search);
      if (page) params.set('page', page);

      navigate(`?${params.toString()}`);
    }
  };

  const prevPageHandler = () => {
    if (info?.prev) {
      const url = new URL(info.prev);
      const page = url.searchParams.get('page');
      const params = new URLSearchParams(location.search);
      if (page) params.set('page', page);
      navigate(`?${params.toString()}`);
    }
  };
  return {
    changeFilterHandler,
    prevPageHandler,
    nextPageHandler,
    info,
  };
};
