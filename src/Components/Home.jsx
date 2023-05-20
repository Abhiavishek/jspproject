import React from 'react'
import style from "./home.module.css"
import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <div id={style.nav}>
        <article>
            <li><Link to="/createstd">CreateStd</Link></li>
            <li><Link to="/studentdetails">StudentDetails</Link></li>
        </article>
    </div>
  )
}

export default Home