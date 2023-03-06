import React from 'react'
import "./Cards.css"
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const Cards = () => {
  const codeString = `           <div class="container-card">
  <div class="card-box">
      <img src="" alt="">
      <h1>Card Title</h1>
      <span>A small para in your card, stylize and write it on your own</span>
  </div>
  <div class="card-box">
      <img src="" alt="">
      <h1>Card Title</h1>
      <span>A small para in your card, stylize and write it on your own</span>
  </div>
  <div class="card-box">
      <img src="" alt="">
      <h1>Card Title</h1>
      <span>A small para in your card, stylize and write it on your own</span>
  </div>
  <div class="card-box">
      <img src="" alt="">
      <h1>Card Title</h1>
      <span>A small para in your card, stylize and write it on your own</span>
  </div>
  <div class="card-box">
      <img src="" alt="">
      <h1>Card Title</h1>
      <span>A small para in your card, stylize and write it on your own</span>
  </div>
  <div class="card-box">
      <img src="" alt="">
      <h1>Card Title</h1>
      <span>A small para in your card, stylize and write it on your own</span>
  </div>

</div>`;
  return (
    <>
      <div className="CardContainer">
        <h1 className='CardHeading'>Cards</h1>
        <div className="Cardbox">
          <h2>Responsive Cards</h2>
          <div className="CardPara">
            <span>
              . Responsive cards using flexbox. All cards are arranged according to screen size with a regular height of 350px.
            </span>
            <span>
              . All cards have a default imgae space where it will adjust the image in center.
            </span>
            <span>
              . Cards will adjust itself according to screen size.
            </span>
          </div>
          <div className="Cardcodebox">
            <div className="codebox">
              <SyntaxHighlighter language="javascript" style={atomDark}>
                {codeString}
              </SyntaxHighlighter>
            </div>
          </div>
          <div className="cardexpcontainer">
            <div class="container-card">
              <div class="card-box">
                <img src="" alt="" />
                <h1>Card Title</h1>
                <span>A small para in your card, stylize and write it on your own</span>
              </div>
              <div class="card-box">
                <img src="" alt="" />
                <h1>Card Title</h1>
                <span>A small para in your card, stylize and write it on your own</span>
              </div>
              <div class="card-box">
                <img src="" alt="" />
                <h1>Card Title</h1>
                <span>A small para in your card, stylize and write it on your own</span>
              </div>
              <div class="card-box">
                <img src="" alt="" />
                <h1>Card Title</h1>
                <span>A small para in your card, stylize and write it on your own</span>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Cards
