import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './src/pages/HomePage';
import PrivacyPolicyPage from './src/pages/PrivacyPolicyPage'
import TermsOfUsePage from './src/pages/TermsOfUsePage';
import ContactPage from './src/pages/ContactPage';
import ResetPass from './src/pages/ResetPass';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy" element={<PrivacyPolicyPage />} />
        <Route path="/terms" element={<TermsOfUsePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/reset-password" element={<ResetPass />} />
      </Routes>
    </>

  )
}

export default App;