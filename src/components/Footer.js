import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <footer className="px-4 w-full max-w-screen-xl mx-auto block">
            <div className='relative flex items-center pb-4 pt-6 mt-6 text-base flex-wrap lg:flex-row flex-col-reverse border-t border-slate-300  '>
                <div className='flex list-none mb-2 pt-2 flex-wrap justify-start '>
                    <div className='mt-2 flex items-center lg:mt-0'>
                        <Link className=''><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="gray" className='h-6 w-6 mb-1' viewBox="0 0 16 16">
                            <path d="M8 16c3.314 0 6-2 6-5.5 0-1.5-.5-4-2.5-6 .25 1.5-1.25 2-1.25 2C11 4 9 .5 6 0c.357 2 .5 4-2 6-1.25 1-2 2.729-2 4.5C2 14 4.686 16 8 16Zm0-1c-1.657 0-3-1-3-2.75 0-.75.25-2 1.25-3C6.125 10 7 10.5 7 10.5c-.375-1.25.5-3.25 2-3.5-.179 1-.25 2 1 3 .625.5 1 1.364 1 2.25C11 14 9.657 15 8 15Z" />
                        </svg></Link>
                        <span className='ml-2 text-sm font-bold text-slate-400'>
                            © 2023 Tensei, Inc.
                        </span>
                    </div>
                </div>
                <div className='lg:w-2/3 w-full block '>
                    <ul className='flex list-none mb-2 lg:mb-0 justify-center lg:justify-between flex-wrap w-full lg:ml-20 pl-0 mt-0'>
                        <li className='mr-4 lg:mr-0'>
                            <Link className=' text-slate-400 hover:underline text-sm font-bold '>Terms</Link>
                        </li>
                        <li className='mr-4 lg:mr-0'>
                            <Link className='text-slate-400 hover:underline text-sm font-bold '>Privacy </Link>
                        </li>
                        <li className='mr-4 lg:mr-0'>
                            <Link className='text-slate-400 hover:underline text-sm font-bold'> Security </Link>
                        </li>
                        <li className='mr-4 lg:mr-0'>
                            <Link className='text-slate-400 hover:underline text-sm font-bold '>Status</Link>
                        </li>
                        <li className='mr-4 lg:mr-0'>
                            <Link className='text-slate-400 hover:underline text-sm font-bold '>Docs</Link>
                        </li>
                        <li className='mr-4 lg:mr-0'>
                            <Link className='text-slate-400 hover:underline text-sm font-bold '>Contact</Link>
                        </li>
                        <li className='mr-4 lg:mr-0'>
                            <Link className='text-slate-400 hover:underline text-sm font-bold '>React</Link>
                        </li>
                        <li className='mr-4 lg:mr-0'>
                            <Link className='text-slate-400 hover:underline text-sm font-bold '>Pricing</Link>
                        </li>
                        <li className='mr-4 lg:mr-0'>
                            <Link className='text-slate-400 hover:underline text-sm font-bold '>About</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </footer >
    )
}

export default Footer