import React from 'react'
import cl from './Modal.module.css'



const Modal = ({children, visible, setVisible}) => {
    const addClasses = [cl.modal]
    if (visible) {
        addClasses.push([cl.active])
    }

  return (
    <div className={addClasses.join(' ')} onClick={() => setVisible(false)}>
        <div className={cl.modal__content} onClick={e => e.stopPropagation()}>
            {children}
        </div>
    </div>
  )
}

export default Modal