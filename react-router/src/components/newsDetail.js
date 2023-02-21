import React from "react";
import {useParams } from "react-router-dom";

export default function NewsDetail() {

    const {id} = useParams();

    return (
        <div>
            <h1>hier die DetailNews</h1>
            {id}
        </div>
    )

}