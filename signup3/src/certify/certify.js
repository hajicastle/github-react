import styles from './certify.module.css';
import Back from './back';
import Title from './title';
import Email from './email';

function Certify(){
  
  return(
    <div className={styles.certify}>
      <Back />
      <Title text="회원가입"/>
      <Email />
      {/* <Password /> */}
      {/* <Next text='다음'/> */}
    </div>
  );
}

export default Certify