'use client'

import Collapse from 'rc-collapse'
import 'rc-collapse/assets/index.css'
import ReactModal from 'react-modal'

import styles from './page.module.scss'
import './page.scss'
import motion from '@/utils/mations/collapseMotion'
import { FC, useState } from 'react'

const { Panel } = Collapse

interface InterVipPlanItem {
  id: string
  time_log: string
  price: string
  des: string
  styles: {
    bkgColor: string
    btnColor: string
  }

  content?: React.ReactNode
}

interface InterPannerContentProps {
  openModal: (PlayType: 'zfb' | 'wx') => void
}

ReactModal.setAppElement('#main')
const PanneContent: FC<InterPannerContentProps> = (props) => {
  return (
    <div className={styles.pannerContent}>
      <div
        className={styles.lable}
        onClick={() => {
          props.openModal('zfb')
        }}
      >
        支付宝
      </div>
      <div
        className={styles.lable}
        onClick={() => {
          props.openModal('wx')
        }}
      >
        微信
      </div>
      <div className={styles.info}>提示本站支付安全</div>
    </div>
  )
}

const VIPList: Array<InterVipPlanItem> = [
  {
    id: 'VIP1',
    time_log: '6+1个月',
    price: '199元',
    des: '1天不用1元',
    styles: {
      bkgColor: '#FA1979',
      btnColor: '#DE1880',
    },
  },
  {
    id: 'VIP2',
    time_log: '3个月',
    price: '99元',
    des: '3个月全站素材',
    styles: {
      bkgColor: '#07C160',
      btnColor: '#28B21E',
    },
  },
  {
    id: 'VIP3',
    time_log: '3个月',
    price: '99元',
    des: '3个月全站素材',
    styles: {
      bkgColor: '#165DFF',
      btnColor: '#1989FA',
    },
  },
]
const Page = () => {
  const [visible, setVisible] = useState(false)

  return (
    <>
      <Collapse className="vip-info-collapse-screen" accordion={false} openMotion={motion}>
        {VIPList.map((item, idx) => {
          return (
            <Panel
              headerClass="vip-header-screen"
              style={{ backgroundColor: item.styles.bkgColor }}
              showArrow={false}
              header={
                <div className={styles.vipHeaderContent}>
                  <div className={styles.vipName}>{item.time_log}</div>
                  <div className={styles.vipNamePrice}>{item.price}</div>
                  <div className={styles.vipNameDes}>{item.des}</div>
                  <div className={styles.vipNameUpload} style={{ backgroundColor: item.styles.btnColor }}>
                    升级
                  </div>
                </div>
              }
              key={item.id}
            >
              {/* {item.content} */}
              <PanneContent
                openModal={() => {
                  console.log('sss')
                  setVisible(true)
                }}
              ></PanneContent>
            </Panel>
          )
        })}
      </Collapse>
      <ReactModal
        style={{
          overlay: {
            backgroundColor: 'rgba(0,0,0,0.75)',
          },
        }}
        isOpen={visible}
        className="rc-modal"
      >
        <div className={styles.modalContent}>
          <div className={styles.title}>订单确认</div>
          <div className={styles.line}>
            <span>会员类型</span>
            <span>30天-全站资源</span>
          </div>
          <div className={styles.line}>
            <span>付款方式</span>
            <span>支付宝</span>
          </div>
          <div className={styles.line}>
            <span>RMB</span>
            <span>30元</span>
          </div>
          <div className={styles.line}>
            <span>通道手续费</span>
            <span>0元</span>
          </div>
          <div className={styles.line}>
            <span>合计费用</span>
            <span>30元</span>
          </div>
          <div
            className={styles.submit}
            onClick={() => {
              setVisible(false)
            }}
          >
            <p>确定</p>
          </div>
        </div>
      </ReactModal>
    </>
  )
}

export default Page
