import React from 'react'
import PropTypes from 'prop-types'
import { List, Accordion, Flex } from 'antd-mobile'
import styles from '../AccordionList.less'

const Panel = Accordion.Panel

const AccordionOne = ({ activeKey, onAccordionChange }) => {
  return (
    <List renderHeader={'租机规则'}>
      <Accordion accordion activeKey={activeKey} onChange={onAccordionChange}>
        <Panel key="1" header="1.什么是享换机？" id="question1">
          <Flex wrap="wrap" className={styles.item_box}>
            享换机，国内领先的信用租机服务提供商，为用户提供“只为使用付费，不为残值买单”的电子产品消费新模式。用户仅需按月支付租金便可轻松获取手机的使用权，同时在租赁到期后享换机为用户提供还机换新、续租、买断的灵活处理方式，为用户提供便捷的年年换新的用机服务。
          </Flex>
        </Panel>
        <Panel key="2" header="2.怎么租机？" id="question2">
          <Flex wrap="wrap" className={styles.item_box}>
            选择您心仪的机型，通过蚂蚁花呗或信用卡等方式冻结预授权。下单成功后，机器一般会在3-5天内邮寄给您。收到货后，每期进行扣款。
           </Flex>
        </Panel>
        <Panel key="3" header="3.租机到期，机器怎么处理？" id="question3">
          <Flex wrap="wrap" className={styles.item_box}>
            您有三种选择：归还机器、继续租用、买断机器。
          </Flex>
        </Panel>
        <Panel key="4" header="4.租比买有什么优势？" id="question4">
          <Flex wrap="wrap" className={styles.item_box}>
            为了更好享受租赁服务，用户需购买一份手机意外险，享受租赁期间租赁手机意外损伤免费维修服务。<br />
            选择您喜爱的机型和属性之后，生成具体的意外保障服务费用，费用和首期租金一起支付。<br />
            续租时会产生新的意外保障服务费，也是随着续租的首期租金一起支付。
          </Flex>
        </Panel>
      </Accordion>
    </List>
  )
}
AccordionOne.propTypes = {
  activeKey: PropTypes.string,
  onAccordionChange: PropTypes.func,
}

export default AccordionOne
