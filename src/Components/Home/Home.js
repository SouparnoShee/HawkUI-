import React from 'react'
import "./Home.css"
import Hawkimg from "../../IMG/HawkImg.png"
import CssLogo from "../../IMG/CSSLogo.png"
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';


const Home = () => {
    const codeString = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="Hawk.css">
        <title>Title</title>
    </head>
    <body>
        
    </body>
    </html>`;
    return (
        <>
            <div className="section1">
                <img src={Hawkimg} alt="" />
                <p>Hawk UI is a basic Css framework to implement Css styles for wonderful Ui </p>
                <p>Includes Forms</p>
                <p>Tables, Buttons, Cards, Containers with flexbox for positioning, And basic landing page styles</p>
                <a href="https://github.com/SouparnoShee">Visit Github</a>
            </div>
            <div className="section2">
                <h1>Getting Started</h1>
                <div className="DownloadCSS">
                    <h2>Download Css</h2>
                    <p>Download and Implement the <br /> Css file in the head of the HTML file</p>
                    <img src={CssLogo} alt="Not found" />
                    <a href="https://raw.githubusercontent.com/SouparnoShee/HawkUI-/master/src/Hawk.css">Click Here to download</a>
                </div>
            </div>
            <div className="section3">
                <div className="BasicHTML">
                    <h1>Get Started With Basic HTML</h1>
                    <div className="basicHTMLpara">
                        <span> Implement the following code as a basic HTML starting Point </span>
                        <span>Link the Hawk.css file into the head of the HTML page as shown below</span>
                    </div>
                    <div className="BasicHtmlCode">
                        <div className="blackBox">
                            <SyntaxHighlighter language="javascript" style={atomDark}>
                                {codeString}
                            </SyntaxHighlighter>
                        </div>
                    </div>
                </div>
            </div>
            <div className="section4">
                <div className="StylingIntro">
                    <h1>HAWK UI STYLING INTRO</h1>
                    <div className="Stylingintropara">
                        <span>After getting the basic HTML file get started with your code</span>
                        <span>Hawk UI presents to you classic designs of Basic Buttons, forms, tables, containers, cards, Landing pages</span>
                        <span>All styles has some unique classes defined on there sections follow and add them to design your page</span>
                        <span>Containers are positioned in flex, go to flex section and implement the codes according to
                            your positioning requirements</span>
                        <span>
                            Simplified as well as stylized forms and buttons are also given for making your website more attractive and save yor development time
                        </span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home
