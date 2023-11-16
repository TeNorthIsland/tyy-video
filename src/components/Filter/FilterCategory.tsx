import styles from './FilterCategory.module.scss'

const FilterCategory = () => {
  return (
    <div className={styles.categoryContent}>
      <div className={styles.filterLine1}>
        <div className={styles.lable}>类别：</div>
        <div className={styles.itemContent}>
          <p className={styles.active}>类型1</p> <p>类型2</p> <p>类型3</p>
        </div>
      </div>
      <div className={styles.filterLine1}>
        <div className={styles.lable}>排序：</div>
        <div className={styles.sortContent}>
          <p className={styles.active}>最新</p>
          <p>观看数量</p>
          <p>热门收藏</p>
        </div>
      </div>
    </div>
  )
}

export default FilterCategory
