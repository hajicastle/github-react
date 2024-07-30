import styles from './back.module.css'
import { useNavigate } from 'react-router-dom';

function Back(){
  const navigate = useNavigate();
  
  function handleBack(){
    navigate('/start');
  }

  return(
    <div className={styles.back}>
      <button type="button" onClick={handleBack}></button>
    </div>
  );
}

export default Back