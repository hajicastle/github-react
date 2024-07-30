import React, { useState } from 'react';
import './IntroductionForm.css';

const IntroductionForm = () => {
  const [introduction, setIntroduction] = useState('');
  const [inputVisible, setInputVisible] = useState(false);
  const [savedIntroduction, setSavedIntroduction] = useState('');

  const handleInputChange = (e) => {
    setIntroduction(e.target.value);
  };

  const handleSave = () => {
    setSavedIntroduction(introduction);
    setInputVisible(false);
  };

  return (
    <div className="introduction-form">
      <h2>소개</h2>
      {inputVisible ? (
        <div className="textwithbutton">
          <textarea
            placeholder=""
            value={introduction}
            onChange={handleInputChange}
          />
          <button onClick={handleSave}>저장하기</button>
        </div>
      ) : (
        <div className="saved-introduction" onClick={() => setInputVisible(true)}>
          {savedIntroduction || (
            <p className="placeholder">
              관심 있는 분야, 이루고자 하는 목표, 전문성을 알기 위해 하고 있는 활동 등 본인을 설명하는 글을 자유롭게 작성해 보세요.
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default IntroductionForm;
