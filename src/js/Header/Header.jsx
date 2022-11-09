import React from 'react'
import "./Header.css"
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <div className='header'>
      <h1>Technology Figure</h1>
      {/* <h1>{{.a}}</h1> */}
      <Link to="/index.html">バックエンド</Link>
      <br/>
      <Link to="/index.html/front">フロントエンド</Link>

    </div>
  )
}

export default Header