import React, { useState } from 'react'
import orderImg from './../../../assets/shop/banner2.jpg';
import Cover from '../../Shared/Cover/Cover';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import MenuCard from '../../../assets/Components/SectionTitle/MenuCard/MenuCard';
import useMenu from '../../../hooks/useMenu';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';



const Order = () => {
    const categories = ['salad', 'pizza', 'soup', 'dessert', 'drinks']
    const { category } = useParams();
    const initialIndex = categories.indexOf(category)
    const [menu] = useMenu();
    const dessert = menu.filter(item => item.category === "dessert")
    const pizza = menu.filter(item => item.category === "pizza")
    const soup = menu.filter(item => item.category === "soup")
    const salad = menu.filter(item => item.category === "salad")
    const drinks = menu.filter(item => item.category === "drinks")
    const [tabindex, settabindex] = useState(initialIndex)
    return (
        <div>
            <Helmet>
                <title>Bistro | Order Food</title>
            </Helmet>
            <Cover title="ORDER FOOD" img={orderImg}></Cover>
            <Tabs defaultIndex={tabindex} onSelect={(index) => settabindex(index)}>
                <TabList>
                    <Tab>Salad</Tab>
                    <Tab>Pizza</Tab>
                    <Tab>Soup</Tab>
                    <Tab>Dessert</Tab>
                    <Tab>Drinks</Tab>
                </TabList>
                <TabPanel>
                    <div className='grid md:grid-cols-3 gap-2'>
                        {
                            salad.map(item => <MenuCard key={item._id} item={item}></MenuCard>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='grid md:grid-cols-3 gap-2'>
                        {
                            pizza.map(item => <MenuCard key={item._id} item={item}></MenuCard>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='grid md:grid-cols-3 gap-2'>
                        {
                            soup.map(item => <MenuCard key={item._id} item={item}></MenuCard>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='grid md:grid-cols-3 gap-2'>
                        {
                            dessert.map(item => <MenuCard key={item._id} item={item}></MenuCard>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='grid md:grid-cols-3 gap-2'>
                        {
                            drinks.map(item => <MenuCard key={item._id} item={item}></MenuCard>)
                        }
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    )
}

export default Order