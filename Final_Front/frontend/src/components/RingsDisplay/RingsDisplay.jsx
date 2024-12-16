import React, { useContext } from 'react'
import './RingsDisplay.css'
import { StoreContext } from '../../Context/StoreContext'
import RingsItem from '../RingsItem/RingsItem'
const RingsDisplay = ({category}) => {
  const {Rings_list} = useContext(StoreContext)
    return (
    <div className="Ring-display" id ="Ring-dispaly">
      <h2> Rings Section </h2>
      <div className="Rings-dispaly-list">
        {Rings_list.map((item,index)=>{
            return <RingsItem  
            key ={index} 
            id={item._id} 
            name={item.name} 
            description={item.description} 
            price={item.price}
            image={item.image}/>
        }
        )}
      </div>
    </div>
  )
}

export default RingsDisplay
