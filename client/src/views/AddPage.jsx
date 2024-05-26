import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Nav from "../components/Navbar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Add() {
    const [revenueData, setRevenueData] = useState({
        year: "",
        revenue: "",
    });

    const handleChangeInput = (event) => {
        const key = event.target.name;
        const value = event.target.value;
        setRevenueData({
            ...revenueData,
            [key]: value
        });
    };

    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios({
                url: "http://localhost:3000/addRev",
                method: "POST",
                data: revenueData,
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`
                }
            });
            setRevenueData(response.data);
            toast.success("Revenue data added successfully!");
            navigate('/');
        } catch (error) {
            console.log(error);
            toast.error("An error occurred while adding revenue data.");
        }
    };

    return (
        <div>
            <Nav />
            <section className="vh-100">
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                            <div className="card custom-card text-white" style={{ borderRadius: "1rem" }}>
                                <div className="card-body p-5 text-center">
                                    <div className="mb-md-5 mt-md-4 pb-5">
                                        <h2 className="fw-bold mb-2 text-uppercase">Add Revenue</h2>
                                        <form onSubmit={handleSubmit}>
                                            <div>
                                                <p className="form-outline form-white fw-bold mb-4 text-uppercase">Year</p>
                                                <input type="text" name='year' className="form-control form-control-lg custom-input" value={revenueData.year} onChange={handleChangeInput} />
                                                <p className="form-outline form-white fw-bold mb-4 text-uppercase">Revenue</p>
                                                <input type="text" name='revenue' className="form-control form-control-lg custom-input" value={revenueData.revenue} onChange={handleChangeInput} />
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
            <ToastContainer />
        </div>
    );
}