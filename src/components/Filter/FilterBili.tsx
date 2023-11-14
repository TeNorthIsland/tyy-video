import styles from './FilterBili.module.scss'

const FilterBili = () => {
  return (
    <div className={styles.categoryContent}>
      <div className={styles.filterLine1}>
        <div className={styles.lable}>类别：</div>
        <div className={styles.itemContent}>
          <p>全部</p> <p>短视频</p> <p>长视频</p>
        </div>
      </div>
      <div className={styles.filterLine1}>
        <div className={styles.lable}>排序：</div>
        <div className={styles.sortContent}>
          <p>热门推荐</p>
          <p>热门收藏</p>
        </div>
      </div>
    </div>
  )
}

export default FilterBili
