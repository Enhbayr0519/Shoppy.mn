import React from "react";

import "./style.css"

export const Search = props => {
    return (
        <>
            <input
                className="search-box"
                type="search"
                onChange={props.onSearch}
                placeholder="Робот хайх..."
            />
        </>
    )
}