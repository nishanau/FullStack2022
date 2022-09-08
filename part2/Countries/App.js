import axios from 'axios';
import { useState, useEffect } from 'react';
import './App.css';

import GreaterThan10 from './components/GreaterThan10'
import OnlyOne from './components/OnlyOne';
import TenCountries from './components/TenCountries';

const App = () => {

  const [country, setCountry] = useState(null)
  const [search, setSearch] = useState([])
 



  //fetch country data
  useEffect(() => {

    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => 
        setCountry(response.data)
      )

  }, [])


console.log(`search`,search)

  const searchResult = (e) => {


    var newObjCountry = []

    if (e.target.value.length > 0) {
      for (let i = 0; i < country.length; i++) {

        const userInput = e.target.value.toLowerCase();
        const countryName = country[i].name.common.toLowerCase();
        

        if (countryName.includes(userInput) && Object.keys(country[i].capitalInfo).length !== 0) {

          //console.log(`lat`,country[i].capitalInfo.latlng[i])
          const tempCountryObject = {
            id: country[i].name.official,
            name: country[i].name,
            languages: Object.values(country[i].languages),
            capital: country[i].capital,
            area: country[i].area,
            flags: country[i].flags,

            
            latitude: country[i].capitalInfo.latlng[0],
            longitude: country[i].capitalInfo.latlng[1]

          }
          newObjCountry = newObjCountry.concat(tempCountryObject)

        }
      }

    }
    setSearch(newObjCountry)

  }

  const showCountryDetails = (callback) => {

    setSearch(callback)
  }


  return (
    <>
      
      Find Countries: <input onChange={searchResult} /> 
      <h2>Countries</h2>
      <div>
         {search.length > 10 ? <GreaterThan10 />
          : search.length === 1 ?
            <OnlyOne search={search} />
          : <TenCountries search={search} showCountryDetails={showCountryDetails} />
        }
      </div>
    </>
        ) 
}

export default App
