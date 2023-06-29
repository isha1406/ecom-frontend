import React from 'react'
import CustomNavbar from './CustomNavbar'


function Base({children}) {
  return (
    <div>
      <CustomNavbar/>
      <div>
        {children}
      </div>
    </div>
  )
}

export default Base
