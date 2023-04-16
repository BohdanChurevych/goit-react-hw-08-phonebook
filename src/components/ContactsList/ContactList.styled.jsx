import styled from 'styled-components';
const Span = styled.span`
  font-size: 20px;
  color: black;
`;
const DeleteItem = styled.button`
  background-color: green;
  color: white;
  padding: 6px 14px;
  border-radius: 4px;
  border: none;
  font-size: 16px;
  cursor: pointer;
  :hover,
  :focus {
    background-color: #62e815;
    color: white;
  }
`;
const List = styled.ul`
  list-style: none;
  padding: 0;
`;
const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  border: 1px solid black;
  padding: 10px;

  margin-bottom: 8px;
`;
export { Span, DeleteItem, List, ListItem };