import { Route, Routes } from "react-router-dom";
import "./App.css";
import Heading from "./components/Heading";
import Cart from "./components/Cart";
import Home from "./components/Home";

function App() {
  return (
    <>
      <Heading />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
}

export default App;
