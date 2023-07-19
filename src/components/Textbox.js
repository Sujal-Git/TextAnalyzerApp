import React from 'react';
import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Textbox.css'

export default function Textbox() {
    const [text, setText] = useState('Text Here')
    const upper = () => {
        var upper_text = text.toUpperCase()
        setText(upper_text)
    }
    const lower = () => {
        var low_text = text.toLowerCase();
        setText(low_text)
    }
    const spacing = () => {
        var spaced_text = text.replaceAll(' ', '')
        setText(spaced_text)

    }
    const copy = () => {
        const cb = navigator.clipboard;
        const paragraph = text
        cb.writeText(paragraph)
        toast.success('Text Copied', {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });

    }

    const change = (event) => {
        setText(event.target.value)
    }

    return (
        <>
            <div>
                <textarea className="form-control" id="exampleFormControlTextarea1" onChange={change} rows="7" data-bs-theme="dark"
                    placeholder='Enter Your Text here...' contentEditable="true" ></textarea>

                <div className="set">
                    <button type="button" className="btn btn-primary" onClick={upper}>Uppercase</button>
                    <button type="button" className="btn btn-primary" onClick={lower}>Lowercase</button>
                    <button type="button" className="btn btn-primary" onClick={spacing}>Remove Space</button>
                    <button type="button" className="btn btn-primary copy" onClick={copy}  >Copy</button>
                </div>
            </div>
            <div className="report">
                <h5>Word:{
                text.trim().split(/\s+/).length}</h5>
                <h5>Characters: {text.length}</h5>
            </div>
            <div className="preview">
            <h2>Preview</h2>
            <h4>{text}</h4>
            </div>

            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />
    

        </>
    )
}

