import React from 'react'
import PropTypes from 'prop-types'

const AccordionList = ({ children, activeKey, onAccordionChange }) => {
  return (
    // Fragment
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          activeKey,
          onAccordionChange,
        })
      })}
    </div>
  )
}

AccordionList.propTypes = {
  children: PropTypes.node.isRequired,
  activeKey: PropTypes.string,
  onAccordionChange: PropTypes.func.isRequired,
}

export default AccordionList
