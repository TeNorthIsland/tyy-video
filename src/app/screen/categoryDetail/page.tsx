'use client'

import React, { FC } from 'react'

import BannerAD from '@/components/Banner/Banner'
import VideoList from '@/components/VideoList/VideoList'
import FilterCategory from '@/components/Filter/FilterCategory'

const Page: FC<any> = () => {
  return (
    <>
      {/* fillter component */}
      <FilterCategory></FilterCategory>
      {/* ad banner */}
      <BannerAD></BannerAD>
      {/* videoList */}
      <VideoList></VideoList>
    </>
  )
}

export default Page
