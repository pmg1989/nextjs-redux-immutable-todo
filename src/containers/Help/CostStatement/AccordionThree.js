import React from 'react'
import PropTypes from 'prop-types'
import { List, Accordion, Flex } from 'antd-mobile'
import styles from '../AccordionList.less'

const Panel = Accordion.Panel

const AccordionThree = ({ activeKey, onAccordionChange }) => {
  return (
    <List renderHeader={'续租'}>
      <Accordion accordion activeKey={activeKey} onChange={onAccordionChange}>
        <Panel key="9" header="9.续租租金和租机时的租金是一样的吗？" id="question9">
          <Flex wrap="wrap" className={styles.item_box}>
            用户在租赁到期可以选择继续租用手机，有不同时长可以选择，并且可以多次续租，续租租金在租赁到期重新计算，可能与当前租金有所不同。
          </Flex>
        </Panel>
        <Panel key="10" header="10.续租需要再次冻结押金吗？" id="question10">
          <Flex wrap="wrap" className={styles.item_box}>
            花呗用户：续租时不需要再次冻结预授权，继续用租机时冻结的预授权作为信用担保。<br />
            信用卡用户：续租时需先用花呗重新冻结预授权，冻结成功后，7个工作日内释放信用卡预授权。
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
