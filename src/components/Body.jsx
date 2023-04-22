import React from 'react'
import Sidebar from './Sidebar'
import MainContainer from './MainContainer'

const Body = () => {
  return (
    <div class="body-container">
        <h1>This is body</h1>
        <Sidebar />
        <MainContainer />
    </div>
  )
}

export default Body