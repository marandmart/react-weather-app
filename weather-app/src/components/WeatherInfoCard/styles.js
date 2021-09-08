import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 250px;
  width: 200px;
  background-color: rgba(0, 0, 0, 0.5);
  margin: 10px 0 0 10px;
  border-radius: 5%;
  padding: 5px;
  box-sizing: border-box;
`;

export const WeatherValue = styled.span`
  font-size: 1.8em;
  color: white;
`;

export const Day = styled.span`
  font-size: 1.7em;
  color: white;
  text-align: center;
`;
