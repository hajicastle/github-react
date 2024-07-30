import Start from './start/start';
import Certify from './certify/certify';
import ProfileWrite from './profilewrite/profilewrite';
import End from './end/end';
import Login from './Login';
import './App.css';
import MyProfile from './MyProfile';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/start" element={<Start />} />
          <Route path="/certify" element={<Certify />} />
          <Route path="/profilewrite" element={<ProfileWrite />} />
          <Route path="/end" element={<End />} />
          <Route path="/myprofile" element={<MyProfile/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
