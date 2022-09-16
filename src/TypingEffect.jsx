import React, { useEffect } from 'react'
import { useState } from 'react'

const TypingEffect = ({phrase}) => {
  const [text, setText] = useState('')
  const [forwardIndex, setForwardIndex] = useState(0)
  const [backwardIndex, setBackwardIndex] = useState(0)
  // writing text with time interval
  useEffect(()=>{
    if(forwardIndex<phrase.length){
     const writingTimeID = setTimeout(()=>{
        setText(text+phrase[forwardIndex])
      setForwardIndex(forwardIndex+1)
      },50)
      return () => {
        clearTimeout(writingTimeID)
      }
    }else{
       const delyTimeID = setTimeout(()=>{
          setBackwardIndex(phrase.length)
        },3000)
        return () =>{
          clearTimeout(delyTimeID)
        }
    }
    
  },[forwardIndex])
  //deleteing text with time interval
  useEffect(()=>{
    if(backwardIndex >= 0){
      const clearTimeID = setTimeout(()=>{
        setText(phrase.slice(0,backwardIndex))
        setBackwardIndex(backwardIndex-1)
      },10)
      return () =>{
        clearTimeout(clearTimeID)
      }
    }else{
      setForwardIndex(0)
    }
  },[backwardIndex])
  return (
    <div>{text}</div>
  )
}

export default TypingEffect