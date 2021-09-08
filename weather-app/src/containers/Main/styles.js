import styled from "styled-components";

export const imagesBackground = {
  rain: "https://www.rd.com/wp-content/uploads/2016/09/03-not-weird-facts-rain-Mr_Twister.jpg",
  clear:
    "http://www.fiorthodontics.com/wp-content/uploads/2018/03/Sun-Shining.jpg",
  clouds:
    "https://cdn.pixabay.com/photo/2020/08/24/20/14/clouds-5514993_1280.jpg",
  drizzle:
    "https://www.nasa.gov/sites/default/files/thumbnails/image/drizzle.jpg",
  foggy: "https://c.stocksy.com/a/alY000/z9/133646.jpg",
  snow: "https://images.unsplash.com/photo-1612719983096-39505900b5c5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
  thunderstorm:
    "https://www.rochesterfirst.com/wp-content/uploads/sites/66/2021/04/montanusstorm-1.jpg?strip=1",
};

export const Wrapper = styled.div`
  background-size: cover;
  background-position: left;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 100vh;
  width: 100vw;
  overflow: auto;
`;

export const SearchField = styled.input`
  border: 2px solid #555;
  border-radius: 5px;
  padding: 10px;
`;

export const CurrentDay = styled.div`
  color: white;
  width: 800px;
  height: 400px;
  background-color: rgba(0, 0, 0, 0.5);
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

export const WeekInfo = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-flow: row no-wrap;
  align-items: center;
`;
