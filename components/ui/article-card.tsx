import React, { useState } from 'react'
import { Button } from './button';
import { IoIosClose } from "react-icons/io";
import Positiv from './rating/ranking';

interface Article {
  id: number;
  title: string;
  description: string;
  rank: number;
  date: string;
}

function ArticleCard() {
  const [openModalId, setOpenModalId] = useState<number | null>(null);

  const articles: Article[] = [
    {
      id: 1,
      title: "Amazon july record revenue month in 2024",
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam, unde! Exercitationem soluta, itaque repellendus dolorem ad asperiores, quidem at explicabo, necessitatibus dignissimos aspernatur debitis provident! Totam dicta voluptatum quia accusantium!",
      rank: 0,
      date: "17.09.2024",
    },
    {
      id: 2,
      title: "Amazon july record revenue month in 2024",
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam, unde! Exercitationem soluta, itaque repellendus dolorem ad asperiores, quidem at explicabo, necessitatibus dignissimos aspernatur debitis provident! Totam dicta voluptatum quia accusantium!",
      rank: 0,
      date: "13.09.2024",
    },
    {
      id: 3,
      title: "Amazon july record revenue month in 2024",
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam, unde! Exercitationem soluta, itaque repellendus dolorem ad asperiores, quidem at explicabo, necessitatibus dignissimos aspernatur debitis provident! Totam dicta voluptatum quia accusantium!",
      rank: 0,
      date: "12.09.2024",
    },
    {
      id: 4,
      title: "Amazon july record revenue month in 2024",
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam, unde! Exercitationem soluta, itaque repellendus dolorem ad asperiores, quidem at explicabo, necessitatibus dignissimos aspernatur debitis provident! Totam dicta voluptatum quia accusantium!",
      rank: 0,
      date: "07.09.2024",
    },
    {
      id: 4,
      title: "Amazon july record revenue month in 2024",
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam, unde! Exercitationem soluta, itaque repellendus dolorem ad asperiores, quidem at explicabo, necessitatibus dignissimos aspernatur debitis provident! Totam dicta voluptatum quia accusantium!",
      rank: 0,
      date: "07.09.2024",
    },
    {
      id: 4,
      title: "Amazon july record revenue month in 2024",
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam, unde! Exercitationem soluta, itaque repellendus dolorem ad asperiores, quidem at explicabo, necessitatibus dignissimos aspernatur debitis provident! Totam dicta voluptatum quia accusantium!",
      rank: 0,
      date: "07.09.2024",
    },
    {
      id: 4,
      title: "Amazon july record revenue month in 2024",
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam, unde! Exercitationem soluta, itaque repellendus dolorem ad asperiores, quidem at explicabo, necessitatibus dignissimos aspernatur debitis provident! Totam dicta voluptatum quia accusantium!",
      rank: 0,
      date: "07.09.2024",
    }
  ];

  const toggleModal = (id: number) => {
    setOpenModalId(openModalId === id ? null : id);
  };

  return (
    <div className='flex  flex-col gap-2 '>
      {articles.map((article: Article) => (
        <div key={article.id}  className='max-w-3xl  flex flex-col w-full p-3  md:px-6 bg-[#080808] rounded-[17px] '>
          <div className="flex flex-col gap-1">
            <div className='w-full flex justify-between'>
            <h1 className='text-neutral-200 w-3/4  font-light text-2xl'>
              {article.title} 
            </h1>
            <Positiv/>
            </div>
            <p className="text-md h-12 overflow-hidden text-neutral-500">
              {article.description}
            </p>
          </div>
          <div className="flex h-full items-end justify-between">
            <Button  onClick={() => toggleModal(article.id)} className='flex items-center gap-1'>Research</Button>
            <div className='p-2 px-4 bg-[#000000] rounded-md text-neutral-300'>
              {article.date}
            </div>
          </div>
          {openModalId === article.id && (
            <div className='max-h-[620px] h-full top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 p-5 border border-neutral-700 w-full max-w-[800px]  absolute  z-50 rounded-2xl bg-black/20 backdrop-blur-md'>
              <div  className='flex justify-end w-full'>
              <button className=''  onClick={() => toggleModal(article.id)}>
                <IoIosClose className='text-neutral-400' size={18} />
                </button>
              </div>
           
              <div className="flex flex-col gap-1">
                <h1 className='text-neutral-100  font-light  text-3xl'>
                  {article.title}
                </h1>
                <p className="text-md mt-3  text-neutral-400">
                  {article.description}
                </p>
              
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

export default ArticleCard