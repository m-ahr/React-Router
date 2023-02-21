import React from "react";
import { Link } from "react-router-dom";

export default function WetterList() {
    return (
        <div>
        <h1>News Übersicht</h1>
            <ul>
                <Link to="/news-detail/1"><li>Starker regen in Köln</li></Link>
                <Link to="/news-detail/2"><li>Bäckerei insolvent</li></Link>
                <Link to="/news-detail/3"><li>FC Bayern verliert vielleicht</li></Link>
                <Link to="/news-detail/4"><li>Der Wut Winter</li></Link>
            </ul>
        </div>
    )

}