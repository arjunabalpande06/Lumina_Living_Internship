import { useState } from "react";
import { Link } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import "./Signup.css";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../firebase";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
  const userCredential =
    await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

  const user = userCredential.user;

  await setDoc(doc(db, "users", user.uid), {
    uid: user.uid,
    name: name,
    email: email,
    createdAt: new Date(),
  });

  alert("Account Created Successfully!");

} catch (error) {
  alert(error.message);
} };

  return (
    <div className="signup-page">
      <div className="signup-container">

        <div className="signup-image-section">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3135/3135789.png"
            alt="Signup Illustration"
            className="signup-image"
          />
        </div>

        <div className="signup-card">
          <h1>Create Account</h1>
          <p>Join Lumina Living today</p>

          <form onSubmit={handleSignup}>

            <input
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) =>
                setName(e.target.value)
              }
            />

            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) =>
                setEmail(e.target.value)
              }
            />

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) =>
                setPassword(e.target.value)
              }
            />

            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) =>
                setConfirmPassword(e.target.value)
              }
            />

            <button type="submit">
              Sign Up
            </button>

          </form>

          <div className="signup-footer">
            Already have an account?

            <Link
              to="/login"
              className="login-link"
            >
              {" "}Login
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Signup;