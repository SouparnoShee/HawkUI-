import React from 'react'
import "./FandT.css"
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const FandT = () => {
    const codeString = `        <div class="container">
    <form action="#" class="Form-primary">
        <label for="UserName" class="Labels">UserName - </label>
        <input type="text" name="text" placeholder="UserName" class="InputStyle">
        <label for="Password" class="Labels">Password - </label>
        <input type="password" name="password" placeholder="Password" class="InputStyle">
        <button class="button-simple">Submit</button>
    </form>
</div>`;
    const codeString2 = `
    <div class="container">
    <form action="#" class="Form-secondary">
        <label for="Name" class="Labels">Name - </label>
        <input type="text" name="text" placeholder="Name">
        <label for="Email" class="Labels">Email - </label>
        <input type="email" name="email" placeholder="Email">
        <label for="number" class="Labels">Number - </label>
        <input type="number" name="number" placeholder="number">
        <label for="comments" class="Labels">Comments - </label>
        <textarea type="text" name="text"></textarea>
        <button class="button-simple">Submit</button>
    </form>
</div>
    `
    const codeString3 = `
    <div class="container">
        <div class="form-box ">
            <div class="leftBox"></div>
            <div class="rightBox">
                <form action="#">
                    <label for="UserName" class="Labels">UserName - </label>
                    <input type="text" name="text" placeholder="UserName" class="InputStyle">
                    <label for="Password" class="Labels">Password - </label>
                    <input type="password" name="password" placeholder="Password" class="InputStyle">
                    <button class="button-simple">Submit</button>
                </form>
            </div>
        </div>
    </div>
    `
    const codeString4 = `
    <table class="shaded-table">
    <tr>
        <th>Name</th>
        <th>Contact</th>
        <th>Address</th>
        <th>Prize</th>
    </tr>
    <tr>
        <td>John Doe</td>
        <td>1234</td>
        <td>Germany</td>
        <td>1st</td>
    </tr>
    <tr>
        <td>Mark Antony</td>
        <td>123434</td>
        <td>Mexico</td>
        <td>2nd</td>
    </tr>
    <tr>
        <td>John Cena</td>
        <td>5678</td>
        <td>Germany</td>
        <td>3rd</td>
    </tr>
    <tr>
        <td>Martina Sue</td>
        <td>9101112</td>
        <td>Prague</td>
        <td>4th</td>
    </tr>
</table>

<table class="hover-table">
    <tr>
        <th>Name</th>
        <th>Contact</th>
        <th>Address</th>
        <th>Prize</th>
    </tr>
    <tr>
        <td>John Doe</td>
        <td>1234</td>
        <td>Germany</td>
        <td>1st</td>
    </tr>
    <tr>
        <td>Mark Antony</td>
        <td>123434</td>
        <td>Mexico</td>
        <td>2nd</td>
    </tr>
    <tr>
        <td>John Cena</td>
        <td>5678</td>
        <td>Germany</td>
        <td>3rd</td>
    </tr>
    <tr>
        <td>Martina Sue</td>
        <td>9101112</td>
        <td>Prague</td>
        <td>4th</td>
    </tr>
</table>
    `
    return (
        <>
            <section className='container-FandT'>
                <h1 className='Heading'>Forms and Tables</h1>
                <div className="fandtbox1">
                    <h2>Simple form containing username and password</h2>
                    <div className="fandtcodebox">
                        <div className="codebox">
                            <SyntaxHighlighter language="javascript" style={atomDark}>
                                {codeString}
                            </SyntaxHighlighter>
                        </div>
                    </div>
                    <div className="fandtboxexp">
                        <form action="#" class="Form-primary">
                            <label for="UserName" class="Labels">UserName - </label>
                            <input type="text" name="text" placeholder="UserName" class="InputStyle" />
                            <label for="Password" class="Labels">Password - </label>
                            <input type="password" name="password" placeholder="Password" class="InputStyle" />
                            <button class="button-simple">Submit</button>
                        </form>
                    </div>
                </div>
                <div className="fandtbox2">
                    <h2>A whole form containing different inputs and with full width use the given classes.</h2>
                    <div className="fandtcodebox">
                        <div className="codebox">
                            <SyntaxHighlighter language="javascript" style={atomDark}>
                                {codeString2}
                            </SyntaxHighlighter>
                        </div>
                    </div>
                    <div className="fandtboxexp2">
                        <form action="#" class="Form-secondary">
                            <label for="Name" class="Labels">Name - </label>
                            <input type="text" name="text" placeholder="Name" />
                            <label for="Email" class="Labels">Email - </label>
                            <input type="email" name="email" placeholder="Email" />
                            <label for="number" class="Labels">Number - </label>
                            <input type="number" name="number" placeholder="number" />
                            <label for="comments" class="Labels">Comments - </label>
                            <textarea type="text" name="text"></textarea>
                            <button class="button-simple">Submit</button>
                        </form>
                    </div>
                </div>
                <div className="fandtbox3">
                    <h2>A stylize form for a better UI experience, use any image on the left it fits in the center</h2>
                    <div className="fandtcodebox">
                        <div className="codebox">
                            <SyntaxHighlighter language="javascript" style={atomDark}>
                                {codeString3}
                            </SyntaxHighlighter>
                        </div>
                    </div>
                    <div className="fandtboxexp3">
                        <div class="form-box ">
                            <div class="leftBox"></div>
                            <div class="rightBox">
                                <form action="#">
                                    <label for="UserName" class="Labels">UserName - </label>
                                    <input type="text" name="text" placeholder="UserName" class="InputStyle" />
                                    <label for="Password" class="Labels">Password - </label>
                                    <input type="password" name="password" placeholder="Password" class="InputStyle" />
                                    <button class="button-simple">Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="fandtbox4">
                    <span>Shaded and hover effects tables just copy the code and use <b>.shaded-table </b> for grey and white table and <b>.hover-table</b>for unique hover effect on table</span>
                    <div className="fandtcodebox">
                        <div className="codebox" style={{fontSize:"20px"}}>
                        <SyntaxHighlighter language="javascript" style={atomDark} customStyle={{height:"300px"}}>
                                {codeString4}
                            </SyntaxHighlighter>
                        </div>
                    </div>
                    <div className="fandtboxexp4">
                        <table class="shaded-table">
                            <tr>
                                <th>Name</th>
                                <th>Contact</th>
                                <th>Address</th>
                                <th>Prize</th>
                            </tr>
                            <tr>
                                <td>John Doe</td>
                                <td>1234</td>
                                <td>Germany</td>
                                <td>1st</td>
                            </tr>
                            <tr>
                                <td>Mark Antony</td>
                                <td>123434</td>
                                <td>Mexico</td>
                                <td>2nd</td>
                            </tr>
                            <tr>
                                <td>John Cena</td>
                                <td>5678</td>
                                <td>Germany</td>
                                <td>3rd</td>
                            </tr>
                            <tr>
                                <td>Martina Sue</td>
                                <td>9101112</td>
                                <td>Prague</td>
                                <td>4th</td>
                            </tr>
                        </table>

                        <table class="hover-table">
                            <tr>
                                <th>Name</th>
                                <th>Contact</th>
                                <th>Address</th>
                                <th>Prize</th>
                            </tr>
                            <tr>
                                <td>John Doe</td>
                                <td>1234</td>
                                <td>Germany</td>
                                <td>1st</td>
                            </tr>
                            <tr>
                                <td>Mark Antony</td>
                                <td>123434</td>
                                <td>Mexico</td>
                                <td>2nd</td>
                            </tr>
                            <tr>
                                <td>John Cena</td>
                                <td>5678</td>
                                <td>Germany</td>
                                <td>3rd</td>
                            </tr>
                            <tr>
                                <td>Martina Sue</td>
                                <td>9101112</td>
                                <td>Prague</td>
                                <td>4th</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </section>
        </>
    )
}

export default FandT
