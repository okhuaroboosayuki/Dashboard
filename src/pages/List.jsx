import React from "react";
import { Outlet } from "react-router-dom";

function List() {
    return (
        <div className="list">
            <h1>List</h1>
            <Outlet />
        </div>
    )
}

export default List;