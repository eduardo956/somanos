import React, { createContext, useContext, useState, useEffect } from 'react';

const AgeContext = createContext();

export const AgeProvider = ({ children }) => {
  const [isVerified, setIsVerified] = useState(false);
  const [showAgeModal, setShowAgeModal] = useState(false);

  useEffect(() => {
    try {
      const verified = localStorage.getItem('somanos_age_verified');
      if (verified === 'true') {
        setIsVerified(true);
        setShowAgeModal(false);
      } else {
        setShowAgeModal(true);
      }
    } catch {
      setShowAgeModal(true);
    }
  }, []);

  const confirmAge = () => {
    try {
      localStorage.setItem('somanos_age_verified', 'true');
    } catch (e) {
      console.error(e);
    }
    setIsVerified(true);
    setShowAgeModal(false);
  };

  const rejectAge = () => {
    window.location.href = 'https://www.google.com';
  };

  return (
    <AgeContext.Provider value={{ isVerified, showAgeModal, confirmAge, rejectAge }}>
      {children}
    </AgeContext.Provider>
  );
};

export const useAge = () => useContext(AgeContext);
