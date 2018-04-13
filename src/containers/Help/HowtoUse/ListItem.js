import React from 'react'
import { List } from 'antd-mobile'
import styles from './ListItem.less'

const Item = List.Item
const Brief = Item.Brief

const ListItem = () => {
  return (
    <List className={styles.list_box}>
      <Item multipleLine>
        <span className={styles.title}>
          <span className={styles.badge}>1</span>选择喜欢的型号、使用时长
        </span>
        <Brief>不同机型可选不同使用时长，6、12个月任您选。</Brief>
      </Item>
      <Item multipleLine>
        <span className={styles.title}>
          <span className={styles.badge}>2</span>押金0支付
        </span>
        <Brief>
          无需支付现金，冻结预授权额度做押金；<br />
          冻结额度不产生费用、无需还款、随还机释放。
        </Brief>
      </Item>
      <Item multipleLine>
        <span className={styles.title}>
          <span className={styles.badge}>3</span>月付租金
        </span>
        <Brief>每月定期支付月租，资金无压力。</Brief>
      </Item>
      <Item multipleLine>
        <span className={styles.title}>
          <span className={styles.badge}>4</span>到期归还、续租、买断随您选
        </span>
        <Brief>
          ·归还：支持门店或邮寄归还；<br />
          ·续租：申请续租，继续使用机器，方便灵活；<br />
          ·买断：支付机器尾款，终身拥有。<br />
        </Brief>
      </Item>
    </List>
  )
}

export default ListItem
