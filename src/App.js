// Dependecy
import { Route, Routes } from "react-router-dom";
// Components
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Landing from "./components/Landing";
import Login from "./components/Login";
import Register from "./components/Register";
// Components
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
