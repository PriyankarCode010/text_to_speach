import React, { useState } from 'react';

const TextToSpeech = () => {
    const [text, setText] = useState('');

    const speakText = () => {
        if ('speechSynthesis' in window) {
            const speech = new SpeechSynthesisUtterance(text);
            window.speechSynthesis.speak(speech);
        } else {
            alert('Text-to-speech is not supported in this browser.');
        }
    };

    return (
        <div>
            <div className="video-container">
                <video autoPlay muted loop>
                    <source src="Loops.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
            <div className="main">
                <textarea
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder={"enter some text to listen....."}
                    cols="50"
                    rows="5"
                ></textarea>
                <button id="speakbtn" type="button" onClick={speakText}>Speak</button>
            </div>
        </div>
    );
};

export default TextToSpeech;
