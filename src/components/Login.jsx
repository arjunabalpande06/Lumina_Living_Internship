import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import Navbar from "../components/Navbar";
import FooterSection from "../components/FooterSection";
import "./Login.css";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {

 e.preventDefault();

 try {

   await signInWithEmailAndPassword(
     auth,
     email,
     password
   );


   alert("Login Successful!");

   navigate("/welcome");


 }

 catch(error){

   alert(error.message);

 }

};

  return (
    <>
      <Navbar />

      <div className="login-page">
        <div className="login-container">

          <div className="login-image-section">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
              alt="Login Illustration"
              className="login-image"
            />
          </div>

          <div className="login-card">
            <h1>Welcome Back</h1>
            <p>Login to your account</p>

            <form onSubmit={handleLogin}>
              <input
                type="email"
                placeholder="Enter Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />

              <input
                type="password"
                placeholder="Enter Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />

              <button type="submit">
                Login
              </button>
            </form>

            <div className="login-footer">
              Don't have an account?
              <Link to="/signup" className="signup-link">
                {" "}Sign Up
              </Link>
            </div>
          </div>

        </div>
      </div>

      <FooterSection />
    </>
  );
}

export default Login;