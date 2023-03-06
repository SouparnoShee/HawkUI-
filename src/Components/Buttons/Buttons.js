import React from 'react'
import "./Buttons.css"
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const Buttons = () => {
  const codeString = `<Button class="button-simple">Button</Button>
  <Button class="button-red">Button</Button>
  <Button class="button-green">Button</Button>`;
  const codeString2 = `    <Button class="button-outline">Button</Button>`
  const codeString3 = `        <Button class="button-simple roundedBtn">Button<Button>
  <Button class="button-green roundedBtn">Button</Button>
  <Button class="button-red roundedBtn">Button</Button>`
  const codeString4 = `            <Button class="button-simple btnShadow">Button</Button>
  <Button class="button-green btnShadow roundedBtn">Button</Button>
  <Button class="button-red btnShadow">Button</Button>`

  return (
    <>
      <section className="ButtonsContainer">
        <h1 className="ButtonHeading">Buttons</h1>
        <div className="Buttonsdetailspace1">
          <h2>Simple buttons with three different colours</h2>
          <span style={{ fontSize: "16px" }}>Classes used are <b> .button-simple, .button-red, .button-green</b></span>
          <div className="buttCodebox">
            <div className="codebox">
              <SyntaxHighlighter language="javascript" style={atomDark}>
                {codeString}
              </SyntaxHighlighter>
            </div>
          </div>
          <div className="buttonsExample1">
            <button class="button-simple">Button</button>
            <button class="button-red">Button</button>
            <button class="button-green">Button</button>
          </div>
        </div>
        <div className="Buttonsdetailspace1">
          <h2>Normal outline Buttons</h2>
          <span style={{ fontSize: "16px" }}>Class used is <b>.button_outline</b></span>
          <div className="buttCodebox2">
            <div className="codebox">
              <SyntaxHighlighter language="javascript" style={atomDark}>
                {codeString2}
              </SyntaxHighlighter>
            </div>
          </div>
          <div className="buttonsExample1">
            <button class="button-outline">Button</button>
            <button class="button-outline">Button</button>
            <button class="button-outline">Button</button>
          </div>
        </div>
        <div className="Buttonsdetailspace1">
          <h2>Rounded buttons</h2>
          <span style={{ fontSize: "16px" }}>In any button class just add rounded class to make it round button <b>.roundedBtn</b></span>
          <div className="buttCodebox2">
            <div className="codebox">
              <SyntaxHighlighter language="javascript" style={atomDark}>
                {codeString3}
              </SyntaxHighlighter>
            </div>
          </div>
          <div className="buttonsExample1">
            <button class="button-simple roundedBtn">Button</button>
            <button class="button-green roundedBtn">Button</button>
            <button class="button-red roundedBtn">Button</button>
          </div>
        </div>
        <div className="Buttonsdetailspace1">
          <h2> Buttons with shadows</h2>
          <span style={{ fontSize: "16px" }}>In any button class just add shadow class to get a drop shadow <b>.btnShadow</b></span>
          <div className="buttCodebox2">
            <div className="codebox">
              <SyntaxHighlighter language="javascript" style={atomDark}>
                {codeString4}
              </SyntaxHighlighter>
            </div>
          </div>
          <div className="buttonsExample1">
            <button class="button-simple btnShadow">Button</button>
            <button class="button-green roundedBtn btnShadow">Button</button>
            <button class="button-red btnShadow">Button</button>
          </div>
        </div>
      </section>
    </>
  )
}

export default Buttons
