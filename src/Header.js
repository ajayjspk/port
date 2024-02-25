import React from 'react';
import './styles/header.css'

export default function Header() {
  return (
    <div>
      <div className='container'>
        <ul>
            <li><a href=''>Home</a></li>
            <li><a href=''>About</a></li>
            <li><a href=''>Contact</a></li>
            <li><a href=''>Download</a></li>
        </ul>
      </div>
    </div>
  )
}
