import {  useRef, useState } from "react";
import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition";
import microPhoneIcon from "../assets/microphone.png";

function Microphone({searchText,updateSearch}) {
  const { transcript, resetTranscript } = useSpeechRecognition();
  const [isListening, setIsListening] = useState(false);
  const microphoneRef = useRef(null);
  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    return (
      <div className="mircophone-container">
        Browser is not Support Speech Recognition.
      </div>
    );
  }

  const Handler=()=>{
    if(isListening)
    {
      setIsListening(false);
      updateSearch(transcript);
    microphoneRef.current.classList.remove("listening");
    SpeechRecognition.stopListening();

    }
    else 
    {
      resetTranscript();
      setIsListening(true);
    microphoneRef.current.classList.add("listening");
    SpeechRecognition.startListening({
      continuous: true,
    })
  }
  }
 
  return (
    <div className="microphone-wrapper">
      <div className="mircophone-container">
        <div
          className="microphone-icon-container"
          ref={microphoneRef}
          onClick={Handler}
        >
          <span className={`material-symbols-outlined m-3 my-4 dark:bg-white hover:cursor-pointer   ${isListening?" bg-gray-200 dark:bg-white ":0} hover:bg-gray-200 rounded-full p-1 `}>
          <img src={microPhoneIcon} className="microphone-icon w-7 h-7  " />
          </span>
        </div>
    
      
      </div>
      {/* keep on updating the search as we are speaking  */}
      {transcript && isListening && (
        <div className="microphone-result-container">
            {updateSearch(transcript)}
        </div>
      )}
    </div>
  );
}
export default Microphone;