'use client'


import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, {  useEffect, useState } from 'react'

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
  const [hide,setHide] = useState(false)
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
  

  return <header className='sticky top-0 py-4 px-3 z-10 '>
      <nav className='relative'>

    <div className='flex justify-between items-center w-full '>


    <button className='btn sm:hidden ' onClick={()=> hide ? setHide(false) : setHide(true)}>
    <i class="fa-solid fa-bars text-2xl"></i>

      <div className='absolute bg-[--subColor] rounded-3xl w-[350px] top-full mt-5 left-[50%] translate-x-[-50%]'>

    {hide ?  <ul className='flex font-bold text-center py-5  mt-5  flex-col text-2xl ' dir='rtl'>
      {links.map((link,index)=>{ return <Link key={index} href={link.go} className={`${path[1] === link.go.split('/')[1] ? linkStyle : null } text-base my-3`}>{link.title}</Link>} )}
      </ul> : ''
    }
  
      </div>

    </button>


  <ul className='hidden sm:flex justify-between font-bold text-center mx-auto' dir='rtl'>
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
