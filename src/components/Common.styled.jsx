import styled from 'styled-components';

export const Container = styled.main`
  position: relative;
  margin-left: auto;
  margin-right: auto;
  width: 1280px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  padding-top: 45px;
  padding-bottom: 50px;
  background-color: white;
  background-image: repeating-linear-gradient(white 0px, white 24px, teal 25px);
  box-shadow: 0px 0px 5px 0px #888;

  ::before {
    content: '';
    width: 2px;
    height: 100%;
    position: absolute;
    top: 0;
    left: 40px;
    background-color: rgba(255, 0, 0, 0.6);
  }
`;

export const Content = styled.div`
  padding-top: 6px;
  padding-left: 56px;
  padding-right: 16px;
  line-height: 25px;
  font-family: 'Dancing Script', cursive;
  font-size: 19px;
  letter-spacing: 1px;
  word-spacing: 5px;
`;

export const MainHeading = styled.h1`
  font-size: 32px;
  text-transform: uppercase;
  margin-bottom: 28px;
`;

export const Button = styled.button`
  font-family: 'Dancing Script', cursive;
  width: 100px;
  background-color: #f4bc56;
  color: #010101;
  border: 1px solid black;
  padding-top: 2px;
  padding-bottom: 2px;

  outline: none;
  border-radius: 6px;

  :hover,
  :focus {
    border-color: #f0a00c;
    background-color: #f0a00c;
    color: #ffffff;
  }
`;

export const Input = styled.input`
  color: #f0a00c;
  font-family: 'Dancing Script', cursive;
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
