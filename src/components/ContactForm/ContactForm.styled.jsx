import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const FormContainer = styled.div`
  background-color: green;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 20px;
`;
const Text = styled.p`
  font-size: 20px;
  padding: 0;
  margin: 0;
  margin-bottom: 5px;
  margin-top: 20px;
  color: white;
`;
const InputForm = styled.input`
  height: 25px;
  width: 300px;
  border: 1px solid #1976d2;
  border-radius: 4px;
`;
const Submit = styled.button`
  margin-top: 20px;
  width: 120px;
  padding: 8px 12px;
  border-radius: 4px;
  border: 1px solid white;
  font-size: 16px;
  font-weight: 500;
  background-color: white;
  color: #62e815;
  cursor: pointer;
  :hover,
  :focus {
    background-color: #62e815;
    color: white;
  }
`;
const Title = styled.h2`
  font-size: 30px;
  border-radius: 4px;
  padding: 10px;
  color: #4e7d33;
  text-align: center;
`;
const Label = styled.label`
  background-color: #4e7d33;
  margin-left: auto;
  margin-right: auto;
`;
const FilterInput = styled.input`
  height: 25px;
  width: 300px;
  border: 1px solid #4e7d33;
  border-radius: 4px;
`;
const StyledLink = styled(NavLink)`
  font-size: 14px;
  color: #4e7d33;
`;
export {
  FormContainer,
  Form,
  Text,
  InputForm,
  Submit,
  Title,
  Label,
  FilterInput,
  StyledLink,
};