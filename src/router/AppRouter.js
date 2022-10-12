import React, { useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Login from "../views/Login";
import CalendarPage from "../views/CalendarPage";

export const AppRouter = () => {
  const [authStatus, setAuthStatus] = useState(true);
  return (
    <Routes>
      {authStatus === false ? (
        <Route path="/auth/*" element={<Login />} />
      ) : (
        <Route path="/*" element={<CalendarPage />} />
      )}

      <Route path="/*" element={<Navigate to="/auth/login" /> } />
    </Routes>
  );
};
