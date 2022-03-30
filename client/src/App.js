import { BrowserRouter, Routes, Route } from "react-router-dom";

// styles
import "./App.css";
// pages & components
import { Admin, Home, Info } from "./pages";
import { Navbar } from "./components";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/info" element={<Info />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
