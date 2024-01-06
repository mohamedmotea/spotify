import React from 'react'
import pageNotFound from '../public/Error-404.png'
import Image from 'next/image'

export default function Notfound() {
  return (
    <>
    <div>
    <Image src={pageNotFound} className='w-full' width={900} height={900} alt="Page Notfound"/>
    </div>
    </>
  )
}
