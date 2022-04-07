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
  // const [admin, setAdmin] = useState(false);

  const {
    data: admin,
    isPending,
    error,
  } = useFetch("/api/v1/admin/check", "GET");

  // const checkAdmin = async () => {
  //   const res = await fetch("/api/v1/admin/check");
  //   const data = await res.json();
  //   setAdmin(data);
  //   setIsReady(true);
  //   return data;
  // };

  const handleAdmin = () => {};

  // checkAdmin();

  useEffect(() => {
    admin !== null && setIsReady(true);
  }, [admin]);

  return (
    <div className="App">
      {isReady && (
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route
              path="/"
              element={admin ? <Home /> : <Navigate to="/admin" />}
            />
            <Route path="/info" element={<Info />} />
            <Route
              path="/admin"
              element={<Admin handleAdmin={handleAdmin} />}
            />
          </Routes>
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
