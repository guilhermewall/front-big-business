import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { formContact } from "../../Validators/Forms/formRegisterContact";
import { useContext } from "react";
import { AuthContext } from "../../Contexts/AuthContext";
import { StyledDiv, StyledButtonAdd } from "./styled";
import { BoxControlContext } from "../../Contexts/boxControlContext";

export interface iDataContact {
  email: string;
  telephone: string;
  name: string;
}

const FormContact = () => {
  const { addContact } = useContext(AuthContext);
  const { eventOpenOrCloseContac } = useContext(BoxControlContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iDataContact>({ resolver: yupResolver(formContact) });
  return (
    <StyledDiv>
      <button onClick={eventOpenOrCloseContac}>Back</button>
      <h2>Register Contact</h2>
      <form onSubmit={handleSubmit(addContact)}>
        <input type="text" placeholder="name" {...register("name")} />
        <input type="text" placeholder="email" {...register("email")} />
        <input type="text" placeholder="telephone" {...register("telephone")} />

        <StyledButtonAdd type="submit">Add</StyledButtonAdd>
      </form>
    </StyledDiv>
  );
};

export default FormContact;
