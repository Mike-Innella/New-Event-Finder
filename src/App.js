// src/App.js
import React, { useState, useEffect } from "react";
import Layout from "../src/components/layout";
import { auth } from "./Firebase/init"; // Assuming auth is initialized in init.js
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState({
    modal__about: false,
    modal__contact: false,
  });
  const [isContrast, setIsContrast] = useState(false);
  const [user, setUser] = useState(null);

  // Handle modal toggle
  const toggleModal = (modalClass) => {
    setIsModalOpen((prevState) => ({
      ...prevState,
      [modalClass]: !prevState[modalClass],
    }));
  };

  // Handle dark/light mode toggle
  const toggleContrast = () => {
    setIsContrast((prevContrast) => !prevContrast);
  };

  // Register user with email and password
  const register = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // User created successfully
        const user = userCredential.user;
        // Log this conditionally based on environment
        if (process.env.NODE_ENV === "development") {
          console.log("User registered:", user);
        }
      })
      .catch((error) => {
        console.error("Error registering user:", error.message);
      });
  };

  // Listen to auth state changes (e.g., when user signs in or signs out)
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser); // Update user state
    });

    // Cleanup on component unmount
    return () => unsubscribe();
  }, [auth]); // Add auth as dependency to ensure proper updates

  // Sign out user
  const logout = () => {
    signOut(auth)
      .then(() => {
        if (process.env.NODE_ENV === "development") {
          console.log("User signed out");
        }
      })
      .catch((error) => {
        console.error("Error signing out:", error.message);
      });
  };

  return (
    <div className={isContrast ? "dark__mode" : ""}>
      <Layout
        toggleModal={toggleModal}
        isModalOpen={isModalOpen}
        toggleContrast={toggleContrast}
      />
      {/* Example of handling user registration */}
      <button onClick={() => register("email@email.com", "password123")}>
        Register
      </button>

      {/* Example of showing logout button if user is logged in */}
      {user ? (
        <div>
          <p>Welcome, {user.email}</p>
          <button onClick={logout}>Logout</button>
        </div>
      ) : (
        <p>Please log in</p>
      )}
    </div>
  );
};

export default App;
export { auth };
