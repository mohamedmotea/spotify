'use client'
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
export default function Playerbar({audio }) {

  return (
    <section id='player' className=' bg-[--mainColor]'>
    <AudioPlayer
    src={audio}
    />
    </section>
  )
}
