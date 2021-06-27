import { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import "./topbar.css";
import logo from "../../assets/924.png";
import avatar from "../../assets/avatar.jpg";

export default function TopBar() {
  const { user, dispatch } = useContext(Context);
  const PF = "http://localhost:5000/images/";

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };
  return (
    <div className="top">
      <div className="topLeft">
        <img className="logo" src={logo} alt="" />
        <Link className="link" to="/">
          <h3>planinarenje.ba</h3>
        </Link>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/">
              POČETNA
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/">
              O NAMA
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/">
              KONTAKT
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/write">
              NAPIŠI
            </Link>
          </li>
        </ul>
      </div>
      <div className="topRight">
        <div className="topListItem link" onClick={handleLogout}>
          {" "}
          {user && "LOGOUT"}
        </div>

        {user ? (
          <div className="user-info">
            <img
              className="topImg"
              src={avatar || PF + user.profilePic}
              alt=""
            />
            <p>{user.username}</p>
          </div>
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <Link className="link" to="/login">
                LOGIN
              </Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/register">
                REGISTER
              </Link>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
}
