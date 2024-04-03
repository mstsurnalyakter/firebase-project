// import React from 'react'
// import PropTypes from 'prop-types'
import Footer from '../components/Shared/Footer/Footer'
import NavBar from '../components/Shared/NavBar/NavBar'
import { Outlet } from 'react-router'

const Root = () => {
  return (
    <div>
      <NavBar />
      <div className="container min-h-[calc(100vh-455px)] shadow-none mx-auto max-w-7xl pl-8 ">
        <Outlet />
      </div>

      <Footer />
    </div>
  );
}

Root.propTypes = {}

export default Root