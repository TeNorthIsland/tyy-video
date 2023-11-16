'use client'

import React, { FC } from 'react'
import Image from 'next/image'

import Collapse from 'rc-collapse'
import 'rc-collapse/assets/index.css'
const { Panel } = Collapse

import motion from '@/utils/mations/collapseMotion'
import styles from './page.module.scss'
import './page.scss'
import { useRouter } from 'next/navigation'

interface InterCategoryItem {
  name: string
  c_id: string
  subCategor?: Array<{
    name: string
    c_id: string
  }>
}

const categoryList: Array<InterCategoryItem> = [
  {
    name: '电影',
    c_id: 'move',
    subCategor: [
      {
        name: '动作',
        c_id: 'move1-1',
      },
      {
        name: '科幻',
        c_id: 'move1-2',
      },
    ],
  },
  {
    name: '美食',
    c_id: 'move2',
    subCategor: [
      {
        name: '动作',
        c_id: 'move2-1',
      },
      {
        name: '科幻',
        c_id: 'move2-2',
      },
    ],
  },
  {
    name: '游戏',
    c_id: 'move3',
    subCategor: [
      {
        name: '动作',
        c_id: 'move3-1',
      },
      {
        name: '科幻',
        c_id: 'move3-2',
      },
    ],
  },
  {
    name: '时尚',
    c_id: 'move4',
    subCategor: [
      {
        name: '动作',
        c_id: 'move4-1',
      },
      {
        name: '科幻',
        c_id: 'move4-2',
      },
    ],
  },
  {
    name: '科技',
    c_id: 'move5',
    subCategor: [
      {
        name: '动作',
        c_id: 'move5-1',
      },
      {
        name: '科幻',
        c_id: 'move5-2',
      },
    ],
  },
  {
    name: '动物',
    c_id: 'move6',
    subCategor: [
      {
        name: '动物世界',
        c_id: 'move6-1',
      },
      {
        name: 'BBC',
        c_id: 'move6-2',
      },
      {
        name: '寰宇地球',
        c_id: 'move6-3',
      },
    ],
  },
]

const Page: FC<any> = () => {
  const router = useRouter()
  return (
    <div className="category-content">
      <Collapse className="category-info-collapse" accordion={false} openMotion={motion}>
        {categoryList.map((item, idx) => {
          return (
            <Panel
              headerClass="category-header"
              showArrow={false}
              header={
                <div className={styles.vipHeaderContent}>
                  <div className={styles.rightIcon}>
                    <Image src="/icon/category.png" width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }} alt="Picture of the author" />
                  </div>
                  <div className={styles.vipName}>{item.name}</div>
                </div>
              }
              key={item.c_id}
            >
              <div className={styles.content}>
                {item.subCategor?.map((subItem, subIdx) => {
                  return (
                    <span
                      onClick={() => {
                        // console.log(subItem.c_id)
                        // router.push('/tab/category/details')
                        router.push(`/screen/categoryDetail?pageName=${encodeURIComponent('分类详情')}`)
                      }}
                      key={subItem.c_id}
                    >
                      {subItem.name}
                    </span>
                  )
                })}
              </div>
            </Panel>
          )
        })}
      </Collapse>
    </div>
  )
}

export default Page

export {}
