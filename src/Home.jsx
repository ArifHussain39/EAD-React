import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
      <div className="Homepage">
        <h1>All Libraries</h1>
        <ol>
          <li> <Link  to='AOS' style={{textDecoration:'none', color:'white'}}>AOS</Link> </li>
          <li> <Link  to='darkmode' style={{textDecoration:'none', color:'white'}}>Darkmode</Link> </li>
        </ol>
      </div>

    </>
  )
}

export default Home;