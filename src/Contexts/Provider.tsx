import { ReactNode } from "react";
import { AuthProvider } from "./AuthContext";
import { BoxControlProvider } from "./boxControlContext";

interface iProvicersProps {
  children: ReactNode;
}

const Provider = ({ children }: iProvicersProps) => {
  return (
    <AuthProvider>
      <BoxControlProvider>{children}</BoxControlProvider>
    </AuthProvider>
  );
};

export default Provider;
