import { BrowserRouter, Routes, Route } from "react-router-dom";
// custom stuff
import { ColorThemeContextProvider } from "./context/ColorThemeContext";
// styles
import "./App.css";
// pages & components
import { Admin, Home, Info } from "./pages";
import { Navbar } from "./components";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ColorThemeContextProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/info" element={<Info />} />
            <Route path="/admin" element={<Admin />} />
          </Routes>
        </ColorThemeContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
