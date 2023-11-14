import styles from './FilterTiktok.module.scss'

const FillterTiktok = () => {
  return (
    <div className={styles.categoryContent}>
      <div className={styles.lable}>类别：</div>
      <div className={styles.itemContent}>
        <p>全部</p> <p>短视频</p> <p>长视频</p>
      </div>
    </div>
  )
}

export default FillterTiktok
