import { Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import AddEntry from "./pages/AddEntry";
import History from "./pages/History";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/add-entry" element={<AddEntry />} />
        <Route path="/history" element={<History />} />
      </Routes>
    </>
  );
}

export default App;
