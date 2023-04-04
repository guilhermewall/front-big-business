import { StyledDivCard, StyledDivEdit } from "./styled";
import { CgProfile } from "react-icons/cg";
import { FcConferenceCall } from "react-icons/fc";
import { BiMailSend, BiMobileAlt, BiListUl } from "react-icons/bi";
import { useContext } from "react";
import { AuthContext } from "../../Contexts/AuthContext";
import { BoxControlContext } from "../../Contexts/boxControlContext";
import FormUpdated from "../FromUpdated";

const Card = (elem: any) => {
  const card = elem;
  const id: number = card.elem.id;

  const { eventOpenFormUp, openFormUp } = useContext(BoxControlContext);
  console.log(console.log(openFormUp));
  return (
    <StyledDivCard>
      <StyledDivEdit>
        <BiListUl onClick={eventOpenFormUp} />
        {/* {openFormUp && <FormUpdated id={id} />} */}
      </StyledDivEdit>
      <FcConferenceCall />
      <div>
        <strong>{card.elem.name}</strong>
      </div>
      <div>
        <BiMailSend />
        <strong>{card.elem.email}</strong>
      </div>
      <div>
        <BiMobileAlt />
        <span>{card.elem.telephone}</span>
      </div>
    </StyledDivCard>
  );
};

export default Card;
