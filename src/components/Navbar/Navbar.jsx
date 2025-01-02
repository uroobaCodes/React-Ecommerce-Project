import styles from "./navbar.module.css";
import { NavLink } from "react-router-dom";
import logo from "../../logo.svg";
import { FaShoppingCart } from "react-icons/fa";
import styled from "styled-components";
import { ButtonComponent } from "../../Styles/button";
import { NavWrapper } from "../../Styles/navwrapper";

const Navbar = () => {
  return (
    <>
      <NavWrapper
        className={`navbar navbar-expand-sm navbar-dark px-5-sm main-background`}
      >
        <NavLink to="/" className={`navbar-brand`}>
          <img src={logo} alt="logo" className={` ${styles.logo}`} />
        </NavLink>
        <ul className={`navbar-nav align-items-center`}>
          <li className={`nav-item`}>
            <NavLink to="/" className={`nav-link text-reset`}>
              {/* styled component cant change color but module can */}
              {/* <p className={`${styles["text-white"]}`}>Products</p> */}
              <p className={`text-white`}>Products</p>
            </NavLink>
          </li>
        </ul>
        <NavLink
          to="/cart"
          className={`ms-auto px-2 d-flex align-items-center justify-content-between text-decoration-none`}
        >
          <ButtonComponent>
            <FaShoppingCart />
            <p className={`${styles["cart-para"]}`}>My Cart</p>
          </ButtonComponent>
        </NavLink>
      </NavWrapper>
    </>
  );
};
export default Navbar;
