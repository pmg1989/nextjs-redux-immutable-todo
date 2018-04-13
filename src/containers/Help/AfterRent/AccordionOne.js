import React from 'react'
import PropTypes from 'prop-types'
import { List, Accordion, Flex } from 'antd-mobile'
import styles from '../AccordionList.less'

const Panel = Accordion.Panel

const AccordionOne = ({ activeKey, onAccordionChange }) => {
  return (
    <List renderHeader={'还机'}>
      <Accordion accordion activeKey={activeKey} onChange={onAccordionChange}>
        <Panel key="1" header="1.租机时间到了，怎么还机？" id="question1">
          <Flex wrap="wrap" className={styles.item_box}>
            有两种还机方式，门店还机和邮寄还机。< br />
            门店还机：1.在享换机APP内选择门店后申请归还；2.去门店，质检人员现场检测机器状况，符合还机条件的即可成功还机。< br />
            邮寄还机：1.在享换机APP内选择邮件还机方式后申请归还；2.邮寄机器到指定门店；3.查询还机进度，符合还机条件的即可成功还机。
          </Flex>
        </Panel>
        <Panel key="2" header="2.租机到期，忘记归还怎么办？" id="question2">
          <Flex wrap="wrap" className={styles.item_box}>
            我们会在到期前7个自然日和1个自然日分别以短信的形式通知您，您需在到期后7个自然日内将机器归还给享换机，如超过7个自然日仍未归还，则需您买下这个机器。
          </Flex>
        </Panel>
        <Panel key="3" header="3.归还机器时配件需要归还吗？" id="question3">
          <Flex wrap="wrap" className={styles.item_box}>
            需要一并归还哦，但是如果您的配件遗失了，也可以不用归还。归还配件有助于您提升在享换机的信用分、后续享受更多的优惠。
          </Flex>
        </Panel>
        <Panel key="4" header="4.还机后我的隐私如何保障？" id="question4">
          <Flex wrap="wrap" className={styles.item_box}>
            享换机与复旦大学共同研究数据销毁，并有专业工程师为您清理数据，保障用户的隐私安全，请您放心归还。
          </Flex>
        </Panel>
        <Panel key="5" header="5.什么情况下机器不能正常归还？" id="question5">
          <Flex wrap="wrap" className={styles.item_box}>
            机身进水，防潮标识变色；< br />
            机身弯曲变形，幅度大于1毫米；< br />
            屏幕碎裂，显示有色斑、漏液、错乱、严重老化、无法正常显示；< br />
            私自拆修，手机背板、系统、卡槽IMEI号不一致；< br />
            充电功能、无线功能、账号功能、指纹和按键功能、指南针功能、触摸功能不正常，无法正常使用的无法还机。
          </Flex>
        </Panel>
        <Panel key="6" header="6.还机后什么时候释放剩余的冻结额度？" id="question6">
          <Flex wrap="wrap" className={styles.item_box}>
            归还后2个工作日内会操作取消冻结额度，具体到账时间，花呗用户1-3个工作日内到账，信用卡用户7个工作日内到账。
          </Flex>
        </Panel>
        <Panel key="7" header="7.我所在城市没有还机门店怎么办？" id="question7">
          <Flex wrap="wrap" className={styles.item_box}>
            如果您当地没有爱回收的门店，可以申请邮寄还机，机器需要在到期后7天内寄到我司售后处，逾期则只能买断。
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
