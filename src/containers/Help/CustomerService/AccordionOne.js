import React from 'react'
import PropTypes from 'prop-types'
import { List, Accordion, Flex } from 'antd-mobile'
import styles from '../AccordionList.less'

const Panel = Accordion.Panel

const AccordionOne = ({ activeKey, onAccordionChange }) => {
  return (
    <List renderHeader={'维修'}>
      <Accordion accordion activeKey={activeKey} onChange={onAccordionChange}>
        <Panel key="1" header="1.什么是意外保障服务？" id="question1">
          <Flex wrap="wrap" className={styles.item_box}>
            用户在收到机器的15天后，如果手机发现碎屏、进水、漏液、无法关机等人为不小心造成的问题时，可申请维修，若经质检工程师判断符合意外保障服务范围，可免费维修，维修费用累计不超过机器保额上限。如果不符合意外保险的，享换机提供非人为的功能性问题维修。
          </Flex>
        </Panel>
        <Panel key="2" header="2.手机坏了如何享受意外保障服务？" id="question2">
          <Flex wrap="wrap" className={styles.item_box}>
            您可在“我的”→“售后维修”→“维修申报”页面进行申报，损坏不同，维修方式也不同，但都需确认信息后，由专业的维修服务公司为您提供维修服务。
           </Flex>
        </Panel>
        <Panel key="3" header="3.机器多久可以维修完成？" id="question3">
          <Flex wrap="wrap" className={styles.item_box}>
          我们在收到手机后进行检查，会根据不同的问题进行维修，官方维修时长在15-20个工作日左右，具体以维修情况为准！维修期间我们支持您申请备用机。
          </Flex>
        </Panel>
        <Panel key="4" header="4.维修寄出的运费是由谁支付的？" id="question4">
          <Flex wrap="wrap" className={styles.item_box}>
           维修寄出的运费由寄出的一方承担，维修完成寄回的费用由我们来承担哦。
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
