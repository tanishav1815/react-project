import React from 'react'
import NavPage from './NavPage'
import Navbar from './Navbar'
function MainPage() {
  return (
    <React.Fragment>
    <section className='nav'>
        {/* navbar section */}
      <div className="navsec">
          <Navbar/>

      </div>

      {/* navPage section */}
      <div className="pagemain">
          <NavPage/>

      </div>
    </section>
  </React.Fragment>
  )
}

export default MainPage