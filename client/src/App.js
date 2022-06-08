import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// styles
import "./App.css";
// custom stuff
import { useFetch } from "./hooks/useFetch";
// pages & components
import { Admin, Home, Info } from "./pages";
import { Navbar } from "./components";
import { useEffect, useState } from "react";

function App() {
  const [isReady, setIsReady] = useState(false);
  const [adminExists, setAdminExists] = useState(false);

  const { data: admin } = useFetch("/api/v1/admin/check", "GET");

  const handleAdminExists = () => {
    setAdminExists(true);
  };

  useEffect(() => {
    if (admin !== null) {
      setIsReady(true);
      setAdminExists(admin);
    }
  }, [admin]);

  return (
    <div className="App">
      {isReady && (
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route
              path="/"
              element={adminExists ? <Home /> : <Navigate to="/admin" />}
            />
            <Route
              path="/info"
              element={adminExists ? <Info /> : <Navigate to="/admin" />}
            />
            <Route
              path="/admin"
              element={
                <Admin handleAdminExists={handleAdminExists} adminExists />
              }
            />
          </Routes>
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
