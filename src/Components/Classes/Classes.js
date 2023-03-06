import React from 'react'
import "./Classes.css"

const Classes = () => {
  return (
    <>
      <section className="ClassesContainer">
        <h1 className="classesheading">Useful classes for positioning and styling elements</h1>
        <div className="Classesbox">
          <span> (1) Use flexBox properties to Arrange elements according to your desired positions. </span>
          <span>(2) Use classes <b>.flex-all-center and .flex-all-center-column</b> to arrange elemnts in the middle of the container in row and column</span>
          <div className="expFlex1">
            <div>Flex</div>
            <div>Flex</div>
            <div>Flex</div>
          </div>
          <div className="expFlex2">
            <div>Flex</div>
            <div>Flex</div>
            <div>Flex</div>
          </div>
          <span>(3) Use classes <b>.flex-center-equal-divide  and .flex-center-equal-divide-column</b> to arrange elemnts in the middle of the container and have equal space in row and column</span>
          <div className="expFlex3">
            <div>Flex</div>
            <div>Flex</div>
            <div>Flex</div>
          </div>
          <div className="expFlex4">
            <div>Flex</div>
            <div>Flex</div>
            <div>Flex</div>
          </div>

          <span>(4) Follow Buttons, tables, forms sections and gather the unique classes to apply for different styles. </span>
        </div>
      </section>
    </>
  )
}

export default Classes
