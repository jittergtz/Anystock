import Image from 'next/image'
import React from 'react'



export function Positive() {
  return (
   
        <Image
        src="/positive-article-big.png"
        width={42}
        height={42}
        alt='Positive'
        className='pointer-events-none w-10 h-10'/>
   
  )
}


export function Neutral() {
  return (
   
        <Image
        src="/neutral-articl.png"
        width={42}
        height={42}
        alt='Positive'
        className='pointer-events-none w-10 h-10'/>
   
  )
}


export function Negative() {
  return (
   
        <Image
        src="/negative-article.png"
        width={42}
        height={42}
        alt='Positive'
        className='pointer-events-none w-10 h-10'/>
   
  )
}

export default Positive