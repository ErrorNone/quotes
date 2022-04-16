import React from 'react'
import cl from './Loader.module.css'
import Supermen from './Supermen.png'

const Loader = () => {
  return (
    <div>
      <img src={Supermen} alt="Супермен" className={cl.img} />
    </div>
  )
}

export default Loader