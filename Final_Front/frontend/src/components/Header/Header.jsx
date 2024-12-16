import React from 'react'
import './Header.css'

const Header = () => {
  console.log('Header is rendering!');
  return (
    <div className='header'>
      <div className="header-contents">
        <h2> Just Married  </h2>
        <p> Your Partner In Your Wedding</p>
        <button> View Categories </button>
      </div>
    </div>
  )
}

export default Header
