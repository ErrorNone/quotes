import React from 'react'
import cl from './Modal.module.css'
// import { useMedia } from 'react-media'

// const GLOBAL_MEDIA_QUERIES = {
//   small: "(max-width: 599px)",
//   medium: "(min-width: 600px) and (max-width: 1199px)",
//   large: "(min-width: 1200px)"
// }
// const matches = useMedia({ queries: GLOBAL_MEDIA_QUERIES })

// const marginBottom = matches.large ? 0 : 10

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