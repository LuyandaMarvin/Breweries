import React from 'react'

function Card({ breweryData}) {
    return (
        <div className= "rounded overflow-hidden shadow-sm rounded-xl p-4 md:ml-10 px-6 py-4 bg-gray-50 md:w-3/12 mb-10 mt-10">
            <p className="font-bold text-xl mb-2  text-ellipsis overflow-hidden ...">{breweryData.name}</p>
            <div className="grid grid-cols-2 gap-2">
                <p>Brewery Type :</p>                
                <p className="text-gray-700 text-base font-sans font-bold text-md">{breweryData.brewery_type}</p>
            </div>
            <div className="grid grid-cols-2 gap-2">
                <p>City :</p>                
                <p className="text-gray-700 text-base font-sans font-bold text-md ">{breweryData.city}</p>
            </div>
            <div className="grid grid-cols-2 gap-2">
                <p>Country:</p>                
                <p className="text-gray-700 text-base font-sans font-bold text-md ">{breweryData.country}</p>
            </div>
            <div className="grid grid-cols-2 gap-2">
                <p>Phone :</p>                
                <p className="text-gray-700 text-base font-sans font-bold text-md ">{breweryData.phone}</p>
            </div>
            <div className="grid grid-cols-2 gap-2">
                <p>Postal Code :</p>                
                <p className="text-gray-700 text-base font-sans font-bold text-md ">{breweryData.postal_code}</p>
            </div>
            <div className="grid grid-cols-2 gap-2">
                <p>Website :</p>                
                <a href= {breweryData.website_url} className="text-gray-700 text-base font-sans font-bold text-md truncate ... " target="_blank" rel="noopener noreferrer">{breweryData.website_url}</a>
            </div>
        </div>
    )
}

export default Card