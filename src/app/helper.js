'use client'

import { createContext, useContext, useState, useEffect } from 'react';

var startTime = 0

export default function TypewriterField() {

    const [charArray, setCharArray] = useState([]);

    const textDeutsch = "Das ist ja mal ein geiles CCG, danke Julian, dass du das erstellt hast. Ich bin echt froh hier dabei sein zu dürfen!"
    const textShort = "easy"
    const text = "Thats such a nice CCG, thanks Julian for making it possible. Im more than happy to be here if i am honest with you!"

    useEffect(() => {
        const keyDownHandler = (event) => {
            if(event.key === 'Backspace') {
                removeChar();
            } else if(/^[a-zA-ZäöüÄÖÜß \.\,!]$/.test(event.key)) {
                addChar(event.key);
                if(startTime === 0) {
                    var currentTime = Date.now()
                    // setTimeState(currentTime)
                    startTime = currentTime
                    console.log(currentTime, startTime)
                }
            }
        }
        document.addEventListener("keydown", keyDownHandler);
    
        // clean up
        return () => {
          document.removeEventListener("keydown", keyDownHandler);
        };
    }, []);

    // Funktion zum Hinzufügen eines Zeichens zum Char-Array
    const addChar = (char) => {
        setCharArray(prevArray => [...prevArray, char]);
    };

    // Funktion zum Entfernen eines Zeichens aus dem Char-Array
    const removeChar = () => {
        setCharArray(prevArray => prevArray.slice(0, -1)); // Entfernt das letzte Element
    };

    var content = TextComponent(textDeutsch, charArray, Date.now() - startTime);

    if(startTime === 0) {
        var content = TextComponent(textDeutsch, charArray, 0);
    }

    if (isTextComplete(textDeutsch, charArray)) {
        content = DoneComponent(Date.now() - startTime);
    }

    return(
        <div>
            {content}
        </div>

    );
}

const getClassForValue = (char1, char2) => {
    if(char1 === undefined || char2 === undefined){
        return 'untouched'
    }
    return char1 === char2 ? 'correct' : 'failed';
};

const isTextComplete = (text, charArray) => {
    return text === charArray.join("")
};

function TextComponent(text, letters, time) {
    return(
        <div>
            {text.split('').map((char, index) => (
                <span key={index} className={getClassForValue(letters[index], char)}>
                    {char}
                </span>
            ))}
            <div className="typing">
                {letters.join("")}
            </div>
            <br></br>
            {/* <div>
                {time}
            </div> */}
        </div>
    )
}

function DoneComponent(time) {
    return(
        <div>
            geschafft in folgender Zeit: {(time/1000).toFixed(0)} Sekunden und {time%1000} Millisekunden!
        </div>
    )
}