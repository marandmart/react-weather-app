import styled from "styled-components";
import cloudySunny from "../../assets/Cloudy Sunny/cloudy-sunny.jpg";

export const Wrapper = styled.div`
  background-image: url(${cloudySunny});
  background-size: cover;
  background-position: left;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 100vh;
  width: 100vw;
`;

export const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
`;

export const SearchArea = styled.div`
  margin-top: 30px;
  display: flex;
`;

export const SearchField = styled.input`
  border: 2px solid #555;
  border-radius: 5px;
  padding: 10px;
  margin: 0 20px;
  &:first-child {
    margin-right: 5px;
  }
`;

export const CurrentDay = styled.div`
  color: white;
  width: 800px;
  height: 400px;
  background-color: rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  font-size: 4em;
  box-sizing: border-box;
  div,
  h2,
  h3,
  h4,
  h5,
  p {
    margin: 0;
    padding: 0 0;
  }
`;

export const DayWeekCards = styled.div`
  display: flex;
  margin: 0 0 20px 20px;
`;
