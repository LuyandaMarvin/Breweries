import React from 'react'
import logo from '../assets/logo.png'

const Navbar = () => {
    return (
        <div>
            <nav className='flex justify-center items-center h-32 bg-white text-black shadow-md font-mono rounded-b-xl  mx:w-full bg-amber-400' >
                <div>
                    <div className="">
                        <img src={logo} alt='#' />
                    </div>
                    <div>
                        <p className="text-xl pt-1">Breweries</p>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
