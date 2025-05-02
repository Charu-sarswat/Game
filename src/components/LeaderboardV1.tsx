import React, { useState, useEffect } from 'react';
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

const glowEffect = keyframes`
  0% { box-shadow: 0 0 10px rgba(110, 72, 170, 0.3); }
  50% { box-shadow: 0 0 20px rgba(110, 72, 170, 0.5); }
  100% { box-shadow: 0 0 10px rgba(110, 72, 170, 0.3); }
`;

const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
`;

const rotateGradient = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const Container = styled.div`
  padding: 2rem;
  color: white;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 300px;
    height: 300px;
    background: radial-gradient(circle at center, rgba(110, 72, 170, 0.2), transparent 70%);
    z-index: 0;
    pointer-events: none;
    animation: ${css`${pulse}`} 8s infinite ease-in-out;
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: -100px;
    left: -100px;
    width: 400px;
    height: 400px;
    background: radial-gradient(circle at center, rgba(0, 200, 255, 0.15), transparent 70%);
    z-index: 0;
    pointer-events: none;
    animation: ${css`${pulse}`} 12s infinite ease-in-out;
  }
`;

const GlowingCircle = styled.div`
  position: absolute;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background: radial-gradient(circle at center, rgba(255, 255, 255, 0.1), transparent 70%);
  filter: blur(20px);
  opacity: 0.5;
  pointer-events: none;
  z-index: 0;
`;

const Title = styled.h2`
  text-align: center;
  font-size: 3rem;
  margin-bottom: 1.5rem;
  color: var(--text-primary);
  text-transform: uppercase;
  letter-spacing: 3px;
  position: relative;
  z-index: 2;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -0.5rem;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 4px;
    background: linear-gradient(90deg, #6e48aa, #9d50bb, #6e48aa);
    background-size: 200% 200%;
    animation: ${css`${rotateGradient}`} 3s infinite linear;
    border-radius: 3px;
  }
`;

const LevelSelector = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: rgba(110, 72, 170, 0.15);
  border-radius: 16px;
  margin-bottom: 2rem;
  overflow: hidden;
  border: 1px solid rgba(110, 72, 170, 0.3);
  backdrop-filter: blur(10px);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;
  position: relative;
  z-index: 2;
  
  &:hover {
    box-shadow: 0 8px 32px rgba(110, 72, 170, 0.3);
    transform: translateY(-2px);
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.5), transparent);
  }
`;

const LevelButton = styled.button`
  background: none;
  border: none;
  color: var(--text-primary);
  padding: 1rem 1.5rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  z-index: 1;
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.15);
  }
  
  &:active {
    transform: scale(0.95);
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at center, rgba(110, 72, 170, 0.3), transparent 70%);
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  &:hover::before {
    opacity: 1;
  }
  
  svg {
    width: 24px;
    height: 24px;
    transition: transform 0.3s ease;
  }
  
  &:hover svg {
    transform: scale(1.2);
  }
`;

const LevelDisplay = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  padding: 1rem 0;
  flex-grow: 1;
  text-align: center;
  background: linear-gradient(90deg, #6e48aa, #9d50bb);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  position: relative;
  text-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, 
      rgba(110, 72, 170, 0.2), 
      rgba(157, 80, 187, 0.2)
    );
    z-index: -1;
  }
`;

const Table = styled.div`
  width: 100%;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.05);
  background-color: rgba(30, 30, 40, 0.6);
  position: relative;
  z-index: 2;
  transform-style: preserve-3d;
  perspective: 1000px;
  backdrop-filter: blur(10px);
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, rgba(110, 72, 170, 0.1), transparent);
    pointer-events: none;
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
  }
`;

const TableHeader = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  background: rgba(20, 20, 30, 0.8);
  padding: 1.5rem 2rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 2px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  position: relative;
  z-index: 1;
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(110, 72, 170, 0.5), transparent);
  }
`;

const TableBody = styled.div`
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom, rgba(110, 72, 170, 0.05), transparent);
    pointer-events: none;
  }
`;

const TableRow = styled.div<{ isCurrentUser?: boolean }>`
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  padding: 1.5rem 2rem;
  transition: all 0.3s ease;
  position: relative;
  backdrop-filter: blur(5px);
  
  ${props => props.isCurrentUser && css`
    background-color: rgba(110, 72, 170, 0.15);
    
    &::before {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      height: 100%;
      width: 5px;
      background: linear-gradient(to bottom, #6e48aa, #9d50bb);
      animation: ${css`${pulse}`} 2s infinite ease-in-out;
    }
    
    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(90deg, rgba(110, 72, 170, 0.1), transparent);
      pointer-events: none;
    }
  `}
  
  &:nth-child(odd) {
    background-color: ${props => props.isCurrentUser ? 'rgba(110, 72, 170, 0.15)' : 'rgba(20, 20, 30, 0.4)'};
  }
  
  &:hover {
    background-color: rgba(110, 72, 170, 0.2);
    transform: translateX(8px) scale(1.02);
    box-shadow: -5px 5px 20px rgba(0, 0, 0, 0.3);
    z-index: 10;
  }
  
  &:last-child {
    border-bottom-left-radius: 16px;
    border-bottom-right-radius: 16px;
  }
`;

const RankCell = styled.div<{ rank: number }>`
  display: flex;
  align-items: center;
  font-weight: 800;
  font-size: 1.5rem;
  position: relative;
  
  ${props => {
    if (props.rank === 1) return css`
      color: var(--gold);
      text-shadow: 0 0 10px rgba(255, 215, 0, 0.5);
      
      &::before {
        content: '👑';
        position: absolute;
        top: -15px;
        left: 0;
        font-size: 1.2rem;
        animation: ${css`${float}`} 3s infinite ease-in-out;
      }
    `;
    if (props.rank === 2) return css`
      color: var(--silver);
      text-shadow: 0 0 10px rgba(192, 192, 192, 0.5);
      
      &::before {
        content: '🥈';
        position: absolute;
        top: -12px;
        left: 0;
        font-size: 1.2rem;
        animation: ${css`${float}`} 3s infinite ease-in-out;
        animation-delay: 0.2s;
      }
    `;
    if (props.rank === 3) return css`
      color: var(--bronze);
      text-shadow: 0 0 10px rgba(205, 127, 50, 0.5);
      
      &::before {
        content: '🥉';
        position: absolute;
        top: -12px;
        left: 0;
        font-size: 1.2rem;
        animation: ${css`${float}`} 3s infinite ease-in-out;
        animation-delay: 0.4s;
      }
    `;
    return '';
  }}
`;

const MedalIcon = styled.div<{ rank: number }>`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-right: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  
  ${props => {
    if (props.rank === 1) return css`
      background: linear-gradient(135deg, #ffd700, #ffb700);
      box-shadow: 0 0 15px rgba(255, 215, 0, 0.5);
      animation: ${css`${glowEffect}`} 2s infinite ease-in-out;
    `;
    if (props.rank === 2) return css`
      background: linear-gradient(135deg, #c0c0c0, #e0e0e0);
      box-shadow: 0 0 10px rgba(192, 192, 192, 0.5);
      animation: ${css`${glowEffect}`} 2s infinite ease-in-out;
      animation-delay: 0.3s;
    `;
    if (props.rank === 3) return css`
      background: linear-gradient(135deg, #cd7f32, #e0a872);
      box-shadow: 0 0 10px rgba(205, 127, 50, 0.5);
      animation: ${css`${glowEffect}`} 2s infinite ease-in-out;
      animation-delay: 0.6s;
    `;
    return css`
      background: rgba(255, 255, 255, 0.1);
      border: 1px solid rgba(255, 255, 255, 0.2);
    `;
  }}
`;

const NameCell = styled.div`
  display: flex;
  align-items: center;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-weight: 600;
  font-size: 1.1rem;
  gap: 1rem;
`;

const UserAvatar = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 12px;
  background: linear-gradient(135deg, rgba(110, 72, 170, 0.2), rgba(157, 80, 187, 0.2));
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  border: 2px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
  
  ${TableRow}:hover & {
    transform: scale(1.2) rotate(5deg);
    box-shadow: 0 6px 15px rgba(110, 72, 170, 0.3);
    border-color: rgba(110, 72, 170, 0.5);
  }
`;

const StepsCell = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  font-weight: 700;
  
  span {
    display: inline-block;
    padding: 0.5rem 1rem;
    border-radius: 30px;
    background: linear-gradient(135deg, rgba(110, 72, 170, 0.2), rgba(157, 80, 187, 0.2));
    color: var(--primary);
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
    
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(90deg, 
        transparent,
        rgba(255, 255, 255, 0.1),
        transparent
      );
      animation: ${css`${shimmer}`} 2s infinite;
    }
    
    &:hover {
      background: linear-gradient(135deg, rgba(110, 72, 170, 0.4), rgba(157, 80, 187, 0.4));
      transform: translateY(-5px);
      box-shadow: 0 10px 20px rgba(110, 72, 170, 0.3);
    }
  }
`;

const StatsCardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  margin-top: 2.5rem;
  position: relative;
  z-index: 2;
`;

const StatsCard = styled.div`
  background: rgba(30, 30, 40, 0.6);
  border-radius: 16px;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: all 0.4s ease;
  border: 1px solid rgba(110, 72, 170, 0.2);
  position: relative;
  overflow: hidden;
  backdrop-filter: blur(10px);
  
  &:hover {
    transform: translateY(-10px);
    background: rgba(110, 72, 170, 0.15);
    border-color: rgba(110, 72, 170, 0.3);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(110, 72, 170, 0.1);
  }
  
  &::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle at center, rgba(110, 72, 170, 0.2), transparent 70%);
    opacity: 0;
    transition: opacity 0.5s ease;
    pointer-events: none;
  }
  
  &:hover::before {
    opacity: 1;
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 4px;
    background: linear-gradient(90deg, transparent, var(--primary), transparent);
  }
  
  &:nth-child(1)::after {
    background: linear-gradient(90deg, transparent, var(--primary), transparent);
  }
  
  &:nth-child(2)::after {
    background: linear-gradient(90deg, transparent, var(--accent-secondary), transparent);
  }
  
  &:nth-child(3)::after {
    background: linear-gradient(90deg, transparent, var(--accent), transparent);
  }
`;

const StatsIcon = styled.div`
  font-size: 2rem;
  margin-bottom: 1rem;
  background: var(--gradient-primary);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const StatsLabel = styled.div`
  font-size: 0.9rem;
  color: var(--text-secondary);
  margin-bottom: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  text-align: center;
`;

const StatsValue = styled.div`
  font-size: 2.5rem;
  font-weight: 800;
  background: linear-gradient(90deg, #6e48aa, #9d50bb);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 2px 10px rgba(110, 72, 170, 0.3);
  position: relative;
  z-index: 1;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 50%;
    transform: translateX(-50%);
    width: 30px;
    height: 2px;
    background: var(--gradient-primary);
    border-radius: 2px;
  }
`;

const ProgressBar = styled.div`
  width: 100%;
  height: 8px;
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 4px;
  margin-top: 1rem;
  overflow: hidden;
  position: relative;
  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.3);
  
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
    z-index: 2;
  }
`;

const ProgressFill = styled.div<{ width: string }>`
  height: 100%;
  width: ${props => props.width};
  background: linear-gradient(90deg, #6e48aa, #9d50bb);
  border-radius: 4px;
  position: relative;
  overflow: hidden;
  box-shadow: 0 0 10px rgba(110, 72, 170, 0.5);
  transition: width 1s ease-in-out;
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 30px;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
    animation: ${css`${shimmer}`} 1.5s infinite;
    animation-delay: 0.5s;
  }
`;

const LeaderboardV1: React.FC = () => {
  const [currentLevel, setCurrentLevel] = useState(1);
  const [glowingCircles, setGlowingCircles] = useState<Array<{ x: number, y: number, size: number }>>([]);
  const currentUser = 1; // User ID

  useEffect(() => {
    // Create random glowing circles for background effect
    const circles = [];
    for (let i = 0; i < 5; i++) {
      circles.push({
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: 100 + Math.random() * 200
      });
    }
    setGlowingCircles(circles);
  }, []);

  const handlePrevLevel = () => {
    if (currentLevel > 1) {
      setCurrentLevel(currentLevel - 1);
    }
  };

  const handleNextLevel = () => {
    setCurrentLevel(currentLevel + 1);
  };

  return (
    <Container>
      {/* Background glowing circles */}
      {glowingCircles.map((circle, index) => (
        <GlowingCircle
          key={index}
          style={{
            left: `${circle.x}%`,
            top: `${circle.y}%`,
            width: `${circle.size}px`,
            height: `${circle.size}px`,
            animationDelay: `${index * 0.5}s`
          }}
        />
      ))}

      <Title>Leaderboard</Title>

      <LevelSelector>
        <LevelButton onClick={handlePrevLevel}>
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
          </svg>
        </LevelButton>
        <LevelDisplay>Level {currentLevel}</LevelDisplay>
        <LevelButton onClick={handleNextLevel}>
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
          </svg>
        </LevelButton>
      </LevelSelector>

      <Table>
        <TableHeader>
          <div>Rank</div>
          <div>Player</div>
          <div style={{ textAlign: 'right' }}>Steps</div>
        </TableHeader>
        <TableBody>
          {leaderboardData.map(player => (
            <TableRow
              key={player.id}
              isCurrentUser={player.id === currentUser}
            >
              <RankCell rank={player.rank}>
                <MedalIcon rank={player.rank}>
                  {player.rank}
                </MedalIcon>
              </RankCell>
              <NameCell>
                <UserAvatar>{player.avatar}</UserAvatar>
                {player.name}
              </NameCell>
              <StepsCell>
                <span>{player.steps}</span>
              </StepsCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <StatsCardContainer>
        <StatsCard>
          <StatsIcon>🏆</StatsIcon>
          <StatsLabel>Global Rank</StatsLabel>
          <StatsValue>1 / 3</StatsValue>
        </StatsCard>
        <StatsCard>
          <StatsIcon>👣</StatsIcon>
          <StatsLabel>Steps Taken</StatsLabel>
          <StatsValue>0</StatsValue>
        </StatsCard>
        <StatsCard>
          <StatsIcon>⭐</StatsIcon>
          <StatsLabel>Top</StatsLabel>
          <StatsValue>33.34%</StatsValue>
          <ProgressBar>
            <ProgressFill width="33.34%" />
          </ProgressBar>
        </StatsCard>
      </StatsCardContainer>
    </Container>
  );
};

export default LeaderboardV1; 