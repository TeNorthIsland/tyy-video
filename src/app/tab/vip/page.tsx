'use client'
import React, { FC, useState } from 'react'
import styles from './page.module.scss'
import Table from 'rc-table'
import './page.scss'
import 'rc-table/assets/index.css'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

const PersonInfo = () => {
  const router = useRouter()

  return (
    <div className={styles.pannerWrap}>
      {/* line */}
      <div className={styles.line}>
        <div className={styles.lable}>
          <span>目前账号</span>
        </div>
        <div>
          <span>UPP22(临时账号)</span>
        </div>
        <Link
          href={`/screen/login?pageName=${encodeURIComponent('登录')}`}
          className={styles.loginBtn}
        >
          <span>登录</span>
        </Link>
      </div>
      {/* 邮箱 */}
      <div className={styles.line}>
        <div className={styles.lable}>
          <span>邮箱</span>
        </div>
        <Link
          href={`/screen/bindEmail?pageName=${encodeURIComponent('绑定邮箱')}`}
          className={styles.bindAcountBtn}
        >
          <span>绑定邮箱账号</span>
        </Link>
      </div>
      <div className={styles.line}>
        <div className={styles.lable}>
          <span>网址</span>
        </div>
        <div className={styles.lable}>
          <span>电脑访问：wwwwwwwwww</span>
        </div>
      </div>
      {/* 剧中的btn */}
      <div className={styles.line}>
        <div>
          <span>分享给好友，获取免费素材</span>
        </div>
      </div>
      <div className={styles.line}>
        <div>
          <span>加入我们一起创作</span>
        </div>
      </div>
    </div>
  )
}

interface InterTradeItem {
  id: string
  type: string
  payType: string
  money: string
  time: string
}

const TradeHistory = () => {
  const columns = [
    {
      title: '编号',
      dataIndex: 'id',
      key: 'id',
      width: 60,
    },
    {
      title: '会员类型',
      dataIndex: 'type',
      key: 'type',
      width: 80,
    },
    {
      title: '支付方式',
      dataIndex: 'payType',
      key: 'payType',
      width: 80,
    },
    {
      title: '金额',
      dataIndex: 'money',
      key: 'money',
    },
    {
      title: '时间',
      dataIndex: 'time',
      key: 'time',
    },
  ]

  const data = [
    {
      id: '123123',
      type: '会员1',
      payType: '支付宝',
      money: '100元',
      time: '2023.11.14',
    },
    {
      id: '1232',
      type: '会员1',
      payType: '支付宝',
      money: '50元',
      time: '2023.11.14',
    },
  ]

  return (
    <div className={styles.pannerWrap}>
      <Table<InterTradeItem> id="id" rowKey={'id'} className="my-table" columns={columns} data={data} />
    </div>
  )
}

const Page: FC<any> = () => {
  const [active, setActive] = useState(0)
  const router = useRouter()
  return (
    <div className={styles.vipContent}>
      <div className={styles.currentVipLevel}>
        <p>一般会员</p>
      </div>
      <Link
        href={`/screen/updatePlan?pageName=${encodeURIComponent('会员升级')}`}
        className={styles.updateVip}
      >
        <p>升级VIP</p>
      </Link>
      {/* tabs */}
      <div className={styles.tabWrap}>
        {/* title */}
        <div className={styles.tabTitle}>
          <span
            onClick={() => {
              setActive(0)
            }}
            className={active == 0 ? styles.active : ''}
          >
            个人信息
          </span>
          <Link
            href={`/screen/viewHisory?pageName=${encodeURIComponent('观看纪录')}`}
          >
            观看纪录
          </Link>
          <span
            onClick={() => {
              setActive(2)
            }}
            className={active == 2 ? styles.active : ''}
          >
            交易纪录
          </span>
        </div>
        {/* content */}
        <div className={styles.tabPanner}>
          {Boolean(active == 0) && <PersonInfo />}
          {Boolean(active == 2) && <TradeHistory />}
        </div>
      </div>
    </div>
  )
}

export default Page

export {}
