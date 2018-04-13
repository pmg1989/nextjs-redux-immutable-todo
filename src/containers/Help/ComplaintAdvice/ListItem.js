import React from 'react'
import { List } from 'antd-mobile'
import { Icon } from 'components'
import styles from './ListItem.less'

const Item = List.Item

const ListItem = () => {
  return (
    <List renderHeader={() => '投诉方法及渠道'} className={styles.list_box}>
      <Item multipleLine className={styles.item_box}>
        <div className={styles.item}>
          <div className={styles.title}>
            如果您对我们的服务有任何建议或不满<br />
            欢迎您发送邮件至
          </div>
          <a className={styles.btn_blue} href="mailto:110@xianghuanji.com">
            <Icon type="icon-mail" /> 110@xianghuanji.com
          </a>
        </div>
      </Item>
      <Item multipleLine className={styles.item_box}>
        <div className={styles.item}>
          <div className={styles.title}>
            您还可以拨打我们的客服电话
          </div>
          <a className={styles.btn_blue} href="tel:400-670-0188">
            <Icon type="icon-tel" /> 400-670-0188(转4)
          </a>
        </div>
      </Item>
    </List>
  )
}

export default ListItem
