import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import api from "./../Services/api";
import { useNavigate } from "react-router-dom";
import { iDataContact } from "../Components/FormContact";
import { iContactRequest } from "../interfaces/contacts.interfaces";

interface iAuthProviderProps {
  children: ReactNode;
}

export interface iData {
  email: string;
  password: string;
}

export interface iDataRegister {
  email: string;
  password: string;
  name: string;
  telephone: string;
  cpf: string;
}

interface iAuthContext {
  onSubmitFunction: (data: iData) => void;
  onSubmitFunctionRegister: (data: iDataRegister) => void;
  addContact: (data: iDataContact) => void;
  // contacts: () => void;
  contactsAt: any;
  setContactsAt: React.Dispatch<React.SetStateAction<any>>;
  updatedContact: (data: any) => void;
  setIdCard: React.Dispatch<React.SetStateAction<any>>;
  deleteContact: (email: any) => void;

  // atualizar interfaces
}

export const AuthContext = createContext({} as iAuthContext);

export const AuthProvider = ({ children }: iAuthProviderProps) => {
  const navigate = useNavigate();

  const [token, setToken] = useState();
  const [contactsAt, setContactsAt] = useState([]);
  const [idCard, setIdCard] = useState();

  const validated = (dataUser: any) => {
    // console.log(dataUser);
    setToken(dataUser);
  };

  const onSubmitFunction = (data: any) => {
    // console.log(data);

    api
      .post("sessions", data)
      .then((response) => {
        validated(response);
        // console.log("---------", response);

        // depois adicionar o toast

        const { token } = response.data;

        api.defaults.headers.common.authorization = `Bearer ${token}`;

        // sessionstorage
        localStorage.setItem("@context:token", token);

        // navigate("/dashboard");
      })
      .catch((err) => {
        console.log(err);

        // adicionar o token de erro
      });

    const token = localStorage.getItem("@context:token");
    api.defaults.headers.common.authorization = `Bearer ${token}`;
    api
      .get("contacts")
      .then((response) => {
        setContactsAt(response.data);
        console.log("AQUI SAO OS CONTATOS:", response.data);
      })
      .catch((err) => console.log(err));
    navigate("/dashboard");
  };

  const validatedRegister = () => {
    navigate("/");
  };

  const onSubmitFunctionRegister = (data: iDataContact) => {
    console.log(data);

    api
      .post("users", data)
      .then((response) => {
        validatedRegister();
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const addContact = (data: iContactRequest | never) => {
    api.defaults.headers.common.authorization = `Bearer ${token}`;
    api
      .post("contacts", data)
      .then((response) => {
        console.log(response);
      })
      .catch((err) => console.log(err));
  };

  const updatedContact = (data: any) => {
    api.defaults.headers.common.authorization = `Bearer ${token}`;
    console.log(data);

    api
      .patch("contacts", data)
      .then((response) => console.log(response))
      .catch((err) => console.log(err));
  };

  const deleteContact = (data: any) => {
    api.defaults.headers.common.authorization = `Bearer ${token}`;
    const json = JSON.stringify(data);

    api
      .delete("contacts", data)
      .then((response) => console.log(response))
      .catch((err) => console.log(err));
  };

  return (
    <AuthContext.Provider
      value={{
        onSubmitFunction,
        onSubmitFunctionRegister,
        addContact,
        contactsAt,
        setContactsAt,
        updatedContact,
        setIdCard,
        deleteContact,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
