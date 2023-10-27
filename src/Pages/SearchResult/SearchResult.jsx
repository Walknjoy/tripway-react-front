import React, { useContext } from 'react'
import { mainContext } from '../../utils/ContextApi'

const SearchResult = () => {
    const {filterList}=useContext(mainContext)
  return (
    <div>
<div style={{height:"200px"}}></div>      
    {filterList?.map((hotelContent)=>{
        return <div key={hotelContent?._id}>
            {hotelContent.city}
            {hotelContent?.price}
            {hotelContent.desc}
            {hotelContent.rooms?.map((ret,index)=>(
                <span key={index}>{ret.title}</span>
            ))}


        </div>
    })}
    </div>
  )
}

export default SearchResult
