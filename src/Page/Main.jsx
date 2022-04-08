import '../Reset.css';
import cl from './Main.module.css';
import PhilosophersList from '../Components/PhilosophersList';
import { useContext } from 'react';
import Context from '../Context/Context';


  
function Main() {
 const {philosophers} = useContext(Context)

  return (
    <div className={cl.main}>
      <h1 className={cl.title}>Цитаты великих философов</h1>
      <PhilosophersList philosophers={philosophers}/>
    </div>
  );
}

export default Main;
