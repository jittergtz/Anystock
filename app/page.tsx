"use client" // remove client only for testing

import Nav from "@/components/nav";
import {  SearchField } from "@/components/searchbar";
import ArticleCard from "@/components/ui/article-card";
import { Button } from "@/components/ui/button";
import Footer from "@/components/ui/Footer";
import Grid from "@/components/ui/grid";
import { useState } from "react";



export default function Home() {
  const [search, setSearch] = useState(false)
  
  return (
    <div className=" p-5 flex flex-col items-center pb-20 min-h-screen w-full">
        
        <Nav/>

       
       <SearchField/>

       <div className="mt-20">

       </div>
       {search ? (
            <ArticleCard/>
       ):(
        <>
         <div className="mt-40 flex-col  pb-20 text-2xl text-transparent bg-clip-text bg-gradient-to-r from-white to bg-neutral-600 tracking-tighter flex items-center">
        Research any Company
        <p className="text-sm  text-center tracking-wide text-neutral-500">Get the latest news and changes from the Company you intrested in, professional and checked sources</p>
      </div>

      <Grid/> 
      </>
       )}
     
      

      
    <button className="bg-white px-4 p-1 rounded-xl" onClick={() => search? setSearch(false) : setSearch(true)}>
      test
    </button>

 

    </div>
  );
}
