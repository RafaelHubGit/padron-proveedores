import React from 'react'

export const CardGeneral = ({ children, title = "Sin Titulo",  className="cardGeneral" }) => {
  return (
    <div className={`cardGeneral shadow ${className}`}>
      <div className='text-wrap'>
        <p> { title } </p>
      </div>
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