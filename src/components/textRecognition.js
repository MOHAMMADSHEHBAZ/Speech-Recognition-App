import React from 'react'
import './speechRecognition.css'
import SpeechRecognition,{useSpeechRecognition} from 'react-speech-recognition'

const SpeechRec = () => {
    const reload = ()=>{window.location.reload()};
    const start = () =>{SpeechRecognition.startListening({ continuous: true ,language: 'en-IN'})};
    const { transcript, browserSupportsSpeechRecognition } = useSpeechRecognition();
    if (!browserSupportsSpeechRecognition) {
        return null
      }
  return (
    <>
    <div className="container">
        <div className="heading">
            <h1>SPEECH RECOGNITION APP</h1>
        </div>
        <div className="box">
            <div className="textarea">
                {transcript}
            </div>
            <div className="btns">
                <button onClick={start} id='start'>START</button>
                <button onClick={SpeechRecognition.stopListening} id='stop'>STOP</button>
                <button id='reload' onClick={reload}>CLEAR</button>
            </div>
        </div>
    </div>
    </>
  )
}

export default SpeechRec
