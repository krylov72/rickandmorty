import styled, { keyframes } from 'styled-components';
import Loader from '../../common/Loader';

export const LoadingScreen = () => {
  return (
    <>
      <Container>
        <Loader />
        <Logo>Rick & Morty API</Logo>
      </Container>
    </>
  );
};

const fadeIn = keyframes`
    0% {
    opacity: 0; 
    transform: scale(0.8); 
  }
  100% {
    opacity: 1; 
    transform: scale(1); 
  }
`;

const Container = styled.div`
  position: relative;
`;

const Logo = styled.h2`
  position: absolute;
  top: 30%;
  left: 30%;
  font-size: 150px;
  text-align: center;
  vertical-align: middle;
  transition: 5s all ease-in-out;
  opacity: 0;
  animation: ${fadeIn} 5s forwards;
`;
