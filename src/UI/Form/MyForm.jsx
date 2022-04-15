import React from 'react'
import cl from './MyForm.module.css'

const MyForm = ({children, ...props}) => {
  return (
    <form {...props} className={cl.form}>{children}</form>
  )
}

export default MyForm