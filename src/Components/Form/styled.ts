import styled from "styled-components";

export const StyledDiv = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  /* left: 50%; */
  border-radius: 10px;
  transform: translateX(-50%) translateY(-50%);

  width: 40%;
  max-width: 550px;
  height: 500px;
  /* background-color: white; */
  background: #b29980;
  opacity: 0.9;
  /* border-top-right-radius: 10px;
  border-bottom-right-radius: 10px; */
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  form {
    width: 80%;
    height: auto;
    /* background-color: green; */

    padding-top: 20px;
    padding-bottom: 20px;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;

    input {
      border: none;
      border-top-right-radius: 6px;
      border-bottom-right-radius: 6px;
      width: 210px;
      height: 40px;

      font-size: 16px;
      text-align: left;

      opacity: 0.7;
    }

    button {
      width: 280px;
      height: 40px;

      border-radius: 6px;
      border: none;

      background-color: #ffcb96;
      color: white;

      font-weight: 800;

      cursor: pointer;
    }

    div {
      display: flex;
      align-items: center;

      svg {
        background-color: #f5e2cf;
        width: 40px;
        height: 42px;

        color: white;

        border-top-left-radius: 6px;
        border-bottom-left-radius: 6px;
      }
    }

    a {
      color: whitesmoke;
      font-size: 12px;
      font-weight: bolder;

      text-decoration: none;
    }
  }
`;

export const DivChannels = styled.div`
  margin-top: 20px;
  /* background-color: green; */

  width: 150px;
  height: auto;
  display: flex;
  justify-content: space-around;

  svg {
    /* background-color: whitesmoke; */
    height: 30px;
    width: 40px;
    color: #c3def7;

    transform: translateY(0px);
    animation: decimal 3s ease-in-out infinite;
  }

  @keyframes decimal {
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
`;

export const StyledDivRemove = styled.div`
  width: 100%;
  display: flex;
  justify-content: right;
  margin-right: 25px;
`;
