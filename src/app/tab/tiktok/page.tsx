'use client'

import React, { FC } from 'react'

import BannerAD from '@/components/Banner/Banner'
import VideoList from '@/components/VideoList/VideoList'
import FillterTiktok from '@/components/Filter/FilterTiktok'
// import FilterBili from '@/components/Filter/FilterBili'

const Page: FC<any> = () => {
  return (
    <>
      {/* fillter component */}
      <FillterTiktok></FillterTiktok>
      {/* <FilterBili></FilterBili> */}
      {/* ad banner */}
      <BannerAD></BannerAD>
      {/* videoList */}
      <VideoList></VideoList>
    </>
  )
}

export default Page

export {}
