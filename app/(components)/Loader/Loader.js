'use client'
import React from 'react'
import { MagnifyingGlass } from 'react-loader-spinner'

export default function Loader() {
  return (
    <section className='w-full h-screen flex justify-center items-center'>
    <MagnifyingGlass
  visible={true}
  height="100"
  width="100"
  ariaLabel="magnifying-glass-loading"
  wrapperStyle={{}}
  wrapperClass="magnifying-glass-wrapper"
  glassColor="#fff"
  color="#e15b64"
  />
</section>
  )
}
