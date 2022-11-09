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
      <Link to="/front">フロントエンド</Link>
      <br/>
      <Link to="/home">home</Link>
      <br/>
      <Link to="/result">result</Link>

    </div>
  )
}

export default Header