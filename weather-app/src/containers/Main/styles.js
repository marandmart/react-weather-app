import styled from "styled-components";

export const Wrapper = styled.div`
  background-image: url("https://media.semprefamilia.com.br/semprefamilia/2015/08/bigstock-sun-shining-in-blue-sky-97347104-e1438713603242-fe9103c6.jpg");
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
  justify-content: space-between;
  align-items: center;
  width: 100vw;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-left: 80px;
`;

export const SearchField = styled.input`
  margin-right: 20px;
  border: 2px solid #555;
  border-radius: 5px;
  padding: 5px;
`;

export const DayWeekCards = styled.div`
  display: flex;
  margin: 0 0 20px 20px;
`;
