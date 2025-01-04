import React from "react";

function Menu() {
    return (
        <div>
            <ul className="nav justify-content-end">
                <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">
                        Active
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">
                        Link
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">
                        Link
                    </a>
                </li>
                <li className="nav-item">    
                    <a className="nav-link disabled">Disabled</a>
                </li>
            </ul>
        </div>
    );
}

export default Menu;