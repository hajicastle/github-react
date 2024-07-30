import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import './ProfileCard.css';

export const ProfileCard = () => {
  const [image, setImage] = useState('/default.png');
  const [tags, setTags] = useState(['Java', 'Python']);
  const [inputVisible, setInputVisible] = useState(false);
  const [newTag, setNewTag] = useState('');

  const onDrop = (acceptedFiles) => {
    const file = acceptedFiles[0];
    const reader = new FileReader();
    reader.onload = (e) => {
      setImage(e.target.result);
    };
    reader.readAsDataURL(file);
  };

  const { getRootProps, getInputProps } = useDropzone({ onDrop, noClick: true });

  const handleImageClick = () => {
    document.getElementById('fileInput').click();
  };

  const handleAddTag = () => {
    if (newTag) {
      setTags([...tags, newTag]);
      setNewTag('');
      setInputVisible(false);
    }
  };

  const handleCancel = () => {
    setNewTag('');
    setInputVisible(false);
  };

  return (
    <div className="profile-card">
      <div className="header">
      <div className="image-container" {...getRootProps()}>
          <img src={image} alt="Profile" onClick={handleImageClick} />
          <input {...getInputProps()} id="fileInput" type="file" style={{ display: 'none' }} />
        </div>
        <div className="info">
          <h2>이규원</h2>
          <p>KAIST 전산학부</p>
          <p>22학번</p>
        </div>
      </div>
      <div className="tags">
        {tags.map((tag, index) => (
          <span key={index} className="tag">
            {tag}
          </span>
        ))}
        {inputVisible ? (
          <div className="tag-input">
            <input
              type="text"
              placeholder="태그"
              value={newTag}
              onChange={(e) => setNewTag(e.target.value)}
            />
            <button onClick={handleAddTag}>추가</button>
            <button onClick={handleCancel}>삭제</button>
          </div>
        ) : (
          <span className="tag add-tag" onClick={() => setInputVisible(true)}>
            + 
          </span>
        )}
      </div>
    </div>
  );
};
