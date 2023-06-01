import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginAdmin from "./pages/admin/Login";
import RegisterAdmin from "./pages/admin/Register";
import Home from "./pages/client/Home";
import Dashboard from "./pages/admin/Dashboard";
import NotFound from "./pages/NotFound";
import AdminLayout from "./templates/admin";
import Customer from "./pages/admin/Customer";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />

        <Route element={<AdminLayout />}>
          <Route path="/admin-dashboard" element={<Dashboard />} />
          <Route path="/admin-customers" element={<Customer />} />
        </Route>
        
        <Route path="/admin-login" element={<LoginAdmin />} />
        <Route path="/admin-register" element={<RegisterAdmin />} />
      </Routes>
    </Router>
  );
}

export default App;
