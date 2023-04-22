import React from 'react';
import colorHome from "../assets/images/Home Page-1.png";
import whiteShelf from "../assets/images/Tidy Shelf-1.png";
import whiteInstructor from "../assets/images/Training.png"

const Sidebar = () => {
  return (
    <div class="side-nav">
        <section class="home-section">
            <img class="home-img" src={colorHome} alt="home" />
            <span class="home-span">Home</span>
        </section>
        <section class="module-section">
            <img class="module-img" src={whiteShelf} alt="module" />
            <span class="module-span">Modules</span>
        </section>
        <section class="instructor-section">
            <img class="instructor-img" src={whiteInstructor} alt="instructor" />
            <span class="instructor-span">Instructors</span>
        </section>
    </div>
  )
}

export default Sidebar