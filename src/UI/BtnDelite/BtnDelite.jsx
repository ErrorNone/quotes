import React from 'react'
import cl from './BtnDelite.module.css'

const BtnDelite = ({...props}) => {
  return (
    <button {...props} className={cl.btnDelite}></button>
  )
}

export default BtnDelite