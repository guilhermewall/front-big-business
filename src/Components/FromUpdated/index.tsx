import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { formContactUpdated } from "../../Validators/Forms/formRegisterContact";
import { useContext } from "react";
import { AuthContext } from "../../Contexts/AuthContext";
import { StyledForm } from "./styled";
import { BoxControlContext } from "../../Contexts/boxControlContext";

const FormUpdated = (id: any) => {
  const { updatedContact, setIdCard } = useContext(AuthContext);
  const { eventOpenFormUp } = useContext(BoxControlContext);

  // setIdCard(id);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(formContactUpdated) });

  return (
    <StyledForm onSubmit={handleSubmit(updatedContact)}>
      <span onClick={eventOpenFormUp}>out</span>
      <h2>change contact</h2>
      <label>number in order for contact:</label>
      <input type="number" placeholder="ex: 1" {...register("id")} />
      <label>Update email:</label>
      <input type="email" {...register("email")} />

      <label>Update telephone:</label>
      <input type="text" {...register("telephone")} />

      <label>Update name:</label>
      <input type="text" {...register("name")} />

      <button>Next</button>
    </StyledForm>
  );
};
export default FormUpdated;
