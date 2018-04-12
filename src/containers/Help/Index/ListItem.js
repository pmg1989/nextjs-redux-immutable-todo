import React, { Fragment } from 'react'
// import { Link, browserHistory } from 'react-router'
import Link from 'components/MyLink'
import { Flex, List } from 'antd-mobile'
import styles from './ListItem.less'

const Item = List.Item

const ListItem = () => {
  const handleLinkClick = (linkTo) => {
    console.log(linkTo)
    // browserHistory.push(`/help/${linkTo}`)
  }

  return (
    <Fragment>
      <List renderHeader={() => '点击以下关键词，快速查找问题'} className={styles.list_box}>
        <Item extra="更多" arrow="horizontal" onClick={() => handleLinkClick('coststatement')}>费用说明</Item>
        <Item>
          <Flex className={styles.item} justify="start" wrap="wrap">
            <Link className={styles.link} to={'/help/coststatement?question=1'}>租金支付</Link>
            <Link className={styles.link} to={'/help/coststatement?question=4'}>意外保障服务费</Link>
            <Link className={styles.link} to={'/help/coststatement?question=5'}>什么是预授权</Link>
            <Link className={styles.link} to={'/help/coststatement?question=6'}>扣款周期</Link>
            <Link className={styles.link} to={'/help/coststatement?question=9'}>续租费用</Link>
            <Link className={styles.link} to={'/help/coststatement?question=11'}>买断费用</Link>
          </Flex>
        </Item>
      </List>
      <List className={styles.list_box}>
        <Item extra="更多" arrow="horizontal" onClick={() => handleLinkClick('beforerent')}>租前了解</Item>
        <Item>
          <Flex className={styles.item} justify="start" wrap="wrap">
            <Link className={styles.link} to={'/help/beforerent?question=1'}>关于享换机</Link>
            <Link className={styles.link} to={'/help/beforerent?question=2'}>怎么租手机</Link>
            <Link className={styles.link} to={'/help/beforerent?question=3'}>租机到期</Link>
            <Link className={styles.link} to={'/help/beforerent?question=4'}>租机优势</Link>
            <Link className={styles.link} to={'/help/beforerent?question=9'}>冻结额度不够</Link>
          </Flex>
        </Item>
      </List>
      <List className={styles.list_box}>
        <Item extra="更多" arrow="horizontal" onClick={() => handleLinkClick('customerservice')}>售后维修</Item>
        <Item>
          <Flex className={styles.item} justify="start" wrap="wrap">
            <Link className={styles.link} to={'/help/customerservice?question=1'}>意外保障服务</Link>
            <Link className={styles.link} to={'/help/customerservice?question=3'}>多久维修完成</Link>
            <Link className={styles.link} to={'/help/customerservice?question=5'}>申请退货</Link>
            <Link className={styles.link} to={'/help/customerservice?question=6'}>申请换货</Link>
            <Link className={styles.link} to={'/help/customerservice?question=7'}>退货机器何时退款</Link>
          </Flex>
        </Item>
      </List>
      <List className={styles.list_box}>
        <Item extra="更多" arrow="horizontal" onClick={() => handleLinkClick('afterrent')}>到期了解</Item>
        <Item>
          <Flex className={styles.item} justify="start" wrap="wrap">
            <Link className={styles.link} to={'/help/afterrent?question=1'}>怎么还机</Link>
            <Link className={styles.link} to={'/help/afterrent?question=8'}>怎么续租</Link>
            <Link className={styles.link} to={'/help/afterrent?question=10'}>怎么买断</Link>
            <Link className={styles.link} to={'/help/afterrent?question=2'}>忘记归还</Link>
            <Link className={styles.link} to={'/help/afterrent?question=9'}>总共可以续租多久</Link>
            <Link className={styles.link} to={'/help/afterrent?question=11'}>什么情况需买断</Link>
          </Flex>
        </Item>
      </List>
    </Fragment>
  )
}

export default ListItem
