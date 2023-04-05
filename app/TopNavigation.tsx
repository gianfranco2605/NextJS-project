"use client";

import { BsYoutube, BsMicFill, BsBell, BsCameraVideo } from 'react-icons/bs';
import { HiOutlineMenu } from 'react-icons/hi';
import { BiSearch } from 'react-icons/bi';
import Image from 'next/image';
import { useState } from "react";

const TopNavigation = () => {
    const [ search, setSearch ] = useState("")
    return ( 
        <div className='flex justify-between items-center p-4'>

            <div className="flex items-center gap-6 ">

                <HiOutlineMenu size={26} />
                <div className='flex item-cente gap-1'>
                    <BsYoutube size={30} className='text-red-500' />
                    <span className='text-xl'>YouTube</span>
                </div>
            </div>

            <div className="hidden md:flex min-w-[300px] gap-2 lg:w-[620px]">

                <div className='flex w-full'>
                    <input 
                        placeholder='Search' 
                        value={search}
                        onChange={(event) => setSearch(event.target.value)} 
                        className= ' w-full  px-4 py-2 text-zinc-200 border-[1px] bg-zinc-900 focus:bg-black rounded-tl-full rounded-bl-full focus:outline-none focus:ring-[1px] focus:ring-sky-500 placeholder:text-zinc-400' 
                    />
                    <div className='text-zinc-700 px-5 py-3 rounded-tr-full rounded-br-full border-[1px]'>
                        <BiSearch size={25} />
                    </div>
                </div>

                <div className='flex items-center bg-zinc-800 p-4 rounded-full hover:bg-zinc-700 cursor-pointer'>
                     <BsMicFill className='text-zinc-200'/>
                </div>
            </div>

            <div className="flex gap-3">
                <div className='flex items-center  p-3 rounded-full hover:bg-zinc-700 cursor-pointer'>
                     <BsCameraVideo size={20} className='text-zinc-200'/>
                </div>
                <div className='flex items-center p-3 rounded-full hover:bg-zinc-700 cursor-pointer'>
                     <BsBell size={20} className='text-zinc-200'/>
                </div>
                <div>
                    <Image
                        src="https://pbs.twimg.com/profile_images/1636829781931991041/OXZh9NNw_400x400.jpg" 
                        height={50} 
                        width={50} 
                        alt='foto'
                        className='rounded-full'
                        />
                </div>
                
            </div>

        </div>
     );
}
 
export default TopNavigation ;