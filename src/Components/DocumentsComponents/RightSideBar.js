import React from "react";
import { RightSidebarData } from '../../Constants/RightSidebarData';

// Right-side navigation component
const RightSideBar = () => {
    return (
        <div className="w-full md:w-1/4">
            <ul className="p-4 fixed">
                <h1>want to change</h1>
                {
                    RightSidebarData.map((item) => {
                        return (
                            <li key={item.id}><a href="#introduction" className="block py-2">{item.name}</a></li>
                        )
                    })
                }
            </ul>
        </div>
    );
};

export default RightSideBar;