import React from 'react'
import Category from './Category/Category'
import Price from './Price/Price'
import Colors from './Colors/Color'
import './sidebar.css'

const Sidebar = (handleChange) => {
  console.log(handleChange);
  return (
    <>
    <section className="sidebar">
      <div className="logo-container">
         <h1 className='sidebar-title'>cart</h1>
      </div>
      <Category/>
      <Price/>
      <Colors/>
    </section>
    </>
  )
}

export default Sidebar
