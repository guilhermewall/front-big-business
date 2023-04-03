import { StyledDivCard } from "./styled";
import { CgProfile } from "react-icons/cg";

const Card = (elem: any) => {
  const card = elem;
  // console.log(card.elem);
  return (
    <StyledDivCard>
      <CgProfile />
      <strong>{card.elem.name}</strong>
      <span>{card.elem.telephone}</span>
    </StyledDivCard>
  );
};

export default Card;
