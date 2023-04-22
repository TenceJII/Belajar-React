import React from 'react'
import { Link } from "react-router-dom";
import image from 'assets/image/Mr.bear.jpg'

export const Header = ({ links }) => {
    return (
        <header>
            <nav className='max-w-screen-2xl mx-auto relative px-4 flex py-4 justify-between items-center border-b border-slate-300'>
                <Link to="/" className='flex items-center'>
                    <img src={image} className='mr-3 h-9 rounded-full sm:h-9' alt=""></img>
                    <span className='font-semibold text-2xl text-slate-900'>
                        TENSEI
                    </span>
                </Link>
                <div className='lg:hidden '>
                    <button className='navbar-test flex items-center text-teal-300 p-3'>
                        <svg className='block h-4 w-4 fill-current' viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <title>Mobile menu</title>
                            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                        </svg>
                    </button>
                </div>
                <ul className="hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 gap-10 -translate-x-1/2 lg:flex lg:mx-auto lg:items-center lg:w-auto lg:space-x-6">
                    {links.map((item, index) => (
                        <li key={index}>
                            <Link to={item.path} className="text-slate-800 font-bold text-sm" aria-current="page">{item.label}</Link>
                        </li>
                    ))}
                </ul>

                <Link to="/" className='hidden rounded-md lg:inline-block lg:ml-auto lg:mr-3 py-2 px-6 bg-slate-400 font-bold tracking-wide hover:tracking-tighter transform duration-200'>
                    SIGN
                </Link>
                <Link to="/" className='hidden rounded-md lg:inline-block lg:mr-3 py-2 px-6 bg-slate-400 font-bold tracking-wide hover:tracking-tighter transform duration-200'>
                    LOGIN
                </Link>

            </nav>
        </header >
    )
}
