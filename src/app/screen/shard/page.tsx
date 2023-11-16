'use client'

import React, { FC } from 'react'
import styles from './page.module.scss'

const Page: FC<any> = () => {
  return (
    <>
      <div className={styles.title}>
        <p>邀请好友分享获取VIP会员</p>
      </div>
      <div className={styles.des}>
        <p>马上分享你的个人链接，通过您的链接注册的会员 将会得到免费获取视频素材的权限。同时，每邀请 1人，您蒋获得200份短视频素材下载的权限。</p>
      </div>
      <div className={styles.meo}>
        <p>说明：将你的链接发送给好友，好友通过链接 安装了APP后系统自动记录</p>
      </div>
      <div className={styles.btn}>
        <span>分享</span>
      </div>
      <div className={styles.currentShard}>
        <span>我已邀请 Xx 个人</span>
        <span>免费获取素材XX 份</span>
      </div>
    </>
  )
}

export default Page

export {}
