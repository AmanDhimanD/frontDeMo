import React from 'react';
import { RiArrowRightSLine } from 'react-icons/ri';
import { LeftSidebarData } from '../../Constants/LeftSidebarData';
import { Link } from 'react-router-dom';

// Sidebar component
const LeftSideBar = () => {

    return (
        <div className="w-full md:w-1/4 cursor-pointer ">
            <ul className="p-4 fixed">
                <li className="py-2">
                    <h2 className="text-xl font-semibold mb-2 ">
                        <Link to='/docs'>
                            Getting Started
                        </Link>
                    </h2>
                </li>
                <li className="py-2">
                    <h2 className="text-xl font-semibold  mb-2 text-[#fbc70a] ">
                        Functions
                    </h2>
                    {
                        LeftSidebarData.map((item) => {
                            return (

                                <ul className="ml-4" key={item.id}>
                                    <li className="py-2">
                                        <RiArrowRightSLine className="inline-block mr-2" />
                                        <a href={`#${item.page}`}>
                                            {item.name}
                                        </a>
                                    </li>
                                </ul>
                            )
                        })
                    }
                </li>
                <li className="py-2">
                    <h2 className="text-xl font-semibold  mb-2 text-[#fbc70a] ">
                        Examples
                    </h2>
                </li>
                {/* Add more sections as needed */}
            </ul>
        </div>
    );
};

export default LeftSideBar;
