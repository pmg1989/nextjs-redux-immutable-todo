import React from 'react'
import PropTypes from 'prop-types'
import { List, Accordion, Flex } from 'antd-mobile'
import styles from '../AccordionList.less'

const Panel = Accordion.Panel

const AccordionOne = ({ activeKey, onAccordionChange }) => {
  return (
    <List renderHeader={'租机'}>
      <Accordion accordion activeKey={activeKey} onChange={onAccordionChange}>
        <Panel key="1" header="1.租机时需要支付哪些费用？" id="question1">
          <Flex wrap="wrap" className={styles.item_box}>
            租机费用包括：<br />
            • 总租金（每月租金 X 租期时长）；<br />
            • 押金（根据信用评估情况可减免）；<br />
            • 意外保障服务费（享换机为每个租机用户定制意外保障服务，每个机器的费用不同）。
          </Flex>
        </Panel>
        <Panel key="2" header="2.租机时怎么支付租金？" id="question2">
          <Flex wrap="wrap" className={styles.item_box}>
            用户需按月支付租金，享换机目前支持两种租金扣款方式。<br />
            1.支付宝代扣：用户与享换机签订支付宝代扣协议，享换机每月自动从用户支付宝账号扣除相应租金。<br />
            2.资金预授权转消费：对于信用卡用户享换机每月自动从用户预授权中扣除相应租金。
           </Flex>
        </Panel>
        <Panel key="3" header="3.租机时怎么支付押金？" id="question3">
          <Flex wrap="wrap" className={styles.item_box}>
            押金无需用户支付，只需要冻结花呗或信用卡预授权进行信用担保，每期还款租金，押金无需还款。手机归还后，释放花呗或信用卡的额度。
          </Flex>
        </Panel>
        <Panel key="4" header="4.租机时怎么支付意外保障服务费？" id="question4">
          <Flex wrap="wrap" className={styles.item_box}>
            为了更好享受租赁服务，用户需购买一份手机意外险，享受租赁期间租赁手机意外损伤免费维修服务。<br />
            选择您喜爱的机型和属性之后，生成具体的意外保障服务费用，费用和首期租金一起支付。<br />
            续租时会产生新的意外保障服务费，也是随着续租的首期租金一起支付。
          </Flex>
        </Panel>
        <Panel key="5" header="5.什么是预授权？" id="question5">
          <Flex wrap="wrap" className={styles.item_box}>
            用户在享换机下单需要进行信用担保，信用担保有助于用户通过信用评估，信用担保方式为资金预授权，
            通过冻结用户第三信用账户（信用卡/花呗）额度实现，资金预授权冻结的额度不产生实际消费，无需还款。
            享换机支持信用卡预授权与花呗预授权两种资金预授权方式。
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
