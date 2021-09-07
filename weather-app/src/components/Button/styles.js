import styled from "styled-components";

export const ButtonStyled = styled.button`
  box-sizing: border-box;
  padding: 15px 60px;
  background-color: ${({ activated }) =>
    activated ? "rgba(0, 0, 0, 0.5)" : "rgba(0, 0, 0, 0.2)"};
  color: white;
  font-size: 1em;
  border: none;
  margin-top: 10px;
  &:first-child {
    border-right: 1px solid white;
  }
  &:active {
    background-color: rgba(0, 0, 0, 0.5);
  }
`;

export const ButtonStyledActive = styled(ButtonStyled)`
  background-color: rgba(0, 0, 0, 0.5);
`;
