import styled from "styled-components";

export const StyledNav = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background-color: #023562;
  padding: 3px;
  height: 10x;
  box-sizing: border-box;
  width: 100%;

  @media (max-width: 767px) {
    height: 15px;
  }
`;
