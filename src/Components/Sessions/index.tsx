import {
  StyledMain,
  StyledDivLogo,
  StyledDivContent,
  StyledContact,
  StyledLoginDiv,
} from "./styled";
import logoImg from "../../Assets/logo.svg";
import Login from "./../../Pages/Login/index";
import { FaLinkedinIn } from "react-icons/fa";
import { BsFacebook, BsGithub } from "react-icons/bs";
import { BoxControlContext } from "../../Contexts/boxControlContext";
import { useContext } from "react";
import Form from "../Form";

const Sessions = () => {
  const { eventOpenOrClose, open } = useContext(BoxControlContext);

  return (
    <>
      <StyledMain>
        <StyledDivLogo>
          <img src={logoImg} alt="logo" />
        </StyledDivLogo>
        <StyledDivContent>
          <nav>
            <a href="">Contact</a>
            <button onClick={eventOpenOrClose}>Login</button>
          </nav>
          <div>
            <div>
              <h1>Welcome</h1>
              <p>
                Having trouble getting your contacts organized? Big Business
                offers you the best support, register and start organizing your
                work environment right now!
              </p>
            </div>

            <span>extra contact information</span>
          </div>
          <StyledContact>
            <a href="">
              <BsFacebook />
            </a>
            <a href="">
              <FaLinkedinIn />
            </a>
            <a href="">
              <BsGithub />
            </a>
          </StyledContact>
        </StyledDivContent>
        {open && <Form />}
      </StyledMain>
    </>
  );
};
export default Sessions;
