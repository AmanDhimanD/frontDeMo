import React, { useEffect, useRef, useState } from 'react';
import { CgMenuGridO, CgClose } from 'react-icons/cg';
import { FiSettings } from 'react-icons/fi';
import { RiSearchLine } from 'react-icons/ri';
import { VscGithub, VscTag } from 'react-icons/vsc';
import { FaSun, FaMoon } from 'react-icons/fa';
import CustomTooltip from '../Assets/Tooltip/CustomTooltip'
import Logo from '../Assets/logo.png'


const Navbar = ({ toggleTheme }) => {

    const searchInputRef = useRef(null);
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.ctrlKey && event.key === 'k') {
                event.preventDefault();
                searchInputRef.current.focus();
            }
        };

        document.addEventListener('keydown', handleKeyDown);

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, []);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const handleThemeToggle = () => {
        toggleTheme();
        setIsDarkMode(!isDarkMode)
    };

    return (
        <nav className="p-5">
            <div className="container flex items-center justify-between mx-auto">
                <a href="/" className="flex items-center font-bold text-3xl">
                    <img
                        src={Logo} // Replace with the path to your logo PNG image
                        alt="FrontMock"
                        width={90} // Set the desired width of the logo
                        height={20} // Set the desired height of the logo
                    />
                    Front<span className="text-[#FCCD04]">Mock</span>
                </a>

                {/* Search */}
                <div className="hidden sm:flex items-center w-1/3">
                    <div className="relative flex items-center w-full">
                        <input
                            type="text"
                            placeholder="Search"
                            className="bg-gray-900 px-2 py-1 rounded-lg mr-2 w-full"
                            ref={searchInputRef}
                        />
                        <button className="text-white bg-gray-800 px-4 py-2 rounded-lg">
                            <RiSearchLine className="text-gray-500" />
                        </button>
                    </div>
                </div>

                {/* Mobile navigation */}
                <div className="sm:hidden relative ">
                    <button
                        className=" mx-2 hover:text-gray-200"
                        onClick={toggleMobileMenu}
                        aria-label="Toggle mobile menu"
                    >
                        {isMobileMenuOpen ? <CgClose /> : <CgMenuGridO />}
                    </button>
                    {isMobileMenuOpen && (
                        <div className="fixed top-0 left-0 w-screen h-screen bg-gray-900 bg-opacity-90 text-white">
                            <div className="flex flex-col justify-center items-center h-full">
                                <button
                                    className="text-white absolute top-0 right-0 m-4"
                                    onClick={toggleMobileMenu}
                                    aria-label="Close mobile menu"
                                >
                                    <CgClose size={24} />
                                </button>
                                <a href="" className="block my-2">
                                    <FiSettings className="inline-block mr-1" />
                                    v1.0.9
                                </a>
                                <a href="https://github.com/AmanDhimanD/frontend-demo" className="block my-2" target='_blank'>
                                    Github <VscGithub />
                                </a>
                            </div>
                        </div>
                    )}
                </div>

                {/* Desktop navigation */}
                <div className="hidden sm:block">
                    <a
                        href=""
                        className="mx-2 hover:text-gray-200"
                        style={{ display: 'inline-flex', alignItems: 'center' }}
                    >
                        <VscTag style={{ marginRight: '0.25em', fontSize: '1.6em' }} /> v1.0.9
                    </a>
                    <a
                        href="https://github.com/AmanDhimanD/frontend-demo"
                        className="mx-2 hover:text-gray-200"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ display: 'inline-flex', alignItems: 'center' }}
                    >
                        <CustomTooltip text="Github">
                            <VscGithub style={{ marginRight: '0.25em', fontSize: '1.6em' }} />
                        </CustomTooltip>
                    </a>
                    <CustomTooltip text={`${isDarkMode ? 'Dark Mode' : 'Light Mode'}`}>
                        <button
                            className=" px-4 py-2 rounded-lg text-white"
                            onClick={handleThemeToggle}
                            style={{ display: 'inline-flex', alignItems: 'center' }}
                        >
                            {isDarkMode ? <FaSun style={{ marginRight: '0.25em', fontSize: '1.6em', color: 'white' }} /> : <FaMoon style={{ marginRight: '0.25em', fontSize: '1.6em', color: 'black' }} />}
                        </button>
                    </CustomTooltip>
                </div>

            </div>
        </nav>
    );
};

export default Navbar;
