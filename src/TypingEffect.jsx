import React, { useEffect } from 'react'
import { useState } from 'react'

const TypingEffect = ({phrase}) => {
  const [text, setText] = useState('')
  const [forwardIndex, setForwardIndex] = useState(0)
  const [backwardIndex, setBackwardIndex] = useState(0)
  useEffect(()=>{
    if(forwardIndex<phrase.length){

      setTimeout(()=>{
        setText(text+phrase[forwardIndex])
      setForwardIndex(forwardIndex+1)
      },200)
    }else{
        setBackwardIndex(phrase.length)
    }
  },[forwardIndex])
  useEffect(()=>{
    if(backwardIndex >= 0){
      setTimeout(()=>{
        setText(phrase.slice(0,backwardIndex))
        setBackwardIndex(backwardIndex-1)
      },100)
    }else{
      setForwardIndex(0)
    }
  },[backwardIndex])
  return (
    <div>{text}</div>
  )
}

export default TypingEffect