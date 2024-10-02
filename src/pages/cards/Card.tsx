import styled from 'styled-components';

export type CardState = {
  name: string;
  species: string;
  location: string;
  stateBorn: string;
  avatar: string;
};

export const Card = ({ name, species, location, stateBorn, avatar }: CardState) => {
  return (
    <CardContainer>
      <Photo src={avatar} />
      <InfoContainer>
        <Title>{name}</Title>
        <Class> {species} </Class>
        <Location> {location} </Location>
        <Date> {stateBorn} </Date>
      </InfoContainer>
    </CardContainer>
  );
};

export default Card;

const CardContainer = styled.div`
  display: flex;
`;

const InfoContainer = styled.div``;
const Title = styled.h2``;

const Class = styled.p``;

const Location = styled.p``;

const Date = styled.p``;

const Photo = styled.img`
  width: 50px;
`;
