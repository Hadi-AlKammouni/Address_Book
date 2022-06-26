import {BrowserRouter, Routes, Route} from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import ViewContacts from "./pages/ViewContacts";
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="register" element={<Register/>}></Route>
        <Route path="login" element={<Login/>}></Route>
        <Route path="view_contact/:id" element={<ViewContacts/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
