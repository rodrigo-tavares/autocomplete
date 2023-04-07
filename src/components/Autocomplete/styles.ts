import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 60%;
  padding: 0px 0px 40px;
  flex-direction: column;
`;

export const Input = styled.input`
  padding: 1em 0.4em;
  border: 1px solid #eee;
  max-width: 100%;
  outline: none;
  cursor: pointer;
  z-index: 1;
`;

export const OptionsList = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1em 0.4em 0.4em;
  margin-top: -10px;
  background: #ddd;
  width: 100%;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
`;

export const OptionsItem = styled.div`
  padding: 1rem;
  font-weight: 400;
  border-radius: 10px;

  &:hover {
    font-weight: 500;
    background: #ccc;
    cursor: pointer;
  }
`;
