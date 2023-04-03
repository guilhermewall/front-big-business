import { StyledHeader, StyledDiv } from "./styled";
import {
  BsLinkedin,
  BsFacebook,
  BsFillTelephoneForwardFill,
} from "react-icons/bs";
import { AiFillGithub } from "react-icons/ai";

const Header = () => {
  return (
    <StyledHeader>
      <StyledDiv>
        <nav>
          <div>
            <BsFillTelephoneForwardFill /> (11)9869-28462
          </div>
          <div>
            <a href="">
              <BsLinkedin />
            </a>
            <a href="">
              <AiFillGithub />
            </a>
            <a href="">
              <BsFacebook />
            </a>
          </div>
        </nav>
      </StyledDiv>
      <div>branco</div>
    </StyledHeader>
  );
};

export default Header;
