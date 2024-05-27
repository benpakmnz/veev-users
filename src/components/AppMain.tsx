import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import UsersList from "../Pages/Users/UsersList";
import CookiesPage from "../Pages/Cookies";
import NotificationsPage from "../Pages/Notifications";
import GeneralPoliciesPage from "../Pages/GeneralPolicies";
import CustomShapes from "./CustomShapes";

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
      <CustomShapes />
    </main>
  );
};

export default AppMain;
