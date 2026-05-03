import React from 'react'
import { Link, Outlet} from 'react-router-dom'
const Product = () => {
  return (
    <div>
        <div className='flex justify-center gap-10 py-4'>
            <Link className='text-white hover:text-cyan-900' to="/product/men">Men</Link>
            <Link className='text-white hover:text-cyan-900' to="/product/women">Women</Link>
        </div>
        <h1>Product Page</h1>
        <Outlet />
    </div>
  )
}

export default Product
