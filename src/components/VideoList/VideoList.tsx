import Image from 'next/image'
import styles from './component.module.scss'
import Pagination from 'rc-pagination'
import 'rc-pagination/assets/index.css'
import './components.scss' // css module 无法进行有效的穿透，所以采取传统的方式
import FillterTiktok from '../Filter/FilterTiktok'
import { FC } from 'react'
import { useRouter } from 'next/navigation'

interface InterVideoListPorps {
  needPagination?: boolean
}

const VideoList: FC<InterVideoListPorps> = (porps) => {
  const { needPagination = true } = porps
  const router = useRouter()

  return (
    <>
      <div className={styles.videoListWrap}>
        <div className={styles.videoListContent}>
          <div
            className={styles.videoItem}
            onClick={() => {
              router.push(`/screen/videoDetails?pageName=${encodeURIComponent('详情')}`)
            }}
          >
            <div className={styles.videoTitle}>
              <span>蛋仔派对：蛋仔岛大更新？我变成了椅子</span>
            </div>
            <div className={styles.thumbnailContent}>
              <Image src="/imgs/thumbnail/thumbnail1.png" width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }} alt="Picture of the author" />
              {/* <div className={styles.timeTotal}>
                <span>04: 12</span>
              </div> */}
            </div>
          </div>

          <div
            className={styles.videoItem}
            onClick={() => {
              router.push(`/screen/videoDetails?pageName=${encodeURIComponent('详情')}`)
            }}
          >
            <div className={styles.videoTitle}>
              <span>拆除43：卧龙附近，必有凤雏</span>
            </div>
            <div className={styles.thumbnailContent}>
              <Image src="/imgs/thumbnail/thumbnail2.png" width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }} alt="Picture of the author" />
              {/* <div className={styles.timeTotal}>
                <span>04: 12</span>
              </div> */}
            </div>
          </div>
        </div>

        {/* 分页器 */}
        {needPagination && (
          <div className={'paginationContent'}>
            <Pagination
              className={'pagination'}
              current={2}
              pageSize={10}
              total={111}
              showLessItems
              prevIcon={<span className={'nextIncon'}>上一页</span>}
              nextIcon={<span className={'nextIncon'}>下一页</span>}
            />
          </div>
        )}
      </div>
    </>
  )
}

export default VideoList
