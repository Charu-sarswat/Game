import React, { useState } from 'react';
import styled from 'styled-components';
import { Chart } from './Chart';

// Mock data
const weeklyData = [
  { day: 'Mon', steps: 12, kills: 5, deaths: 2, accuracy: 68 },
  { day: 'Tue', steps: 8, kills: 7, deaths: 3, accuracy: 72 },
  { day: 'Wed', steps: 15, kills: 10, deaths: 1, accuracy: 75 },
  { day: 'Thu', steps: 9, kills: 8, deaths: 4, accuracy: 70 },
  { day: 'Fri', steps: 18, kills: 12, deaths: 3, accuracy: 82 },
  { day: 'Sat', steps: 25, kills: 15, deaths: 2, accuracy: 85 },
  { day: 'Sun', steps: 20, kills: 13, deaths: 0, accuracy: 88 },
];

const achievementsData = [
  { id: 1, name: 'First Blood', description: 'Get your first kill', completed: true, icon: '🩸' },
  { id: 2, name: 'Sharpshooter', description: 'Achieve 80% accuracy in a match', completed: true, icon: '🎯' },
  { id: 3, name: 'Survivor', description: 'Win a match without dying', completed: true, icon: '🛡️' },
  { id: 4, name: 'Unstoppable', description: 'Get a 10-kill streak', completed: false, icon: '⚡' },
  { id: 5, name: 'Collector', description: 'Collect all weapon types', completed: false, icon: '🔫' },
  { id: 6, name: 'Legend', description: 'Reach the top of the leaderboard', completed: false, icon: '👑' },
];

const playerStats = {
  totalMatches: 28,
  wins: 18,
  losses: 10,
  winRate: 64.3,
  totalKills: 342,
  totalDeaths: 198,
  kdRatio: 1.73,
  accuracy: 76.4,
  headshotPercentage: 42,
  favoriteWeapon: 'Plasma Rifle',
  playtime: '32h 15m',
  level: 24,
  xpToNextLevel: 2450,
  currentXP: 1580,
  maxXp: 3000,
};

// Styled Components
const Container = styled.div`
  padding: 2rem;
  color: white;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 300px;
    height: 300px;
    background: radial-gradient(circle at center, rgba(110, 72, 170, 0.1), transparent 70%);
    z-index: 0;
    pointer-events: none;
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 300px;
    height: 300px;
    background: radial-gradient(circle at center, rgba(0, 200, 255, 0.1), transparent 70%);
    z-index: 0;
    pointer-events: none;
  }
`;

const StatsHeader = styled.div`
  margin-bottom: 2rem;
  text-align: center;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -1rem;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 3px;
    background: var(--gradient-primary);
    border-radius: 3px;
  }
`;

const Title = styled.h2`
  font-size: 2.5rem;
  color: var(--text-primary);
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-bottom: 0.5rem;
`;

const Subtitle = styled.p`
  color: var(--text-secondary);
  font-size: 1.1rem;
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 2rem;
  margin-bottom: 2rem;
  
  @media (max-width: 1024px) {
    grid-template-columns: 1fr 1fr;
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const PlayerCard = styled.div`
  grid-column: 1;
  grid-row: 1 / span 2;
  background: linear-gradient(135deg, rgba(110, 72, 170, 0.1), rgba(157, 80, 187, 0.05));
  border-radius: 16px;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid rgba(110, 72, 170, 0.2);
  position: relative;
  overflow: hidden;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at top right, rgba(110, 72, 170, 0.2), transparent 70%);
    z-index: 0;
  }
  
  @media (max-width: 1024px) {
    grid-column: 1 / span 2;
    grid-row: 1;
  }
  
  @media (max-width: 768px) {
    grid-column: 1;
    grid-row: 1;
  }
`;

const PlayerAvatar = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 20px;
  background: var(--gradient-primary);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  margin-bottom: 1.5rem;
  position: relative;
  z-index: 1;
  box-shadow: 0 8px 20px rgba(110, 72, 170, 0.3);
  border: 3px solid rgba(255, 255, 255, 0.1);
`;

const PlayerName = styled.h3`
  font-size: 1.8rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  position: relative;
  z-index: 1;
`;

const PlayerRank = styled.div`
  font-size: 1rem;
  color: var(--text-secondary);
  margin-bottom: 1.5rem;
  position: relative;
  z-index: 1;
  background: rgba(110, 72, 170, 0.2);
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-weight: 600;
`;

const LevelBar = styled.div`
  width: 100%;
  height: 8px;
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  margin: 1.5rem 0;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
    animation: shimmer 2s infinite;
  }
  
  @keyframes shimmer {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(100%);
    }
  }
`;

const LevelFill = styled.div<{ progress: number }>`
  height: 100%;
  width: ${props => props.progress}%;
  background: var(--gradient-primary);
  border-radius: 4px;
`;

const LevelInfo = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 0.5rem;
`;

const LevelText = styled.div`
  font-size: 1rem;
  font-weight: 700;
`;

const LevelXp = styled.div`
  font-size: 0.9rem;
  color: var(--text-secondary);
`;

const StatsDivider = styled.div`
  width: 100%;
  height: 1px;
  background: rgba(255, 255, 255, 0.1);
  margin: 1rem 0;
`;

const BasicStatsContainer = styled.div`
  width: 100%;
  position: relative;
  z-index: 1;
`;

const StatRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.75rem;
  position: relative;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const StatLabel = styled.div`
  color: var(--text-secondary);
  font-size: 0.9rem;
`;

const StatValue = styled.div`
  font-weight: 600;
  font-size: 0.9rem;
`;

const StatCard = styled.div`
  background: var(--background-light);
  border-radius: 16px;
  padding: 1.5rem;
  border: 1px solid rgba(255, 255, 255, 0.05);
  position: relative;
  overflow: hidden;
  height: 100%;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.2);
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, rgba(110, 72, 170, 0.05), transparent);
    z-index: 0;
  }
`;

const StatCardTitle = styled.h4`
  font-size: 1.2rem;
  margin-bottom: 1rem;
  color: var(--text-primary);
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  &::after {
    content: '';
    display: block;
    width: 30px;
    height: 3px;
    background: var(--gradient-primary);
    margin-top: 0.5rem;
    border-radius: 3px;
    position: absolute;
    bottom: -0.5rem;
    left: 0;
  }
`;

const StatIcon = styled.span`
  font-size: 1.2rem;
`;

const ChartContainer = styled.div`
  position: relative;
  z-index: 1;
  height: 200px;
  margin-top: 1rem;
`;

const TabsContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1.5rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  padding-bottom: 1rem;
  position: relative;
  z-index: 1;
`;

const Tab = styled.button<{ active: boolean }>`
  background: ${props => props.active ? 'rgba(110, 72, 170, 0.2)' : 'transparent'};
  border: 1px solid ${props => props.active ? 'rgba(110, 72, 170, 0.3)' : 'rgba(255, 255, 255, 0.1)'};
  color: ${props => props.active ? 'var(--text-primary)' : 'var(--text-secondary)'};
  padding: 0.5rem 1rem;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 0.9rem;
  font-weight: ${props => props.active ? '600' : '400'};
  
  &:hover {
    background: rgba(110, 72, 170, 0.1);
    border-color: rgba(110, 72, 170, 0.2);
    color: var(--text-primary);
  }
`;

const AchievementsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1rem;
  position: relative;
  z-index: 1;
`;

const AchievementCard = styled.div<{ completed: boolean }>`
  background: ${props => props.completed ? 'rgba(110, 72, 170, 0.1)' : 'rgba(0, 0, 0, 0.2)'};
  border-radius: 12px;
  padding: 1rem;
  border: 1px solid ${props => props.completed ? 'rgba(110, 72, 170, 0.3)' : 'rgba(255, 255, 255, 0.05)'};
  display: flex;
  align-items: center;
  gap: 1rem;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  }
  
  ${props => props.completed && `
    &::before {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      width: 30px;
      height: 30px;
      background: var(--gradient-primary);
      border-radius: 0 0 0 12px;
      clip-path: polygon(0 0, 100% 0, 100% 100%);
    }
    
    &::after {
      content: '✓';
      position: absolute;
      top: 0;
      right: 5px;
      font-size: 0.8rem;
      color: white;
      font-weight: bold;
    }
  `}
`;

const AchievementIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 8px;
  background: rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  flex-shrink: 0;
`;

const AchievementInfo = styled.div`
  flex-grow: 1;
`;

const AchievementName = styled.div`
  font-weight: 600;
  margin-bottom: 0.25rem;
`;

const AchievementDescription = styled.div`
  font-size: 0.8rem;
  color: var(--text-secondary);
`;

const Stats: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'achievements' | 'progress'>('achievements');

  // Calculate XP progress percentage
  const xpProgress = (playerStats.currentXP / playerStats.maxXp) * 100;

  return (
    <Container>
      <StatsHeader>
        <Title>Player Statistics</Title>
        <Subtitle>Detailed performance metrics and achievements</Subtitle>
      </StatsHeader>

      <StatsGrid>
        <PlayerCard>
          <PlayerAvatar>🦊</PlayerAvatar>
          <PlayerName>Cyrus</PlayerName>
          <PlayerRank>Rank #1 | Legend</PlayerRank>

          <LevelInfo>
            <LevelText>Level {playerStats.level}</LevelText>
            <LevelXp>{playerStats.currentXP}/{playerStats.maxXp} XP</LevelXp>
          </LevelInfo>

          <LevelBar>
            <LevelFill progress={xpProgress} />
          </LevelBar>

          <LevelXp>{playerStats.xpToNextLevel} XP to next level</LevelXp>

          <StatsDivider />

          <BasicStatsContainer>
            <StatRow>
              <StatLabel>Total Matches</StatLabel>
              <StatValue>{playerStats.totalMatches}</StatValue>
            </StatRow>
            <StatRow>
              <StatLabel>Win Rate</StatLabel>
              <StatValue>{playerStats.winRate}%</StatValue>
            </StatRow>
            <StatRow>
              <StatLabel>K/D Ratio</StatLabel>
              <StatValue>{playerStats.kdRatio}</StatValue>
            </StatRow>
            <StatRow>
              <StatLabel>Accuracy</StatLabel>
              <StatValue>{playerStats.accuracy}%</StatValue>
            </StatRow>
            <StatRow>
              <StatLabel>Playtime</StatLabel>
              <StatValue>{playerStats.playtime}</StatValue>
            </StatRow>
          </BasicStatsContainer>
        </PlayerCard>

        <StatCard>
          <StatCardTitle>
            <StatIcon>⚔️</StatIcon>
            Combat Performance
          </StatCardTitle>
          <ChartContainer>
            <Chart
              data={[
                { label: 'Kills', value: playerStats.totalKills },
                { label: 'Deaths', value: playerStats.totalDeaths },
                { label: 'Headshots', value: Math.round(playerStats.totalKills * playerStats.headshotPercentage / 100) },
                { label: 'Assists', value: 104 }
              ]}
              type="bar"
              colors={['#6e48aa', '#ff4757', '#ffbd39', '#00c8ff']}
            />
          </ChartContainer>
        </StatCard>

        <StatCard>
          <StatCardTitle>
            <StatIcon>📈</StatIcon>
            Weekly Activity
          </StatCardTitle>
          <ChartContainer>
            <Chart
              data={weeklyData.map(day => ({ label: day.day, value: day.steps }))}
              type="line"
              colors={['#00c8ff']}
            />
          </ChartContainer>
        </StatCard>

        <StatCard>
          <StatCardTitle>
            <StatIcon>🎯</StatIcon>
            Accuracy Trend
          </StatCardTitle>
          <ChartContainer>
            <Chart
              data={weeklyData.map(day => ({ label: day.day, value: day.accuracy }))}
              type="line"
              colors={['#1ed760']}
            />
          </ChartContainer>
        </StatCard>

        <StatCard>
          <StatCardTitle>
            <StatIcon>🏆</StatIcon>
            Match History
          </StatCardTitle>
          <ChartContainer>
            <Chart
              data={[
                { label: 'Wins', value: playerStats.wins },
                { label: 'Losses', value: playerStats.losses }
              ]}
              type="pie"
              colors={['#1ed760', '#ff4757']}
            />
          </ChartContainer>
        </StatCard>
      </StatsGrid>

      <StatCard style={{ marginBottom: '2rem' }}>
        <TabsContainer>
          <Tab
            active={activeTab === 'achievements'}
            onClick={() => setActiveTab('achievements')}
          >
            Achievements
          </Tab>
          <Tab
            active={activeTab === 'progress'}
            onClick={() => setActiveTab('progress')}
          >
            Progress
          </Tab>
        </TabsContainer>

        {activeTab === 'achievements' && (
          <AchievementsGrid>
            {achievementsData.map(achievement => (
              <AchievementCard key={achievement.id} completed={achievement.completed}>
                <AchievementIcon>{achievement.icon}</AchievementIcon>
                <AchievementInfo>
                  <AchievementName>{achievement.name}</AchievementName>
                  <AchievementDescription>{achievement.description}</AchievementDescription>
                </AchievementInfo>
              </AchievementCard>
            ))}
          </AchievementsGrid>
        )}

        {activeTab === 'progress' && (
          <ChartContainer style={{ height: '300px' }}>
            <Chart
              data={[
                { label: 'Kills', value: 65 },
                { label: 'Wins', value: 45 },
                { label: 'Achievements', value: 50 },
                { label: 'Weapons', value: 70 },
                { label: 'Maps', value: 80 }
              ]}
              type="radar"
              colors={['#6e48aa', '#00c8ff']}
            />
          </ChartContainer>
        )}
      </StatCard>
    </Container>
  );
};

export default Stats; 