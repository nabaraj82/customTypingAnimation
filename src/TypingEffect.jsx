import React from 'react'
import { useEffect } from 'react';
import { useState,useRef } from 'react'

const TypingEffect = ({text}) => {
    const [currentText, setCurrentText] = useState('');
    useEffect(() => {
        const timerID = setTimeout(() =>{
          printText(text)
        },100)
        return () =>{
          clearTimeout(timerID)
        }
    },[text,currentText])
    const index = useRef(0)
   function printText(text){
      setCurrentText((value) => value + text.charAt(index.current))
      index.current +=1
      console.log(index.current)
   }
  return (
    <div>{
        currentText
    }</div>
  )
}

export default TypingEffect