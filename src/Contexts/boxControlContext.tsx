import { createContext, ReactNode, useState } from "react";

interface iBoxControlProviderProps {
  children: ReactNode;
}

interface iBoxControlContext {
  eventOpenOrClose: () => void;
  open: boolean;
  openContact: boolean;
  eventOpenOrCloseContac: () => void;
}

export const BoxControlContext = createContext({} as iBoxControlContext);

export const BoxControlProvider = ({ children }: iBoxControlProviderProps) => {
  const [open, setOpen] = useState(false);
  const [openContact, setOpenContact] = useState(false);

  const eventOpenOrClose = () => {
    setOpen(!open);
  };

  const eventOpenOrCloseContac = () => {
    console.log(openContact);
    setOpenContact(!openContact);
  };

  return (
    <BoxControlContext.Provider
      value={{
        eventOpenOrClose,
        open,
        openContact,
        eventOpenOrCloseContac,
      }}
    >
      {children}
    </BoxControlContext.Provider>
  );
};
