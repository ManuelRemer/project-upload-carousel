import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
// styles
import "./App.css";
// custom stuff
import { useAdminContext } from "./hooks/useAdminContext";
// pages & components
import { Admin, Home, Info } from "./pages";
import { Navbar } from "./components";
import { useEffect } from "react";

function App() {
  const { admin } = useAdminContext();

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={admin ? <Home /> : <Navigate to="/admin" replace />}
          />
          <Route path="/info" element={<Info />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
