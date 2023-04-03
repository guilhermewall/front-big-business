import styled from "styled-components";

export const StyledMain = styled.div`
  width: 100vw;
  height: 100vh;
  /* height: 100vh; */
  background-color: green;

  display: flex;
`;

export const StyledDivLogo = styled.div`
  width: 50%;
  background-color: #f5f1ec;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledDivContent = styled.div`
  width: 50%;
  height: 100%;
  background-color: #d9b896;

  nav {
    width: 100%;
    display: flex;
    justify-content: right;
    align-items: center;
    margin-top: 25px;
    /* background-color: red; */

    gap: 15px;

    button {
      margin-right: 20px;
      background-color: #f4d3b1;
      transition: 2s;
      border: none;
      border-radius: 20px;

      :hover {
        background-color: black;
        color: #f4d3b1;
      }
    }

    a {
      text-decoration: underline;
      color: #2c2525;
    }
  }

  div {
    height: 350px;
    display: flex;
    flex-direction: column;
    align-items: center;

    margin-top: 110px;

    padding: 15px;

    h1 {
      color: #2c2525;
      font-size: 32px;
    }

    div {
      width: 60%;
      display: flex;
      align-items: flex-start;

      p {
        font-size: 18px;
        color: black;
        font-weight: 600;

        text-align: left;
      }
    }
    span {
      font-size: 16px;
      font-weight: 600;
    }
  }
`;

export const StyledContact = styled.section`
  display: flex;
  justify-content: space-around;

  width: 60%;
  height: 40px;
  align-items: flex-end;
  background-color: #b97a3a;

  border-top-right-radius: 30px;
  border-bottom-right-radius: 30px;

  margin-top: 45px;

  a {
    text-decoration: none;
    svg {
      width: 20px;
      height: 20px;
      color: #2c2525;

      padding-bottom: 7px;
      transform: translateY(0px);
      animation: up 2s ease-in-out infinite;
    }

    @keyframes up {
      0% {
        transform: translateY(0px);
      }
      50% {
        transform: translateY(3px);
      }
      100% {
        transform: translate(0px);
      }
    }
  }
`;

export const StyledLoginDiv = styled.div`
  position: absolute;
  right: 50%;
`;
