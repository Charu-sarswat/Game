import React, { useState } from 'react';
import styled, { keyframes, css } from 'styled-components';

// Mock data - enhanced with more stats
const leaderboardData = [
  { id: 1, rank: 1, name: 'CYRUS', steps: 0, avatar: '🦊', level: 42, wins: 58, achievements: 12 },
  { id: 2, rank: 2, name: 'DEV-00005', steps: 1, avatar: '🤖', level: 38, wins: 51, achievements: 10 },
  { id: 3, rank: 3, name: 'GHOST-X', steps: 2, avatar: '👾', level: 35, wins: 47, achievements: 9 },
  { id: 4, rank: 4, name: 'NEURAL-89', steps: 5, avatar: '🧠', level: 29, wins: 30, achievements: 7 },
  { id: 5, rank: 5, name: 'VOID-KILLER', steps: 8, avatar: '👻', level: 26, wins: 25, achievements: 5 },
];

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

const flickerAnimation = keyframes`
  0% { opacity: 1; }
  5% { opacity: 0.8; }
  10% { opacity: 1; }
  15% { opacity: 0.3; }
  20% { opacity: 1; }
  80% { opacity: 1; }
  85% { opacity: 0.2; }
  90% { opacity: 1; }
  100% { opacity: 1; }
`;

const pulseAnimation = keyframes`
  0% { opacity: 0.8; }
  50% { opacity: 1; }
  100% { opacity: 0.8; }
`;

const dataStream = keyframes`
  0% { height: 10%; opacity: 0.5; }
  50% { height: 80%; opacity: 1; }
  100% { height: 10%; opacity: 0.5; }
`;

const borderFlash = keyframes`
  0% { border-color: var(--primary); box-shadow: 0 0 5px var(--primary); }
  50% { border-color: var(--secondary); box-shadow: 0 0 15px var(--secondary); }
  100% { border-color: var(--primary); box-shadow: 0 0 5px var(--primary); }
`;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const rotateY = keyframes`
  0% { transform: rotateY(0deg); }
  100% { transform: rotateY(360deg); }
`;

// Container
const LeaderboardContainer = styled.div`
  padding: 1.5rem;
  position: relative;
  width: 100%;
  overflow: hidden;
  background-color: rgba(0, 0, 0, 0.7);
  color: var(--text-primary);
  box-shadow: 0 0 30px rgba(var(--primary-rgb), 0.3);
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: 
      repeating-linear-gradient(
        rgba(var(--primary-rgb), 0.03) 1px, 
        transparent 2px, 
        transparent 4px
      );
    pointer-events: none;
    z-index: 1;
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 150px;
    background: linear-gradient(
      to bottom,
      transparent,
      rgba(var(--primary-rgb), 0.05),
      transparent
    );
    animation: ${css`${scanline}`} 4s linear infinite;
    pointer-events: none;
    z-index: 1;
  }
`;

// Header section
const Header = styled.div`
  position: relative;
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  text-align: center;
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 60%;
    height: 1px;
    background: linear-gradient(
      90deg,
      transparent,
      var(--primary),
      transparent
    );
  }
`;

const Title = styled.h2`
  font-size: 2.5rem;
  text-transform: uppercase;
  letter-spacing: 3px;
  margin-bottom: 0.5rem;
  color: var(--primary);
  font-weight: 800;
  text-shadow: 0 0 10px var(--primary);
  position: relative;
  display: inline-block;
  
  span {
    position: relative;
    display: inline-block;
    
    &:hover {
      animation: ${css`${glitch}`} 0.3s forwards;
      color: var(--secondary);
    }
  }
  
  &::before {
    content: 'SYS-ACCESS: GRANTED';
    position: absolute;
    top: -20px;
    left: 0;
    font-size: 0.7rem;
    letter-spacing: 2px;
    color: var(--primary);
    opacity: 0.7;
    font-weight: 400;
    animation: ${css`${flickerAnimation}`} 4s infinite;
  }
  
  &::after {
    content: 'UPLINK: ACTIVE';
    position: absolute;
    bottom: -20px;
    right: 0;
    font-size: 0.7rem;
    letter-spacing: 2px;
    color: var(--secondary);
    opacity: 0.7;
    font-weight: 400;
    animation: ${css`${flickerAnimation}`} 3s infinite;
    animation-delay: 1s;
  }
`;

// Level selector
const LevelSelector = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: rgba(0, 0, 0, 0.7);
  padding: 0.75rem;
  border-radius: 5px;
  margin-bottom: 2rem;
  position: relative;
  border: 1px solid var(--primary);
  
  &::before {
    content: '';
    position: absolute;
    top: -5px;
    left: -5px;
    right: -5px;
    bottom: -5px;
    border: 1px solid var(--primary);
    border-radius: 7px;
    opacity: 0.5;
    pointer-events: none;
    animation: ${css`${pulseAnimation}`} 2s infinite;
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      to right,
      rgba(var(--primary-rgb), 0.1),
      transparent,
      rgba(var(--primary-rgb), 0.1)
    );
    pointer-events: none;
  }
`;

const LevelButton = styled.button`
  background: none;
  border: none;
  color: var(--primary);
  font-size: 1.5rem;
  cursor: pointer;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  z-index: 2;
  transition: all 0.2s ease;
  
  &:hover {
    color: var(--secondary);
    transform: scale(1.2);
  }
  
  &:active {
    transform: scale(0.9);
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(var(--primary-rgb), 0.2);
    border-radius: 50%;
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  &:hover::before {
    opacity: 1;
  }
`;

const LevelIndicator = styled.div`
  font-size: 1.2rem;
  font-weight: 700;
  color: var(--primary);
  text-transform: uppercase;
  letter-spacing: 2px;
  position: relative;
  z-index: 2;
  text-shadow: 0 0 5px var(--primary);
  
  span {
    font-size: 1.8rem;
    margin: 0 0.5rem;
    display: inline-block;
    animation: ${css`${pulseAnimation}`} 2s infinite;
  }
`;

// Search bar
const SearchContainer = styled.div`
  position: relative;
  margin-bottom: 2rem;
  width: 100%;
  
  &::before {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 100%;
    height: 1px;
    background: linear-gradient(
      to right,
      transparent,
      var(--primary),
      transparent
    );
  }
`;

const SearchInput = styled.input`
  width: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  border: 1px solid var(--primary);
  padding: 0.75rem 1rem 0.75rem 3rem;
  color: var(--text-primary);
  font-family: inherit;
  font-size: 1rem;
  border-radius: 5px;
  transition: all 0.3s ease;
  outline: none;
  
  &:focus {
    border-color: var(--secondary);
    box-shadow: 0 0 15px rgba(var(--primary-rgb), 0.3);
  }
  
  &::placeholder {
    color: rgba(var(--primary-rgb), 0.6);
  }
`;

const SearchIcon = styled.div`
  position: absolute;
  left: 1rem;
  top: 50%;
  transform: translateY(-50%);
  color: var(--primary);
  font-size: 1.2rem;
  pointer-events: none;
  animation: ${css`${pulseAnimation}`} 2s infinite;
`;

// Sort selector
const SortSelector = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 1rem;
`;

const SortButton = styled.button`
  background: none;
  border: 1px solid var(--primary);
  color: var(--primary);
  padding: 0.5rem 1rem;
  cursor: pointer;
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  border-radius: 3px;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  
  &:hover {
    background-color: rgba(var(--primary-rgb), 0.2);
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(var(--primary-rgb), 0.2),
      transparent
    );
    transition: left 0.3s ease;
  }
  
  &:hover::before {
    left: 100%;
  }
`;

// Players list
const PlayersTable = styled.div`
  width: 100%;
  position: relative;
  margin-bottom: 2rem;
  /* Add spacing to ensure rows don't overlap */
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  /* Improved positioning */
  z-index: 1;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      to bottom,
      rgba(var(--primary-rgb), 0.05),
      transparent 50%
    );
    pointer-events: none;
    z-index: 0;
  }
`;

const PlayerRow = styled.div<{ isCurrentUser: boolean; rank: number }>`
  display: grid;
  grid-template-columns: 80px 1fr 150px;
  align-items: center;
  padding: 1.25rem 1rem;
  background-color: ${props => props.isCurrentUser ? 'rgba(var(--primary-rgb), 0.15)' : 'rgba(0, 0, 0, 0.5)'};
  margin-bottom: 0.5rem;
  position: relative;
  transition: all 0.3s ease;
  overflow: hidden;
  border-left: 3px solid ${props => {
    if (props.rank === 1) return 'var(--gold, #FFD700)';
    if (props.rank === 2) return 'var(--silver, #C0C0C0)';
    if (props.rank === 3) return 'var(--bronze, #CD7F32)';
    return 'var(--primary)';
  }};
  margin-bottom: 12px;
  position: relative;
  z-index: 1;
  
  ${props => props.isCurrentUser && css`
    animation: ${css`${borderFlash}`} 2s infinite;
  `}
  
  &:hover {
    transform: translateY(-3px) translateX(5px);
    box-shadow: -5px 5px 20px rgba(0, 0, 0, 0.5);
    z-index: 10;
    background-color: rgba(var(--primary-rgb), 0.2);
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 4px;
    height: 100%;
    background: ${props => {
    if (props.rank === 1) return 'var(--gold, #FFD700)';
    if (props.rank === 2) return 'var(--silver, #C0C0C0)';
    if (props.rank === 3) return 'var(--bronze, #CD7F32)';
    return 'var(--primary)';
  }};
    opacity: 0.8;
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 2px;
    height: ${props => 100 - props.rank * 15}%;
    background: var(--primary);
    animation: ${css`${dataStream}`} ${props => 2 + props.rank}s infinite ease-in-out;
    opacity: 0.5;
  }
`;

const RankBadge = styled.div<{ rank: number }>`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  
  .rank {
    width: 36px;
    height: 36px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    font-size: 1.25rem;
    position: relative;
    color: ${props => {
    if (props.rank === 1) return 'var(--gold, #FFD700)';
    if (props.rank === 2) return 'var(--silver, #C0C0C0)';
    if (props.rank === 3) return 'var(--bronze, #CD7F32)';
    return 'var(--primary)';
  }};
    text-shadow: ${props => {
    if (props.rank === 1) return '0 0 10px var(--gold, #FFD700)';
    if (props.rank === 2) return '0 0 10px var(--silver, #C0C0C0)';
    if (props.rank === 3) return '0 0 10px var(--bronze, #CD7F32)';
    return '0 0 10px var(--primary)';
  }};
    
    &::before {
      content: '';
      position: absolute;
      top: -5px;
      left: -5px;
      right: -5px;
      bottom: -5px;
      border: 1px solid ${props => {
    if (props.rank === 1) return 'var(--gold, #FFD700)';
    if (props.rank === 2) return 'var(--silver, #C0C0C0)';
    if (props.rank === 3) return 'var(--bronze, #CD7F32)';
    return 'var(--primary)';
  }};
      border-radius: 50%;
      opacity: 0.5;
      animation: ${css`${pulseAnimation}`} 2s infinite;
    }
  }
  
  .avatar {
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    background-color: rgba(var(--primary-rgb), 0.1);
    border-radius: 5px;
    position: relative;
    
    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(135deg, rgba(var(--primary-rgb), 0.2), transparent);
      border-radius: 5px;
    }
  }
`;

const PlayerDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding-left: 0.5rem;
  border-left: 1px solid rgba(var(--primary-rgb), 0.2);
  
  .name {
    font-weight: 700;
    color: var(--text-primary);
    letter-spacing: 1px;
    font-size: 1.1rem;
    text-transform: uppercase;
  }
  
  .stats {
    display: flex;
    align-items: center;
    gap: 1.25rem;
    font-size: 0.875rem;
    color: var(--text-primary);
    opacity: 0.8;
    
    span {
      display: flex;
      align-items: center;
      gap: 0.25rem;
      
      .label {
        opacity: 0.6;
        font-size: 0.75rem;
        text-transform: uppercase;
      }
      
      .value {
        color: var(--primary);
        font-weight: 600;
      }
    }
  }
`;

const StepsDisplay = styled.div`
  text-align: right;
  position: relative;
  
  .value {
    font-size: 2.5rem;
    font-weight: 800;
    color: var(--primary);
    text-shadow: 0 0 10px rgba(var(--primary-rgb), 0.7);
    letter-spacing: 1px;
    animation: ${css`${pulseAnimation}`} 3s infinite;
  }
  
  .label {
    font-size: 0.75rem;
    text-transform: uppercase;
    color: var(--text-primary);
    opacity: 0.6;
    letter-spacing: 2px;
    margin-top: 0.25rem;
  }
  
  &::before {
    content: '';
    position: absolute;
    top: -10px;
    right: -10px;
    width: 30px;
    height: 30px;
    border-top: 1px solid var(--primary);
    border-right: 1px solid var(--primary);
    opacity: 0.5;
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: -10px;
    width: 30px;
    height: 30px;
    border-bottom: 1px solid var(--primary);
    border-left: 1px solid var(--primary);
    opacity: 0.5;
  }
`;

// Stats Cards
const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  margin-top: 2.5rem;
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const StatCard = styled.div`
  background-color: rgba(0, 0, 0, 0.6);
  border: 1px solid var(--primary);
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
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
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1px;
    background: linear-gradient(
      to right,
      transparent,
      var(--primary),
      transparent
    );
  }
`;

const StatIcon = styled.div`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 30px;
    height: 1px;
    background: var(--primary);
  }
`;

const StatLabel = styled.div`
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: var(--text-primary);
  opacity: 0.6;
  margin-bottom: 0.5rem;
`;

const StatValue = styled.div`
  font-size: 2rem;
  font-weight: 800;
  color: var(--primary);
  text-shadow: 0 0 10px rgba(var(--primary-rgb), 0.5);
  letter-spacing: 1px;
  position: relative;
  animation: ${css`${pulseAnimation}`} 3s infinite;
`;

// Component
const LeaderboardCyber: React.FC = () => {
  const [currentLevel, setCurrentLevel] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [sortBy, setSortBy] = useState('rank');
  const currentUser = 1; // Simulating current user ID

  // Split the title for individual character animation
  const titleText = "LEADERBOARD";
  const titleChars = titleText.split('');

  const handlePrevLevel = () => {
    if (currentLevel > 1) {
      setCurrentLevel(currentLevel - 1);
    }
  };

  const handleNextLevel = () => {
    setCurrentLevel(currentLevel + 1);
  };

  return (
    <LeaderboardContainer>
      <Header>
        <Title>
          {titleChars.map((char, index) => (
            <span key={index}>{char}</span>
          ))}
        </Title>
      </Header>

      <LevelSelector>
        <LevelButton onClick={handlePrevLevel}>◀</LevelButton>
        <LevelIndicator>
          LEVEL <span>{currentLevel}</span>
        </LevelIndicator>
        <LevelButton onClick={handleNextLevel}>▶</LevelButton>
      </LevelSelector>

      <SearchContainer>
        <SearchIcon>🔍</SearchIcon>
        <SearchInput
          type="text"
          placeholder="Search player..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </SearchContainer>

      <SortSelector>
        <SortButton>Sort</SortButton>
      </SortSelector>

      <PlayersTable>
        {leaderboardData.map(player => (
          <PlayerRow
            key={player.id}
            isCurrentUser={player.id === currentUser}
            rank={player.rank}
          >
            <RankBadge rank={player.rank}>
              <div className="rank">{player.rank}</div>
              <div className="avatar">{player.avatar}</div>
            </RankBadge>

            <PlayerDetails>
              <div className="name">{player.name}</div>
              <div className="stats">
                <span>
                  <div className="label">Rank</div>
                  <div className="value">{player.rank}</div>
                </span>
                <span>
                  <div className="label">Steps</div>
                  <div className="value">{player.steps}</div>
                </span>
                <span>
                  <div className="label">Win Rate</div>
                  <div className="value">{player.wins}%</div>
                </span>
                <span>
                  <div className="label">Games</div>
                  <div className="value">{player.level - 10}</div>
                </span>
              </div>
            </PlayerDetails>

            <StepsDisplay>
              <div className="value">{player.steps}</div>
              <div className="label">STEPS</div>
            </StepsDisplay>
          </PlayerRow>
        ))}
      </PlayersTable>

      <StatsGrid>
        <StatCard>
          <StatIcon>🏆</StatIcon>
          <StatLabel>Global Rank</StatLabel>
          <StatValue>1/3</StatValue>
        </StatCard>
        <StatCard>
          <StatIcon>👣</StatIcon>
          <StatLabel>Steps Taken</StatLabel>
          <StatValue>0</StatValue>
        </StatCard>
        <StatCard>
          <StatIcon>⭐</StatIcon>
          <StatLabel>Top Players</StatLabel>
          <StatValue>33.3%</StatValue>
        </StatCard>
      </StatsGrid>
    </LeaderboardContainer>
  );
};

export default LeaderboardCyber; 