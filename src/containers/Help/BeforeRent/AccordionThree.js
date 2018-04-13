import React from 'react'
import PropTypes from 'prop-types'
import { List, Accordion, Flex } from 'antd-mobile'
import styles from '../AccordionList.less'

const Panel = Accordion.Panel

const AccordionOne = ({ activeKey, onAccordionChange }) => {
  return (
    <List renderHeader={'机器'}>
      <Accordion accordion activeKey={activeKey} onChange={onAccordionChange}>
        <Panel key="9" header="9.下单时花呗或者信用卡的冻结额度不够怎么办？？" id="question9">
          <Flex wrap="wrap" className={styles.item_box}>
            花呗额度不够，可以通过信用评估减免押金；信用卡额度不够，请联系您的发卡行提升额度。冻结额度在到期后即可退还。
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
