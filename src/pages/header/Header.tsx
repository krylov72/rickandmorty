import styled from 'styled-components';
import logo from '../../assets/pngwing.com.png';

export const Header = () => {
  return (
    <HeaderDiv>
      <Logo src={logo} alt="R&M" />
      <Title>Rick | Morty</Title>
    </HeaderDiv>
  );
};

const HeaderDiv = styled.header`
  position: relative;
  background-color: white;
  display: grid;
  align-items: center;
  gap: 15px;
  grid-template-columns: repeat(2, 1fr);
  padding: 15px 0;
  border-bottom: 1px solid #fdf0d5;
  z-index: 999;
`;

const Title = styled.h1`
  position: relative;
  justify-self: start;
  font-size: 30px;
  text-transform: uppercase;
  color: black;

  &::after {
    content: '';
    width: 100%;
    height: 2px;
    position: absolute;
    bottom: 0;
    left: 0;
    background-color: #e74c3c; /* Основной цвет */
    border-radius: 10px; /* Скругление углов */
    animation: glow-animation 1s infinite; /* Анимация */
    box-shadow: 0 0 5px #e74c3c; /* Начальное свечение */

    @keyframes glow-animation {
      0%,
      100% {
        box-shadow: 0 0 5px #e74c3c, 0 0 20px #e74c3c, 0 0 30px #c0392b; /* Начальное и конечное состояние */
      }
      50% {
        box-shadow: 0 0 20px #e74c3c, 0 0 40px #c0392b, 0 0 60px #900c3f; /* Состояние на середине анимации */
      }
    }
  }
`;

const Logo = styled.img`
  justify-self: end;
  width: 50px;
  height: auto;
`;
