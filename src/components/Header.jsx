import React from 'react'
import userIcon from "../assets/images/boy.png"
import downArrow from "../assets/images/Sort Down.png"

const Header = () => {
  return (
    <div class="header-div">
      <div class="main-div1">
        <div class="div1">
          <h2 class="logo">EDYODA</h2>
          <div class="logo-div">
            <h4 class="note">Hi Test Learner!</h4>
            <img class="user" src={userIcon} alt="userIcon" />
          </div>
        </div>
      </div>
      <div class="main-div2">
        <div class="div2">
          <h5 class="code">DS031221</h5>
          <img class="arrow" src={downArrow} alt="down-arrow" />
          <h4 class="code-name">Data Scientist Program</h4>
        </div>
      </div>
    </div>
  )
}

export default Header