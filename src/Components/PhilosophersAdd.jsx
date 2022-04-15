import React, { useContext, useState } from 'react'
import Context from '../Context/Context'
import MyButton from '../UI/Button/MyButton'
import MyForm from '../UI/Form/MyForm'
import MyInput from '../UI/Input/MyInput'
import Modal from '../UI/Modal/Modal'
import cl from './PhilosophersAdd.module.css'
import Zevs from "./Zevs.jpg"

const PhilosophersAdd = () => {

    const { AddPhilosophers} = useContext(Context)
    const [modal, setModal] = useState(false)
    const [philosophers, setPhilosophers] = useState({name: '', lifeYears: '', photo: Zevs })

    const createPhilosopher = (e) => {
        e.preventDefault()
        const newPhilosophers = {
            ...philosophers, id: Date.now()
        }
        AddPhilosophers(newPhilosophers)
        setPhilosophers({name: '', lifeYears: '', photo: Zevs})
        setModal(false) 
    }

  return (
    <div>
        <Modal visible={modal} setVisible={setModal}>
        <MyForm>
           <MyInput
            placeholder='Введите имя философа...'
            value={philosophers.name}
            onChange={e => setPhilosophers({...philosophers, name: e.target.value})}
           />
           <MyInput 
            placeholder='Введите годы жизни философа...'
            value={philosophers.lifeYears}
            onChange={e => setPhilosophers({...philosophers, lifeYears: e.target.value})}
           />
           <MyButton onClick={createPhilosopher}>Добавить философа</MyButton>
        </MyForm>
       
      </Modal>
      <MyButton style={{margin: '20px 0'}} onClick={() => setModal(true)}>Добавить философа</MyButton>
    </div>
  )
}

export default PhilosophersAdd