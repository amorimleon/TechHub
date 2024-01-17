import { Route, Routes } from "react-router-dom";
import { LoginPage } from "../pages/LoginPage";
import { RegisterPage } from "../pages/RegisterPage";
import { DashBoardPage } from "../pages/DashBoardPage";
import { ProtectesRoutes } from "../components/ProtectedRouters";

export const RoutesMain = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

        <Route path="/dashboard" element={<ProtectesRoutes />}>
          <Route index element={<DashBoardPage />} />
        </Route>
      </Routes>
    </>
  );
};
