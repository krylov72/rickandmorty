import { ChangeEvent, useEffect, useState } from 'react';
import styled from 'styled-components';

type Props = {
  name: string;
  onChangeFilter: (name: string) => void;
};

export const Filter = ({ name, onChangeFilter }: Props) => {
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null);

  useEffect(() => {
    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [timeoutId]);

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const id = setTimeout(() => {
      onChangeFilter(e.target.value);
    }, 1000);

    setTimeoutId(id);
  };

  const clearFilterHandler = () => {
    onChangeFilter('');
  };

  return (
    <FilterContainer>
      <Name htmlFor="filter">
        Find by name
        <ByName id="filter" placeholder="Input name" autoComplete="off" onChange={onInputChange}></ByName>
      </Name>
      <Button onClick={clearFilterHandler}>clear</Button>
    </FilterContainer>
  );
};

const FilterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;
const Name = styled.label`
  align-items: center;
  color: white;
  font-size: 25px;
`;

const ByName = styled.input`
  max-width: 300px;
  width: 100%;
  height: 30px;
  border-radius: 10px;
  outline: none;
  &::placeholder {
    text-transform: uppercase;
    font-size: 11px;
    text-align: center;
  }
  &:focus {
    box-shadow: rgba(255, 255, 255, 0.25) 0px 54px 55px, rgba(255, 255, 255, 0.12) 0px -12px 30px,
      rgba(255, 255, 255, 0.12) 0px 4px 6px;
  }
`;

const Button = styled.button`
  align-items: center;
  appearance: none;
  background-color: #fcfcfd;
  border-radius: 4px;
  border-width: 0;
  box-shadow: rgba(45, 35, 66, 0.4) 0 2px 4px, rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #d6d6e7 0 -3px 0 inset;
  box-sizing: border-box;
  color: #36395a;
  cursor: pointer;
  display: inline-flex;
  font-family: 'JetBrains Mono', monospace;
  height: 30px;
  justify-content: center;
  line-height: 1;
  list-style: none;
  overflow: hidden;
  padding-left: 16px;
  padding-right: 16px;
  position: relative;
  text-align: left;
  text-decoration: none;
  transition: box-shadow 0.15s, transform 0.15s;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  white-space: nowrap;
  will-change: box-shadow, transform;
  text-transform: uppercase;
  font-size: 18px;
  &:hover {
    box-shadow: rgba(45, 35, 66, 0.4) 0 4px 8px, rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #d6d6e7 0 -3px 0 inset;
    transform: translateY(-2px);
  }
  &:active {
    box-shadow: #d6d6e7 0 3px 7px inset;
    transform: translateY(2px);
  }
`;
