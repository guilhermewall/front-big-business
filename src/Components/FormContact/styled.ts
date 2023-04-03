import styled from "styled-components";

export const StyledDiv = styled.div`
  width: 300px;
  height: auto;

  position: absolute;
  left: 50%;
  top: 50%;
  /* left: 50%; */
  border-radius: 10px;
  transform: translateX(-50%) translateY(-50%);

  background: black;
  opacity: 0.6;

  button {
    background: none;
    font-size: 16px;
  }
  form {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }
  input {
    width: 160px;
    height: 30px;
    border-radius: 10px;
  }
`;

export const StyledButtonAdd = styled.button`
  width: 60px;
  /* height: 30px; */
  background: #f2cba4;
  color: #f2cba4;
`;
