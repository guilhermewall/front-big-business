import styled from "styled-components";

export const StyledDivLogo = styled.div`
  width: 50%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  background: #f5f1ec;
`;

export const StyledDivRegister = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
  height: 100%;

  background: #d9b896;

  /* border-radius: 15px; */

  form {
    width: 70%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;

    border-radius: 15px;

    background: #f4d7b9;

    gap: 15px;

    input {
      width: 80%;
      height: 40px;

      border-radius: 10px;

      font-size: 16px;
      opacity: 0.8;
    }

    span {
      color: red;
      font-size: 12px;
      font-weight: bold;
    }

    h1 {
      transform: translateY(0px);
      animation: popup 3s ease-in-out infinite;
    }

    @keyframes popup {
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

    button {
      width: 40%;
      height: 50px;

      background: #e9b37c;
      font-size: 22px;
      font-weight: bold;

      margin-bottom: 15px;
      text-align: center;
    }
  }
`;
