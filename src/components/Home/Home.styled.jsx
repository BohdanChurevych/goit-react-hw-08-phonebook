import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 50px;
`;
const HomeLink = styled(NavLink)`
  margin-top: 30px;
  padding: 12px 16px;
  text-decoration: none;
  border-radius: 5px;
  color: white;
  background-color: green;
  :hover,
  :focus {
    background-color: #62e815;
    color: white;
  }
`;
const Title = styled.h2`
  border-radius: 4px;
  padding: 10px;

  color: #4e7d33;
  text-align: center;
`;
const Section = styled.section`
  background-color: ;
  padding: 50px;
  margin-top: 10px;
  border-radius: 6px;
`;

export { ButtonContainer, HomeLink, Section, Title };