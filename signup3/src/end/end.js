import { useLocation, useNavigate } from 'react-router-dom';
import styles from './end.module.css';

function End(){
  const location = useLocation();
  const navigate = useNavigate();
  const name ={...location.state}.username;

  function handleProfile(){
    navigate('/')
  }
  function handleStart(){
    navigate('/')
  }



  return(
    <div className={styles.end}>
      <div className={styles.container}>
        <span className={styles.front} style={{color: '#0000b3'}}>{name}</span><span className={styles.back}>님,<br/></span>
        <span  className={styles.front}>가입을 축하합니다!</span>
        <label className={styles.label1}>이제 팀블과 함께 최적의 팀원을 탐색해 보세요!</label>
        <label className={styles.label2}>프로필을 더 자세히 작성할수록 다른 회원들과 더 쉽게 연결될 수 있습니다. 이어서 프로필을 작성해 볼까요?</label>
        <button type='button' className={styles.profileBtn} onClick={handleProfile}>프로필 추가로 작성하기</button>
        <button type='button' className={styles.startBtn} onClick={handleStart}>팀블 시작하기</button>
        
      </div>
    </div>
  );
}

export default End