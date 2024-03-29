import Link from 'next/link'
import Playerbar from './(components)/Playerbar/Playerbar'
import Image from 'next/image'

export const metadata = {
  title: 'الصفحة الرئيسية ',
  description: 'Generated by create next app',
}
export default async function Home() {

    async function getVideos(){
      const response = await fetch('https://mp3quran.net/api/v3/videos').catch((err)=> err)
      const finalRes = response.json()
      return finalRes
    }

  const {videos} = await getVideos()
  
  return (
    <main>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 my-5">
    {videos?.slice(0,videos.length / 7).map((vid)=>{
          return <div className="box mx-auto bg-[--mainColor] rounded-2xl shadow-xl" key={vid.id} 
          >
            <Link href={vid.videos[0].video_url}>
             <Image
            src={vid.videos[0].video_thumb_url}
            width={100}
            height={100}

            className='w-full rounded-t-lg'
            />
              <h3 className='text-center py-3 font-bold'>{vid.reciter_name}</h3>
              </Link>
              <Playerbar audio={vid.videos[0].video_url}/>
          </div>
        })} 

    </div>
  
    
    </main>
  )
}
