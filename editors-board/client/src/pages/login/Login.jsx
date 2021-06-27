import axios from "axios";
import { useContext, useRef } from "react";
import { Context } from "../../context/Context";
import { useState } from "react";

import "./login.css";

export default function Login() {
  const userRef = useRef();
  const passwordRef = useRef();
  const { dispatch, isFetching } = useContext(Context);
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("/auth/login", {
        username: userRef.current.value,
        password: passwordRef.current.value,
      });
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE" });
      setError(true);
    }
  };

  return (
    <div className="login">
      <span className="loginTitle">Login</span>
      <form
        className="loginForm"
        onSubmit={handleSubmit}
        type="hidden"
        value="prayer"
      >
        <label>Korisničko ime</label>
        <input
          type="text"
          autoComplete="new-password"
          name="username-input"
          className="loginInput"
          placeholder="Unesite korisnicko ime..."
          ref={userRef}
        />
        <label>Lozinka</label>
        <input
          type="password"
          name="password-input"
          autoComplete="new-password"
          className="loginInput"
          placeholder="Unesite lozinku..."
          ref={passwordRef}
        />
        <button className="loginButton" type="submit" disabled={isFetching}>
          Login
        </button>
        {error && (
          <span
            style={{ color: "red", textAlign: "center", marginTop: "10px" }}
          >
            Korisničko ime ili email vec postoji!
          </span>
        )}
      </form>
    </div>
  );
}
