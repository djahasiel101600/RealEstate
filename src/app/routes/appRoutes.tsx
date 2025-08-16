import { Home } from "@/pages/home";
import { ROUTES } from "@/shared/config";
import { Routes, Route } from "react-router-dom";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path={ROUTES.HOME} element={<Home />} />
    </Routes>
  );
};

export default AppRoutes;
