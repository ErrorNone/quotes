import '../Reset.css';
import cl from './Main.module.css';
import { useState } from "react";
import Aristotel from "./Aristotel.jpg"
import Platon from "./Platon.jpg"
import Socrat from "./Socrat.jpg"
import PhilosophersList from '../Components/PhilosophersList';

  
function Main() {
  const [philosophers, setPlilosophers] = useState([
    {id: 1, name: 'Аристотель', lifeEars: '384 - 322 г. до н. э.', photo: Aristotel},
    {id: 2, name: 'Сократ', lifeEars: '469 - 399 г. до н. э.', photo: Socrat},
    {id: 3, name: 'Платон', lifeEars: '428 - 347 г. до н. э.', photo: Platon}
  ])

  return (
    <div className="App">
      <h1 className={cl.title}>Цитаты великих философов</h1>
      <PhilosophersList philosophers={philosophers}/>
    </div>
  );
}

export default Main;
