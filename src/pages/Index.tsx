
import React, { useState } from 'react';
import MentalHealthBot from '@/components/MentalHealthBot';
import LandingPage from '@/components/LandingPage';

const Index = () => {
  const [showChat, setShowChat] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  const handleStartChat = () => {
    setShowChat(true);
  };

  const handleLogin = () => {
    // For now, just start the chat - we'll implement proper auth later
    setShowChat(true);
  };

  const handleSignup = () => {
    // For now, just start the chat - we'll implement proper auth later
    setShowChat(true);
  };

  if (showChat) {
    return <MentalHealthBot />;
  }

  return (
    <LandingPage 
      onStartChat={handleStartChat}
      onLogin={handleLogin}
      onSignup={handleSignup}
    />
  );
};

export default Index;
