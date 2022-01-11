import React from 'react';
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import { MainPage, SettingPage } from './components/takara';
import { ErrorPage, HomePage } from './components/main';
import "./App.css";
const App = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/main' element={<MainPage />} />
        <Route path='/setting' element={<SettingPage />} />
        <Route path='/*' element={<ErrorPage/>} /> {/*not foundの時*/}
      </Routes>
    </BrowserRouter>
  );
}

export default App;