import {
  StyledMain,
  StyledDivProfile,
  StyleDivInformation,
  StyledContainerCards,
} from "./styled";
import { CgProfile } from "react-icons/cg";
import logo2 from "../../Assets/logo2.svg";
import HeaderRegister from "../../Components/HeaderRegister";
import Card from "../../Components/Card";
import FormContact from "../../Components/FormContact";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Contexts/AuthContext";
import api from "../../Services/api";

const Dashboard = () => {
  const { contactsAt } = useContext(AuthContext);
  console.log(contactsAt);
  const [cont, setCont] = useState([
    {
      email: "guilherme@gmail.com",
      telephone: "119879988",
      name: "guilherme",
    },
  ]);

  useEffect(() => {
    const token = localStorage.getItem("@context:token");
    api.defaults.headers.common.authorization = `Bearer ${token}`;
    api.get("contacts").then((response) => setCont(response.data));
  }, []);

  return (
    <StyledMain>
      <StyledDivProfile>
        <img src={logo2} alt="logo big business" />
      </StyledDivProfile>
      <StyleDivInformation>
        <HeaderRegister />
        <h1>
          now you can see your contacts and interact with them. Add people and
          grow your business!
        </h1>
        <StyledContainerCards>
          {cont.map((elem: any, index: any) => {
            return <Card key={index} elem={elem} />;
          })}
        </StyledContainerCards>

        {/* // <Card /> */}
        {/* <FormContact /> */}
      </StyleDivInformation>
    </StyledMain>
  );
};

export default Dashboard;
