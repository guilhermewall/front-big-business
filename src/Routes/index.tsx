import { Navigate, Route, Routes } from "react-router-dom";
import Register from "../Pages/Register";
import Login from "../Pages/Login";
import Dashboard from "../Pages/Dashboard";
import Primary from "../Pages/Primary";

export const RoutesProvider = () => {
  return (
    <Routes>
      <Route path="/" element={<Primary />} />
      {/* <Route path="/login" element={<Login />} /> */}
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={<Dashboard />} />
      {/* <Route path="*" element={<Navigate to="/login" />} /> */}
    </Routes>
  );
};
