import styled from "styled-components";

export const MainWrapper = styled.div`
  height: 100vh;
  background: linear-gradient(to right, #c7c7eb, #ccf2dd);
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Inter", sans-serif;

  .container {
    background-color: rgba(255, 255, 255, 0.5);
    border-radius: 12px;
    padding: 2rem;
    box-shadow: 0 10px 15px rgb(0 0 0 / 20%);
    box-sizing: border-box;
    color: rgba(0, 0, 0, 0.85);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    max-width: 400px;
    width: 90%;
    background-blend-mode: overlay;
  }

  .searchArea {
    margin-top: 20px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
  }

  .searchArea > input {
    outline: none;
    color: black;
    border: 1px solid grey;
    padding: 8px;
    border-radius: 20px;
    text-align: center;
    width: 80%;
    background: transparent;
    font-size: 1rem;
  }

  .searchCircle {
    border: 1px solid grey;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
      background-color: rgba(0, 0, 0, 0.05);
    }

    > .searchIcon {
      font-size: 20px;
      color: grey;
    }
  }

  .weatherArea {
    display: flex;
    align-items: center;
    flex-direction: column;
    margin: 30px 0;

    > .icon {
      font-size: 9rem;
      color: #555;
    }

    > h1 {
      font-size: 3rem;
      font-family: "Bebas Neue", sans-serif;
      margin: 5px 0;
    }

    > span {
      margin-bottom: 10px;
      font-size: 1rem;
    }

    > h2 {
      font-size: 2rem;
      font-weight: 400;
    }
  }

  .bottomInfoArea {
    display: flex;
    align-items: center;
    justify-content: space-around;
    font-family: "Josefin Sans", sans-serif;
    margin: 10px 0;
    background: linear-gradient(
      90deg,
      rgba(243, 255, 253, 1) 0%,
      rgba(253, 255, 232, 1) 100%
    );
    border-radius: 12px;
    padding: 10px;
    width: 100%;
  }

  .humidityLevel,
  .wind {
    display: flex;
    align-items: center;
    margin: 0 10px;

    > .humidIcon {
      font-size: 3rem;
      margin-right: 10px;
      color: #00aaff;
    }
  }

  .windIcon {
    font-size: 2rem;
    margin-right: 10px;
    color: #666;
  }

  .loading {
    height: 300px;
    width: 250px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .loadingIcon {
      font-size: 3rem;
      animation: spin 2s linear infinite;
      color: #555;
    }

    p {
      font-size: 18px;
      margin-top: 10px;
    }
  }

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  @media (max-width: 480px) {
    .weatherArea > .icon {
      font-size: 6rem;
    }
    .weatherArea > h1 {
      font-size: 2.2rem;
    }
    .weatherArea > h2 {
      font-size: 1.5rem;
    }
  }
`;
