import React, { useState } from 'react';
import {AsyncPaginate} from 'react-select-async-paginate';
import './SerachBar.css';
import { GEO_OPTIONS_API_URL, geoOptions } from '../helpers/SearchOptionsApi';

const SearchBar = ({onSearchChangeData}) => {
    const [searchValue, setSearchValue] = useState(null);
    const defaultOptionValue = [{
        "value": "40.181388888 44.514444444",
        "label": "Yerevan AM"
    }]
    const loadOptions = async(inputValue) =>{
        try {
            const response = await fetch(`${GEO_OPTIONS_API_URL}/cities?minPopulation=1000000&namePrefix=${inputValue}`, geoOptions);
            const result = await response.json();
            return {
                options: result.data.map(city => ({
                    value: `${city.latitude} ${city.longitude}`,
                    label: `${city.name} ${city.countryCode}`,
                })),  
            }
            
        } catch (error) {
            console.error(error);
            return {
                options: []
            }
        }
    }

    const handleOnChange = (searchData) =>{
        setSearchValue(searchData);
        onSearchChangeData(searchData);
    }

  return (
    <div className='search-bar-container'>
        <AsyncPaginate 
        placeholder="Search city"
        debounceTimeout={600}
        value={searchValue ?  searchValue : defaultOptionValue}
        onChange={handleOnChange}
        loadOptions={loadOptions}
        getOptionValue={(option) => option.value}
        />
    </div>
  )
}

export default SearchBar