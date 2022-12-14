import React from "react";
import img404link from "../assets/img/404link.webp";
import { Link } from "react-router-dom";

export default function NotFound404() {
    return (
        <div className=" d-flex align-items-center justify-content-center vh-100  fixed-top ">
            <img className="img-fluid" src={img404link} alt="" />
            <div className="text-center">
                <h1 className="display-1 fw-bold">404</h1>
                <p className="fs-5">
                    <span className="text-danger">Opps!</span>
                </p>
                <p className="lead">
                    The page you’re looking for doesn’t exist.
                </p>
                <Link to="/" className="btn btn-primary">
                    Go Home
                </Link>
            </div>
        </div>
    );
}
