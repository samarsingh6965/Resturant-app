import React from 'react'

const RowContainer = ({flag}) => {
  return (
    <div className={`w-full py-12 ${flag ? 'overflow-x-scroll': 'overflow-x-hidden'}`}>
      
    </div>
  )
}

export default RowContainer
