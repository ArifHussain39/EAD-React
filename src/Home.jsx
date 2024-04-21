import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
      <h1>All Libraries</h1>
      <ol>
        <li> <Link to='AOS'>AOS</Link> </li>
      </ol>
    </>
  )
}

export default Home;