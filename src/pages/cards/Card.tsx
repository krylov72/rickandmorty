import styled from 'styled-components';

export type CardState = {
  name: string;
  species: string;
  gender: string;
  location: string;
  avatar: string;
  status: string;
};

export const Card = ({ name, species, gender, location, avatar, status }: CardState) => {
  return (
    <CardContainer>
      <Photo src={avatar} />
      <InfoContainer>
        <Title>{name}</Title>
        <Class>
          <Checker $alive={status === 'Alive' ? true : false}></Checker>
          {`${status} - ${species}`}
        </Class>
        <Gender>
          {' '}
          <b>Identify:</b> {gender}{' '}
        </Gender>
        <Location>
          <b>Last seen in: </b> <br></br>
          {location}
        </Location>
      </InfoContainer>
    </CardContainer>
  );
};

export default Card;

const CardContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 10px;
  text-align: left;
  background-color: white;
  margin: 15px;
  border-radius: 10px;
  padding: 10px;
  transition: all 0.5s ease-in-out;
  cursor: pointer;
  &:hover {
    box-shadow: -5px 5px 0px rgba(255, 255, 255, 1), -10px 10px 0px rgba(255, 255, 255, 0.7),
      -15px 15px 0px rgba(255, 255, 255, 0.4), -20px 20px 0px rgba(255, 255, 255, 0.1);

    &::after {
      content: 'OPEN';
      position: absolute;
      bottom: 20px;
      right: 20px;
      font-size: 16px;
      color: #000;
      opacity: 1; /* Устанавливаем полную непрозрачность при наведении */
      transition: opacity 0.5s ease-in-out; /* Плавный переход для появления */
    }
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 20px;
    right: 20px;
    opacity: 0; /* Начальная непрозрачность */
    transition: opacity 0.5s ease-in-out; /* Плавный переход для появления */
  }
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  align-items: center;
`;
const Title = styled.h2``;

const Class = styled.p`
  font-size: 20px;
  display: flex;
  align-items: center;
  gap: 5px;
`;

const Location = styled.p`
  font-size: 20px;
  text-align: center;
`;

const Gender = styled.p`
  font-size: 20px;
`;

const Photo = styled.img`
  margin: 0 auto;
  width: 150px;
  border-radius: 20px;
  object-fit: contain;
`;

const Checker = styled.div<{ $alive?: boolean }>`
  width: 10px;
  height: 10px;
  background-color: ${({ $alive }) => ($alive ? 'green' : 'red')};
  border-radius: 5px;
`;
