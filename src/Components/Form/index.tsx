import { useForm } from "react-hook-form";
import { StyledDiv, DivChannels, StyledDivRemove } from "./styled";
import { HiOutlineMail } from "react-icons/hi";
import { AiFillUnlock } from "react-icons/ai";
import { Link } from "react-router-dom";
import { FaLinkedinIn } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import { CiFacebook } from "react-icons/ci";
import { formScheaLogin } from "../../Validators/Forms/fromLogin";
import { useContext } from "react";
import { AuthContext } from "../../Contexts/AuthContext";
import { yupResolver } from "@hookform/resolvers/yup";
import { iData } from "../../Contexts/AuthContext";
import { BoxControlContext } from "../../Contexts/boxControlContext";

const Form = () => {
  const { onSubmitFunction } = useContext(AuthContext);
  const { eventOpenOrClose } = useContext(BoxControlContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iData>({ resolver: yupResolver(formScheaLogin) });

  return (
    <>
      <StyledDiv>
        <StyledDivRemove>
          <button onClick={eventOpenOrClose}>X</button>
        </StyledDivRemove>
        <form onSubmit={handleSubmit(onSubmitFunction)}>
          <div>
            <HiOutlineMail />
            <input type="email" placeholder="Email" {...register("email")} />

            <span>{errors.email?.message}</span>
          </div>

          <div>
            <AiFillUnlock />
            <input
              type="password"
              placeholder="Password"
              {...register("password")}
            />
          </div>
          <span>{errors.password?.message}</span>

          <Link to={"/register"}>want to register?</Link>
          <button type="submit">Sign In</button>
        </form>
        <DivChannels>
          <a href="https://www.linkedin.com/in/guilhermewallacep/">
            <FaLinkedinIn />
          </a>
          <a href="http://github.com/guilhermewall">
            <BsGithub />
          </a>
          <a href="https://www.facebook.com/profile.php?id=100059965638418">
            <CiFacebook />
          </a>
        </DivChannels>
      </StyledDiv>
    </>
  );
};

export default Form;
