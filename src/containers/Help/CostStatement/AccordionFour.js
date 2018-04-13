import React from 'react'
import PropTypes from 'prop-types'
import { List, Accordion, Flex } from 'antd-mobile'
import styles from '../AccordionList.less'

const Panel = Accordion.Panel

const AccordionFour = ({ activeKey, onAccordionChange }) => {
  return (
    <List renderHeader={'买断'}>
      <Accordion accordion activeKey={activeKey} onChange={onAccordionChange}>
        <Panel key="11" header="11.买断需要付多少钱？" id="question11">
          <Flex wrap="wrap" className={styles.item_box}>
            用户在租赁到期可选择支付一定费用买断手机，买断费用以下单时协议里的买断价为准，也可以去订单详情的租赁信息中查看。
          </Flex>
        </Panel>
        <Panel key="12" header="12.买断的金额可以分期付吗，付款方式是什么？" id="question12">
          <Flex wrap="wrap" className={styles.item_box}>
            买断需一次性支付金额。<br />
            • 若冻结预授权=买断金额，则预授权转消费；<br />
            • 若冻结预授权&gt;买断金额，则其中等于买断金额的预售前转消费，其余预授权释放给用户；<br />
            • 若冻结预授权&lt;买断金额，则全部预授权转消费后，剩余金额需一次性支付。
           </Flex>
        </Panel>
      </Accordion>
    </List>
  )
}

AccordionFour.propTypes = {
  activeKey: PropTypes.string,
  onAccordionChange: PropTypes.func,
}

export default AccordionFour
