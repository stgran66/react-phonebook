import styled from 'styled-components';
import { Form, Field, ErrorMessage } from 'formik';

export const StyledForm = styled(Form)`
  margin-top: 26px;
  display: flex;
  flex-direction: column;
  gap: 25px;
  width: 310px;
  align-items: flex-end;
`;

export const ContactFormLabel = styled.label`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const ContactFormInput = styled(Field)`
  color: #f0a00c;
  font-family: cursive;
  border: 1px solid black;
  padding-top: 2px;
  padding-bottom: 2px;
  padding-left: 8px;
  padding-right: 8px;
  outline: none;
  border-radius: 6px;

  :hover,
  :focus {
    border-color: #f0a00c;
  }
`;

export const StyledErrorMsg = styled(ErrorMessage)`
  margin: 0;
  font-size: 12px;
  color: #ac3235;
  align-self: flex-start;
`;
