import { useState, useEffect } from "react";

const TypeWriter = ({text, speed, cursor='█'}) => {
    const [currText, setCurrText] = useState('');
    const [currIndex, setCurrIndex] = useState(0);
    useEffect(() => {
        const printNextChar = () => {
            setCurrText(prev => prev + text[currIndex]);
            setCurrIndex(currIndex + 1);
        }
        if (currIndex < text.length) {
            const timer = setTimeout(printNextChar, speed);
            return () => clearTimeout(timer);
        }
        //  else {
        //     /* remove cursor */
        //     const timer = setTimeout(() => setCurrText(prev => prev.substring(0, prev.length-1)), 500);
        //     return () => clearTimeout(timer);
        // }
    }, [currIndex])
    
    if (currIndex < text.length)
        return <span>{currText + cursor}</span>
    return <span>{currText}</span>;
}

export default TypeWriter;