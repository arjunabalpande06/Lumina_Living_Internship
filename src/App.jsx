import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ExploreSection from "./components/ExploreSection";
import ContactSection from "./components/ContactSection";
import ReviewSection from "./components/ReviewSection";
import FooterSection from "./components/FooterSection";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Welcome from "./components/Welcome";
import Profile from "./components/Profile";

function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <ExploreSection />
      <ReviewSection />
      <ContactSection />
      <FooterSection />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;