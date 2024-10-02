import React from "react";
import '../styles.css';

export default function Footer() {
    const currdate = new Date().getFullYear();
    return(
        <div className="footer">
            <p className="footer-text">
               © {currdate} Moviedux, All rights are reserved.
            </p>
        </div>
    )
}