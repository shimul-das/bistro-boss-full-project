import React from 'react'
import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import slideBg from './../../../assets/menu/banner3.jpg';
import PopularMenu from '../../Home/PopularMenu/PopularMenu';
import SectionTitle from '../../../assets/Components/SectionTitle/SectionTitle';
import CategoryMenu from '../CategoryMenu/CategoryMenu';
import useMenu from '../../../hooks/useMenu';
import dessertImg from './../../../assets/menu/dessert-bg.jpeg';
import pizzaImg  from './../../../assets/menu/pizza-bg.jpg';
import soupImp from './../../../assets/menu/soup-bg.jpg';
import saladImg from './../../../assets/menu/salad-bg.jpg';





const Menu = () => {
  const [menu]=useMenu();
    const dessert=menu.filter(item=>item.category==="dessert")
    const pizza=menu.filter(item=>item.category==="pizza")
    const soup=menu.filter(item=>item.category==="soup")
    const salad=menu.filter(item=>item.category==="salad")
    const offered=menu.filter(item=>item.category==="offered")
  return (
    <div>
         <Helmet>
          <title>Bistro | Our Menu</title>
         </Helmet>
         <Cover img={slideBg} title={"Our Menu"}></Cover>
         {/* ///Main Cover */}
         <SectionTitle subHeading={"Don't Miss"} heading={"Today's offer"}></SectionTitle>
         {/* offered menu items */}
         <CategoryMenu items={offered}></CategoryMenu>
         {/* dessert menu items */}
         <CategoryMenu items={dessert} title={"dessert"} coverImg={dessertImg}></CategoryMenu>
         <CategoryMenu items={pizza} title={"pizza"} coverImg={pizzaImg}></CategoryMenu>
         <CategoryMenu items={soup} title={"soup"} coverImg={soupImp}></CategoryMenu>
         <CategoryMenu items={salad} title={"salad"} coverImg={saladImg}></CategoryMenu>
    </div>
  )
}

export default Menu