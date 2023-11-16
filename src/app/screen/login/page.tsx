'use client'

import React, { FC } from 'react'
import styles from './page.module.scss'
import { useForm, SubmitHandler } from 'react-hook-form'
import { useRouter } from 'next/navigation'

type Inputs = {
  name: string
  pwd: string
}
const Page: FC<any> = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>()

  const router = useRouter()

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)

  return (
    <>
      <div className={styles.title}>
        <p>登录</p>
      </div>
      <form className={styles.from} onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.input}>
          <input
            {...register('name', {
              required: {
                value: true,
                message: '请输入邮箱或手机号',
              },
            })}
            placeholder="请输入邮箱或手机号"
          ></input>
          {/* <p>{errors.name?.message}</p> */}
        </div>
        <div className={styles.input}>
          <input
            {...register('pwd', {
              required: {
                value: true,
                message: '请输入密码',
              },
            })}
            type="password"
            placeholder="请输入密码"
          ></input>
        </div>
        <div className={styles.btn}>
          <input className={styles.submit} type="submit" value="登录" />
          <div
            className={styles.extent}
            onClick={() => {
              router.push(`/screen/findPwd?pageName=${encodeURIComponent('忘记密码')}`)
            }}
          >
            <span>忘记密码</span>
          </div>
        </div>
      </form>
    </>
  )
}

export default Page

export {}
