import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../App.css'; 

export default function Nav() {
    let nav = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('token');
        toast.success("Logout successful!");
        setTimeout(() => {
            nav('/login');
        }, 2000);
    };

    return (
        <>
            <ToastContainer />
            <nav className="navbar navbar-expand-lg custom-navbar">
                <div className="container-fluid">
                    <Link to={'/'} className="navbar-brand" href="#">
                        Chart
                    </Link>
                    <button
                        data-mdb-collapse-init=""
                        className="navbar-toggler"
                        type="button"
                        data-mdb-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <i className="fas fa-bars" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav me-auto">
                            <li className="nav-item">
                                <Link to={'/'} className="nav-link active" aria-current="page" href="#">
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to={'/add'} className="nav-link" href="#">
                                    Add Revenue
                                </Link>
                            </li>
                        </ul>
                        <button className="btn custom-btn btn-lg px-5" onClick={handleLogout}>
                            Logout
                        </button>
                    </div>
                </div>
            </nav>
        </>
    );
}