import styled from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100vw;
  height: 70px;

  /* gap: 10px; */
  background-color: orange;
`;

export const StyledDiv = styled.div`
  background-color: #393232;
  width: 70%;
  height: 35px;

  nav {
    display: flex;
    justify-content: space-around;

    div:nth-child(1) {
      padding-top: 5px;
    }

    div:nth-child(2) {
      width: 80px;
      /* background-color: green; */

      display: flex;
      justify-content: space-between;

      svg {
        width: 20px;
        height: 20px;
        color: white;

        padding-top: 5px;
      }
    }
  }
`;
