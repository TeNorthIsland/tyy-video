'use client'

import React, { FC } from 'react'
import styles from './component.module.scss'
import Link from 'next/link'
import Input from 'rc-input'
import { usePathname, useRouter } from 'next/navigation'

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

const notShowSearchh = [
  {
    url: '/screen/updatePlan',
  },
]

const SearchLayout: FC<any> = ({ children }) => {
  const pathname = usePathname()
  const showSearch = !notShowSearchh.some((path) => pathname === path.url)
  const router = useRouter()

  const footerMenu: InterTobMenu[] = [
    {
      name: '会员方案',
      url: '/screen/updatePlan',
    },
    {
      name: '用户条款',
      url: '/screen/agreement',
    },
    {
      name: '政策条款',
      url: '/screen/policy',
    },
    {
      name: '联系我们',
      url: '/tab/chat',
    },
  ]

  return (
    <div className={styles.pageContainer}>
      {/* serach header */}
      {showSearch && (
        <div className={styles.serachContent}>
          <Input className={styles.serachInput} placeholder="搜索你想看的内容" suffix={<Button />} />
        </div>
      )}

      {/* content */}
      <div className={styles.videoListWrap}>{children}</div>
      {/* footer */}
      <div className={styles.footer}>
        <ul className={styles.naviUl}>
          {footerMenu.map((item, index) => {
            return (
              <li key={index}>
                <Link href={`${item.url}?pageName=${encodeURIComponent(item.name)}`}>{item.name}</Link>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default SearchLayout
