


import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Screen1 from './onboarding/screen1';
import Screen2 from './onboarding/screen2';
// import { AuthScreen } from './page/screen3';
import Screen5 from './onboarding/screen5';
// import Screen4 from './onboarding/screen4';
import Screen6 from './onboarding/screen6'
// import Screen7 from './onboarding/screen7';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Onboarding flow */}
        <Route path="/" element={<Screen1 />} />
        <Route path="/welcome" element={<Screen2 />} />
        {/* <Route path="/auth" element={<AuthScreen />} /> */}
        {/* <Route path="/verify-code" element={<Screen4 />} /> */}
        <Route path="/signup" element={<Screen5 />} />
        <Route path="/login" element={<Screen6 />} />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>


  );
}

export default App;