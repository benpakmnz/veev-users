import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import UsersList from "../Pages/Users/UsersList";
import CookiesPage from "../Pages/Cookies";
import NotificationsPage from "../Pages/Notifications";
import GeneralPoliciesPage from "../Pages/GeneralPolicies";
import CustomShapes from "./CustomShapes";
import { Canvas } from "@react-three/fiber";

const AppMain: React.FC = () => {
  return (
    <main>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<UsersList />} />
          <Route path="/cookies" element={<CookiesPage />} />
          <Route path="/notifications" element={<NotificationsPage />} />
          <Route path="/general-policies" element={<GeneralPoliciesPage />} />
        </Routes>
      </BrowserRouter>
      <Canvas>
        <ambientLight intensity={0.6} />
        <spotLight position={[20, 10, 10]} angle={0} penumbra={10} />
        <pointLight />
        <CustomShapes />
      </Canvas>
    </main>
  );
};

export default AppMain;
