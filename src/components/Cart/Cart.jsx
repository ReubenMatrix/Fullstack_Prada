import React from 'react';
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import './cart.scss'
function Cart() {
    const data = [
        {
            id: 1,
            img: "https://images.pexels.com/photos/1972115/pexels-photo-1972115.jpeg?auto-compress&cs=tinysrgb&w=1600",
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
    ];

    return (
        <div className='cart'>
            <h1>Products in your cart</h1>
            {data.map(item => (
                <div className='item' key={item.id}>
                    <img src={item.img} alt='' />
                    <div className='details'>
                        <h1>{item.title}</h1>
                      
                        {item.desc && <p>{item.desc.substring(0, 100)}</p>}
                        <div className='price'>1 x ${item.price}</div>
                    </div>
                    <DeleteOutlinedIcon />
                </div>
            ))}
            <div className="total">
                <span>SUBTOTAL</span>
             
                <span>${data.reduce((total, item) => total + item.price, 0)}</span>
            </div>
            <button>PROCEED TO CHECKOUT</button>
            <span className="reset">
                Reset Cart
            </span>
        </div>
    );
}

export default Cart;
