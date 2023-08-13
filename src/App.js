import Signin from "./Components/login";
import Profile from "./Components/Profile";
import Signup from "./Components/Signup";
import { Routes, Route } from "react-router-dom";
import "./styles.css";
import Dataentryform from "./Components/NewBlog";
import Home from "./Components/Home";
import { PrivateRoutes } from "./PrivateRoutes";
import Card from "./Components/Card";
export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/newblog" element={<Dataentryform />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}
