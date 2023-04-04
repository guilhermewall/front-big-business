import { useContext } from "react";
import { StyledNav } from "./styled";
import { BoxControlContext } from "../../Contexts/boxControlContext";
import FormContact from "../FormContact";
import FormUpdated from "../FromUpdated";

const HeaderRegister = () => {
  const { openContact, eventOpenOrCloseContac, eventOpenFormUp, openFormUp } =
    useContext(BoxControlContext);
  return (
    <StyledNav>
      <button onClick={eventOpenOrCloseContac}>add contact</button>
      {openContact == true && <FormContact />}
      <button onClick={eventOpenFormUp}>edit contact</button>
      {openFormUp && <FormUpdated />}
    </StyledNav>
  );
};

export default HeaderRegister;
