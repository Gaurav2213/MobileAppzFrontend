import { Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import ForgotPasswordPage from "./pages/ForgotPasswordPage/ForgotPasswordPage";
import ResetPasswordPage from "./pages/ResetPasswordPage/ResetPasswordPage";
import VerifyEmailPage from "./pages/VerifyEmailPage/VerifyEmailPage";
import DashboardPage from "./pages/DashboardPage/DashboardPage";
import ReportFormPage from "./pages/ReportFormPage/ReportFormPage";
import HeatmapPage from "./pages/HeatmapPage/HeatmapPage";
import AdminPanelPage from "./pages/AdminPanelPage/AdminPanelPage";

import "./index.css";

function App() {
  return (
    <>
      <Header />
      <main style={{ padding: "2rem", maxWidth: "1280px", margin: "0 auto" }}>
        <Routes>
          {/* Public routes */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/forgot-password" element={<ForgotPasswordPage />} />
          <Route path="/reset-password" element={<ResetPasswordPage />} />
          <Route path="/verify-email" element={<VerifyEmailPage />} />

          {/* TODO: Add Protected route loginc */}
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/report" element={<ReportFormPage />} />
          <Route path="/heatmap" element={<HeatmapPage />} />
          <Route path="/admin" element={<AdminPanelPage />} />
          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
export default App;
