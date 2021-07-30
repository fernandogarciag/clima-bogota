import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #e1e8f0;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  img {
    width: 100%;
    height: 100%;
  }
`;

export const Logo = styled.figure`
  position: absolute;
  top: 2vh;
  right: 2vw;
  width: 50px;
  height: 50px;
`;

export const Content = styled.div`
  width: 80%;
  max-width: 1440px;
  height: 90%;
  max-height: 810px;
  background-color: white;
  border-radius: 2vw;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  position: relative;
  .bottom-data {
    width: 90%;
    height: 40%;
    display: flex;
    justify-content: space-between;
    h3 {
      margin-bottom: 20px;
      span {
        font-weight: normal;
      }
    }
  }
`;

export const TopData = styled.section`
  width: 95%;
  height: 40%;
  border-radius: 2vw;
  background-image: url("https://www.culturarecreacionydeporte.gov.co/sites/default/files/styles/escala_800_px/public/2018_articulos/el-museo-de-bogota-.jpg");
  background-size: cover;
  background-position-x: center;
  position: relative;
  .right-data {
    position: absolute;
    left: -2vw;
    top: 0;
    bottom: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    .icon {
      background-color: #32308b;
      border-radius: 0 15px 15px 15px;
      position: relative;
      z-index: 1;
      &:before {
        content: "";
        position: absolute;
        background-color: transparent;
        top: -30px;
        height: 30px;
        width: 15px;
        border-bottom-left-radius: 15px;
        box-shadow: 0 15px 0 0 #32308b;
      }
      figure {
        width: 70px;
        height: 70px;
        margin: 0 5px;
      }
      p {
        color: white;
        text-align: center;
        padding-bottom: 10px;
      }
    }
    .temp {
      position: relative;
      background-color: #7c68e8;
      color: white;
      font-size: 2rem;
      padding: 10px 15px;
      border-bottom-right-radius: 15px;
      box-shadow: 0 -15px 0 0 #7c68e8;
      &:after {
        position: absolute;
        content: "°C";
        font-size: 0.8rem;
        top: 14px;
      }
      &:before {
        content: "";
        position: absolute;
        background-color: transparent;
        bottom: -30px;
        left: 0;
        height: 30px;
        width: 15px;
        border-top-left-radius: 15px;
        box-shadow: 0 -15px 0 0 #7c68e8;
      }
    }
  }
  h3 {
    height: 50%;
    display: flex;
    align-items: center;
    margin-left: 60px;
    svg {
      fill: #7c68e8;
      width: 15px;
      height: 15px;
      margin-right: 7px;
    }
    span {
      color: #7c68e8;
    }
  }
  @media (max-width: 1440px) {
    h3 {
      margin-left: 75px;
    }
  }
`;

export const NextDays = styled.section`
  width: 22%;
  .weather-card {
    display: flex;
    align-items: center;
    padding-left: 10px;
    border: 1px solid #e1e8f0;
    border-right: none;
    width: 100%;
    height: 27%;
    border-radius: 20px;
    position: relative;
    margin-bottom: 10px;
    figure {
      width: 20%;
      height: 80%;
    }
    .text {
      text-align: center;
      width: 35%;
      font-size: 1rem;
      p {
        font-size: 0.8rem;
      }
    }
    .temp {
      position: absolute;
      right: 0;
      height: 100%;
      background-color: #7c68e8;
      border-radius: 20px;
      width: 40%;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0 6px 0 3px;
      p {
        position: relative;
        margin-right: 10px;
        font-size: 1rem;
        font-weight: bold;
        color: white;
        &:after {
          position: absolute;
          content: "°";
        }
      }
    }
  }
  @media (max-width: 1440px) {
    h3 {
      font-size: 0.8rem;
    }
    .weather-card {
      .text {
        width: 35%;
        font-size: 0.8rem;
        p {
          font-size: 0.6rem;
        }
      }
      .temp {
        width: 35%;
        padding: 0 4px 0 2px;
        p {
          font-size: 0.8rem;
          margin-right: 5px;
        }
      }
    }
  }
`;

export const PlaceToVisit = styled.section`
  width: 43%;
  .title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    h3 {
      margin-bottom: 0;
    }
    .reviewers {
      display: flex;
      align-items: center;
      p {
        color: gray;
        margin-right: 10px;
      }
      figure {
        width: 30px;
        height: 30px;
        margin: 0 2px;
        img {
          border-radius: 5px;
        }
      }
      .number {
        width: 30px;
        height: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #7c68e8;
        border-radius: 5px;
        span {
          color: white;
        }
      }
    }
  }
  .places {
    display: flex;
    justify-content: space-between;
    height: 80%;
    svg {
      width: 15px;
      height: 15px;
    }
    p {
      margin-left: 7px;
      font-size: 0.8rem;
    }
    .left,
    .top,
    .bottom {
      padding: 20px;
      display: flex;
    }
    .left {
      background-image: url("https://www.culturarecreacionydeporte.gov.co/sites/default/files/styles/escala_800_px/public/2018_articulos/el-museo-de-bogota-.jpg");
      height: 100%;
      width: 50%;
      border-radius: 40px;
    }
    .right {
      height: 100%;
      width: 45%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .top {
        background-image: url("https://www.culturarecreacionydeporte.gov.co/sites/default/files/styles/escala_800_px/public/2018_articulos/el-museo-de-bogota-.jpg");
        height: 35%;
        border-radius: 20px;
      }
      .bottom {
        background-image: url("https://www.culturarecreacionydeporte.gov.co/sites/default/files/styles/escala_800_px/public/2018_articulos/el-museo-de-bogota-.jpg");
        height: 55%;
        position: relative;
        border-radius: 20px;
        button {
          position: absolute;
          top: 0;
          right: 0;
          height: 100%;
          width: 40px;
          border-radius: 20px;
          background-color: #7c68e8;
          border: 1px solid #7c68e8;
          color: white;
          font-size: 1.5rem;
        }
      }
    }
  }
  @media (max-width: 1440px) {
    .title {
      h3 {
        font-size: 0.8rem;
      }
      .reviewers {
        p {
          margin-right: 5px;
          font-size: 0.8rem;
        }
      }
    }
    .places {
      p {
        margin-left: 4px;
        font-size: 0.6rem;
      }
    }
  }
`;

export const OtherLocations = styled.section`
  width: 27%;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .weather-card {
    height: 40%;
    width: 100%;
    background-color: white;
    border-radius: 20px;
    box-shadow: 0 10px 40px 0 black;
    &.top {
      position: absolute;
      top: -50%;
    }
    .principal {
      height: 75%;
      display: flex;
      align-items: center;
      figure {
        background-color: #7c68e8;
        width: 30%;
        height: 100%;
        border-radius: 20px;
        margin-right: 20px;
      }
      .temp {
        height: 45%;
        display: flex;
        align-items: center;
        font-size: 2rem;
        position: relative;
        padding-right: 15px;
        &:after {
          content: "°C";
          color: gray;
          font-size: 0.8rem;
          position: absolute;
          top: 12%;
          right: 0;
        }
      }
      hr {
        height: 45%;
        margin: 0 10px;
        background-color: gray;
        width: 0;
        border: none;
        border-left: 1px solid gray;
      }
      .location {
        height: 45%;
        font-size: 1rem;
        font-weight: bold;
        span {
          font-size: 0.8rem;
          font-weight: normal;
        }
      }
    }
    .secondary {
      display: flex;
      justify-content: space-around;
      align-items: center;
      height: 25%;
      p {
        font-size: 0.8rem;
        color: gray;
      }
      .humidity {
        &:before {
          content: "Humidity ";
        }
        &:after {
          content: "%";
        }
      }
      .speed {
        &:after {
          content: "km/h";
        }
      }
    }
  }
  .add {
    height: 55%;
    width: 100%;
    background-color: white;
    border-radius: 20px;
    border: 3px dashed gray;
    box-shadow: 0 10px 40px 0 black;
    position: relative;
    padding-top: 15px;
    button {
      background-color: #7c68e8;
      border: 1px solid #7c68e8;
      padding: 5px 10px;
      border-radius: 15px;
      color: white;
      margin: 0 auto;
      display: block;
    }
    figure {
      height: 60%;
      width: 70%;
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      margin: 0 auto;
    }
  }
  @media (max-width: 1440px) {
    .weather-card {
      height: 40%;
      width: 100%;
      background-color: white;
      border-radius: 20px;
      box-shadow: 0 10px 40px 0 black;
      &.top {
        position: absolute;
        top: -50%;
      }
      .principal {
        figure {
          margin-right: 10px;
        }
      }
      .secondary {
        p {
          font-size: 0.6rem;
        }
      }
    }
  }
`;
