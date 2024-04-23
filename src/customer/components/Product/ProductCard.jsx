import React from 'react'
import "./ProductCard.css"
import { useNavigate } from 'react-router-dom'
// import { mens_kurta } from '../../../Data/mens_kurta'
// mens_kurta

const ProductCard = ({Product}) => {
  const navigate=useNavigate();
  
  const handleProductCard=()=>{
    navigate(`/product/${5}`);
}
  return (
  
    <div onClick={handleProductCard} className='productCard w-[15rem] m-3 transition-all cursor-pointer'>
        <div className='h-[20rem]'>
          <img className='h-full w-full '
          src={Product.imageUrl} alt="" />
        </div>
     
       <div className='textPara bg-white p-3'>
             <div>
                <p className='font-bold opacity-60'>{Product.brand}</p>
                <p>{Product.title}</p>
             </div>

             <div>
                <p className='font-semibold'>$199</p>
                <p className='line-through opacity-50'>$1999</p>
                <p className='text-green-600 font-semibold'>70% off</p>
             </div>

       </div>
    </div>

  )
}

export default ProductCard
