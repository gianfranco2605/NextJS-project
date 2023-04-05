import Image from "next/image";
import { feedVideos } from "./util/data"
import { BsDot, BsThreeDotsVertical } from "react-icons/bs";

export default function Home() {
  return (
   <div className="flex flex-col px-8 py-4 md:flex-row flex-wrap gap-10 lg:gap-4 flex-1">
    {feedVideos.map(video => (
      <div key={1} className="flex flex-col gap-3 w-[340px]">
        <div className="">
        <Image 
        src={video.thumbnailUrl} 
        height={200} 
        width={400} 
        alt="thumbnail"
        />
        </div>
        <div className="flex gap-3">
          <div>
          <Image
            src="https://pbs.twimg.com/profile_images/1636829781931991041/OXZh9NNw_400x400.jpg" 
            height={50} 
            width={50} 
            alt='foto'
            className='rounded-full'
            />
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex justify-between">
            <span className="font-semibold text-white max-w-[80%]" >{video.title}</span>
            <BsThreeDotsVertical />
            </div>
            <div className="text-sm text-zinc-400">
              <span>{video.channelName}</span>
              <div className="flex items-center">
              <span>{video.viewCount}</span>
              <BsDot />
              <span>dot</span>
              <span>{video.createdAt.toDateString()}</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    ))}
   </div>
  );
}
