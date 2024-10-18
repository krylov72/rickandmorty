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
    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    const id = setTimeout(() => {
      onChangeFilter(e.currentTarget.value);
    }, 2000);

    setTimeoutId(id);
  };

  return (
    <FilterContainer>
      <Name htmlFor="">
        Find by name
        <ByName placeholder="Введите фильтр" onChange={onInputChange}></ByName>
      </Name>
    </FilterContainer>
  );
};

const FilterContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const Name = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  font-size: 25px;
`;

const ByName = styled.input`
  max-width: 300px;
  width: 100%;
  height: 30px;
`;
