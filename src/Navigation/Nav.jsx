import React from 'react';
import { FiHeart } from 'react-icons/fi';
import { AiOutlineShoppingCart, AiOutlineUserAdd } from 'react-icons/ai';


import './Nav.css'


const Nav = ({handleInputChange, query}) => {
  return (
    <nav>
      <div className='nav-container'>
        <input
         type="text"
          onChange={handleInputChange}
          value={query}
          className='search-input'
          placeholder='Enter you search shoes'
          />
      </div>

      <div className="pofile-container">
        <a href="#">
          <FiHeart className = "nav-icons" />
        </a>
        <a href="#">
          <AiOutlineShoppingCart className="nav-icons"/>
        </a>
        <a href="#">
          <AiOutlineUserAdd className= "nav-icons"/>
        </a>
        
      </div>
    </nav>
  )
}

export default Nav
