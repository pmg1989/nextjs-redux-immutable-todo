import React from 'react'
import PropTypes from 'prop-types'
import { List, Accordion, Flex } from 'antd-mobile'
import styles from '../AccordionList.less'

const Panel = Accordion.Panel

const AccordionTwo = ({ activeKey, onAccordionChange }) => {
  return (
    <List renderHeader={'还款'}>
      <Accordion accordion activeKey={activeKey} onChange={onAccordionChange}>
        <Panel key="6" header="6.扣款周期是多久？" id="question6">
          <Flex wrap="wrap" className={styles.item_box}>
            支付方式不同，扣款周期也不同。<br />
            • 如果您选择的是蚂蚁花呗或支付宝代扣支付，每期周期为1个月，总期数视租赁周期而定。<br />
            • 如果您选择的是信用卡支付，每期周期为25天，总期数视租赁周期而定。
          </Flex>
        </Panel>
        <Panel key="7" header="7.每月什么时候还款？" id="question7">
          <Flex wrap="wrap" className={styles.item_box}>
            不同支付方式，还款时间不同。<br />
            • 蚂蚁花呗支付：具体还款日以花呗还款日为准。<br />
            • 支付宝代扣支付：确认签收后一个自然月首次扣款（含意外保障服务费），后续每月扣款日即为您签收日。如遇当月不存在的日期，顺延至次月1日扣款。<br />
            • 信用卡支付：首期下单成功即扣一期租金（含保险费），剩余周期的还款日以信用卡还款日为准。
           </Flex>
        </Panel>
        <Panel key="8" header="8.信用卡还款为什么有时一个月会有2笔还款账单？" id="question8">
          <Flex wrap="wrap" className={styles.item_box}>
            信用卡1个月为一个还款周期，享换机用信用卡冻结额度，25天为一个扣款周期，所以有时会产生一个月有2笔还款账单的现象。
          </Flex>
        </Panel>
      </Accordion>
    </List>
  )
}

AccordionTwo.propTypes = {
  activeKey: PropTypes.string,
  onAccordionChange: PropTypes.func,
}

export default AccordionTwo
