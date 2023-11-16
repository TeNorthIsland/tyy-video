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
          用户协议与申明
        </p>
        <p
          style={{
            fontSize: '0.16rem',
            color: '#fff',
            marginTop: '0.2rem',
          }}
        >
          本协议是您与本软件之间关于您下载，安装，使用，复制本软件 ，以用本软件相关服务所订立的协议。
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
        <p
          style={{
            fontSize: '0.16rem',
            color: '#fff',
            marginTop: '0.2rem',
          }}
        >
          如果您从未经本软件授权的第三方获取本软件或与本软件名称相同的安装程序，本软件无法保证该软件能够正常使用，并对因此给您造成的损失不予负责。下载安装程序后，您需要按照该程序提示的步骤正确安装。
        </p>
        <p
          style={{
            fontSize: '0.16rem',
            color: '#fff',
            marginTop: '0.2rem',
          }}
        >
          为提供更加优质，安全的服务，在本软件安装时本软件可能推荐您安装其他软件，您可以选择安装或不安装。
        </p>
        <p
          style={{
            fontSize: '0.16rem',
            color: '#fff',
            marginTop: '0.2rem',
          }}
        >
          如果您不再需要使用本软件或者需要安装新版本软件，可以自行卸载。
        </p>
      </div>
    </>
  )
}

export default Page
