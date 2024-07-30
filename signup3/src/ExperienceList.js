import React, { useState } from 'react';
import './ExperienceList.css';

const ExperienceList = () => {
  const [experiences, setExperiences] = useState([
    { id: 1, description: '삼성전자 주니어 인턴', period: '2021 - 2022' },
    { id: 2, description: '전산과 AI Lab 인턴', period: '2023' },
  ]);
  const [inputVisible, setInputVisible] = useState(false);
  const [newExperience, setNewExperience] = useState({ description: '', period: '' });

  const handleAddExperience = () => {
    if (newExperience.description && newExperience.period) {
      setExperiences([...experiences, { ...newExperience, id: experiences.length + 1 }]);
      setNewExperience({ description: '', period: '' });
      setInputVisible(false);
    }
  };

  const handleCancel = () => {
    setNewExperience({ description: '', period: '' });
    setInputVisible(false);
  };

  return (
    <div className="experience-list">
      <h2>경험</h2>
      <div className="experience-lists">
        {experiences.map((exp) => (
          <div key={exp.id} className="experience-item">
            <span className="description">{exp.description}</span>
            <span className="period">{exp.period}</span>
          </div>
        ))}
        {inputVisible ? (
          <div className="experience-input">
            <input
              type="text"
              placeholder="경험"
              value={newExperience.description}
              onChange={(e) => setNewExperience({ ...newExperience, description: e.target.value })}
            />
            <input
              type="text"
              placeholder="기간"
              value={newExperience.period}
              onChange={(e) => setNewExperience({ ...newExperience, period: e.target.value })}
            />
            <div className="button-group">
              <button className="add-button" onClick={handleAddExperience}>추가</button>
              <button className="cancel-button" onClick={handleCancel}>삭제</button>
            </div>
          </div>
        ) : (
          <div className="add-experience" onClick={() => setInputVisible(true)}>
            + 추가하기
          </div>
        )}
      </div>
    </div>
  );
};

export default ExperienceList;