import '../Reset.css';
import cl from './Main.module.css';
import PhilosophersList from '../Components/PhilosophersList';
import { useContext } from 'react';
import Context from '../Context/Context';
import PhilosophersAdd from '../Components/PhilosophersAdd';


  
function Main() {
 const {philosophers} = useContext(Context)
 
  return (
    <div className={cl.main}>
      <h1 className={cl.title}>Цитаты великих философов</h1>
      <PhilosophersAdd/>
      <PhilosophersList philosophers={philosophers}/>
    </div>
  );
}

export default Main;
