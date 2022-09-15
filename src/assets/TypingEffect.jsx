import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

const TypingEffect = ({text}) => {
    const [currentText, setCurrentText] = useState('');
    console.log(currentText)
    
    useEffect(() => {
        printText(text)
    },[text])
    let index =0;
    const printText = (text) =>{ 
        console.log(text.charAt(index))
        setCurrentText (value => value + text.charAt(index));
        index = index+1;
        setTimeout(() => {
        printText(text)
        }, 1000);
    }
   
  return (
    <div>{
        currentText
    }</div>
  )
}

export default TypingEffect