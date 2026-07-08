import { Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import AddEntry from "./pages/AddEntry";
import History from "./pages/History";
import Login from "./pages/Login";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import PublicRoute from "./components/PublicRoute.jsx";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/login"
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/add-entry"
          element={
            <ProtectedRoute>
              <AddEntry />
            </ProtectedRoute>
          }
        />
        <Route
          path="/history"
          element={
            <ProtectedRoute>
              <History />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  );
}

export default App;
