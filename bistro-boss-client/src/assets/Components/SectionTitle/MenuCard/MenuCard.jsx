import React from 'react'

const MenuCard = ({item}) => {
    const {name,image,price,recipe}=item;

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <p className='bg-black text-white absolute right-5 p-3 top-5'>${price}</p>
            <div className="card-body flex flex-col items-center justify-center">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-end">
                    <button className="btn border-amber-500 btn-ghost border-0 border-b-4 mt-5">Add To Cart</button>
                </div>
            </div>
        </div>
    )
}

export default MenuCard