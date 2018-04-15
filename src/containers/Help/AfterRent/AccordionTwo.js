import React from 'react'
import PropTypes from 'prop-types'
import { List, Accordion, Flex } from 'antd-mobile'
import styles from '../AccordionList.less'

const Panel = Accordion.Panel

const AccordionOne = ({ activeKey, onAccordionChange }) => {
  return (
    <List renderHeader={'续租'}>
      <Accordion accordion activeKey={activeKey} onChange={onAccordionChange}>
        <Panel key="8" header="8.我的订单怎么进行续租？" id="question8">
          <Flex wrap="wrap" className={styles.item_box}>
            订单到期时间≤30天时可以进行续租操作。< br />
            在“个人中心”→“我的订单”→找到符合条件的订单，点击续租按钮，在确认续租页面选择续租时长并确认续租金额等完成续租。
          </Flex>
        </Panel>
        <Panel key="9" header="9.一笔订单可以续租多久？" id="question9">
          <Flex wrap="wrap" className={styles.item_box}>
            每笔订单的续租总时长不同。在每次续租时都可根据自己情况选择1、2、3、4、5、6个月的不同时长，并可连续续租。直到总续租时长已达上限。
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
