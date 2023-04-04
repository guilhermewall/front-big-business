import styled from "styled-components";

export const StyledDivCard = styled.div`
  width: 200px;
  height: auto;

  display: flex;
  flex-direction: column;
  align-items: center;

  background: #eebf6b;

  border-radius: 10px;
  box-shadow: 0px 15px #605c3b;

  /* position: absolute; */

  svg {
    width: 100px;
    height: 100px;
    margin-top: 40px;

    background: #fff8c5;
    border-radius: 35px;
    margin-bottom: 25px;
  }
  strong {
    color: black;
  }

  div {
    // background: #766b16;
    width: 200px;
    word-wrap: break-word;
    word-break: break-word;

    display: flex;
    // justify-content: space-between;
    align-items: center;
    justify-content: center;
    svg {
      margin: none;
      padding: none;
      background: none;
      width: 30px;
      height: 30px;
    }
  }
`;

export const StyledDivEdit = styled.div`
  width: 100%;
  height: 40px;

  /* background: green; */
  display: flex;
  justify-content: space-between;
  gap: 30px;
  svg {
    cursor: pointer;
  }
`;
