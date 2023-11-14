'use client'

import React, { FC } from 'react'
import styles from './component.module.scss'
import Link from 'next/link'
import Input from 'rc-input'

interface InterTobMenu {
  name: string
  url: string
  onClick?: () => void
}

const Button = () => {
  return (
    <div className={styles.searchBtnContext}>
      <span>搜索</span>
    </div>
  )
}

const footerMenu: InterTobMenu[] = [
  {
    name: '会员方案',
    url: '/tab/category',
  },
  {
    name: '用户条款',
    url: '/tab/like',
  },
  {
    name: '政策条款',
    url: '/tab/vip',
  },
  {
    name: '联系我们',
    url: '/tab/gameDownload',
  },
]

const SearchLayout: FC<any> = ({ children }) => {
  return (
    <div className={styles.pageContainer}>
      {/* serach header */}
      <div className={styles.serachContent}>
        <Input className={styles.serachInput} placeholder="搜索你想看的内容" suffix={<Button />} />
      </div>
      {/* content */}
      <div className={styles.videoListWrap}>{children}</div>
      {/* footer */}
      <div className={styles.footer}>
        <ul className={styles.naviUl}>
          {footerMenu.map((item, index) => {
            return (
              <li key={index}>
                <Link href={item.url}>{item.name}</Link>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default SearchLayout
