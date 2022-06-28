import {BrowserRouter, Routes, Route} from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import ViewContacts from "./pages/ViewContacts";
import Navbar from "./components/Navbar";
import ViewContact from "./pages/ViewContact";
import AddContact from "./pages/AddContact";
import Logout from "./pages/Logout";
function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="register" element={<Register/>}></Route>
        <Route path="login" element={<Login/>}></Route>
        <Route path="logout" element={<Logout/>}></Route>
        <Route path="view_contacts" element={<ViewContacts/>}></Route>
        <Route path="view_contacts/:id" element={<ViewContact/>}></Route>
        <Route path="add_contact" element={<AddContact/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
