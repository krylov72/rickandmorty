import axios from 'axios';

export type Info = {
  count: number;
  pages: number;
  next: string | null;
  prev: string | null;
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

export type BaseResponse = {
  info: Info;
  results: Results[];
};

const instance = axios.create({
  baseURL: 'https://rickandmortyapi.com/api',
});

export const cardsApi = {
  getCharacter(url: string) {
    return instance.get<BaseResponse>(url);
  },
};
