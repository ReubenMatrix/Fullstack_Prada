import React from 'react'
import './featuredproduct.scss'
import Card from '../Card/Card'


function FeaturedProducts({type}) {
  const data=[
    {
        id: 1,
        img: "https://images.pexels.com/photos/1972115/pexels-photo-1972115.jpeg?auto-compress&cs=tinysrgb&w=1600",
        img2:"https://images.pexels.com/photos/1163194/pexels-photo-1163194.jpeg?auto-compress&cs=tinysrgb&w=1600",
        title: "Long Sleeve Graphic T-shirt",
        isNew: true,
        oldPrice: 19,
        price: 12,

    },
    {
        id: 2,
        img: "https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        title: "Coat",
        isNew: true,
        oldPrice: 19,
        price: 12,

    },
    {
        id:3,
        img: "https://images.pexels.com/photos/794062/pexels-photo-794062.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        img2:"https://images.pexels.com/photos/1007018/pexels-photo-1007018.jpeg?auto=compress&cs=tinysrgb&w=400",
        title: "Skirt",
        oldPrice: 19,
        price: 12,

    },
    {
        id: 4,
        img: "https://images.pexels.com/photos/157675/fashion-men-s-individuality-black-and-white-157675.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        title: "Hat",
        oldPrice: 19,
        price: 12,

    },
  ]



  return (
    <div className='featuredProducts'>
        <div className='top'>
            <h1>{type} products</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas.</p>
        </div>

        <div className='bottom'>
        {data.map(item=>(
            <Card item={item} key={item.id}/>
        ))}

        </div>
    </div>

  )
}

export default FeaturedProducts
