'use client'

import React, { FC } from 'react'

import BannerAD from '@/components/Banner/Banner'
import VideoList from '@/components/VideoList/VideoList'
import FillterLike from '@/components/Filter/FilterLike'

const Page: FC<any> = () => {
  return (
    <>
      {/* fillter component */}
      <FillterLike></FillterLike>
      {/* ad banner */}
      {/* <BannerAD></BannerAD> */}
      {/* videoList */}
      {/* video list 是需要的 但是这里传递一个默认为空的值 */}
      {/* <VideoList></VideoList> */}
    </>
  )
}

export default Page

export {}
