import CartWidget from "../CartWidget/CartWidget";
import React, { useEffect } from 'react';
import { NavLink, Link } from "react-router-dom";

const NavBar = () => {

    useEffect(() => {
        const navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

        navbarBurgers.forEach(el => {
            el.addEventListener('click', () => {
                const target = el.dataset.target;
                const $target = document.getElementById(target);

                el.classList.toggle('is-active');
                $target.classList.toggle('is-active');
            });
        });

        return () => {
            navbarBurgers.forEach(el => {
                el.removeEventListener('click', () => {

                    const target = el.dataset.target;
                    const $target = document.getElementById(target);

                    // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
                    el.classList.toggle('is-active');
                    $target.classList.toggle('is-active');
                });
            });
        };
    }, []);

    return (
        <nav className="hero">
            <h3>Luxe Loom</h3>

            <nav className="navbar" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    <a className="navbar-item" href="https://bulma.io">
                        <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" />
                    </a>

                    <a role="button" className="navbar-burger" id="burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>

                <div id="navbarBasicExample" className="navbar-menu">
                    <div className="navbar-start">
                        <Link to={'/'} className="navbar-item">
                            Home
                        </Link>

                        <div className="navbar-item has-dropdown is-hoverable">
                            <NavLink to={`/category/newarrival`} className="navbar-link">
                                New Arrivals
                            </NavLink>

                            <div className="navbar-dropdown">
                                <a className="navbar-item">
                                    About
                                </a>
                                <a className="navbar-item">
                                    Jobs
                                </a>
                                <a className="navbar-item">
                                    Contact
                                </a>
                                <hr className="navbar-divider" />
                                <a className="navbar-item">
                                    Report an issue
                                </a>
                            </div>
                        </div>

                        <div className="navbar-item has-dropdown is-hoverable">
                            <NavLink to={`/category/prendas`} className="navbar-link">
                                Prendas
                            </NavLink>

                            <div className="navbar-dropdown">
                                <a className="navbar-item">
                                    About
                                </a>
                                <a className="navbar-item">
                                    Jobs
                                </a>
                                <a className="navbar-item">
                                    Contact
                                </a>
                                <hr className="navbar-divider" />
                                <a className="navbar-item">
                                    Report an issue
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="navbar-end">
                        <div className="navbar-item">
                            <div className="buttons">
                                <a className="button is-primary carrito">
                                    <CartWidget />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>


        </nav>
    )
}

export default NavBar;