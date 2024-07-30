import { isDisabled } from '@testing-library/user-event/dist/utils';
import styles from './email.module.css'
import React,{useState, useEffect, useRef} from 'react';
import { useNavigate } from 'react-router-dom';

function Email(){
  let codekey='1234';
  const labelRef1 = useRef(null);
  const labelRef2 = useRef(null);
  const navigate = useNavigate();

  let [emailBtnActive, setEmailBtnActive] = useState(false);
  let [nextBtnActive, setNextBtnActive] = useState(false);
  let [email, setEmail] = useState('');
  let [code , setCode] = useState('');
  let [pw, setPw] = useState('');
  let [pwCheck, setPwCheck] = useState('');
  let [valid1, setValid1] = useState(false);
  let [valid2, setValid2] = useState(false);

  useEffect(()=>{
    if(email!=='') setEmailBtnActive((EBA)=>EBA=true);
    else setEmailBtnActive((EBA)=>EBA=false);
  },[email])

  useEffect(()=>{
    if(code===codekey){
      labelRef1.current.innerHTML='인증코드가 일치합니다.';
      labelRef1.current.style.fontSize='10px';
      labelRef1.current.style.color='green'
      setValid1(true);
    }
    else if(code!==codekey && code!==''){
      labelRef1.current.innerHTML='인증코드가 일치하지 않습니다.';
      labelRef1.current.style.fontSize='10px';
      labelRef1.current.style.color='red'
      setValid1(false);
    }
    else{
      labelRef1.current.innerHTML='';
      setValid1(false);
    }

  },[code])

  
  useEffect(()=>{
    if(pw===pwCheck && pw!==''){
      labelRef2.current.innerHTML='인증코드가 일치합니다.';
      labelRef2.current.style.fontSize='10px';
      labelRef2.current.style.color='green'
      setValid2(true);
    }
    else if(pw!==pwCheck && pwCheck!==''){
      labelRef2.current.innerHTML='인증코드가 일치하지 않습니다.';
      labelRef2.current.style.fontSize='10px';
      labelRef2.current.style.color='red'
      setValid2(false);
    }
    else{
      labelRef2.current.innerHTML='';
      setValid2(false);
    }

  },[pwCheck])

  useEffect(()=>{
    if(valid1&&valid2) setNextBtnActive(true);
    else setNextBtnActive(false);
  },[valid1,valid2])


  function handleEmail(e){
    setEmail(e.target.value);
  }
  function handleCode(e){
    setCode(e.target.value);
  }
  function handleNext(){
    navigate('/profilewrite');
  }


  return(
    <div className={styles.container}>
      <label className={styles.label}>학교 이메일<br/></label>
      <div className={styles.email}>
        <input type='text' id='email' placeholder=' 이메일 입력' onChange={(e)=>handleEmail(e)} value={email}
          ></input>
        <button type="button" className={`${emailBtnActive? styles.emailBtnOn:styles.emailBtnOff}` } disabled={emailBtnActive}>인증코드 받기</button>
      </div>
      <input type='password' className={styles.code} placeholder=' 인증코드 입력' onChange={(e)=>handleCode(e)} value={code}></input>
      <label ref={labelRef1} innerHTML=''></label>
      <label className={styles.label} >비밀번호<br/></label>
      <input type='password' id='password' placeholder=' 비밀번호 입력' className={styles.password} onChange={(e)=>(setPw(e.target.value))} value={pw}></input>
      <input type='password' className={styles.password} placeholder=' 비밀번호 확인' onChange={(e)=>(setPwCheck(e.target.value))} value={pwCheck}></input>
      <label ref={labelRef2} innerHTML=''></label>
      <button type='button' className={`${nextBtnActive ? styles.nextBtnOn:styles.nextBtnOff}` } onClick={handleNext}>다음</button>
    </div>
  );
}

export default Email