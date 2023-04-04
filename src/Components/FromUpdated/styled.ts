import styled from "styled-components";

export const StyledForm = styled.form`
  width: 300px;
  height: auto;

  position: absolute;
  left: 50%;
  top: 50%;
  /* left: 50%; */
  border-radius: 10px;
  transform: translateX(-50%) translateY(-50%);

  background: black;
  opacity: 0.9;

  display: flex;
  flex-direction: column;
  align-items: center;
  input {
    width: 80%;
    height: 25px;

    border-radius: 10px;
  }

  button {
    background: none;
  }
  span {
    text-decoration: underline;
    cursor: pointer;
  }
`;
