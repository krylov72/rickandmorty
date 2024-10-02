import axios from 'axios';

type Info = {
  count: number;
  pages: number;
  next: string;
  prev: null;
};

export type Results = {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: string[];
  url: string;
  created: string;
};

type BaseResponse = {
  info: Info;
  results: Results[];
};

const instance = axios.create({
  baseURL: 'https://rickandmortyapi.com/api',
});

export const cardsApi = {
  getCharacter() {
    return instance.get<BaseResponse>('/character');
  },
};
