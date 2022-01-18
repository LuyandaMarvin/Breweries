import { useState, useEffect} from 'react'
import axios from 'axios';

import Card from './Card';
import Navbar from './Navbar';
import Search from './Search';
import View from './View'

function Home() {
    const [breweries, setBreweries] = useState([]);
    const [allBreweries, setAllBreweries] = useState([]);
  
    useEffect(() => {
      (async () => {
        let breweriesData;
        
         try{
          var config = {
            method: 'get',
            url: 'https://api.openbrewerydb.org/breweries',
            headers: { }
          };
  
          axios(config)
          .then(function (response) {
            breweriesData = response.data;
  
            setBreweries(breweriesData);
            setAllBreweries(breweriesData)
          })
          .catch(function (error) {
            console.log(error);
          });
          
        }catch(error) {
          console.error();
          breweriesData = [];
        }
      })();
    }, []);
  
    const searchBrewery = event => {
      const value = event.target.value.toLowerCase();
      const filteredBreweries = allBreweries.filter(brewery => (`${brewery.name}`.toLowerCase().includes(value)));
      setBreweries(filteredBreweries);
    }

    return (
        <div>
            <div className="container mx-auto">
            <Search searchBrewery={searchBrewery} />
            <div className="md:flex block flex-wrap justify-between mx-5">
                {breweries.map((brewery, index) => (
                    <Card breweryData={brewery} key={index}/>
                ))}
                </div>
            </div>
        </div>
    )
}

export default Home
