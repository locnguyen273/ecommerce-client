import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginAdmin from "./pages/admin/Login";
import RegisterAdmin from "./pages/admin/Register";
import Home from "./pages/client/Home";
import Dashboard from "./pages/admin/Dashboard";
import NotFound from "./pages/NotFound";
import AdminLayout from "./templates/admin";
import Customer from "./pages/admin/Customer";
import CustomerDetail from "./pages/admin/CustomerDetail";
import Product from "./pages/admin/Product";
import Brands from "./pages/admin/Brands";
import CategoryProduct from "./pages/admin/CategoryProduct";
import Colors from "./pages/admin/Colors";
import Loading from "./components/Loading";

function App() {
  return (
    <Router>
      <Loading />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />

        <Route element={<AdminLayout />}>
          <Route path="/admin-dashboard" element={<Dashboard />} />
          <Route path="/admin-customers" element={<Customer />} />
          <Route path="/admin-products" element={<Product />} />
          <Route path="/admin-brands" element={<Brands />} />
          <Route
            path="/admin-category-products"
            element={<CategoryProduct />}
          />
          <Route path="/admin-colors" element={<Colors />} />
          <Route path="/admin-customers/:id" element={<CustomerDetail />} />
        </Route>

        <Route path="/admin-login" element={<LoginAdmin />} />
        <Route path="/admin-register" element={<RegisterAdmin />} />
      </Routes>
    </Router>
  );
}

export default App;
