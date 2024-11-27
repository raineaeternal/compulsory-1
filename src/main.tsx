import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router';
import './index.scss'
import Home from './App.tsx'
import FFXIV from './pages/ffxiv.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ffxiv" element={<FFXIV />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
