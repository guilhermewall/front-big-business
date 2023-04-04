import styled from "styled-components";

export const StyledMain = styled.main`
  width: 100vw;
  height: 100vh;

  display: flex;
  /* flex-direction: column; */

  background: #f5e2ce;

  h1 {
    font-size: 26px;
  }
`;

export const StyleDivInformation = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 60%;
  h1 {
    margin-top: 60px;
    font-size: 18px;
  }
`;

export const StyledDivProfile = styled.div`
  width: 40%;
  height: 100%;

  background: #f7e8da;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 140px;
    height: 140px;

    background: grey;
    border-radius: 10px;
  }
`;

export const StyledContainerCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 700px;
  height: 350px;
  gap: 40px;
  overflow-y: scroll;

  /* background: green; */
  scroll-behavior: smooth;
  margin-top: 40px;
  background: #f9c9a4;

  ::-webkit-scrollbar-track {
    /*-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);*/
    border-radius: 0;
    background-color: #d0d4ce;
  }
  ::-webkit-scrollbar {
    width: 6px;
    background-color: #d0d4ce;
  }
  ::-webkit-scrollbar {
    width: 6px;
    background-color: #d0d4ce;
  }
`;
