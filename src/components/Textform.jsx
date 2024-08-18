import React, { useState } from 'react'

export default function Textform(props) {
    const [text, setText] = useState("")
    const handleonchange = (event) => {
        setText(event.target.value)
    }
    const handleupclick = () => {
        let newText = text.toUpperCase()
        setText(newText)
        props.showalert("Converted to UppperCase", "success")
    }
    const handledownclick = () => {
        let newText = text.toLowerCase()
        setText(newText)
        props.showalert("Converted to LowerCase", "success")
    }
    const handleCaptitalize = () => {
        let newText = string.split(" ").map(ele => ele.charAt(0).toUpperCase() + ele.slice(1)).join(" ");
        setText(newText)
        props.showalert("Converted to Capitalize", "success")
    }
    const handleclear = () => {
        setText("");
        props.showalert("Clear Text", "success");
    }
    const handlecopy = () => {
        navigator.clipboard.writeText(text)
        props.showalert("Copied to Clipboard", "success");
    }
    const handlespaces = () => {
        let newText = text.split(/[ ]+/)
        setText(newText.join(" "))
        props.showalert("Remove Extra-Spaces", "success")
    }
    return (<>
        <div style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
            <div className='container' style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h1>Enter Text Here ...</h1>
                <div className="my-3">
                    <textarea spellCheck="false" placeholder='Enter a text you want to modify by buttons . . .' style={{ backgroundColor: props.mode === 'dark' ? 'lightgray' : 'lightblue', color: props.mode === 'dark' ? 'black' : 'black' }} onChange={handleonchange} value={text} className="form-control textareas my-4" rows={8} id="mybox"></textarea>
                </div>
                <div style={{ color: props.mode === 'dark' ? '#06073a' : 'white' }}>

                    <button onClick={handleupclick} className="btn btn-primary mx-4 my-4">Convert to Uppercase</button>

                    <button onClick={handledownclick} className="btn btn-primary mx-4">Convert to Lowercase</button>

                    <button onClick={handleCaptitalize} className="btn btn-primary mx-4">Convert to Lowercase</button>

                    <button onClick={handlespaces} className="btn btn-primary  mx-4 ">Remove Extra-Spaces</button>

                    <button onClick={handlecopy} className="btn btn-primary mx-4 ">copy to clipboard</button>

                    <button onClick={handleclear} className="btn btn-primary mx-4 my-4">Clear Text</button>
                </div>
            </div>
            <div className="parag">
                <p> {text.split(/\s/).filter((element) => { return element.length !== 0 }).length} words and {text.length} character</p>
                <h2>Preview</h2>
                <div className='previewtext'>
                    <p>{text.length > 0 ? text : "please write something !"}</p>
                </div>
            </div>
        </div>
    </>
    )
}