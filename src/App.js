import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { UserProvider } from "./context/UserContext";
import Register from "./Login_components/Register";
import Login from "./Login_components/Login";
import ForgetPassword from "./Login_components/ForgotPassword";
import ChangePassword from "./Login_components/ChangePassword";
import Success from "./Login_components/Success";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <BrowserRouter>
      <UserProvider>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgotPassword" element={<ForgetPassword />} />
         
          <Route path="/changepassword/:email" element={<ChangePassword />} />
          <Route path="/success" element={<Success />} />
        </Routes>
      </UserProvider>
    </BrowserRouter>
  );
}

export default App;
