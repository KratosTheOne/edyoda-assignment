import React from 'react'
import data from "../assets/images/Data-Analysis.png"
import vis from "../assets/images/Data Wrangling.png"
import user from "../assets/images/boy.png"

const MainContainer = () => {
  return (
    <div class="mainContainer">
        <div class="inside-container">
            <h2 class="h2-tag">Upcoming Certifications</h2>
            <div class="inside-container-1">
                <div class="visuals-1">
                    <div class="data-div">
                        <img src={data} alt="dataimg" class="data-img" />
                    </div>
                    <div class="info-div">
                        <h5 class="certi">CERTIFICATIONS  |  ATTEMPT 1</h5>
                        <h3 class="data">DATA ANALYSIS <br/> CERTIFICATION</h3>
                        <h4 class="status">COMPLETED  |  21 MAR 2022</h4>
                    </div>
                </div>
                <div class="visuals-2">
                    <div class="data-div2">
                        <h4 class="exam">Exam Structure</h4>
                        <ul class="r-1">
                            <li class="l-11">Round 1</li>
                            <li class="l-12">MCQS</li>
                            <li class="l-13">Coding</li>
                        </ul>
                        <ul class="r-2">
                            <li class="l-21">Round 2</li>
                            <li class="l-22">Project</li>
                        </ul>
                    </div>
                </div>
                <div class="button-1">
                    <div class="btn-div">
                        <h4 class="view"> VIEW EXAM DETAILS</h4>
                    </div>
                </div>
            </div>
            <h2 class="h2-tag">Continue Learning</h2>
            <div class="inside-container-2">
                <div class="dual-container">
                    <div class="dual1">
                        <div class="inside-dual1">
                            <div class="vis-div">
                                <img src={vis} alt="vis" class="data-img" />
                            </div>
                            <div class="vis-div-inside">
                                <div class="info-div2">
                                    <h3 class="data2">DATA WRANGLING &<br/> VISUALIZATION</h3>
                                </div>
                                <div class="user-name">
                                    <img src={user} alt="user" class="user-img" />
                                    <h4 class="test-i">Test Instructor</h4>
                                </div>
                            </div>
                        </div>
                        <div class="inside-dual12"></div>
                    </div>
                    <div class="dual2"></div>
                </div>
                <div class="container-3"></div>
            </div>
        </div>
    </div>
  )
}

export default MainContainer