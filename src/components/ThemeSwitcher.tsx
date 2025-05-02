import React, { useState } from 'react';
import styled, { keyframes, css } from 'styled-components';
import { useTheme, ThemeType } from './ThemeContext';
import AudioService from '../services/AudioService';

const slideIn = keyframes`
  0% { transform: translateX(100%); }
  100% { transform: translateX(0); }
`;

const slideOut = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(100%); }
`;

const glow = keyframes`
  0% { box-shadow: 0 0 10px var(--primary); }
  50% { box-shadow: 0 0 20px var(--primary), 0 0 30px var(--secondary); }
  100% { box-shadow: 0 0 10px var(--primary); }
`;

const rotate = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const Container = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 80px;
  right: 0;
  width: 300px;
  background: rgba(10, 10, 20, 0.9);
  backdrop-filter: blur(10px);
  border-left: 2px solid var(--primary);
  height: calc(100vh - 80px);
  z-index: 1000;
  padding: 2rem;
  animation: ${(props: { isOpen: boolean }) => props.isOpen ? css`${slideIn}` : css`${slideOut}`} 0.5s forwards;
  display: ${(props: { isOpen: boolean }) => props.isOpen || props.isOpen === undefined ? 'block' : 'none'};
  box-shadow: -5px 0 30px rgba(0, 0, 0, 0.5);
  overflow-y: auto;
  
  @media (max-width: 480px) {
    width: 90%;
    padding: 1.5rem;
  }

  @media (max-width: 350px) {
    width: 100%;
    padding: 1rem;
  }
`;

const ToggleButton = styled.button`
  position: fixed;
  top: 20px;
  right: 20px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--primary), var(--secondary));
  border: none;
  cursor: pointer;
  z-index: 1001;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  color: white;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;
  
  @media (max-width: 480px) {
    top: 10px;
    right: 10px;
    width: 35px;
    height: 35px;
    font-size: 16px;
  }
  
  &:hover {
    animation: ${css`${glow}`} 2s infinite;
    transform: scale(1.1);
  }
  
  &:active {
    transform: scale(0.95);
  }
`;

const Title = styled.h2`
  color: var(--text-primary);
  margin-bottom: 2rem;
  position: relative;
  font-size: 1.8rem;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 50px;
    height: 3px;
    background: linear-gradient(90deg, var(--primary), var(--secondary));
    border-radius: 3px;
  }
`;

const ThemeGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-top: 2rem;
  
  @media (max-width: 350px) {
    grid-template-columns: 1fr;
    gap: 0.8rem;
  }
`;

const ThemeCard = styled.div<{ theme: ThemeType; isActive: boolean; isLocked: boolean }>`
  padding: 1rem;
  border-radius: 12px;
  border: 2px solid ${(props: { isActive: boolean; isLocked: boolean }) => props.isActive
    ? 'var(--primary)'
    : props.isLocked
      ? 'rgba(255, 255, 255, 0.1)'
      : 'rgba(255, 255, 255, 0.2)'};
  background: ${(props: { isLocked: boolean }) => props.isLocked
    ? 'rgba(20, 20, 30, 0.6)'
    : 'rgba(30, 30, 40, 0.6)'};
  cursor: ${(props: { isLocked: boolean }) => props.isLocked ? 'not-allowed' : 'pointer'};
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  opacity: ${(props: { isLocked: boolean }) => props.isLocked ? 0.5 : 1};
  
  ${(props: { isLocked: boolean }) => !props.isLocked && `
    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
      background: rgba(40, 40, 50, 0.8);
    }
  `}
  
  ${(props: { isActive: boolean; isLocked: boolean }) => props.isActive && !props.isLocked && `
    box-shadow: 0 0 20px var(--primary);
    transform: scale(1.05);
  `}
  
  &::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: conic-gradient(
      transparent,
      rgba(255, 255, 255, 0.1),
      transparent
    );
    opacity: ${(props: { isActive: boolean }) => props.isActive ? 0.5 : 0};
    animation: ${css`${rotate}`} 4s linear infinite;
    pointer-events: none;
  }
  
  ${(props: { isLocked: boolean }) => props.isLocked && `
    &::after {
      content: '🔒';
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-size: 2rem;
      z-index: 1;
    }
  `}
`;

const ThemeName = styled.div`
  font-weight: 700;
  margin-bottom: 0.5rem;
  color: var(--text-primary);
  text-align: center;
`;

const ColorPreview = styled.div<{ colors: string[] }>`
  display: flex;
  justify-content: center;
  margin-top: 0.5rem;
`;

const ColorSwatch = styled.div<{ color: string }>`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: ${(props: { color: string }) => props.color};
  margin: 0 5px;
  border: 1px solid rgba(255, 255, 255, 0.3);
`;

const VolumeControl = styled.div`
  margin-top: 3rem;
`;

const VolumeSlider = styled.input`
  width: 100%;
  margin: 1rem 0;
  appearance: none;
  height: 6px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 3px;
  outline: none;
  
  &::-webkit-slider-thumb {
    appearance: none;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background: linear-gradient(135deg, var(--primary), var(--secondary));
    cursor: pointer;
    border: 2px solid rgba(255, 255, 255, 0.8);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  }
  
  &:focus {
    box-shadow: 0 0 0 2px var(--primary);
  }
`;

const MuteToggle = styled.button<{ isMuted: boolean }>`
  background: ${(props: { isMuted: boolean }) => props.isMuted
    ? 'rgba(255, 100, 100, 0.2)'
    : 'rgba(100, 255, 100, 0.2)'};
  border: 1px solid ${(props: { isMuted: boolean }) => props.isMuted
    ? 'rgba(255, 100, 100, 0.5)'
    : 'rgba(100, 255, 100, 0.5)'};
  border-radius: 20px;
  padding: 0.5rem 1rem;
  font-size: 0.9rem;
  cursor: pointer;
  color: var(--text-primary);
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.3s ease;
  
  &:hover {
    background: ${(props: { isMuted: boolean }) => props.isMuted
    ? 'rgba(255, 100, 100, 0.3)'
    : 'rgba(100, 255, 100, 0.3)'};
  }
  
  &:active {
    transform: scale(0.95);
  }
`;

const Section = styled.div`
  margin-bottom: 2rem;
  
  &:not(:last-child) {
    padding-bottom: 2rem;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  }
`;

const SectionTitle = styled.h3`
  color: var(--text-primary);
  margin-bottom: 1rem;
  font-size: 1.2rem;
`;

interface ThemeColorMap {
  [key: string]: string[];
  default: string[];
  dark: string[];
  neon: string[];
  retro: string[];
  fantasy: string[];
}

// Theme card component
const ThemeOption: React.FC<{
  theme: ThemeType;
  isActive: boolean;
  isLocked: boolean;
  onClick: () => void;
}> = ({ theme, isActive, isLocked, onClick }) => {
  // Define theme preview colors with correct theme names
  const themeColors: ThemeColorMap = {
    default: ['#00c8ff', '#92fe9d', '#6e48aa'],
    dark: ['#7928ca', '#ff0080', '#111111'],
    neon: ['#00ff00', '#ff00ff', '#ffff00'],
    retro: ['#ff7700', '#ffcc00', '#ff3300'],
    fantasy: ['#a786df', '#ffc0cb', '#ff9d00']
  };

  // Format theme name for display (camelCase to Title Case)
  const formatThemeName = (themeName: string) => {
    return themeName.charAt(0).toUpperCase() + themeName.slice(1);
  };

  return (
    <ThemeCard
      theme={theme}
      isActive={isActive}
      isLocked={isLocked}
      onClick={isLocked ? undefined : onClick}
    >
      <ThemeName>{formatThemeName(theme)}</ThemeName>
      <ColorPreview colors={themeColors[theme]}>
        {themeColors[theme].map((color, index) => (
          <ColorSwatch key={index} color={color} />
        ))}
      </ColorPreview>
    </ThemeCard>
  );
};

const ThemeSwitcher: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { currentTheme, changeTheme, unlockedThemes } = useTheme();
  const [volume, setVolume] = useState(0.5);
  const [isMuted, setIsMuted] = useState(false);

  // Updated theme options with correct theme names
  const themes: ThemeType[] = ['default', 'dark', 'neon', 'retro', 'fantasy'];

  const togglePanel = () => {
    setIsOpen(!isOpen);
    AudioService.play('click');
  };

  const handleThemeChange = (theme: ThemeType) => {
    if (unlockedThemes.includes(theme) && theme !== currentTheme) {
      changeTheme(theme);
      AudioService.play('themeChange');
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    AudioService.setVolume(newVolume);
  };

  const toggleMute = () => {
    const newMuteState = !isMuted;
    setIsMuted(newMuteState);
    AudioService.setMuted(newMuteState);
    AudioService.play('click');
  };

  return (
    <>
      <ToggleButton onClick={togglePanel}>🎨</ToggleButton>

      <Container isOpen={isOpen}>
        <Title>Customize</Title>

        <Section>
          <SectionTitle>Themes</SectionTitle>
          <ThemeGrid>
            {themes.map(theme => (
              <ThemeOption
                key={theme}
                theme={theme}
                isActive={currentTheme === theme}
                isLocked={!unlockedThemes.includes(theme)}
                onClick={() => handleThemeChange(theme)}
              />
            ))}
          </ThemeGrid>
        </Section>

        <Section>
          <SectionTitle>Sound</SectionTitle>
          <VolumeControl>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
              <span>Volume: {Math.round(volume * 100)}%</span>
              <span>{isMuted ? '🔇' : volume < 0.3 ? '🔈' : volume < 0.7 ? '🔉' : '🔊'}</span>
            </div>
            <VolumeSlider
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={volume}
              onChange={handleVolumeChange}
            />
            <MuteToggle isMuted={isMuted} onClick={toggleMute}>
              {isMuted ? '🔇 Unmute' : '🔊 Mute'}
            </MuteToggle>
          </VolumeControl>
        </Section>
      </Container>
    </>
  );
};

export default ThemeSwitcher; 