import React, { useState, useEffect } from "react";
import { auth } from "./Firebase/init";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import emailjs from "emailjs-com";
import Layout from "../src/components/layout";
import ModalContent from "../src/components/props/ModalsData/ModalContent";

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState({
    modal__about: false,
    modal__contact: false,
  });
  const [isContrast, setIsContrast] = useState(false);
  const [user, setUser] = useState(null);

  const toggleModal = (modalClass) => {
    setIsModalOpen((prev) => ({
      ...prev,
      [modalClass]: !prev[modalClass],
    }));
  };

  const toggleContrast = () => setIsContrast(!isContrast);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const register = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log("User registered:", userCredential.user);
      })
      .catch((error) => {
        console.error("Error registering user:", error.message);
      });
  };

  const logout = () => {
    signOut(auth)
      .then(() => console.log("User signed out"))
      .catch((error) => console.error("Error signing out:", error.message));
  };

  const handleFormSubmit = (formData) => {
    const serviceID = "service_mygmail";
    const templateID = "template_dfltemailtemp";
    const userID = "cePFoU8dvsaDAlAyz";

    // Ensure we return the promise from emailjs
    return emailjs
      .send(serviceID, templateID, formData, userID)
      .then((result) => {
        console.log("Email sent:", result.text);
        return result; // Return the result to confirm the promise chain
      })
      .catch((error) => {
        console.error("EmailJS error:", error.text);
        throw error; // Ensure errors are thrown to reject the promise
      });
  };

  return (
    <div className={isContrast ? "dark__mode" : ""}>
      <Layout
        toggleModal={toggleModal}
        isModalOpen={isModalOpen}
        toggleContrast={toggleContrast}
      />

      {isModalOpen.modal__contact && (
        <ModalContent
          modalClass="modal__contact"
          onFormSubmit={handleFormSubmit}
        />
      )}

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
