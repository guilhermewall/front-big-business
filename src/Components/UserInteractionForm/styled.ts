import styled from "styled-components";

export const StyledDiv = styled.div`
  width: 40%;
  max-width: 550px;
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #6d8ba6;
  border-bottom-left-radius: 10px;
  border-top-left-radius: 10px;

  img {
    opacity: 0.8;
    width: 80%;
    height: auto;
    border-radius: 200px;
    /* object-fit: contain; */

    transform: translateY(0px);
    animation: float 7s ease-in-out infinite;
  }

  @keyframes float {
    0% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-30px);
    }
    100% {
      transform: translateY(0px);
    }
  }
`;
