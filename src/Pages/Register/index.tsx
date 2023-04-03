import { StyledMain } from "../../Components/Sessions/styled";
import { StyledDivLogo, StyledDivRegister } from "./styled";
import logoImg from "../../Assets/logo.svg";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { formScheaRegister } from "../../Validators/Forms/fromLogin";
import { useContext } from "react";
import { AuthContext } from "../../Contexts/AuthContext";

interface iDataRegister {
  name: string;
  email: string;
  telephone: string;
  password: string;
  cpf: string;
  confirmPassword: string;
}

const Register = () => {
  const { onSubmitFunctionRegister } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iDataRegister>({ resolver: yupResolver(formScheaRegister) });

  return (
    <StyledMain>
      <StyledDivLogo>
        <img src={logoImg} alt="" />
      </StyledDivLogo>
      <StyledDivRegister>
        <form onSubmit={handleSubmit(onSubmitFunctionRegister)}>
          <h1>Register</h1>
          <input type="name" placeholder="nome" {...register("name")} />
          <span>{errors.name?.message}</span>
          <input type="email" placeholder="email" {...register("email")} />
          <span>{errors.email?.message}</span>

          <input
            type="password"
            placeholder="senha"
            {...register("password")}
          />
          <span>{errors.password?.message}</span>

          <input
            type="password"
            placeholder="confirme sua senha"
            {...register("confirmPassword")}
          />
          <span>{errors.confirmPassword?.message}</span>

          <input
            type="text"
            placeholder="cel: 1198600062"
            {...register("telephone")}
          />
          <span>{errors.telephone?.message}</span>

          <input
            type="text"
            placeholder="cpf: 544999221xx"
            {...register("cpf")}
          />
          <span>{errors.cpf?.message}</span>

          <button type="submit">Next</button>
        </form>
      </StyledDivRegister>
    </StyledMain>
  );
};

export default Register;
