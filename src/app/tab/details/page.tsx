'use client'

import React, { FC, useEffect, useRef, useLayoutEffect, useState } from 'react'
import Collapse from 'rc-collapse'

import BannerAD from '@/components/Banner/Banner'
import VideoList from '@/components/VideoList/VideoList'
import Player from 'xgplayer'

import motion from '@/utils/mations/collapseMotion'
import Image from 'next/image'

import 'rc-collapse/assets/index.css' // 引入css 这个是必要的
import 'xgplayer/dist/index.min.css' // 引入css 这个是必要的
import styles from './page.module.scss'
import './page.scss'

const { Panel } = Collapse

interface InterVipItem {
  name: string
  isSelect: boolean
  vipCode: string
  content: React.ReactNode
}

const PanneContent = () => {
  return (
    <div className={styles.pannerContent}>
      <div className={styles.lable}>服务保障</div>
      <div className={styles.info}>
        <p>1.海量素材</p>
        <p>2.无广告</p>
        <p>3.集合国内多家平台优势短视频</p>
      </div>
    </div>
  )
}

const VIPList: Array<InterVipItem> = [
  {
    name: 'VIP1',
    isSelect: true,
    vipCode: 'vip1',
    content: <PanneContent></PanneContent>,
  },
  {
    name: 'VIP2',
    isSelect: true,
    vipCode: 'vip2',
    content: <PanneContent></PanneContent>,
  },
  {
    name: 'VIP3',
    isSelect: true,
    vipCode: 'vip3',
    content: <PanneContent></PanneContent>,
  },
]

const Page: FC<any> = () => {
  const _playerRef = useRef<Player>()
  useLayoutEffect(() => {
    setTimeout(() => {
      _playerRef.current = new Player({
        id: 'mse',
        poster: '/video/fm.png',
        url: '/video/xgplayer-demo-720p.mp4',
        fluid: true,
        // playsinline: false,
      })
    }, 1000)
  }, [])

  return (
    <>
      {/* ad banner */}
      <BannerAD></BannerAD>
      {/* video content */}
      <div className={styles.videoContent}>
        <div id="mse"></div>
      </div>
      {/* shard */}
      <div className={styles.shardButton}>
        <span>分享获得免费观看</span>
      </div>
      {/* video source */}
      <div className={styles.sourceType}>
        <div className={styles.lable}>画质</div>
        <div className={styles.items}>
          <span>标清</span>
          <span className={styles.itemsActive}>高清</span>
        </div>
      </div>
      {/* vip info */}
      <div className={styles.vipInfoContent}>
        {/* <div>会员专享......</div> */}
        <div className={styles.updateVip}>升级会员开启无线观看</div>
        <div>
          <Collapse className="vip-info-collapse" accordion={false} openMotion={motion}>
            {VIPList.map((item, idx) => {
              return (
                <Panel
                  headerClass="vip-header"
                  showArrow={false}
                  header={
                    <div className={styles.vipHeaderContent}>
                      <div className={styles.vipName}>{item.name}</div>
                      <div className={styles.rightIcon}>
                        <Image src="/icon/right.png" width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }} alt="Picture of the author" />
                      </div>
                    </div>
                  }
                  key={item.vipCode}
                >
                  {item.content}
                </Panel>
              )
            })}
          </Collapse>
        </div>
      </div>
      {/* video message info */}
      <div className={styles.videoInfoContent}>
        <div className={styles.lineWrap}>
          <div className={styles.videoTitleLable}>片名</div>
          <div className={styles.videoTitle}>蛋仔派对：蛋仔岛大更新？我变成了椅子</div>
        </div>

        <div className={styles.lineWrap}>
          <div className={styles.lable}>关键字</div>
          <div>
            <span>广场舞</span>
            <span>AI</span>
            <span>美食</span>
          </div>
        </div>

        <div className={styles.lineWrap}>
          <div>上架时间</div>
          <span>2023-09-11</span>
        </div>
      </div>
      {/* videoList (not show pagntaion) */}
      <div className={styles.moreVideoContent}>
        <div className={styles.lable}>相关视频</div>
        <VideoList needPagination={false}></VideoList>
      </div>
    </>
  )
}

export default Page
