import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import css from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbr = () => {
    return (
        <div>
            <Navbar bg="" variant={"dark"} expand="lg" fixed="bottom">
                <NavLink to="/home" activeClassName={css.activeLink}>
                    <Navbar.Brand><img className={css.icon}
                                       src="https://image.flaticon.com/icons/svg/181/181792.svg"
                                       alt=""/></Navbar.Brand>
                </NavLink>
                <NavLink to="/dialogs" activeClassName={css.activeLink}>
                    <Navbar.Brand><img className={css.icon}
                                       src="https://image.flaticon.com/icons/png/512/181/181535.png"
                                       alt=""/></Navbar.Brand>
                </NavLink>
                <NavLink to="/add" activeClassName={css.activeLink}>
                    <Navbar.Brand><img className={css.icon}
                                       src="https://image.flaticon.com/icons/svg/181/181672.svg"
                                       alt=""/></Navbar.Brand>
                </NavLink>
                <Navbar.Toggle className={css.burger} aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <NavLink to="/profile">Мой профиль</NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default Navbr;