'use client'

import React, { FC } from 'react'
import styles from './page.module.scss'
import { useForm, SubmitHandler } from 'react-hook-form'

type Inputs = {
  name: string
  vcode: string
  pwd: string
  r_pwd: string
}
const Page: FC<any> = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>()

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)

  return (
    <>
      <div className={styles.title}>
        <p>忘记密码</p>
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
            {...register('vcode', {
              required: {
                value: true,
                message: '输入验证码',
              },
            })}
            type="password"
            placeholder="输入验证码"
          ></input>
        </div>
        <div className={styles.input}>
          <input
            {...register('pwd', {
              required: {
                value: true,
                message: '请输入六位数密码',
              },
            })}
            type="password"
            placeholder="请输入六位数密码"
          ></input>
        </div>
        <div className={styles.input}>
          <input
            {...register('r_pwd', {
              required: {
                value: true,
                message: '确认密码',
              },
            })}
            type="password"
            placeholder="确认密码"
          ></input>
        </div>
        <div className={styles.btn}>
          <input className={styles.submit} type="submit" value={'确定'} />
        </div>
      </form>
    </>
  )
}

export default Page

export {}
