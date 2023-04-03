import { createContext, ReactNode, useEffect, useState } from "react";
import api from "./../Services/api";
import { useNavigate } from "react-router-dom";
import { iDataContact } from "../Components/FormContact";

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
}

export const AuthContext = createContext({} as iAuthContext);

export const AuthProvider = ({ children }: iAuthProviderProps) => {
  const navigate = useNavigate();

  const [token, setToken] = useState();
  const [contactsAt, setContactsAt] = useState();

  const validated = (dataUser: any) => {
    console.log(dataUser);
    setToken(dataUser);
  };

  const onSubmitFunction = (data: any) => {
    console.log(data);

    api
      .post("sessions", data)
      .then((response) => {
        validated(response);
        console.log("---------", response);

        // depois adicionar o toast

        const { token } = response.data;

        api.defaults.headers.common.authorization = `Bearer ${token}`;

        // sessionstorage
        localStorage.setItem("@context:token", token);

        navigate("/dashboard");
      })
      .catch((err) => {
        console.log(err);

        // adicionar o token de erro
      });
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

  const addContact = (data: any) => {
    api.defaults.headers.common.authorization = `Bearer ${token}`;
    api
      .post("contacts", data)
      .then((response) => console.log(response))
      .catch((err) => console.log(err));
  };

  // useEffect(() => {
  //   const contacts = () => {
  //     api.get("contacts").then((response) => {
  //       console.log(response), setContactsAt(response.data);
  //     });
  //   };
  // }, [contactsAt]);

  return (
    <AuthContext.Provider
      value={{
        onSubmitFunction,
        onSubmitFunctionRegister,
        addContact,
        contactsAt,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
