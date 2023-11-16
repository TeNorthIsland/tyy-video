'use client'

import React, { FC } from 'react'

import BannerAD from '@/components/Banner/Banner'
import VideoList from '@/components/VideoList/VideoList'
import FilterBili from '@/components/Filter/FilterBili'

const Page: FC<any> = () => {
  return (
    <>
      {/* fillter component */}
      <FilterBili></FilterBili>
      {/* ad banner */}
      <BannerAD></BannerAD>
      {/* videoList */}
      <VideoList></VideoList>
    </>
  )
}

export default Page
