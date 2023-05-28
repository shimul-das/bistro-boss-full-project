import React from 'react'
import MenuItem from '../../Shared/MenuItem/MenuItem'
import Cover from '../../Shared/Cover/Cover'
import { Link } from 'react-router-dom'

const CategoryMenu = ({ items,title,coverImg }) => {
    return (
        <div className='pt-8 pb-5'>
            {title && <Cover img={coverImg} title={title}></Cover>}
            <div className='grid md:grid-cols-2 gap-12 mt-16'>
                {
                    items.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
                }
            </div>
            <Link to={`/order/${title}`}><button className="btn border-slate-800 btn-ghost border-0 border-b-4 mt-5">Order Now</button></Link>
            
        </div>
    )
}

export default CategoryMenu