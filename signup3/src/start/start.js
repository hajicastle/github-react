import styles from './start.module.css';
import { useNavigate } from 'react-router-dom';

function Start(){
  const navigate = useNavigate();

  const user = 'User';
  const newUser = 'NewUser';

  function handleNext(){
    navigate('/certify')
  }



  return(
    <div className={styles.start}>
      <div className={styles.container}>
        <div className={styles.intro}>
          <span className={styles.span} style={{color: '#0000b3'}}>{user}</span><span className={styles.span}>님이&nbsp; </span>
          <span className={styles.span} style={{color: '#0000b3'}} >{newUser}</span><span className={styles.span}>님을 팀블에 초대했습니다.</span>
        </div>
        <div className={styles.teambl}>팀원 찾기의 새로운 기준, 팀블!</div>
        <label className={styles.label}>지인 네트워크를 통해 최적의 팀원을 구하세요.</label>
        <button type='button' className={styles.nextBtn} onClick={handleNext}>회원가입 시작하기</button>
        
      </div>
    </div>
  )
}

export default Start