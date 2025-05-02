import React, { useState } from 'react';
import styled, { keyframes, css } from 'styled-components';
import LeaderboardCyber from './LeaderboardCyber';
import CyberProfile from './CyberProfile';
import HolographicNotifications from './HolographicNotifications';
import CyberTerminal from './CyberTerminal';
import { ThemeProvider } from './ThemeContext';
import ThemeSwitcher from './ThemeSwitcher';

// Animations
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
  0% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-10px) rotate(2deg); }
  100% { transform: translateY(0px) rotate(0deg); }
`;

const dataStream = keyframes`
  0% { height: 10%; opacity: 0.5; }
  50% { height: 80%; opacity: 1; }
  100% { height: 10%; opacity: 0.5; }
`;

// Styled Components
const DashboardContainer = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 1rem;
  position: relative;
  overflow-x: hidden;
  
  @media (min-width: 768px) {
    padding: 1.5rem;
  }
  
  @media (min-width: 1024px) {
    padding: 2rem;
  }
  
  &::before {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.97);
    z-index: -2;
  }
  
  &::after {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: 
      radial-gradient(
        circle at 50% 50%,
        rgba(var(--primary-rgb), 0.1) 0%,
        transparent 80%
      ),
      repeating-linear-gradient(
        0deg,
        rgba(var(--primary-rgb), 0.03) 1px, 
        transparent 2px, 
        transparent 5px
      ),
      repeating-linear-gradient(
        90deg,
        rgba(var(--primary-rgb), 0.03) 1px, 
        transparent 2px, 
        transparent 5px
      );
    z-index: -1;
    pointer-events: none;
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
    top: -20px;
    left: 50%;
    transform: translateX(-50%);
    font-size: 0.7rem;
    color: var(--primary);
    letter-spacing: 3px;
    opacity: 0.7;
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: -1.5rem;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 2px;
    background: var(--gradient-primary);
    box-shadow: 0 0 15px var(--primary);
    
    @media (min-width: 768px) {
      width: 150px;
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
    letter-spacing: 3px;
  }
  
  @media (min-width: 768px) {
    font-size: 3rem;
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
    letter-spacing: 1.5px;
    margin-top: 0.8rem;
  }
  
  @media (min-width: 768px) {
    font-size: 1.2rem;
    letter-spacing: 2px;
    margin-top: 1rem;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  
  @media (min-width: 768px) {
    gap: 2rem;
  }
  
  @media (min-width: 1024px) {
    grid-template-columns: 1fr 2fr;
  }
`;

const Sidebar = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  
  @media (min-width: 768px) {
    gap: 2rem;
  }
`;

const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  
  @media (min-width: 768px) {
    gap: 2rem;
  }
`;

const DataSection = styled.section`
  position: relative;
  width: 100%;
  overflow: hidden;
`;

const SectionTitle = styled.h2`
  font-size: 1rem;
  color: var(--primary);
  margin-bottom: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  border-bottom: 1px solid var(--primary);
  padding-bottom: 0.3rem;
  display: inline-block;
  position: relative;
  
  @media (min-width: 768px) {
    font-size: 1.2rem;
    letter-spacing: 2px;
    margin-bottom: 1rem;
    padding-bottom: 0.5rem;
  }
  
  &::before {
    content: '';
    position: absolute;
    bottom: -1px;
    left: 0;
    width: 50%;
    height: 3px;
    background-color: var(--primary);
    box-shadow: 0 0 10px var(--primary);
  }
`;

const SystemInfo = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-bottom: 1.5rem;
  padding: 0.8rem;
  background-color: rgba(0, 0, 0, 0.7);
  border: 1px solid var(--primary);
  border-radius: 5px;
  
  @media (min-width: 480px) {
    padding: 1rem;
  }
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
    gap: 0.5rem;
    margin-bottom: 2rem;
  }
`;

const SystemStatusItem = styled.div`
  text-align: center;
  
  h3 {
    font-size: 0.6rem;
    color: var(--text-secondary);
    text-transform: uppercase;
    letter-spacing: 1px;
    margin-bottom: 0.3rem;
    
    @media (min-width: 480px) {
      font-size: 0.7rem;
      margin-bottom: 0.5rem;
    }
  }
  
  div {
    font-size: 1rem;
    color: var(--primary);
    font-weight: 700;
    animation: ${css`${pulse}`} 2s infinite;
    
    @media (min-width: 480px) {
      font-size: 1.2rem;
    }
  }
`;

const ThemeSwitcherContainer = styled.div`
  margin-bottom: 1.5rem;
  
  @media (min-width: 768px) {
    margin-bottom: 2rem;
  }
`;

const FloatingEffect = styled.div`
  display: none;
  
  @media (min-width: 1024px) {
    display: block;
    position: absolute;
    top: 10%;
    right: 5%;
    width: 80px;
    height: 150px;
    opacity: 0.5;
    z-index: -1;
    animation: ${css`${float}`} 8s ease-in-out infinite;
    
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 2px;
      height: 100%;
      background-color: var(--primary);
      animation: ${css`${dataStream}`} 3s ease-in-out infinite;
    }
    
    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      right: 0;
      width: 2px;
      height: 100%;
      background-color: var(--primary);
      animation: ${css`${dataStream}`} 3s ease-in-out infinite;
    }
  }
`;

const ScanlineEffect = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    to bottom,
    transparent,
    rgba(var(--primary-rgb), 0.03),
    transparent
  );
  pointer-events: none;
  z-index: 10;
  animation: ${css`${scanline}`} 10s linear infinite;
  opacity: 0.5;
  
  @media (min-width: 768px) {
    opacity: 0.7;
  }
`;

const CyberDashboard: React.FC = () => {
  const [currentUser, setCurrentUser] = useState('USR-42X9');
  const [currentTime, setCurrentTime] = useState('20:42:17');
  const [pingStatus, setPingStatus] = useState('24ms');
  const [securityStatus, setSecurityStatus] = useState('SECURE');

  // Update time every second
  React.useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const hours = String(now.getHours()).padStart(2, '0');
      const minutes = String(now.getMinutes()).padStart(2, '0');
      const seconds = String(now.getSeconds()).padStart(2, '0');
      setCurrentTime(`${hours}:${minutes}:${seconds}`);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <ThemeProvider>
      <DashboardContainer>
        <ScanlineEffect />
        <FloatingEffect />

        <Header>
          <Title>
            <span>C</span>
            <span>Y</span>
            <span>B</span>
            <span>E</span>
            <span>R</span>
            <span>N</span>
            <span>E</span>
            <span>T</span>
          </Title>
          <Subtitle>COMMAND AND CONTROL INTERFACE</Subtitle>
        </Header>

        <ThemeSwitcherContainer>
          <ThemeSwitcher />
        </ThemeSwitcherContainer>

        <SystemInfo>
          <SystemStatusItem>
            <h3>USER</h3>
            <div>{currentUser}</div>
          </SystemStatusItem>
          <SystemStatusItem>
            <h3>TIME</h3>
            <div>{currentTime}</div>
          </SystemStatusItem>
          <SystemStatusItem>
            <h3>PING</h3>
            <div>{pingStatus}</div>
          </SystemStatusItem>
          <SystemStatusItem>
            <h3>SECURITY</h3>
            <div>{securityStatus}</div>
          </SystemStatusItem>
        </SystemInfo>

        <Grid>
          <Sidebar>
            <DataSection>
              <SectionTitle>USER PROFILE</SectionTitle>
              <CyberProfile userId={currentUser} />
            </DataSection>

            <DataSection>
              <SectionTitle>NOTIFICATIONS</SectionTitle>
              <HolographicNotifications maxNotifications={3} />
            </DataSection>
          </Sidebar>

          <MainContent>
            <DataSection>
              <SectionTitle>TERMINAL</SectionTitle>
              <CyberTerminal />
            </DataSection>

            <DataSection>
              <SectionTitle>LEADERBOARD</SectionTitle>
              <LeaderboardCyber />
            </DataSection>
          </MainContent>
        </Grid>
      </DashboardContainer>
    </ThemeProvider>
  );
};

export default CyberDashboard; 