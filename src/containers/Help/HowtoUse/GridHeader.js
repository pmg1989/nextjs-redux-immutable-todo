import React from 'react'
import classnames from 'classnames'
import { Grid } from 'antd-mobile'
import { Icon } from 'components'
import styles from './GridHeader.less'

const GridHeader = () => {
  const data = [
    { icon: 'icon-pick', text: '挑选机器' },
    { icon: 'icon-xinyong', text: '押金0支付' },
    { icon: 'icon-pay', text: '月付租金' },
    { icon: 'icon-guihuan', text: '归还/买断' },
  ]

  return (
    <Grid
      className={styles.thumb_box}
      itemStyle={{ backgroundColor: '#f8f8f8' }}
      activeStyle={false}
      data={data}
      hasLine={false}
      renderItem={(item, index) => (
        <div className={classnames(styles.item_content, index === data.length - 1 && styles.last)}>
          <Icon className={styles.grid_icon} type={item.icon} />
          <div className={styles.grid_text}>{item.text}</div>
        </div>
      )}
    />
  )
}

export default GridHeader
