import React from "react";

const NavBar = () => {
    return (
        <>
            <nav class="navbar navbar-expand-lg">
                <div class="container-fluid">
                    <a class="navbar-brand text-white" href="#">
                        Navbar
                    </a>
                    <button
                        class="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNavAltMarkup"
                        aria-controls="navbarNavAltMarkup"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                        <div class="navbar-nav text-white">
                            <a class="nav-link active text-white" aria-current="page" href="#">
                                Inicio
                            </a>
                            <a class="nav-link text-white" href="#">
                                Diseño Web
                            </a>
                            <a class="nav-link text-white" href="#">
                                Tiendas Online
                            </a>
                            <a class="nav-link text-white" aria-disabled="true">
                                Posicionamiento en Google
                            </a>
                            <a class="nav-link text-white" aria-disabled="true">
                                Contacto
                            </a>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default NavBar;
