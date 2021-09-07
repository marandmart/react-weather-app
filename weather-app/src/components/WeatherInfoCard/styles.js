import styled from "styled-components";

export const CardRow = styled.div`
  display: flex;
  gap: 20px;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 250px;
  width: 200px;
  background-color: rgba(0, 0, 0, 0.3);
  margin: 10px 0 0 10px;
  border-radius: 5%;
  padding: 5px;
  box-sizing: border-box;
`;

export const Weather = styled.span`
  font-size: 5em;
  color: white;
`;

export const HourWeek = styled.span`
  font-size: 2.5em;
  color: white;
`;
