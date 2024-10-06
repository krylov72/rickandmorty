import styled from 'styled-components';

export type CardState = {
  name: string;
  species: string;
  location: string;
  stateBorn: string;
  avatar: string;
  status: string;
};

export const Card = ({ name, species, location, stateBorn, avatar, status }: CardState) => {
  return (
    <CardContainer>
      <Photo src={avatar} />
      <InfoContainer>
        <Title>{name}</Title>
        <Class> {`${status} - ${species}`} </Class>
        <Location> {location} </Location>
        <Date> {stateBorn} </Date>
      </InfoContainer>
    </CardContainer>
  );
};

export default Card;

const CardContainer = styled.div`
  display: flex;
  text-align: left;
  gap: 20px;
  background-color: var(--background-color);
  box-shadow: 0px var(--card-box-shadow-1-y) var(--card-box-shadow-1-blur) var(--card-box-shadow-1),
    0px var(--card-box-shadow-2-y) var(--card-box-shadow-2-blur) var(--card-box-shadow-2),
    0 0 0 1px var(--card-border-color);
  padding: 56px 16px 16px 16px;
  border-radius: 15px;
  cursor: pointer;
  position: relative;
  transition: box-shadow 0.25s;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 15px;
    background-color: var(--card-background-color);
  }
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
const Title = styled.h2``;

const Class = styled.p``;

const Location = styled.p``;

const Date = styled.p``;

const Photo = styled.img`
  width: 150px;
  object-fit: contain;
`;
