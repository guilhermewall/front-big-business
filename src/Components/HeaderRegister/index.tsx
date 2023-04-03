import { useContext } from "react";
import { StyledNav } from "./styled";
import { BoxControlContext } from "../../Contexts/boxControlContext";
import FormContact from "../FormContact";

const HeaderRegister = () => {
  const { openContact, eventOpenOrCloseContac } = useContext(BoxControlContext);
  return (
    <StyledNav>
      <button onClick={eventOpenOrCloseContac}>Adicionar contato</button>
      {openContact == true && <FormContact />}
    </StyledNav>
  );
};

export default HeaderRegister;
