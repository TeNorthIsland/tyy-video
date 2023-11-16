'use client'

import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import layout from './layout.module.scss'
import Image from 'next/image'

export default function ScreenLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const router = useRouter()
  const searchParams = useSearchParams()

  return (
    <div className={layout.mainBody}>
      {/* 顶部导航 */}
      <nav className={layout.mainNaviaContent}>
        <div
          className={layout.back}
          onClick={() => {
            router.back()
          }}
        >
          <Image src="/icon/left.png" width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }} alt="Picture of the author" />
        </div>
        <div>
          <p>{searchParams.get('pageName')}</p>
        </div>
      </nav>
      {/* 中间内容区域 */}
      <div className={layout.content}>{children}</div>
      {/* 底部导航 */}
      <nav className={layout.mainNaviaContentFooter}>
        {/* <ul className={layout.naviUl}>
          {bottomMenu.map((item, index) => {
            return (
              <li key={index} className={liStyle(item.url)} onClick={navigate(item.url)}>
                <div>
                  <p>{item.name}</p>
                </div>
              </li>
            )
          })}
        </ul> */}
      </nav>
    </div>
  )
}
