import React from 'react'
import DestinationSearchNav from './DestinationSearchNav/DestinationSearchNav'
import "./SearchPageLeft.scss"
import LocationSearchNav from './LocationSearchNav/LocationSearchNav'
import FiltersArea from './FiltersArea/FiltersArea'
const SearchPageLeft = ( ) => {
  return (
    <div className='search-page-left'>
      <DestinationSearchNav/>
      <LocationSearchNav/>
      <FiltersArea />
    </div>
  )
}

export default SearchPageLeft
