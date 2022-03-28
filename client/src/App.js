import { BrowserRouter, Routes, Route } from "react-router-dom";
// custom stuff
import { CarouselContextProvider } from "./context/CarouselContext";
// styles
import "./App.css";
// pages & components
import { Admin, Home, Info } from "./pages";
import { Navigation } from "./components";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <CarouselContextProvider>
          <Navigation />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/info" element={<Info />} />
            <Route path="/admin" element={<Admin />} />
          </Routes>
        </CarouselContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
