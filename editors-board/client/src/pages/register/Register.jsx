import axios from "axios";
import { useState } from "react";

import "./register.css";

export default function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [lengthValidation, setLengthValidation] = useState(false);
  const [mailValidation, setMailValidation] = useState(false);
  const [passValidation, setPassValidation] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    setLengthValidation(false);
    setMailValidation(false);
    setPassValidation(false);

    if (username.length < 6 || username.indexOf(" ") > -1) {
      setLengthValidation(true);
      return;
    }
    if (email.indexOf("@") === -1 || email.indexOf(".") === -1) {
      setMailValidation(true);
      return;
    }
    if (password.length < 6) {
      setPassValidation(true);
      return;
    }

    try {
      const res = await axios.post("/auth/register", {
        username,
        email,
        password,
      });
      res.data && window.location.replace("/login");
    } catch (err) {
      setError(true);
    }
  };
  return (
    <div className="register">
      <span className="registerTitle">Register</span>
      <form
        className="registerForm"
        onSubmit={handleSubmit}
        autoComplete="new-password"
      >
        <label>Korisničko ime</label>
        <input
          type="text"
          autoComplete="new-password"
          className="registerInput"
          placeholder="Unesi korisnicko ime..."
          onChange={(e) => setUsername(e.target.value)}
        />
        <label>Email</label>
        <input
          type="text"
          autoComplete="new-password"
          className="registerInput"
          placeholder="Unesi email..."
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Lozinka</label>
        <input
          type="password"
          autoComplete="new-password"
          className="registerInput"
          placeholder="Unesi lozinku..."
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="text"
          autoComplete="new-password"
          style={{ display: "none" }}
        />
        <button className="registerButton" type="submit">
          Registruj se
        </button>
        {error && (
          <span
            style={{ color: "white", textAlign: "center", marginTop: "10px" }}
          >
            Korisničko ime ili email vec postoji!
          </span>
        )}
        {lengthValidation && (
          <span
            style={{ color: "white", textAlign: "center", marginTop: "10px" }}
          >
            Korisničko ime ne smije biti kraće od 6 karaktera
          </span>
        )}
        {mailValidation && (
          <span
            style={{ color: "white", textAlign: "center", marginTop: "10px" }}
          >
            Niste unjeli valjanu email adresu
          </span>
        )}
        {passValidation && (
          <span
            style={{ color: "white", textAlign: "center", marginTop: "10px" }}
          >
            Lozinka ne smije sadržvati manje od 6 karaktera
          </span>
        )}
      </form>
    </div>
  );
}
