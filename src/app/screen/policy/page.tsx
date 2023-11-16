'use client'

import React, { FC } from 'react'

import BannerAD from '@/components/Banner/Banner'
import VideoList from '@/components/VideoList/VideoList'
import FilterCategory from '@/components/Filter/FilterCategory'

const Page: FC<any> = () => {
  return (
    <>
      <div
        style={{
          padding: '0.12rem',
        }}
      >
        <p
          style={{
            color: '#fff',
            fontSize: '0.24rem',
            fontWeight: 'bold',
            textAlign: 'center',
            marginBottom: '0.2rem',
          }}
        >
          政策条款
        </p>
        <p
          style={{
            fontSize: '0.16rem',
            color: '#fff',
            marginTop: '0.2rem',
          }}
        >
          二， 关于本服务
        </p>
        <p
          style={{
            fontSize: '0.16rem',
            color: '#fff',
            marginTop: '0.2rem',
          }}
        >
          本服务内容是指本软件客户端软件提供包括但不限于IOS及Android等多个版本，您必须选择与所安装手机相匹配的软件版本。
        </p>
        <p
          style={{
            fontSize: '0.16rem',
            color: '#fff',
            marginTop: '0.2rem',
          }}
        >
          三， 软件的获取
        </p>
        <p
          style={{
            fontSize: '0.16rem',
            color: '#fff',
            marginTop: '0.2rem',
          }}
        >
          您可以直接从本软件授权的第三方获取。
        </p>
      </div>
    </>
  )
}

export default Page
