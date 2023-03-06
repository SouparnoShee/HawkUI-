import React from 'react'
import "./Container.css"
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const Container = () => {
  const codeString = `    <div class="container"></div>
  <div class="container-medium"></div>
  <div class="container-small"></div>
  <div class="container-view"></div>`;
  const codeString2 = `
  <div class="container-row">
  <div class="half"></div>
  <div class="half"></div>
</div>
<div class="container-row">
  <div class="one-third"></div>
  <div class="two-third"></div>
</div>
<div class="container-row">
  <div class="one-fourth"></div>
  <div class="three-fourth"></div>
</div>
  `
  return (
    <>
      <div className="sec1">
        <h1>Containers</h1>
        <div className="containerStart">
          <h1>Getting started with containers</h1>
          <div className="containerPara">
            <span>There are three types of container you could use- container, container-medium, container-small</span>
            <span>container gives a 100% width and height and aligned according to the viewport.</span>
            <span>container-medium width is - <b>1000px </b> and container-small width is - <b> 800px </b></span>
          </div>
          <div className="containerstartCode">
            <div className="codeBox">
              <SyntaxHighlighter language="javascript" style={atomDark}>
                {codeString}
              </SyntaxHighlighter>
            </div>
          </div>
          <div className="container-view">
            <h1>Container View</h1>

            <div className="container-view-para">
              <span>container-view is the class that set a container with 100% width and a height of window size, i.e 100vh</span>
            </div>
          </div>
        </div>
        <div className="container-row-elements">
          <h1>Container Grids</h1>
          <div className="container-row-para">
            <span>Using flex codes are divided according to container requirement</span>
            <span>uses two breakpoints and are divided into <b>.half, .one-third, .two-third, .one-fourth, .two-fourth</b></span>
          </div>
          <div className="container-row-codebox">
            <div className="codeBox">
              <SyntaxHighlighter language="javascript" style={atomDark}>
                {codeString2}
              </SyntaxHighlighter>
            </div>
          </div>
          <div className="container-row-example">
            <div className="half-grid">
              <div>1/2</div>
              <div>1/2</div>
            </div>
            <div className="one-twothird-grid">
              <div>1/3</div>
              <div>2/3</div>
            </div>
            <div className="one-two-fourth-grid">
              <div>1/4</div>
              <div>2/4</div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Container
