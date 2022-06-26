import {BrowserRouter, Routes, Route} from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import ViewContacts from "./pages/ViewContacts";
import Navbar from "./components/Navbar";
import ViewContact from "./pages/ViewContact";

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="register" element={<Register/>}></Route>
        <Route path="login" element={<Login/>}></Route>
        <Route path="view_contacts" element={<ViewContacts/>}></Route>
        <Route path="view_contacts/:id" element={<ViewContact/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
