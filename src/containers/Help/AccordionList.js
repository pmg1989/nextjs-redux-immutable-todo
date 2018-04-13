import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

const AccordionList = ({ children, activeKey, onAccordionChange }) => {
  return (
    <Fragment>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          activeKey,
          onAccordionChange,
        })
      })}
    </Fragment>
  )
}

AccordionList.propTypes = {
  children: PropTypes.node.isRequired,
  activeKey: PropTypes.string,
  onAccordionChange: PropTypes.func.isRequired,
}

export default AccordionList
