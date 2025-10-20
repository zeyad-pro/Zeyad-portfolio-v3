"use client"
import React, { useEffect, useState } from 'react'

function ShowWelcomeJs() {
      const [showWelcome, setShowWelcome] = useState(true);
    
      useEffect(() => {
        const timer = setTimeout(() => setShowWelcome(false), 2000);
        return () => clearTimeout(timer);
      }, []);
    
  return showWelcome;
}

export default ShowWelcomeJs