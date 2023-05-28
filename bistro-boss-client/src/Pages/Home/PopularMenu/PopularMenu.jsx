import React, { useEffect, useState } from 'react'
import SectionTitle from '../../../assets/Components/SectionTitle/SectionTitle'
import MenuItem from '../../Shared/MenuItem/MenuItem'
import useMenu from '../../../hooks/useMenu'

const PopularMenu = () => {
    const [menu]=useMenu();
    const popularItem=menu.filter(item=>item.category==="popular")
    // const [menu,setmenu]=useState([])
    // useEffect(()=>{
    //     fetch('menu.json')
    //     .then(res=>res.json())
    //     .then(data=>{
    //         const popularItems=data.filter(item=>item.category=='popular')
    //         setmenu(popularItems)
    //     })
    // },[])
  return (
    <div className='mb-12'>
        <SectionTitle heading={"From Our Menu"} subHeading={"Popular Items"}></SectionTitle>
        <div className='grid md:grid-cols-2 gap-12'>
            {
                popularItem.map(item=><MenuItem key={item._id} item={item}></MenuItem>)
            }
        </div>
    </div>
  )
}

export default PopularMenu