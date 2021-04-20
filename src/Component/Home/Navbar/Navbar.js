import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';


const Navbar = () => {
    const [loggedInUser] = useContext(UserContext)
    return (
        <div className="container">
            <nav class="navbar navbar-expand-lg navbar-light bg-light mt-2">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">Navbar</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <Link class="nav-link active ms-5" to="/" aria-current="page">Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link ms-5" to="/">Link</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link ms-5" to="/login">LogIn</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link ms-5" to="/admin">Dashboard</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link ms-5" to="/">{loggedInUser.name}</Link>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;