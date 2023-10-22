import React from "react";
import 'bootstrap/dist/css/bootstrap.css';

function Header(){
    return(
        <nav className="navbar navbar-expand-lg navbar-light justify-content-center">
            <div className="container-fluid ">
                <a className="navbar-brand" href="#bookish">bookish</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo01" >
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item"> <a class="nav-link" href="#profile">Home</a></li>
                    <li className="nav-item"> <a class="nav-link" href="#jonour">Find A Book </a> </li>
                    <li className="nav-item"><a class="nav-link" href="#sell-book">Sell A Book</a></li>
                    <li className="nav-item"><a class="nav-link" href="#facilities">About Us</a></li>
                    <li className="nav-item"><a class="nav-link" href="#Footer">Contact Us</a></li>
                </ul>
                </div>
            </div>
        </nav>
    );

}

export default Header;