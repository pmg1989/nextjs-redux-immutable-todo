import React from 'react'
import PropTypes from 'prop-types'
import { List, Accordion, Flex } from 'antd-mobile'
import styles from '../AccordionList.less'

const Panel = Accordion.Panel

const AccordionOne = ({ activeKey, onAccordionChange }) => {
  return (
    <List renderHeader={'退款&退货'}>
      <Accordion accordion activeKey={activeKey} onChange={onAccordionChange}>
        <Panel key="5" header="5.什么样的机器才可以申请退货？" id="question5">
          <Flex wrap="wrap" className={styles.item_box}>
            全新机未拆封未激活，或签收后七日内设备有非人为因素造成的质量问题，可以申请退货。二手机器7天内经质检工程师检测符合退货标准的可以申请退货。如私自拆机、碎屏、root、漏液、机身分离、进水等人为损坏的情况，无法退货。
          </Flex>
        </Panel>
        <Panel key="6" header="6.什么样的机器才可以申请换货？" id="question6">
          <Flex wrap="wrap" className={styles.item_box}>
          签收后15日内，二手设备有非人为因素造成的质量问题，安卓全新设备未拆封未激活或有非人为因素造成的质量问题支持换货，苹果全新设备有非人为因素造成的质量问题，寄回享换机维修。机器寄回后，若经质检工程师检测符合换货标准，我们会在3-5个工作日安排换货。若不符合换货标准，我们将原地址寄回。
           </Flex>
        </Panel>
        <Panel key="7" header="7.退货的机器什么时候进行退款？" id="question7">
          <Flex wrap="wrap" className={styles.item_box}>
            我们会在退货机器签收后的2个工作日内完成质检，如果您符合退货条件，我们会在1个工作日内操作退款。请您先将机器的所有密码都解除，如果不符合退货条件的，我们会客服联系您。
          </Flex>
        </Panel>
        <Panel key="8" header="8.退货的运费是由谁承担的？" id="question8">
          <Flex wrap="wrap" className={styles.item_box}>
            退货的运费是由您自行承担的哦。
          </Flex>
        </Panel>
        <Panel className={styles.panel_extra} key="9" header="9.在合约期内机器不想用了可以退货换其他型号的机器吗？" id="question9">
          <Flex wrap="wrap" className={styles.item_box}>
            非常抱歉，合约期内暂时不支持改换其他型号的机器。
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
