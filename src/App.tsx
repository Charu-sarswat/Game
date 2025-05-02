import React, { useState, useEffect } from 'react';
import styled, { keyframes, css } from 'styled-components';
import LeaderboardV1 from './components/LeaderboardV1';
import LeaderboardV2 from './components/LeaderboardV2';
import Stats from './components/Stats';
import Tabs from './components/Tabs';
import { ThemeProvider } from './components/ThemeContext';
import ThemeSwitcher from './components/ThemeSwitcher';
import CyberDashboard from './components/CyberDashboard';
import AudioService from './services/AudioService';

// Keyframe animations
const glitch = keyframes`
  0% { transform: translate(0); }
  20% { transform: translate(-3px, 3px); }
  40% { transform: translate(-3px, -3px); }
  60% { transform: translate(3px, 3px); }
  80% { transform: translate(3px, -3px); }
  100% { transform: translate(0); }
`;

const scanline = keyframes`
  0% { transform: translateY(-100%); }
  100% { transform: translateY(100%); }
`;

const pulse = keyframes`
  0% { opacity: 0.8; }
  50% { opacity: 1; }
  100% { opacity: 0.8; }
`;

const float = keyframes`
  0% { transform: translateY(0px) translateX(0px) rotate(0deg); }
  50% { transform: translateY(-20px) translateX(10px) rotate(3deg); }
  100% { transform: translateY(0px) translateX(0px) rotate(0deg); }
`;

const dataStream = keyframes`
  0% { height: 10%; opacity: 0.5; }
  50% { height: 80%; opacity: 1; }
  100% { height: 10%; opacity: 0.5; }
`;

const blink = keyframes`
  0% { opacity: 1; }
  49% { opacity: 1; }
  50% { opacity: 0; }
  99% { opacity: 0; }
  100% { opacity: 1; }
`;

const AppContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem;
  position: relative;
  z-index: 1;
  overflow-x: hidden;
  
  @media (min-width: 768px) {
    padding: 1.5rem;
  }
  
  @media (min-width: 1024px) {
    padding: 2rem;
  }
`;

const Header = styled.header`
  margin-bottom: 2rem;
  text-align: center;
  position: relative;
  
  @media (min-width: 768px) {
    margin-bottom: 3rem;
  }
  
  &::before {
    content: 'SYSTEM v2.4.1';
    position: absolute;
    top: -15px;
    left: 50%;
    transform: translateX(-50%);
    font-size: 0.7rem;
    color: var(--primary);
    letter-spacing: 3px;
    opacity: 0.7;
    
    @media (max-width: 480px) {
      font-size: 0.6rem;
      top: -12px;
    }
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: -1rem;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 2px;
    background: var(--gradient-primary);
    box-shadow: 0 0 15px var(--primary);
    
    @media (min-width: 768px) {
      width: 150px;
      bottom: -1.5rem;
    }
  }
`;

const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 0.5rem;
  font-weight: 900;
  color: var(--primary);
  letter-spacing: 2px;
  text-transform: uppercase;
  position: relative;
  display: inline-block;
  text-shadow: 0 0 15px var(--primary);
  
  @media (min-width: 480px) {
    font-size: 2.5rem;
  }
  
  @media (min-width: 768px) {
    font-size: 3rem;
    letter-spacing: 3px;
  }
  
  @media (min-width: 1024px) {
    font-size: 3.5rem;
  }
  
  span {
    display: inline-block;
    transition: all 0.3s ease;
    position: relative;
    
    &:hover {
      animation: ${css`${glitch}`} 0.3s ease;
      color: var(--secondary);
    }
    
    &::after {
      content: '';
      position: absolute;
      bottom: 10px;
      left: 0;
      width: 100%;
      height: 3px;
      background-color: var(--primary);
      transform: scaleX(0);
      transform-origin: left;
      transition: transform 0.3s ease;
    }
    
    &:hover::after {
      transform: scaleX(1);
    }
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -10px;
    width: 5px;
    height: 100%;
    background-color: var(--primary);
    animation: ${css`${pulse}`} 2s infinite;
    
    @media (max-width: 480px) {
      left: -5px;
      width: 3px;
    }
  }
`;

const Subtitle = styled.p`
  color: var(--text-primary);
  font-size: 0.8rem;
  letter-spacing: 1px;
  margin-top: 0.5rem;
  position: relative;
  text-transform: uppercase;
  font-weight: 300;
  opacity: 0.8;
  
  @media (min-width: 480px) {
    font-size: 1rem;
    margin-top: 0.8rem;
  }
  
  @media (min-width: 768px) {
    font-size: 1.2rem;
    letter-spacing: 2px;
    margin-top: 1rem;
  }
  
  &::after {
    content: 'NETWORK STATUS: ONLINE';
    position: absolute;
    top: -20px;
    right: 0;
    font-size: 0.6rem;
    color: var(--secondary);
    letter-spacing: 1px;
    opacity: 0.7;
    animation: ${css`${blink}`} 3s infinite;
    
    @media (min-width: 480px) {
      font-size: 0.7rem;
      top: -30px;
    }
    
    @media (max-width: 480px) {
      display: none;
    }
  }
`;

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  margin-top: 1.5rem;
  
  @media (min-width: 768px) {
    gap: 2rem;
    margin-top: 2rem;
  }
  
  @media (min-width: 1024px) {
    grid-template-columns: 1fr 1fr;
    margin-top: 3rem;
  }
  
  @media (max-width: 480px) {
    gap: 1.2rem;
    margin-top: 1.2rem;
  }
`;

const DesignVariant = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 0 0 20px rgba(var(--primary-rgb), 0.3);
  border: 1px solid var(--primary);
  transition: all 0.3s ease;
  position: relative;
  height: auto;
  min-height: 50vh;
  display: flex;
  flex-direction: column;
  
  @media (min-width: 1024px) {
    height: 100%;
    min-height: 65vh;
  }
  
  @media (max-width: 480px) {
    min-height: auto;
  }
  
  &:hover {
    transform: translateY(-5px) scale(1.02);
    box-shadow: 0 10px 30px rgba(var(--primary-rgb), 0.5);
    
    @media (max-width: 768px) {
      transform: translateY(-3px) scale(1.01);
    }
    
    @media (max-width: 480px) {
      transform: translateY(-2px);
    }
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 1px;
    background: linear-gradient(90deg, 
      transparent, 
      var(--primary), 
      transparent
    );
    opacity: 0.5;
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    right: 0;
    width: 50%;
    height: 1px;
    background-color: var(--primary);
    opacity: 0.5;
  }
`;

const VariantHeader = styled.div`
  background-color: rgba(10, 10, 20, 0.9);
  padding: 1rem;
  border-bottom: 1px solid rgba(var(--primary-rgb), 0.3);
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  
  @media (min-width: 768px) {
    padding: 1.25rem 1.5rem;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  
  @media (max-width: 480px) {
    padding: 0.8rem;
  }
  
  h2 {
    font-size: 1rem;
    color: var(--primary);
    text-transform: uppercase;
    letter-spacing: 1px;
    margin: 0;
    
    @media (min-width: 480px) {
      font-size: 1.1rem;
      letter-spacing: 1.5px;
    }
    
    @media (min-width: 768px) {
      font-size: 1.25rem;
      letter-spacing: 2px;
    }
    
    @media (max-width: 350px) {
      font-size: 0.9rem;
    }
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100px;
    background: linear-gradient(
      to bottom,
      transparent,
      rgba(var(--primary-rgb), 0.05),
      transparent
    );
    animation: ${css`${scanline}`} 4s linear infinite;
    pointer-events: none;
    z-index: 0;
  }
`;

const VariantControls = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  
  @media (min-width: 480px) {
    gap: 1rem;
  }
  
  @media (max-width: 350px) {
    gap: 0.3rem;
  }
`;

// Unused styled components
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const DesignHeader = styled.div`
  background-color: rgba(10, 10, 20, 0.9);
  padding: 1.25rem 1.5rem;
  border-bottom: 1px solid rgba(var(--primary-rgb), 0.3);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100px;
    background: linear-gradient(
      to bottom,
      transparent,
      rgba(var(--primary-rgb), 0.05),
      transparent
    );
    animation: ${css`${scanline}`} 4s linear infinite;
    pointer-events: none;
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 2px;
    height: 100%;
    background: var(--primary);
    animation: ${css`${dataStream}`} 3s infinite ease-in-out;
    opacity: 0.5;
  }
`;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const DesignTitle = styled.h2`
  font-size: 1.25rem;
  color: var(--primary);
  position: relative;
  z-index: 1;
  text-transform: uppercase;
  letter-spacing: 2px;
  display: flex;
  align-items: center;
  font-weight: 600;
  
  &::before {
    content: '';
    display: inline-block;
    width: 10px;
    height: 10px;
    background-color: var(--primary);
    margin-right: 10px;
    animation: ${css`${pulse}`} 2s infinite;
  }
`;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const StatsContainer = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 0 0 20px rgba(var(--primary-rgb), 0.3);
  border: 1px solid var(--primary);
  transition: all 0.3s ease;
  position: relative;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(var(--primary-rgb), 0.5);
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 1px;
    background: linear-gradient(90deg, 
      transparent, 
      var(--primary), 
      transparent
    );
    opacity: 0.5;
  }
`;

const VoiceCommandButton = styled.button`
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.7);
  border: 2px solid var(--primary);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.5rem;
  box-shadow: 0 0 15px rgba(var(--primary-rgb), 0.6);
  cursor: pointer;
  z-index: 999;
  transition: all 0.3s ease;
  
  &:hover {
    transform: scale(1.1);
    box-shadow: 0 0 20px rgba(var(--primary-rgb), 0.8);
  }
  
  &:active {
    transform: scale(0.95);
  }
  
  &::before {
    content: '';
    position: absolute;
    top: -5px;
    left: -5px;
    right: -5px;
    bottom: -5px;
    border: 1px solid var(--primary);
    border-radius: 50%;
    opacity: 0.5;
    animation: ${css`${pulse}`} 2s infinite;
  }
`;

const AnimatedBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  overflow: hidden;
  pointer-events: none;
`;

const Grid = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: 50px 50px;
  background-image: 
    linear-gradient(rgba(var(--primary-rgb), 0.05) 1px, transparent 1px),
    linear-gradient(90deg, rgba(var(--primary-rgb), 0.05) 1px, transparent 1px);
  opacity: 0.5;
`;

const BackgroundElement = styled.div<{ size: number; opacity: number; delay: number; duration: number }>`
  position: absolute;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  border-radius: 50%;
  background: radial-gradient(circle at center, rgba(var(--primary-rgb), ${props => props.opacity}), transparent 70%);
  animation: ${css`${float}`} ${props => props.duration}s infinite ease-in-out;
  animation-delay: ${props => props.delay}s;
  filter: blur(${props => props.size / 3}px);
`;

const DataLines = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: 
    linear-gradient(transparent 50%, rgba(var(--primary-rgb), 0.03) 50%),
    linear-gradient(90deg, transparent 50%, rgba(var(--primary-rgb), 0.03) 50%);
  background-size: 100px 100px;
`;

const ARToggle = styled.button`
  position: fixed;
  bottom: 20px;
  left: 20px;
  padding: 10px 20px;
  background: rgba(0, 0, 0, 0.7);
  border: 2px solid var(--primary);
  border-radius: 30px;
  color: var(--primary);
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  transition: all 0.3s ease;
  z-index: 999;
  box-shadow: 0 0 15px rgba(var(--primary-rgb), 0.3);
  letter-spacing: 1px;
  text-transform: uppercase;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 0 20px rgba(var(--primary-rgb), 0.5);
  }
  
  &:active {
    transform: translateY(-1px);
  }
`;

const QRCodeContainer = styled.div<{ isVisible: boolean }>`
  position: fixed;
  bottom: 80px;
  left: 20px;
  padding: 1.5rem;
  background: rgba(0, 0, 0, 0.8);
  border-radius: 5px;
  border: 1px solid var(--primary);
  transform: translateY(${props => props.isVisible ? '0' : '20px'});
  opacity: ${props => props.isVisible ? '1' : '0'};
  transition: all 0.3s ease;
  pointer-events: ${props => props.isVisible ? 'auto' : 'none'};
  z-index: 998;
  backdrop-filter: blur(10px);
  box-shadow: 0 0 30px rgba(var(--primary-rgb), 0.4);
`;

const QRCodePlaceholder = styled.div`
  width: 150px;
  height: 150px;
  background: linear-gradient(135deg, rgba(var(--primary-rgb), 0.1), rgba(var(--secondary-rgb), 0.1));
  border: 1px solid var(--primary);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--primary);
  font-weight: 700;
  border-radius: 5px;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100px;
    background: linear-gradient(
      to bottom,
      transparent,
      rgba(var(--primary-rgb), 0.1),
      transparent
    );
    animation: ${css`${scanline}`} 3s linear infinite;
    pointer-events: none;
  }
`;

const QRText = styled.div`
  margin-top: 0.5rem;
  font-size: 0.8rem;
  color: var(--primary);
  text-align: center;
  letter-spacing: 1px;
`;

const Footer = styled.footer`
  margin-top: 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 2rem;
  border-top: 1px solid rgba(var(--primary-rgb), 0.2);
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100px;
    height: 1px;
    background: linear-gradient(90deg, var(--primary), transparent);
  }
`;

const Copyright = styled.div`
  font-size: 0.8rem;
  color: var(--text-secondary);
  letter-spacing: 1px;
  opacity: 0.7;
`;

// Voice recognition component
const VoiceRecognition: React.FC<{ isListening: boolean; onToggle: () => void }> = ({ isListening, onToggle }) => {
  return (
    <VoiceCommandButton onClick={onToggle}>
      {isListening ? '🎤' : '🎙️'}
    </VoiceCommandButton>
  );
};

// AR component
const ARMode: React.FC = () => {
  const [showQR, setShowQR] = useState(false);

  return (
    <>
      <ARToggle onClick={() => setShowQR(!showQR)}>
        <span>AR View</span> 📱
      </ARToggle>

      <QRCodeContainer isVisible={showQR}>
        <QRCodePlaceholder>QR Code</QRCodePlaceholder>
        <QRText>SCAN FOR AR EXPERIENCE</QRText>
      </QRCodeContainer>
    </>
  );
};

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [voiceActive, setVoiceActive] = useState(false);
  const [arMode, setArMode] = useState(false);
  const [backgroundElements, setBackgroundElements] = useState<Array<{ id: number, x: number, y: number, size: number, opacity: number, delay: number, duration: number }>>([]);

  // Split title into individual characters for hover effect
  const titleText = "CyberPulse Arena";
  const titleChars = titleText.split('');

  // Initialize audio service
  useEffect(() => {
    // Set initial volume
    AudioService.setVolume(0.5);

    // Create background elements
    const elements = [];
    for (let i = 0; i < 15; i++) {
      elements.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: 100 + Math.random() * 300,
        opacity: 0.05 + Math.random() * 0.1,
        delay: Math.random() * 5,
        duration: 15 + Math.random() * 20
      });
    }
    setBackgroundElements(elements);
  }, []);

  useEffect(() => {
    document.body.classList.add('cyber-theme');
    return () => {
      document.body.classList.remove('cyber-theme');
    };
  }, []);

  const toggleVoiceCommand = () => {
    setVoiceActive(!voiceActive);
    if (!voiceActive) {
      AudioService.play('activate');
    } else {
      AudioService.play('deactivate');
    }
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const toggleArMode = () => {
    setArMode(!arMode);
    if (!arMode) {
      AudioService.play('activate');
    } else {
      AudioService.play('deactivate');
    }
  };

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    AudioService.play('click');
  };

  // Render CyberDashboard when activeTab is 'cyber'
  if (activeTab === 'cyber') {
    return <CyberDashboard />;
  }

  return (
    <ThemeProvider>
      <AppContainer>
        {/* Animated background */}
        <AnimatedBackground>
          <Grid />
          <DataLines />
          {backgroundElements.map(element => (
            <BackgroundElement
              key={element.id}
              style={{ left: `${element.x}%`, top: `${element.y}%` }}
              size={element.size}
              opacity={element.opacity}
              delay={element.delay}
              duration={element.duration}
            />
          ))}
        </AnimatedBackground>

        <Header>
          <Title>
            {titleChars.map((char, index) => (
              <span key={index}>{char === ' ' ? '\u00A0' : char}</span>
            ))}
          </Title>
          <Subtitle>NEURAL NETWORK COMBAT RANKINGS 2.4.1</Subtitle>
        </Header>

        <Tabs
          tabs={[
            { id: 'home', label: 'HOME' },
            { id: 'cyber', label: 'CYBER DASHBOARD' },
            { id: 'stats', label: 'STATS' },
          ]}
          activeTab={activeTab}
          onChange={handleTabChange}
        />

        <ContentGrid>
          {activeTab === 'home' && (
            <>
              <DesignVariant>
                <VariantHeader>
                  <h2>TRADITIONAL LEADERBOARD</h2>
                  <VariantControls>
                    <VoiceRecognition isListening={voiceActive} onToggle={toggleVoiceCommand} />
                    <ARMode />
                  </VariantControls>
                </VariantHeader>
                <LeaderboardV1 />
              </DesignVariant>

              <DesignVariant>
                <VariantHeader>
                  <h2>ENHANCED LEADERBOARD</h2>
                </VariantHeader>
                <LeaderboardV2 />
              </DesignVariant>
            </>
          )}

          {activeTab === 'stats' && <Stats />}
        </ContentGrid>

        <Footer>
          <ThemeSwitcher />
          <Copyright>© 2077 NEURAL BRIDGE SYSTEMS. ALL RIGHTS RESERVED.</Copyright>
        </Footer>
      </AppContainer>
    </ThemeProvider>
  );
};

export default App; 