import React from 'react'

const About = () => {
  return (
    <div id="about">
        <div className="aboutSec">
            <div className="headText">
                <p>ABOUT</p>
            </div>
            <div className="paraText">
                <p>I'm a paragraph. Click here to add your own text and edit me. It's easy. Just click "Edit Text" or
                    double click me to add your own content and make changes to the font. Feel free to drag and drop me
                    anywhere you like on your page. I'm a great place for you to tell a story and let your users know a
                    little more about you.</p>
            </div>
            <div className="icons">
                <div className="organic">
                    <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px"
                        fill="#fff">
                        <path
                            d="M480-162.67q-57.69 0-108.68-18.83-50.99-18.83-92.65-52.83l-60 59q-9.67 9.66-23 9.66-13.34 0-23-9.66-9.67-9.67-9.67-23 0-13.34 9.67-23l59-59.67q-34.23-41.78-52.95-92.72Q160-424.67 160-482.67q0-134 93-227t227-93h320v320q0 134-93 227t-227 93Zm0-66.66q105.56 0 179.44-73.89 73.89-73.89 73.89-179.45V-736H480q-105.56 0-179.44 73.89-73.89 73.89-73.89 179.44 0 43.49 14 83.08 14 39.59 38.33 71.26l213.67-213q9.66-9.67 23-9.67 13.33 0 23 9.67 10 9.86 10 23.43t-10 23.57l-213 213q31.66 24.33 71.25 38.16 39.59 13.84 83.08 13.84Zm0-253.34Z" />
                    </svg>
                    <p>Organic</p>
                </div>
                <div className="cotton">
                    <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px"
                        fill="#fff">
                        <path
                            d="M480-885q46.33 55.67 85.33 106.83 39 51.17 70.67 100.5L880-860v380q0 83-31.5 156T763-197q-54 54-127 85.5T480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480v-380l244 182.33q31.67-48.33 70.67-100 39-51.66 85.33-107.33ZM146.67-726.67V-480q0 56 17.5 105.5t48.16 91.17q-6-18.67-9.16-37.5Q200-339.67 200-360q0-56.33 22.17-120.83 22.16-64.5 66.16-139.17L146.67-726.67Zm333.33-54Q376.67-655.33 321.67-549q-55 106.33-55 189 0 88.33 62.5 150.83 62.5 62.5 150.83 62.5 88.33 0 150.83-62.5 62.5-62.5 62.5-150.83 0-82.67-55-190T480-780.67Zm333.33 54L671.67-620.33q44 74.66 66.16 139.5Q760-416 760-360q0 20.33-3.17 39.17-3.16 18.83-9.16 37.5 30.66-41.67 48.16-91.17 17.5-49.5 17.5-105.5v-246.67Z" />
                    </svg>
                    <p>100% Cotton</p>
                </div>
                <div className="waterproof">
                    <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px"
                        fill="#fff">
                        <path
                            d="M483-205.33q14.67-.34 23.17-6.84 8.5-6.5 8.5-17.83 0-12-8.67-18.83-8.67-6.84-24.67-6.5-41.66 1-86-25.17Q351-306.67 339-373.67q-2-9.66-9.5-15.66t-16.5-6q-12 0-19 9.16-7 9.17-4.67 19.84Q305-280 363.33-242q58.34 38 119.67 36.67ZM480-80q-137 0-228.5-94T160-408q0-100 79.5-217.5T480-880q161 137 240.5 254.5T800-408q0 140-91.5 234T480-80Zm0-66.67q109.33 0 181.33-74.5 72-74.5 72-186.83 0-77-64.5-174.67-64.5-97.66-188.83-208.66-124.33 111-188.83 208.66Q226.67-485 226.67-408q0 112.33 72 186.83 72 74.5 181.33 74.5ZM480-480Z" />
                    </svg>
                    <p>Waterproof</p>
                </div>

            </div>
        </div>
    </div>
  )
}

export default About