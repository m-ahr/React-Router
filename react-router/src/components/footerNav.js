import React from "react";
import { Link } from "react-router-dom";

export default function FooterNav() {
    return (
        <footer>
            <hr/>
            <Link to="/home">Startseite</Link>
             | 
            <Link to="/newsList">Übersicht</Link>
        </footer>
    )

}