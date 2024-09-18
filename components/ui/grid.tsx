import { Description } from '@radix-ui/react-toast'
import { INTERNAL_HEADERS } from 'next/dist/shared/lib/constants'
import React from 'react'


interface Bento {
  title: string,
  description: string,
  img?: string,

}

function Grid() {

    const grids: Bento[] = [
        {
            title: "Modals",
            description: "lroem ipsobm sioejf sepofjs spodjopsejv spküp",
            img: "/",
        },
        {
            title: "Premium",
            description: "lroem ipsobm sioejf sepofjs spodjopsejv spküp",
            img: "/",
        },
        {
            title: "Ranking",
            description: "To get an easy and fast overview off whats happening in a company right now and where they heading the ranking feature is taking in the information from our sources and put them in one of three categorys: Positve, Neutral and Negative news.",
            img: "/",
        },
        {
            title: "Research",
            description: "Our Sources coming from Bloomberg, Vanguard and EconmicsNA, and get than checked and read by our Rag-Ai modals to give you valid reliable and fast informations.",
            img: "/",
        },
        
    ]

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 gap-1'>

     {grids.map((data: Bento) => (
         <div key={data.title} className='h-72 p-5 w-full max-w-96 rounded-xl bg-neutral-950'>
            <h1 className='text-xl text-neutral-300'>{data.title}</h1>
            <p className='text-neutral-500'>{data.description}</p>
         </div>
     ))}
  
    </div>
  )
}

export default Grid