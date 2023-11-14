import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'
import Image from 'next/image'
import styles from './component.module.scss'

const BannerAD = () => {
  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className={styles.swiperContent}
      loop
    >
      <SwiperSlide>
        {/* 详见PR https://www.aifuxi.cool/articles/set-next-image-width-to-one-hundred-percent-in-nextjs */}
        <Image src="/imgs/banner/ad1.png" width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }} alt="Picture of the author" />
      </SwiperSlide>
      <SwiperSlide>
        <Image src="/imgs/banner/ad2.png" width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }} alt="Picture of the author" />
      </SwiperSlide>
      <SwiperSlide>
        <Image src="/imgs/banner/ad3.png" width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }} alt="Picture of the author" />
      </SwiperSlide>
    </Swiper>
  )
}

export default BannerAD
