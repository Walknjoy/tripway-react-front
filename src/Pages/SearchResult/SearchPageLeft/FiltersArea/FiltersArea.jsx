import React from 'react'
import "./FiltersArea.scss"
import StarRatingSearch from './StarRatingSearch/StarRatingSearch'
import PriceRangeSearch from './PriceRangeSearch/PriceRangeSearch'
const FiltersArea = () => {
  return (
    <div className='filters_card_areas'>
      <StarRatingSearch/>
      <PriceRangeSearch/>
    </div>
  )
}

export default FiltersArea
