import styled from "styled-components";
import cloudySunny from "../../assets/Cloudy Sunny/cloudy-sunny.jpg";

export const Wrapper = styled.div`
  background-image: url(${cloudySunny});
  background-size: cover;
  background-position: left;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-left: 80px;
`;

export const SearchArea = styled.div`
  position: absolute;
  right: 80px;
  top: 25px;
`;

export const SearchField = styled.input`
  position: absolute;
  border: 2px solid #555;
  border-radius: 5px;
  padding: 5px;
  &:first-child {
    right: 10px;
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
  p {
    margin: 0;
    padding: 0 0;
  }
`;

export const DayWeekCards = styled.div`
  display: flex;
  margin: 0 0 20px 20px;
`;
