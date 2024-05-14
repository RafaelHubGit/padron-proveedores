import React from 'react'

export const CardGeneral = ({ children, className }) => {
  return (
    <div className={className}>
        { children }
    </div>
  )

  
}

// GenericContainer.propTypes = {
//   children: PropTypes.node.isRequired,
// };

// GenericContainer.defaultProps = {
//     className: '',
// };