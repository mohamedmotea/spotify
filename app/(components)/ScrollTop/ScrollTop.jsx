'use client'
import React, { useEffect, useState } from 'react'

export default function ScrollTop() {

  const [scroll, setScroll] = useState(false)

  useEffect(() => {
    document.addEventListener('scroll', () => {
      if (window.scrollY >= 300 ) {
        setScroll(true)
      } else {
        setScroll(false)
      }
    })
  }, [])
  return (
    <>
            { <div onClick={() => {
          window.scrollTo({
            top: 0,
            behavior: "smooth"
          })}}
          style={{opacity: scroll ? 1 : 0}}
          className='fixed z-1 bottom-3 right-3 bg-[--mainColor] w-12 h-12 flex justify-center items-center rounded-full cursor-pointer'>
              <i className="fa-solid fa-arrow-up"></i>
        </div>
          }
    </>
  )
}
