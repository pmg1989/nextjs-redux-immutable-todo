import React from 'react'
import { Grid } from 'antd-mobile'
import { Icon, Link } from 'components'
import styles from './GridHeader.less'

const GridHeader = () => {
  const data = [
    { icon: 'icon-icon-sousuo', text: '租机流程' },
    { icon: 'icon-icon-zhifuqianbao', text: '下单流程' },
    { icon: 'icon-icon-shouhouweixiu', text: '维修流程' },
    { icon: 'icon-service-kefu-slim', text: '投诉建议' },
  ]

  const links = [
    '/help/howtouse',
    '/help/howtoorder',
    '/help/howtomaintain',
    '/help/complaintadvice',
  ]

  return (
    <Grid
      className={styles.thumb_box}
      data={data}
      hasLine={false}
      renderItem={(item, index) => (
        <Link className={styles.item_content} to={links[index]}>
          <Icon className={styles.grid_icon} type={item.icon} />
          <div className={styles.grid_text}>{item.text}</div>
        </Link>
      )}
    />
  )
}

export default GridHeader
