import styles from './profilewrite.module.css';
import { useNavigate} from 'react-router-dom';
import React,{useState, useEffect} from 'react';

function ProfileWrite(){
  const navigate = useNavigate();

  let [name, setName]=useState('');
  let [university, setUniversity]=useState('KAIST');
  let [degree, setDegree]=useState('학사');
  let [year, setYear]=useState('');
  let [major, setMajor]=useState('');

  let [nextBtnActive, setNextBtnActive] = useState(false);

  function handleBack(){
    navigate('/certify');
  }
  function handleNext(){
    navigate('/end',{state:{username: name}});
  }

  function handleDegree(){
    var degreeList = document.getElementById('list');
    var value = (degreeList.options[degreeList.selectedIndex].text);
    setDegree(value);
  }

  useEffect(()=>{
    if((name!=='') && (university!=='') && (degree!=='') && (year!=='') && (major!=='')) setNextBtnActive(true);
    else setNextBtnActive(false);
  },[name,university,degree,year,major])


  return(
    <div className={styles.profileWrite}>  
      <div className={styles.back}>
        <button type="button" onClick={handleBack}></button>
      </div>
      <h4>프로필 작성하기</h4>
      <div className={styles.container}>
        <label className={styles.tag}>이름<br/></label>
        <input type='text' placeholder=' 이름 입력' className={styles.inputText} onChange={(e)=>(setName(e.target.value))} value={name}></input>
        <label className={styles.tag}>학교<br/></label>
        <input type='text' placeholder=' 학교 입력' className={styles.inputText} onChange={(e)=>(setUniversity(e.target.value))} value={university}></input>
        <label className={styles.tag}>학력<br/></label>
        <select onChange={handleDegree} id='list'>
          <option>학사</option>
          <option>석사</option>
          <option>박사</option>
        </select >
        <label className={styles.tag}>입학년도<br/></label>
        <input type='number' placeholder=' 입학년도 입력(4자리)' className={styles.inputText} onChange={(e)=>(setYear(e.target.value))} value={year}></input>
        <label className={styles.tag}>전공<br/></label>
        <input type='search' placeholder=' 전공 입력' className={styles.inputText} onChange={(e)=>(setMajor(e.target.value))} value={major}></input>
        <button type='button' className={`${nextBtnActive ? styles.nextBtnOn:styles.nextBtnOff}` } onClick={handleNext}>완료</button>
      </div>
    </div>
  );
}

export default ProfileWrite