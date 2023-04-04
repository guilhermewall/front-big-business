import { createContext, ReactNode, useState } from "react";

interface iBoxControlProviderProps {
  children: ReactNode;
}

interface iBoxControlContext {
  eventOpenOrClose: () => void;
  open: boolean;
  openContact: boolean;
  eventOpenOrCloseContac: () => void;
  openFormUp: boolean;
  eventOpenFormUp: () => void;
}

export const BoxControlContext = createContext({} as iBoxControlContext);

export const BoxControlProvider = ({ children }: iBoxControlProviderProps) => {
  const [open, setOpen] = useState(false);
  const [openContact, setOpenContact] = useState(false);
  const [openFormUp, setOpenFormUp] = useState(false);

  const eventOpenOrClose = () => {
    setOpen(!open);
  };

  const eventOpenOrCloseContac = () => {
    console.log(openContact);
    setOpenContact(!openContact);
  };

  const eventOpenFormUp = () => {
    setOpenFormUp(!openFormUp);
  };

  return (
    <BoxControlContext.Provider
      value={{
        eventOpenOrClose,
        open,
        openContact,
        eventOpenOrCloseContac,
        openFormUp,
        eventOpenFormUp,
      }}
    >
      {children}
    </BoxControlContext.Provider>
  );
};
