import React from 'react'
import Input from '../../components/Input'
import './Color.css'

const Color = ({ handleChange }) => {
  return (
    <div>
      <h2 className="sidebar-title color-title">Colors</h2>
      <div>
        <label className='sidebar-label-container'>
          <input onChange={handleChange} type="radio" value="" name='test1' />
          <span className='checkmark all'></span>
          All
        </label>

        <Input
          handleChange={handleChange}
          value="black"
          title="Black"
          name="test1"
          color="black"
        />

        <Input
          handleChange={handleChange}
          value="blue"
          title="Blue"
          name="test1"
          color="blue"
        />

        <Input
          handleChange={handleChange}
          value="red"
          title="Red"
          name="test1"
          color="red"
        />

        <Input
          handleChange={handleChange}
          value="green"
          title="Green"
          name="test1"
          color="green"
        />

        <Input
          handleChange={handleChange}
          value="white"
          title="White"
          name="test1"
          color="white"
        />

       
      </div>
    </div>
  )
}

export default Color
