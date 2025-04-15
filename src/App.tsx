import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { HomePage } from './pages/HomePage';
import { GintarasPage } from './pages/GintarasPage';
import { PikulasPage } from './pages/PikulasPage';
import { MaraPage } from './pages/MaraPage';
import { MedeinePage } from './pages/MedeinePage';
import { SuccessPage } from './pages/SuccessPage';
import { FailPage } from './pages/FailPage';

function App() {
  return (
    <div className="min-h-screen bg-[#F5F2EA]">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/gintaras" element={<GintarasPage />} />
        <Route path="/pikulas" element={<PikulasPage />} />
        <Route path="/mara" element={<MaraPage />} />
        <Route path="/medeine" element={<MedeinePage />} />
        <Route path="/success" element={<SuccessPage />} />
        <Route path="/fail" element={<FailPage />} />
      </Routes>
    </div>
  );
}

export default App;