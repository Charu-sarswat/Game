import React, { useState, useEffect } from 'react';
import styled, { keyframes, css } from 'styled-components';

// Sample user data
const defaultUserData = {
    id: 'USR-42X9',
    name: 'NEURAL-89',
    level: 29,
    rank: 4,
    joinDate: '2077-05-12',
    avatar: '🧠',
    status: 'ONLINE',
    achievements: [
        { id: 1, name: 'CIRCUIT BREAKER', description: 'Complete level 10 without errors', completed: true, date: '2077-06-01' },
        { id: 2, name: 'GHOST PROTOCOL', description: 'Finish a game undetected', completed: true, date: '2077-07-15' },
        { id: 3, name: 'NEURAL HACK', description: 'Solve 5 puzzles in under 60 seconds', completed: false, date: null },
        { id: 4, name: 'VOID WALKER', description: 'Complete the void sequence', completed: true, date: '2077-09-03' },
        { id: 5, name: 'QUANTUM SHIFT', description: 'Reach level 50', completed: false, date: null },
    ],
    stats: {
        gamesPlayed: 142,
        wins: 87,
        winRate: '61.3%',
        bestScore: 9870,
        totalTime: '127h 42m',
        favoriteLevel: 'Neon District',
    }
};

// Animations
const glitch = keyframes`
  0% { transform: translate(0); }
  20% { transform: translate(-2px, 2px); }
  40% { transform: translate(-2px, -2px); }
  60% { transform: translate(2px, 2px); }
  80% { transform: translate(2px, -2px); }
  100% { transform: translate(0); }
`;

const scanline = keyframes`
  0% { transform: translateY(-100%); }
  100% { transform: translateY(100%); }
`;

const pulse = keyframes`
  0% { opacity: 0.8; box-shadow: 0 0 5px var(--primary); }
  50% { opacity: 1; box-shadow: 0 0 15px var(--primary); }
  100% { opacity: 0.8; box-shadow: 0 0 5px var(--primary); }
`;

const flicker = keyframes`
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

const rotate = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const float = keyframes`
  0% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0); }
`;

const dataStream = keyframes`
  0% { height: 10%; opacity: 0.5; }
  50% { height: 80%; opacity: 1; }
  100% { height: 10%; opacity: 0.5; }
`;

// Styled Components
const ProfileContainer = styled.div`
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  padding: 2rem;
  background-color: rgba(0, 0, 0, 0.7);
  border: 1px solid var(--primary);
  border-radius: 5px;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: 
      repeating-linear-gradient(
        90deg,
        rgba(var(--primary-rgb), 0.05) 1px, 
        transparent 2px, 
        transparent 10px
      ),
      repeating-linear-gradient(
        0deg,
        rgba(var(--primary-rgb), 0.05) 1px, 
        transparent 2px, 
        transparent 10px
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
    height: 100px;
    background: linear-gradient(
      to bottom,
      transparent,
      rgba(var(--primary-rgb), 0.1),
      transparent
    );
    animation: ${css`${scanline}`} 4s linear infinite;
    pointer-events: none;
    z-index: 1;
  }
`;

const ProfileHeader = styled.div`
  position: relative;
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1px;
    background: linear-gradient(
      90deg,
      var(--primary),
      transparent,
      var(--primary)
    );
  }
`;

const ProfileID = styled.div`
  position: absolute;
  top: -15px;
  left: 0;
  font-size: 0.8rem;
  color: var(--primary);
  letter-spacing: 2px;
  opacity: 0.8;
  text-transform: uppercase;
  font-family: monospace;
  animation: ${css`${flicker}`} 5s infinite;
`;

const ProfileStatus = styled.div<{ status: string }>`
  position: absolute;
  top: -15px;
  right: 0;
  font-size: 0.8rem;
  color: ${props => props.status === 'ONLINE' ? 'var(--secondary)' : 'var(--error)'};
  letter-spacing: 2px;
  text-transform: uppercase;
  font-family: monospace;
  
  &::before {
    content: '';
    display: inline-block;
    width: 8px;
    height: 8px;
    margin-right: 5px;
    border-radius: 50%;
    background-color: ${props => props.status === 'ONLINE' ? 'var(--secondary)' : 'var(--error)'};
    animation: ${css`${pulse}`} 2s infinite;
  }
`;

const AvatarSection = styled.div`
  flex: 0 0 120px;
  position: relative;
`;

const AvatarFrame = styled.div`
  width: 120px;
  height: 120px;
  border: 2px solid var(--primary);
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  animation: ${css`${pulse}`} 3s infinite;
  background-color: rgba(var(--primary-rgb), 0.1);
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: -20%;
    left: -20%;
    width: 140%;
    height: 140%;
    background: conic-gradient(
      transparent 0deg,
      transparent 30deg,
      rgba(var(--primary-rgb), 0.3) 50deg,
      transparent 70deg,
      transparent 360deg
    );
    animation: ${css`${rotate}`} 4s linear infinite;
    z-index: 0;
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 5px;
    left: 5px;
    right: 5px;
    bottom: 5px;
    border: 1px dashed rgba(var(--primary-rgb), 0.5);
    border-radius: 3px;
    pointer-events: none;
  }
`;

const Avatar = styled.div`
  font-size: 4rem;
  position: relative;
  z-index: 2;
  animation: ${css`${float}`} 3s ease-in-out infinite;
`;

const DataStreamEffect = styled.div`
  position: absolute;
  top: 0;
  right: 10px;
  width: 2px;
  height: 50%;
  background-color: var(--primary);
  opacity: 0.6;
  animation: ${css`${dataStream}`} 2s ease-in-out infinite;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -5px;
    width: 2px;
    height: 70%;
    background-color: var(--secondary);
    opacity: 0.4;
    animation: ${css`${dataStream}`} 2s ease-in-out infinite;
    animation-delay: 0.5s;
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    right: -5px;
    width: 2px;
    height: 40%;
    background-color: var(--primary);
    opacity: 0.3;
    animation: ${css`${dataStream}`} 2s ease-in-out infinite;
    animation-delay: 1s;
  }
`;

const UserInfo = styled.div`
  flex: 1;
  padding-left: 2rem;
  position: relative;
`;

const UserName = styled.h2`
  font-size: 2.2rem;
  color: var(--primary);
  margin: 0 0 0.5rem 0;
  text-transform: uppercase;
  letter-spacing: 3px;
  position: relative;
  display: inline-block;
  font-weight: 800;
  text-shadow: 0 0 10px var(--primary);
  
  &:hover {
    animation: ${css`${glitch}`} 0.3s forwards;
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: var(--primary);
  }
`;

const UserMeta = styled.div`
  display: flex;
  gap: 2rem;
  margin-top: 1rem;
  color: var(--text-primary);
`;

const MetaItem = styled.div`
  position: relative;
  padding-left: 1.5rem;
  
  &::before {
    content: '■';
    position: absolute;
    left: 0;
    top: 0;
    color: var(--primary);
    font-size: 0.8rem;
  }
  
  label {
    display: block;
    font-size: 0.8rem;
    text-transform: uppercase;
    letter-spacing: 1px;
    color: var(--text-secondary);
    margin-bottom: 0.2rem;
  }
  
  span {
    font-size: 1.2rem;
    font-weight: 600;
    color: var(--text-primary);
  }
`;

const ProfileBody = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const StatsSection = styled.div`
  background-color: rgba(0, 0, 0, 0.3);
  border: 1px solid var(--primary);
  border-radius: 5px;
  padding: 1.5rem;
  position: relative;
  
  &::before {
    content: 'NEURAL METRICS';
    position: absolute;
    top: -10px;
    left: 10px;
    background-color: black;
    padding: 0 10px;
    font-size: 0.7rem;
    color: var(--primary);
    text-transform: uppercase;
    letter-spacing: 2px;
  }
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
`;

const StatItem = styled.div`
  padding: 0.8rem;
  background-color: rgba(var(--primary-rgb), 0.1);
  border-radius: 3px;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: rgba(var(--primary-rgb), 0.2);
    transform: translateY(-3px);
  }
  
  label {
    display: block;
    font-size: 0.7rem;
    text-transform: uppercase;
    letter-spacing: 1px;
    color: var(--text-secondary);
    margin-bottom: 0.2rem;
  }
  
  span {
    font-size: 1.2rem;
    font-weight: 600;
    color: var(--text-primary);
  }
`;

const AchievementSection = styled.div`
  background-color: rgba(0, 0, 0, 0.3);
  border: 1px solid var(--primary);
  border-radius: 5px;
  padding: 1.5rem;
  position: relative;
  
  &::before {
    content: 'SYSTEM ACHIEVEMENTS';
    position: absolute;
    top: -10px;
    left: 10px;
    background-color: black;
    padding: 0 10px;
    font-size: 0.7rem;
    color: var(--primary);
    text-transform: uppercase;
    letter-spacing: 2px;
  }
`;

const AchievementList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const AchievementItem = styled.div<{ completed: boolean }>`
  padding: 1rem;
  background-color: rgba(var(--primary-rgb), 0.1);
  border-left: 3px solid ${props => props.completed ? 'var(--secondary)' : 'var(--text-secondary)'};
  border-radius: 3px;
  position: relative;
  opacity: ${props => props.completed ? 1 : 0.6};
  transition: all 0.3s ease;
  
  &:hover {
    background-color: rgba(var(--primary-rgb), 0.2);
    transform: translateX(5px);
  }
  
  &::before {
    content: '${props => props.completed ? '✓' : '⧖'}';
    position: absolute;
    top: 1rem;
    right: 1rem;
    color: ${props => props.completed ? 'var(--secondary)' : 'var(--text-secondary)'};
    font-size: ${props => props.completed ? '1.2rem' : '1rem'};
  }
`;

const AchievementName = styled.h4`
  margin: 0 0 0.5rem 0;
  font-size: 1rem;
  color: var(--text-primary);
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const AchievementDescription = styled.p`
  margin: 0;
  font-size: 0.9rem;
  color: var(--text-secondary);
`;

const AchievementDate = styled.div`
  font-size: 0.8rem;
  color: var(--primary);
  margin-top: 0.5rem;
  font-family: monospace;
  letter-spacing: 1px;
`;

const ActionSection = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
`;

const ActionButton = styled.button`
  background-color: rgba(var(--primary-rgb), 0.1);
  color: var(--primary);
  border: 1px solid var(--primary);
  border-radius: 3px;
  padding: 0.5rem 1.5rem;
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  
  &:hover {
    background-color: rgba(var(--primary-rgb), 0.3);
    box-shadow: 0 0 10px var(--primary);
  }
  
  &::after {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(
      circle,
      rgba(var(--primary-rgb), 0.4) 0%,
      transparent 70%
    );
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  &:hover::after {
    opacity: 1;
  }
`;

const CyberProfile: React.FC<{ userId?: string }> = ({ userId }) => {
    const [userData, setUserData] = useState(defaultUserData);
    const [loading, setLoading] = useState(false);

    // In a real app, you would fetch user data based on userId
    useEffect(() => {
        if (userId) {
            setLoading(true);
            // Mock API call
            setTimeout(() => {
                setLoading(false);
                // Here you would set the fetched data
            }, 1500);
        }
    }, [userId]);

    return (
        <ProfileContainer>
            <ProfileHeader>
                <ProfileID>ID: {userData.id}</ProfileID>
                <ProfileStatus status={userData.status}>{userData.status}</ProfileStatus>

                <AvatarSection>
                    <AvatarFrame>
                        <Avatar>{userData.avatar}</Avatar>
                        <DataStreamEffect />
                    </AvatarFrame>
                </AvatarSection>

                <UserInfo>
                    <UserName>{userData.name}</UserName>
                    <UserMeta>
                        <MetaItem>
                            <label>LEVEL</label>
                            <span>{userData.level}</span>
                        </MetaItem>
                        <MetaItem>
                            <label>RANK</label>
                            <span>#{userData.rank}</span>
                        </MetaItem>
                        <MetaItem>
                            <label>JOINED</label>
                            <span>{userData.joinDate}</span>
                        </MetaItem>
                    </UserMeta>
                </UserInfo>
            </ProfileHeader>

            <ProfileBody>
                <StatsSection>
                    <StatsGrid>
                        <StatItem>
                            <label>GAMES PLAYED</label>
                            <span>{userData.stats.gamesPlayed}</span>
                        </StatItem>
                        <StatItem>
                            <label>VICTORIES</label>
                            <span>{userData.stats.wins}</span>
                        </StatItem>
                        <StatItem>
                            <label>WIN RATE</label>
                            <span>{userData.stats.winRate}</span>
                        </StatItem>
                        <StatItem>
                            <label>BEST SCORE</label>
                            <span>{userData.stats.bestScore}</span>
                        </StatItem>
                        <StatItem>
                            <label>TOTAL TIME</label>
                            <span>{userData.stats.totalTime}</span>
                        </StatItem>
                        <StatItem>
                            <label>FAVORITE LEVEL</label>
                            <span>{userData.stats.favoriteLevel}</span>
                        </StatItem>
                    </StatsGrid>
                </StatsSection>

                <AchievementSection>
                    <AchievementList>
                        {userData.achievements.map(achievement => (
                            <AchievementItem key={achievement.id} completed={achievement.completed}>
                                <AchievementName>{achievement.name}</AchievementName>
                                <AchievementDescription>{achievement.description}</AchievementDescription>
                                {achievement.completed && (
                                    <AchievementDate>UNLOCKED: {achievement.date}</AchievementDate>
                                )}
                            </AchievementItem>
                        ))}
                    </AchievementList>
                </AchievementSection>
            </ProfileBody>

            <ActionSection>
                <ActionButton>EDIT PROFILE</ActionButton>
                <ActionButton>VIEW MATCH HISTORY</ActionButton>
            </ActionSection>
        </ProfileContainer>
    );
};

export default CyberProfile; 