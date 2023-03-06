import styled from "styled-components";

export const StyledFormItem = styled.button`
  background-color: #c2c2c2;
  border: 2px solid #7f7f7f;
  color: #000;
  font-size: 14px;
  font-weight: bold;
  padding: 10px 20px;
  margin: 5px;
  display: inline-block;
  text-align: center;
  border-radius: 2px;
  box-shadow: 1px 1px 0px #fff, -1px -1px 0px #7f7f7f;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: #d5d5d5;
  }

  &:active {
    background-color: #a8a8a8;
    box-shadow: none;
  }
`;
