import React from 'react'

const Search = ({searchBrewery }) => {
    return (
        <div className="pr-8 flex justify-between items-center h-32 md:flex grid mx-2 xs:ml-10 ">
            <div className="text-3xl font-mono p-4 ">
                <h1>Breweries</h1>
            </div>
            
            <div className="flex border-2 rounded float-right p-2">
                <input type="text" className="px-4 py-2 w-80" placeholder="Search brewery by name" onInput={searchBrewery}/>
                <span className="flex items-center justify-center px-4">
                    <svg className="w-6 h-6 text-gray-600" fill="currentColor" xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24">
                        <path
                            d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" />
                    </svg>
                </span>
            </div>
        </div>
    )
}

export default Search
