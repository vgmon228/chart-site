import { useState } from "react";
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../App.css';

export default function Login() {
    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("");
    let nav = useNavigate();

    async function login(event) {
        event.preventDefault();
        try {
            let { data } = await axios({
                url: 'http://localhost:3000/login',
                method: 'POST',
                data: { email: email, password: password }
            });
            localStorage.setItem('token', data.access_token);
            toast.success("Login successful!");
            setTimeout(() => {
                nav('/');
            }, 2000);
        } catch (error) {
            toast.error("Login failed. Please check your credentials.");
        }
    }

    return (
        <>
            <ToastContainer />
            <section className="vh-100">
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                            <div className="card custom-card text-white" style={{ borderRadius: "1rem" }}>
                                <div className="card-body p-5 text-center">
                                    <div className="mb-md-5 mt-md-4 pb-5">
                                        <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
                                        <p className="text-white-50 mb-5">
                                            Please enter your login and password!
                                        </p>
                                        <form onSubmit={(e) => login(e)}>
                                            <div>
                                                <p className="form-outline form-white fw-bold mb-4 text-uppercase">Email</p>
                                                <input type="text" name='email' className="form-control form-control-lg custom-input" value={email} onChange={(e) => setEmail(e.target.value)} />
                                                <p className="form-outline form-white fw-bold mb-4 text-uppercase">Password</p>
                                                <input type="text" name='password' className="form-control form-control-lg custom-input" value={password} onChange={(e) => setPassword(e.target.value)} />
                                                <p></p>
                                                <button className="btn custom-btn btn-lg px-5" type="submit">Submit</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}