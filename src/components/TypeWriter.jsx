import { useState, useEffect } from "react";
/**
 * @typedef {object} TypeWriterProps
 * @property {string} text Text to be displayed
 * @property {speed} number Show fast each character appears in milliseconds
 * @property {string} cursor Cursor to be shown at end of text
 * @property {boolean} hideCursor Determines if cursor is shown at end of text
 */

/**
 * @param {TypeWriterProps} props
 */
const TypeWriter = ({text, speed=20, cursor='█', hideCursor=false}) => {
    const [currText, setCurrText] = useState('');
    const [currIndex, setCurrIndex] = useState(0);
    const [showCursor, setShowCursor] = useState(false)

    useEffect(() => {
        if (currIndex < text.length) {
            const timer = setTimeout(() => {
                setCurrText(prev => prev + text[currIndex])
                setCurrIndex(currIndex + 1)
            }, speed);
            return () => clearTimeout(timer);
        } else if (!hideCursor) {
            const blinkTimer = setInterval(() => {
                setShowCursor(prev => !prev)
            }, 500)
            return () => clearInterval(blinkTimer)
        }
    }, [currIndex])
    
    return (
        <span>
            {currText}
            <span className='cursor' style={{opacity: showCursor ? 1 : 0}}>
                {cursor}
            </span>
        </span>
    )
}

export default TypeWriter;