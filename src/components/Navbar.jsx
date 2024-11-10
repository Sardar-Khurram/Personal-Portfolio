import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const [isSidebarOpen, setSidebarOpen] = useState(false);
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

    const toggleSidebar = () => {
        setSidebarOpen(!isSidebarOpen);
    };

    useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    return (
        <nav className="w-full sticky top-0 backdrop-blur bg-background/50 h-[10vh] flex items-center justify-between px-10 border-gray-300 border-b">
            <div>
                <NavLink to="/" className="text-xl md:text-2xl font-bold">&lt;/Sardar Khurram&gt;</NavLink>
            </div>
            <ul className="hidden md:flex gap-4 items-center justify-center">
                <li><NavLink to="/" className={({ isActive }) => isActive ? 'navStyle' : ''}>Home</NavLink></li>
                <li><NavLink to="/about" className={({ isActive }) => isActive ? 'navStyle' : ''}>About</NavLink></li>
                <li><NavLink to="/contact" className={({ isActive }) => isActive ? 'navStyle' : ''}>Contact</NavLink></li>
                <li><NavLink to="/skills" className={({ isActive }) => isActive ? 'navStyle' : ''}>Skills</NavLink></li>
                <li><NavLink to="/projects" className={({ isActive }) => isActive ? 'navStyle' : ''}>Projects</NavLink></li>
                <button onClick={toggleTheme} className="p-2 rounded-md">
                    <img className='w-8  ' src={`${theme === 'light' ? 'Dark.png' : 'light.png'}`} alt="" />
                </button>
            </ul>
            <div className="flex items-center justify-center md:hidden">
                <svg
                    onClick={toggleSidebar}
                    className="h-10 w-8 cursor-pointer"
                    fill="none"
                    stroke="black"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                </svg>
                <button onClick={toggleTheme} className="p-2 rounded-md">
                    <img className='w-8  ' src={`${theme === 'light' ? 'Dark.png' : 'light.png'}`} alt="" />
                </button>
            </div>

            {/* Sidebar */}
            <div className={`fixed top-0 left-0 z-40 w-64 h-screen p-4 transition-transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} bg-white dark:bg-gray-800`}>
                <button
                    type="button"
                    onClick={toggleSidebar}
                    className="text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-600 p-2 rounded-lg absolute top-2 right-2" >
                    <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path>
                    </svg>
                </button>
                <div className="py-8">
                    <ul className="space-y-4">
                        <li><NavLink to="/" onClick={toggleSidebar} className="text-xl font-bold  text-gray-900 dark:text-white">&lt;/Sardar Khurram&gt;</NavLink></li>
                        <li><NavLink to="/" onClick={toggleSidebar} className="block text-gray-900 dark:text-white">Home</NavLink></li>
                        <li><NavLink to="/about" onClick={toggleSidebar} className="block text-gray-900 dark:text-white">About</NavLink></li>
                        <li><NavLink to="/contact" onClick={toggleSidebar} className="block text-gray-900 dark:text-white">Contact</NavLink></li>
                        <li><NavLink to="/skills" onClick={toggleSidebar} className="block text-gray-900 dark:text-white">Skills</NavLink></li>
                        <li><NavLink to="/projects" onClick={toggleSidebar} className="block text-gray-900 dark:text-white">Projects</NavLink></li>

                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
