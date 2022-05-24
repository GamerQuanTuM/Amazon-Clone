import React from 'react'
import { useStateValue } from '../redux/StateProvider'
import Subtotal from "./Subtotal"
import "./Checkout.css"
import CheckoutProduct from './CheckoutProduct'
import Header from './Header'

const Checkout = () => {
  // eslint-disable-next-line 
  const [{ basket,user }, dispatch] = useStateValue();
  return (
    <>
      <Header />
      <div className='checkout'>
        <div className="checkout__left">
          <img className='checkout__ad' src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668.jpg" alt="" />
          <div>
          <h3>Hello,{user?.email}</h3>
            <h2 className="checkout__title">
              Your Shopping Basket
            </h2>
            {basket.map((item,index) => (
              <CheckoutProduct
                key={index}
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        </div>
        <div className="checkout__right">
          <Subtotal />
        </div>
      </div>
    </>
  )
}

export default Checkout
