'use client'

import { usePathname, useRouter } from 'next/navigation'
import layout from './layout.module.scss'
import Link from 'next/link'

interface InterTobMenu {
  name: string
  url: string
  onClick?: () => void
}

const topMenu: InterTobMenu[] = [
  {
    name: '最新',
    url: '/tab/latest',
  },
  {
    name: '西瓜',
    url: '/tab/melon',
  },
  {
    name: '抖音',
    url: '/tab/tiktok',
  },
  {
    name: '快手',
    url: '/tab/kuaishou',
  },
  {
    name: '哔哩',
    url: '/tab/bilibili',
  },
]

const bottomMenu: InterTobMenu[] = [
  {
    name: '分类',
    url: '/tab/category',
  },
  {
    name: '我喜欢的',
    url: '/tab/like',
  },
  {
    name: '会员',
    url: '/tab/vip',
  },
  {
    name: '小程序',
    url: '/tab/gameDownload',
  },
  {
    name: '客服',
    url: '/tab/chat',
  },
]

export default function TabLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const router = useRouter()

  const liStyle = (pathName: string) => {
    console.log(pathname, pathName)
    return pathname === pathName ? layout.active : ''
  }

  const navigate = (url: string) => {
    return () => router.push(url)
  }

  return (
    <div className={layout.mainBody}>
      {/* 顶部导航 */}
      <nav className={layout.mainNaviaContent}>
        <ul className={layout.naviUl}>
          {topMenu.map((item, index) => {
            return (
              <li key={index} className={liStyle(item.url)} >
                <div>
                  <Link href={item.url}>{item.name}</Link>
                </div>
              </li>
            )
          })}
        </ul>
      </nav>
      {/* 中间内容区域 */}
      <div className={layout.content}>{children}</div>
      {/* 底部导航 */}
      <nav className={layout.mainNaviaContentFooter}>
        <ul className={layout.naviUl}>
          {bottomMenu.map((item, index) => {
            return (
              <li key={index} className={liStyle(item.url)} >
                <div>
                  <Link href={item.url}>{item.name}</Link>
                </div>
              </li>
            )
          })}
        </ul>
      </nav>
    </div>
  )
}
