import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex items-center py-4 px-8 bg-cyan-500 justify-between'>
      <h2 className='text-xl font-bold'>My React App</h2>
      <div className='flex gap-8'>
        <Link className='text-white hover:text-cyan-900' to="/">Home</Link>
        <Link className='text-white hover:text-cyan-900' to="/about">About</Link>
        <Link className='text-white hover:text-cyan-900' to="/product">Product</Link>
        <Link className='text-white hover:text-cyan-900' to="/courses">Courses</Link>
      </div>
    </div>
  )
}

export default Navbar
