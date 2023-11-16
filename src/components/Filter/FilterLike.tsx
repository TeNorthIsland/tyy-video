import styles from './FilterLike.module.scss'

const FilterLike = () => {
  return (
    <div className={styles.categoryContent}>
      <div className={styles.lable}>类别：</div>
      <div className={styles.itemContent}>
        <p>喜欢的视频</p> <p>关注的用户</p>
      </div>
    </div>
  )
}

export default FilterLike
