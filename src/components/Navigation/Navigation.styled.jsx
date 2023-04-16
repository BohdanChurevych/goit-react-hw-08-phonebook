import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const LinkContainer = styled.div`
  display: flex;
  gap: 20px;
`;

const AppBarLink = styled(NavLink)`
  text-decoration: none;
  color: white;
  font-size: 20px;
  font-weight: 600;
  padding: 6px 8px;
  &.active {
    background-color: #1a47c4;
    color: white;
    border-radius: 10px;
  }
  :hover,
  :focus {
    background-color: #62e815;
    color: white;

    border-radius: 10px;
  }
`;
export { AppBarLink, LinkContainer };