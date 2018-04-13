import React from 'react'
import PropTypes from 'prop-types'
import { List, Accordion, Flex } from 'antd-mobile'
import styles from '../AccordionList.less'

const Panel = Accordion.Panel

const AccordionThree = ({ activeKey, onAccordionChange }) => {
  return (
    <List renderHeader={'买断'}>
      <Accordion accordion activeKey={activeKey} onChange={onAccordionChange}>
        <Panel key="10" header="10.我的订单怎么进行买断？" id="question10">
          <Flex wrap="wrap" className={styles.item_box}>
            订单到期时间≤30天时可以进行买断操作。< br />
            在“个人中心”→“我的订单”→找到符合条件的订单，点击买断按钮，在确认买断页面确认买断金额等信息后完成买断。
          </Flex>
        </Panel>
        <Panel key="11" header="11.什么情况下需要买断？" id="question11">
          <Flex wrap="wrap" className={styles.item_box}>
            情况一：机器未在租期满后7个自然日内归还者系统自动为用户买断；< br />
            情况二：经过工程师检测，不符合正常归还标准的机器，需用户买断机器，自己拥有；< br />
            情况三：用户自主买断机器。
           </Flex>
        </Panel>
      </Accordion>
    </List>
  )
}

AccordionThree.propTypes = {
  activeKey: PropTypes.string,
  onAccordionChange: PropTypes.func,
}

export default AccordionThree
