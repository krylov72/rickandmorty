import styled from 'styled-components';
import logo from '../../assets/pngwing.com.png';

export const Header = () => {
  return (
    <HeaderDiv>
      <Logo src={logo} alt="R&M" />
      <Title>Rick & Morty</Title>
    </HeaderDiv>
  );
};

const HeaderDiv = styled.header`
  display: grid;
  grid-template-columns: 50px auto;
  margin-top: 15px;
  padding-bottom: 15px;
  border-bottom: 1px solid #fdf0d5;
`;

const Title = styled.h1`
  font-size: 30px;
  color: #780000;
  padding-top: 15px;
`;

const Logo = styled.img`
  width: 40px;
  height: auto;
  padding-left: 5px;
`;
