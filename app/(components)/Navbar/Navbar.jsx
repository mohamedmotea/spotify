'use client'


import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, {  useEffect } from 'react'

const links = [
  {title:'الصفحة الرئيسية',go:'/'},
  {title:'تدبر',go:'/tadabar'},
  {title:'تفسير',go:'/tafasirs'},
  {title:'لايف',go:'/live'},
  {title:'تواصل معنا',go:'/contactUs'},

]



export default function Navbar() {
  let path = usePathname().split('/')

  let linkStyle = 'text-blue-300'
  
  useEffect(()=>{
    document.addEventListener('scroll',()=>{
      if(window.scrollY > 30){
        document.querySelector('header').style.backgroundColor = '#1B1B1B'
      }else{
        document.querySelector('header').style.backgroundColor = 'transparent'
        
      }
    })
  },[])
  const scale = 'hover:scale-[1.02] cursor-pointer'
  

  return <header className='sticky top-0 py-4 px-3 z-10'>
      <nav>

    <div className='flex justify-between items-center w-full'>


  <ul className='flex  justify-between font-bold text-center mx-auto' dir='rtl'>
    {links.map((link,index)=>{ return <Link key={index} href={link.go} className={`${path[1] === link.go.split('/')[1] ? linkStyle : null } mx-2 md:mx-4 text-[15px] md:text-[17px] lg:text-[18px] `}>{link.title}</Link>} )}

  </ul>

<div>

      <i className={`${scale} fa-regular fa-bell bg-[#0f0f0f] p-2 rounded-full`}></i>
      <i className={`${scale} fa-regular fa-user ml-2 bg-[#0f0f0f] p-2 rounded-full`}></i>
</div>
    </div>
      </nav>
  </header>
}
