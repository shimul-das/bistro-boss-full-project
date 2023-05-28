import React from 'react'
import './featured.css'
import SectionTitle from '../../../assets/Components/SectionTitle/SectionTitle'
import one from './../../../assets/home/featured.jpg';




const Featured = () => {
  return (
    <div className="featured_section text-white pt-10 my-10">
        <SectionTitle  heading={"From our Menu"} subHeading={"Check it Out"}></SectionTitle>
        <div className='md:flex justify-center items-center py-20 px-36'>
            <div>
                <img src={one} alt="" />
            </div>
            <div className='md:ml-10'>
                <h4 className='uppercase'>March 20, 2023</h4>
                <h3>WHERE CAN I GET SOME?</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                <button className="btn border-slate-800 btn-ghost border-0 border-b-4 mt-5">View All Menu</button>
            </div>

        </div>
    </div>
  )
}

export default Featured