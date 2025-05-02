import React, { useState, useEffect, useRef } from 'react';
import styled, { keyframes, css } from 'styled-components';

// Mock data
const leaderboardData = [
  { id: 1, rank: 1, name: 'cyrus', steps: 0, avatar: '🦊' },
  { id: 2, rank: 2, name: 'internal_dev_00005', steps: 1, avatar: '🤖' },
  { id: 3, rank: 3, name: 'internal_dev_00005_2', steps: 2, avatar: '👾' },
  { id: 4, rank: 4, name: 'player_x89', steps: 5, avatar: '🧠' },
  { id: 5, rank: 5, name: 'neo_killer', steps: 8, avatar: '👻' },
];

// Animations
const shimmer = keyframes`
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
`;

const pulse = keyframes`
  0% { transform: scale(1); opacity: 0.8; }
  50% { transform: scale(1.05); opacity: 1; }
  100% { transform: scale(1); opacity: 0.8; }
`;

const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
`;

const rotateGlow = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const breathe = keyframes`
  0% { box-shadow: 0 0 20px rgba(0, 200, 255, 0.3); }
  50% { box-shadow: 0 0 40px rgba(0, 200, 255, 0.5); }
  100% { box-shadow: 0 0 20px rgba(0, 200, 255, 0.3); }
`;

const ripple = keyframes`
  0% { transform: scale(0); opacity: 1; }
  100% { transform: scale(10); opacity: 0; }
`;

const shine = keyframes`
  0% { background-position: -100% 0; }
  100% { background-position: 200% 0; }
`;

const particleBurst = keyframes`
  0% { transform: translate(0, 0); opacity: 1; }
  100% { transform: translate(var(--x), var(--y)); opacity: 0; }
`;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const flipCard = keyframes`
  0% { transform: rotateY(0deg); }
  100% { transform: rotateY(180deg); }
`;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const flipBack = keyframes`
  0% { transform: rotateY(180deg); }
  100% { transform: rotateY(0deg); }
`;

const Container = styled.div`
  padding: 2rem;
  color: white;
  display: flex;
  flex-direction: column;
  height: 100%;
  position: relative;
  overflow: hidden;
  isolation: isolate;
  
  &::before {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 60%;
    background: linear-gradient(to bottom, transparent, rgba(0, 200, 255, 0.05));
    pointer-events: none;
    z-index: -1;
  }
  
  &::after {
    content: '';
    position: absolute;
    right: -100px;
    top: -100px;
    width: 400px;
    height: 400px;
    background: radial-gradient(circle at center, rgba(146, 254, 157, 0.1), transparent 70%);
    filter: blur(30px);
    opacity: 0.7;
    animation: ${css`${pulse}`} 15s infinite ease-in-out;
    z-index: -2;
  }
`;

const ParticleContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: -2;
  pointer-events: none;
`;

const Particle = styled.div<{ size: number; delay: number; duration: number; color: string }>`
  position: absolute;
  background: ${props => props.color};
  border-radius: 50%;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  opacity: 0.6;
  pointer-events: none;
  filter: blur(${props => props.size / 4}px);
  animation: ${css`${float}`} ${props => props.duration}s infinite ease-in-out;
  animation-delay: ${props => props.delay}s;
`;

const GlowingCircle = styled.div`
  position: absolute;
  border-radius: 50%;
  background: radial-gradient(circle at center, rgba(0, 200, 255, 0.15), transparent);
  filter: blur(40px);
  opacity: 0.4;
  z-index: -1;
  animation: ${css`${rotateGlow}`} 20s linear infinite;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
  position: relative;
  z-index: 1;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 100%;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(0, 200, 255, 0.3), transparent);
  }
`;

const Title = styled.h2`
  font-size: 2.5rem;
  color: var(--text-primary);
  text-transform: uppercase;
  position: relative;
  letter-spacing: 3px;
  font-weight: 800;
  background: linear-gradient(90deg, #00c8ff, #92fe9d, #00c8ff);
  background-size: 200% auto;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: ${css`${shine}`} 10s linear infinite;
  
  &::after {
    content: '';
    display: block;
    width: 60px;
    height: 4px;
    background: linear-gradient(90deg, #00c8ff, #92fe9d);
    margin-top: 0.5rem;
    border-radius: 3px;
    position: relative;
    overflow: hidden;
    
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.8), transparent);
      animation: ${css`${shimmer}`} 3s infinite;
    }
  }
  
  &::before {
    content: 'TOP PLAYERS';
    position: absolute;
    top: -15px;
    left: 0;
    font-size: 0.8rem;
    letter-spacing: 5px;
    color: var(--accent-secondary);
    opacity: 0.5;
    font-weight: 600;
  }
`;

const LevelNavigator = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  position: relative;
`;

const LevelLabel = styled.span`
  color: var(--text-secondary);
  font-size: 0.9rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 1px;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -3px;
    left: 0;
    width: 100%;
    height: 1px;
    background: var(--accent-secondary);
    transform: scaleX(0.7);
    transform-origin: left;
    transition: transform 0.3s ease;
  }
  
  &:hover::after {
    transform: scaleX(1);
  }
`;

const LevelSwitcher = styled.div`
  display: flex;
  background-color: rgba(0, 200, 255, 0.1);
  border-radius: 30px;
  padding: 0.25rem;
  border: 1px solid rgba(0, 200, 255, 0.2);
  box-shadow: 0 0 30px rgba(0, 200, 255, 0.2), 0 0 0 1px rgba(0, 200, 255, 0.1);
  animation: ${css`${breathe}`} 5s infinite ease-in-out;
  position: relative;
  z-index: 1;
  backdrop-filter: blur(5px);
  transform-style: preserve-3d;
  perspective: 800px;
  
  &:hover {
    box-shadow: 0 0 30px rgba(0, 200, 255, 0.3), 0 0 0 1px rgba(0, 200, 255, 0.2);
  }
`;

const buttonHoverEffect = css`
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 5px;
    height: 5px;
    background: rgba(0, 200, 255, 0.5);
    border-radius: 50%;
    transform: translate(-50%, -50%);
    opacity: 0;
    z-index: -1;
  }
  
  &:hover::after {
    opacity: 1;
    animation: ${css`${ripple}`} 1s linear;
  }
`;

const LevelButton = styled.button`
  background: none;
  border: none;
  color: var(--text-secondary);
  padding: 0.5rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  z-index: 1;
  
  ${buttonHoverEffect}
  
  &:hover {
    color: var(--text-primary);
    background-color: rgba(255, 255, 255, 0.15);
    transform: scale(1.2);
  }
  
  &:active {
    transform: scale(0.95);
  }
  
  svg {
    width: 16px;
    height: 16px;
    filter: drop-shadow(0 0 2px rgba(0, 200, 255, 0.5));
    transition: all 0.3s ease;
  }
  
  &:hover svg {
    filter: drop-shadow(0 0 5px rgba(0, 200, 255, 0.8));
    transform: scale(1.1);
  }
`;

const LevelDisplay = styled.div`
  background-color: var(--background-lighter);
  color: var(--text-primary);
  font-weight: 800;
  padding: 0.5rem 1.5rem;
  border-radius: 30px;
  min-width: 80px;
  text-align: center;
  font-size: 1.2rem;
  position: relative;
  overflow: hidden;
  z-index: 1;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, rgba(0, 200, 255, 0.3), rgba(146, 254, 157, 0.2));
    opacity: 0.2;
    z-index: -1;
  }
  
  &::after {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: conic-gradient(
      transparent,
      rgba(0, 200, 255, 0.3),
      transparent,
      rgba(146, 254, 157, 0.3),
      transparent
    );
    animation: ${css`${rotateGlow}`} 10s linear infinite;
    z-index: -2;
  }
`;

const levelText = css`
  background: linear-gradient(90deg, #00c8ff, #92fe9d);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
`;

const LevelText = styled.span`
  ${levelText}
`;

const StatsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 2rem;
  background: linear-gradient(135deg, rgba(0, 200, 255, 0.08), rgba(146, 254, 157, 0.08));
  border-radius: 24px;
  padding: 2rem;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(0, 200, 255, 0.2);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(0, 200, 255, 0.1);
  position: relative;
  overflow: hidden;
  transform-style: preserve-3d;
  perspective: 1000px;
  transform: translateZ(0);
  z-index: 1;
  
  &:hover {
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.2), 0 0 0 1px rgba(0, 200, 255, 0.2);
    transform: translateY(-5px) translateZ(0);
  }
  
  &::before {
    content: '';
    position: absolute;
    top: -100%;
    left: -100%;
    width: 300%;
    height: 300%;
    background: conic-gradient(
      transparent,
      rgba(0, 200, 255, 0.1),
      transparent,
      rgba(146, 254, 157, 0.1),
      transparent
    );
    animation: ${css`${rotateGlow}`} 20s linear infinite;
    opacity: 0.5;
    z-index: -1;
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(0, 200, 255, 0.5), transparent);
  }
`;

const StatItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  z-index: 1;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px) scale(1.05);
  }
  
  &::before {
    content: '';
    position: absolute;
    top: -20px;
    left: calc(50% - 30px);
    width: 60px;
    height: 60px;
    background: radial-gradient(circle at center, rgba(0, 200, 255, 0.15), transparent 70%);
    border-radius: 50%;
    opacity: 0;
    transition: opacity 0.3s ease;
    z-index: -1;
  }
  
  &:hover::before {
    opacity: 1;
  }
`;

const StatValue = styled.div`
  font-size: 2.5rem;
  font-weight: 800;
  margin-bottom: 0.5rem;
  position: relative;
  ${levelText}
  
  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 50%;
    transform: translateX(-50%);
    width: 30px;
    height: 2px;
    background: linear-gradient(90deg, #00c8ff, #92fe9d);
    border-radius: 2px;
  }
`;

const StatLabel = styled.div`
  color: var(--text-secondary);
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: 600;
`;

const StatIconContainer = styled.div`
  position: absolute;
  top: -25px;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(0, 200, 255, 0.7);
  font-size: 1.5rem;
  animation: ${css`${float}`} 4s infinite ease-in-out;
  filter: drop-shadow(0 5px 15px rgba(0, 200, 255, 0.5));
`;

const LeaderboardList = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 1;
  perspective: 1000px;
  padding-bottom: 1rem;
`;

const CardContainer = styled.div`
  perspective: 1000px;
  width: 100%;
  position: relative;
  height: 110px;
  margin-bottom: 0.5rem;
`;

const CardInner = styled.div<{ isFlipped: boolean }>`
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform 0.8s;
  transform-style: preserve-3d;
  transform: ${props => props.isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)'};
`;

const CardFace = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  display: flex;
  align-items: center;
  top: 0;
  left: 0;
`;

const CardFront = styled(CardFace)`
  transform: rotateY(0deg);
`;

const CardBack = styled(CardFace)`
  transform: rotateY(180deg);
  background: rgba(20, 20, 30, 0.8);
  border-radius: 20px;
  padding: 1.5rem;
  flex-direction: column;
  align-items: flex-start;
  box-sizing: border-box;
`;

const PlayerDetailGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  width: 100%;
  margin-top: 1rem;
`;

const DetailItem = styled.div`
  display: flex;
  flex-direction: column;
  background: rgba(0, 200, 255, 0.1);
  padding: 0.75rem;
  border-radius: 12px;
  border: 1px solid rgba(0, 200, 255, 0.2);
`;

const DetailLabel = styled.div`
  font-size: 0.7rem;
  text-transform: uppercase;
  color: var(--text-secondary);
  margin-bottom: 0.3rem;
  letter-spacing: 1px;
`;

const DetailValue = styled.div`
  font-size: 1.2rem;
  font-weight: 700;
  color: #00c8ff;
`;

const PlayerCard = styled.div<{ isCurrentUser?: boolean; rank: number }>`
  display: flex;
  align-items: center;
  padding: 1.5rem;
  border-radius: 20px;
  background-color: rgba(30, 30, 40, 0.6);
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  cursor: pointer;
  position: relative;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  
  ${props => {
    if (props.rank === 1) return css`
      box-shadow: 0 0 25px rgba(255, 215, 0, 0.15);
      border-color: rgba(255, 215, 0, 0.3);
    `;
    if (props.rank === 2) return css`
      box-shadow: 0 0 20px rgba(192, 192, 192, 0.15);
      border-color: rgba(192, 192, 192, 0.3);
    `;
    if (props.rank === 3) return css`
      box-shadow: 0 0 20px rgba(205, 127, 50, 0.15);
      border-color: rgba(205, 127, 50, 0.3);
    `;
    return '';
  }}
  
  ${props => props.isCurrentUser && css`
    background-color: rgba(0, 200, 255, 0.1);
    border-color: rgba(0, 200, 255, 0.3);
    
    &::after {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      width: 5px;
      background: linear-gradient(to bottom, #00c8ff, #92fe9d);
      border-radius: 0 20px 20px 0;
      animation: ${css`${pulse}`} 2s infinite ease-in-out;
    }
  `}
  
  &:hover {
    transform: translateY(-5px) translateX(10px) rotateX(2deg) rotateY(-2deg) scale(1.02);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);
    background-color: ${props => props.isCurrentUser ? 'rgba(0, 200, 255, 0.15)' : 'rgba(40, 40, 50, 0.8)'};
    border-color: ${props => props.isCurrentUser ? 'rgba(0, 200, 255, 0.4)' : 'rgba(255, 255, 255, 0.15)'};
    z-index: 10;
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, 
      ${props => {
    if (props.rank === 1) return 'rgba(255, 215, 0, 0.1), rgba(255, 215, 0, 0)';
    if (props.rank === 2) return 'rgba(192, 192, 192, 0.1), rgba(192, 192, 192, 0)';
    if (props.rank === 3) return 'rgba(205, 127, 50, 0.1), rgba(205, 127, 50, 0)';
    return 'transparent, transparent';
  }}
    );
    pointer-events: none;
  }
  
  &:nth-child(odd), &:nth-child(even) {
    transform: none;
  }
  
  &:nth-child(odd):hover, &:nth-child(even):hover {
    transform: translateY(-5px) rotateX(2deg) rotateY(-2deg) scale(1.02);
  }
`;

const RankBadge = styled.div<{ rank: number }>`
  width: 50px;
  height: 50px;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 800;
  font-size: 1.4rem;
  margin-right: 1.2rem;
  flex-shrink: 0;
  position: relative;
  overflow: hidden;
  transform-style: preserve-3d;
  
  ${props => {
    if (props.rank === 1) return css`
      background: linear-gradient(135deg, rgba(255, 215, 0, 0.2), rgba(255, 215, 0, 0.1));
      color: var(--gold);
      border: 2px solid var(--gold);
      box-shadow: 0 0 20px rgba(255, 215, 0, 0.3);
      text-shadow: 0 0 10px rgba(255, 215, 0, 0.5);
      
      &::before {
        content: '👑';
        position: absolute;
        top: -20px;
        left: 50%;
        transform: translateX(-50%);
        font-size: 1.2rem;
        animation: ${css`${float}`} 3s infinite ease-in-out;
      }
    `;
    if (props.rank === 2) return css`
      background: linear-gradient(135deg, rgba(192, 192, 192, 0.2), rgba(192, 192, 192, 0.1));
      color: var(--silver);
      border: 2px solid var(--silver);
      box-shadow: 0 0 15px rgba(192, 192, 192, 0.3);
      text-shadow: 0 0 10px rgba(192, 192, 192, 0.5);
      
      &::before {
        content: '🥈';
        position: absolute;
        top: -20px;
        left: 50%;
        transform: translateX(-50%);
        font-size: 1.2rem;
        animation: ${css`${float}`} 3s infinite ease-in-out;
        animation-delay: 0.2s;
      }
    `;
    if (props.rank === 3) return css`
      background: linear-gradient(135deg, rgba(205, 127, 50, 0.2), rgba(205, 127, 50, 0.1));
      color: var(--bronze);
      border: 2px solid var(--bronze);
      box-shadow: 0 0 15px rgba(205, 127, 50, 0.3);
      text-shadow: 0 0 10px rgba(205, 127, 50, 0.5);
      
      &::before {
        content: '🥉';
        position: absolute;
        top: -20px;
        left: 50%;
        transform: translateX(-50%);
        font-size: 1.2rem;
        animation: ${css`${float}`} 3s infinite ease-in-out;
        animation-delay: 0.4s;
      }
    `;
    return css`
      background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05));
      color: var(--text-secondary);
      border: 1px solid rgba(255, 255, 255, 0.1);
    `;
  }}
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.2), transparent);
    z-index: 1;
    pointer-events: none;
  }
  
  ${PlayerCard}:hover & {
    transform: scale(1.1) translateZ(20px);
    box-shadow: ${props => {
    if (props.rank === 1) return '0 0 30px rgba(255, 215, 0, 0.4)';
    if (props.rank === 2) return '0 0 25px rgba(192, 192, 192, 0.4)';
    if (props.rank === 3) return '0 0 25px rgba(205, 127, 50, 0.4)';
    return '0 0 15px rgba(255, 255, 255, 0.2)';
  }};
  }
`;

const AvatarContainer = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 18px;
  background: linear-gradient(135deg, rgba(0, 200, 255, 0.2), rgba(146, 254, 157, 0.2));
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  margin-right: 1.2rem;
  flex-shrink: 0;
  border: 2px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
  transition: all 0.4s ease;
  position: relative;
  overflow: hidden;
  transform-style: preserve-3d;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.2), transparent);
    z-index: 1;
    pointer-events: none;
  }
  
  &::after {
    content: '';
    position: absolute;
    width: 150%;
    height: 150%;
    top: -25%;
    left: -25%;
    background: conic-gradient(
      transparent,
      rgba(0, 200, 255, 0.2),
      transparent,
      rgba(146, 254, 157, 0.2),
      transparent
    );
    animation: ${css`${rotateGlow}`} 10s linear infinite;
    opacity: 0;
    transition: opacity 0.5s ease;
  }
  
  ${PlayerCard}:hover & {
    transform: scale(1.2) rotate(5deg) translateZ(30px);
    border-color: rgba(0, 200, 255, 0.4);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3), 0 0 15px rgba(0, 200, 255, 0.3);
    
    &::after {
      opacity: 1;
    }
  }
`;

const PlayerInfo = styled.div`
  flex-grow: 1;
  overflow: hidden;
  transform-style: preserve-3d;
`;

const PlayerName = styled.div`
  font-weight: 700;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  position: relative;
  transition: all 0.3s ease;
  
  ${PlayerCard}:hover & {
    transform: translateZ(15px);
    color: #fff;
    text-shadow: 0 0 5px rgba(255, 255, 255, 0.5);
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: -3px;
    left: 0;
    width: 30px;
    height: 2px;
    background: linear-gradient(90deg, #00c8ff, #92fe9d);
    border-radius: 2px;
    transform: scaleX(0.7);
    transform-origin: left;
    transition: transform 0.3s ease;
  }
  
  ${PlayerCard}:hover &::after {
    transform: scaleX(1);
  }
`;

const PlayerSteps = styled.div`
  color: var(--text-secondary);
  font-size: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.3s ease;
  
  ${PlayerCard}:hover & {
    transform: translateZ(10px);
  }
`;

const StepsHighlight = styled.span`
  color: #00c8ff;
  font-weight: 700;
  background: rgba(0, 200, 255, 0.1);
  padding: 0.25rem 0.75rem;
  border-radius: 12px;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, 
      transparent,
      rgba(255, 255, 255, 0.2),
      transparent
    );
    animation: ${css`${shimmer}`} 2s infinite;
    z-index: 1;
  }
  
  ${PlayerCard}:hover & {
    background: linear-gradient(90deg, rgba(0, 200, 255, 0.2), rgba(146, 254, 157, 0.2));
    color: #fff;
    box-shadow: 0 0 15px rgba(0, 200, 255, 0.3);
    transform: scale(1.1);
  }
`;

const FilterBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  gap: 1rem;
  position: relative;
  z-index: 1;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 100%;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(0, 200, 255, 0.2), transparent);
  }
`;

const SearchContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 350px;
`;

const SearchIcon = styled.div`
  position: absolute;
  left: 15px;
  top: 50%;
  transform: translateY(-50%);
  color: var(--text-secondary);
  font-size: 1rem;
  transition: all 0.3s ease;
  pointer-events: none;
`;

const SearchInput = styled.input`
  background-color: rgba(30, 30, 40, 0.6);
  border: 1px solid rgba(0, 200, 255, 0.2);
  border-radius: 30px;
  padding: 1rem 1.25rem 1rem 2.5rem;
  color: var(--text-primary);
  font-size: 1rem;
  outline: none;
  width: 100%;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  
  &:focus {
    border-color: rgba(0, 200, 255, 0.4);
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.3), 0 0 0 3px rgba(0, 200, 255, 0.1);
    
    & + ${SearchIcon} {
      color: #00c8ff;
    }
  }
  
  &::placeholder {
    color: var(--text-secondary);
    opacity: 0.7;
  }
`;

const FilterButton = styled.button`
  background-color: rgba(30, 30, 40, 0.6);
  border: 1px solid rgba(0, 200, 255, 0.2);
  border-radius: 30px;
  padding: 1rem 1.5rem;
  color: var(--text-secondary);
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  position: relative;
  overflow: hidden;
  
  ${buttonHoverEffect}
  
  &:hover {
    background-color: rgba(0, 200, 255, 0.1);
    color: #00c8ff;
    border-color: rgba(0, 200, 255, 0.3);
    transform: translateY(-3px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
  }
  
  &:active {
    transform: translateY(-1px);
  }
  
  svg {
    width: 18px;
    height: 18px;
    transition: all 0.3s ease;
  }
  
  &:hover svg {
    transform: rotate(90deg);
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, rgba(0, 200, 255, 0.1), transparent);
    pointer-events: none;
  }
`;

const BurstParticle = styled.div<{ size: number; color: string; delay: number; x: number; y: number }>`
  position: absolute;
  border-radius: 50%;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  background: ${props => props.color};
  opacity: 0;
  pointer-events: none;
  --x: ${props => props.x}px;
  --y: ${props => props.y}px;
`;

const useAudio = (url: string) => {
  const [audio] = useState(new Audio(url));

  const play = () => {
    audio.currentTime = 0;
    audio.play().catch(e => console.error("Audio play failed:", e));
  };

  return { play };
};

// Updated interface to accept null values in the ref
interface BurstParticleRef {
  ref: React.RefObject<HTMLDivElement | null>;
  isActive: boolean;
}

interface BurstParticlesMap {
  [key: number]: BurstParticleRef[];
}

const LeaderboardV2: React.FC = () => {
  const [currentLevel, setCurrentLevel] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [particles, setParticles] = useState<Array<{ id: number, x: number, y: number, size: number, color: string, delay: number, duration: number }>>([]);
  const [glowingCircles, setGlowingCircles] = useState<Array<{ x: number, y: number, size: number, delay: number }>>([]);
  const [flippedCard, setFlippedCard] = useState<number | null>(null);
  const burstParticlesRef = useRef<BurstParticlesMap>({});
  const currentUser = 1; // User ID

  // Sound effects
  const hoverSound = useAudio('/sounds/hover.mp3');
  const clickSound = useAudio('/sounds/click.mp3');
  const achievementSound = useAudio('/sounds/achievement.mp3');

  useEffect(() => {
    // Create random floating particles
    const particlesArray = [];
    for (let i = 0; i < 15; i++) {
      particlesArray.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: 2 + Math.random() * 6,
        color: i % 2 === 0 ? 'rgba(0, 200, 255, 0.5)' : 'rgba(146, 254, 157, 0.5)',
        delay: Math.random() * 5,
        duration: 5 + Math.random() * 10
      });
    }
    setParticles(particlesArray);

    // Create random glowing circles
    const circles = [];
    for (let i = 0; i < 3; i++) {
      circles.push({
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: 150 + Math.random() * 300,
        delay: i * 5
      });
    }
    setGlowingCircles(circles);

    // Initialize burst particles for each player card
    leaderboardData.forEach(player => {
      burstParticlesRef.current[player.id] = Array(15).fill(0).map(() => ({
        ref: React.createRef<HTMLDivElement>(),
        isActive: false
      }));
    });
  }, []);

  const handlePrevLevel = () => {
    if (currentLevel > 1) {
      setCurrentLevel(currentLevel - 1);
      clickSound.play();
    }
  };

  const handleNextLevel = () => {
    setCurrentLevel(currentLevel + 1);
    clickSound.play();
  };

  const triggerBurstEffect = (playerId: number) => {
    const particles = burstParticlesRef.current[playerId];
    if (!particles) return;

    // Play sound
    achievementSound.play();

    particles.forEach((particle, index) => {
      if (particle.ref.current) {
        // Reset particle
        particle.ref.current.style.top = '50%';
        particle.ref.current.style.left = '50%';
        particle.ref.current.style.opacity = '0';

        // Create animation with random direction
        setTimeout(() => {
          if (particle.ref.current) {
            particle.ref.current.style.opacity = '1';
            particle.ref.current.style.animation = `${css`${particleBurst}`} 0.8s forwards`;
          }
        }, index * 50);
      }
    });
  };

  const handleCardClick = (playerId: number) => {
    clickSound.play();

    // Toggle the flipped state for this card
    setFlippedCard(flippedCard === playerId ? null : playerId);

    // Trigger particle burst for top 3 players
    const player = leaderboardData.find(p => p.id === playerId);
    if (player && player.rank <= 3) {
      triggerBurstEffect(playerId);
    }
  };

  const filteredData = leaderboardData.filter(player =>
    player.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Container>
      {/* Background particles */}
      <ParticleContainer>
        {particles.map(particle => (
          <Particle
            key={particle.id}
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`
            }}
            size={particle.size}
            delay={particle.delay}
            duration={particle.duration}
            color={particle.color}
          />
        ))}
      </ParticleContainer>

      {/* Background glowing circles */}
      {glowingCircles.map((circle, index) => (
        <GlowingCircle
          key={index}
          style={{
            left: `${circle.x}%`,
            top: `${circle.y}%`,
            width: `${circle.size}px`,
            height: `${circle.size}px`,
            animationDelay: `${circle.delay}s`
          }}
        />
      ))}

      <Header>
        <Title>Leaderboard</Title>
        <LevelNavigator>
          <LevelLabel>Level</LevelLabel>
          <LevelSwitcher>
            <LevelButton onClick={handlePrevLevel} onMouseEnter={() => hoverSound.play()}>
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
              </svg>
            </LevelButton>
            <LevelDisplay><LevelText>{currentLevel}</LevelText></LevelDisplay>
            <LevelButton onClick={handleNextLevel} onMouseEnter={() => hoverSound.play()}>
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
              </svg>
            </LevelButton>
          </LevelSwitcher>
        </LevelNavigator>
      </Header>

      <StatsContainer>
        <StatItem>
          <StatIconContainer>🏆</StatIconContainer>
          <StatValue>1/3</StatValue>
          <StatLabel>Global Rank</StatLabel>
        </StatItem>
        <StatItem>
          <StatIconContainer>👣</StatIconContainer>
          <StatValue>0</StatValue>
          <StatLabel>Steps Taken</StatLabel>
        </StatItem>
        <StatItem>
          <StatIconContainer>⭐</StatIconContainer>
          <StatValue>33.3%</StatValue>
          <StatLabel>Top Players</StatLabel>
        </StatItem>
      </StatsContainer>

      <FilterBar>
        <SearchContainer>
          <SearchInput
            type="text"
            placeholder="Search player..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onFocus={() => hoverSound.play()}
          />
          <SearchIcon>🔍</SearchIcon>
        </SearchContainer>
        <FilterButton onMouseEnter={() => hoverSound.play()}>
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z" />
          </svg>
          Sort
        </FilterButton>
      </FilterBar>

      <LeaderboardList>
        {filteredData.map(player => (
          <CardContainer key={player.id}>
            <CardInner
              isFlipped={flippedCard === player.id}
              onClick={() => handleCardClick(player.id)}
              onMouseEnter={() => hoverSound.play()}
            >
              <CardFront>
                <PlayerCard
                  isCurrentUser={player.id === currentUser}
                  rank={player.rank}
                >
                  <RankBadge rank={player.rank}>{player.rank}</RankBadge>
                  <AvatarContainer>{player.avatar}</AvatarContainer>
                  <PlayerInfo>
                    <PlayerName>{player.name}</PlayerName>
                    <PlayerSteps>
                      <StepsHighlight>{player.steps}</StepsHighlight> steps
                    </PlayerSteps>
                  </PlayerInfo>

                  {/* Burst particles for achievements */}
                  {burstParticlesRef.current[player.id]?.map((particle, index) => (
                    <BurstParticle
                      key={index}
                      ref={particle.ref}
                      size={4 + Math.random() * 8}
                      color={
                        player.rank === 1 ? 'rgba(255, 215, 0, 0.8)' :
                          player.rank === 2 ? 'rgba(192, 192, 192, 0.8)' :
                            player.rank === 3 ? 'rgba(205, 127, 50, 0.8)' :
                              'rgba(0, 200, 255, 0.8)'
                      }
                      delay={index * 0.1}
                      x={(Math.random() - 0.5) * 200}
                      y={(Math.random() - 0.5) * 200}
                    />
                  ))}
                </PlayerCard>
              </CardFront>

              <CardBack>
                <AvatarContainer style={{ width: '80px', height: '80px', fontSize: '3rem', marginBottom: '1rem' }}>
                  {player.avatar}
                </AvatarContainer>
                <PlayerName style={{ fontSize: '1.5rem', margin: '0.5rem 0 1.5rem' }}>{player.name}</PlayerName>

                <PlayerDetailGrid>
                  <DetailItem>
                    <DetailLabel>Rank</DetailLabel>
                    <DetailValue>{player.rank}</DetailValue>
                  </DetailItem>
                  <DetailItem>
                    <DetailLabel>Steps</DetailLabel>
                    <DetailValue>{player.steps}</DetailValue>
                  </DetailItem>
                  <DetailItem>
                    <DetailLabel>Win Rate</DetailLabel>
                    <DetailValue>{Math.floor(80 - player.rank * 10)}%</DetailValue>
                  </DetailItem>
                  <DetailItem>
                    <DetailLabel>Games</DetailLabel>
                    <DetailValue>{20 + player.id * 2}</DetailValue>
                  </DetailItem>
                </PlayerDetailGrid>
              </CardBack>
            </CardInner>
          </CardContainer>
        ))}
      </LeaderboardList>
    </Container>
  );
};

export default LeaderboardV2; 