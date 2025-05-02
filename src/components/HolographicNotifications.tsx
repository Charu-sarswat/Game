import React, { useState, useEffect } from 'react';
import styled, { keyframes, css } from 'styled-components';

// Sample notification data
interface Notification {
    id: string;
    type: 'info' | 'success' | 'warning' | 'error' | 'system';
    message: string;
    timestamp: string;
    read: boolean;
    isPriority: boolean;
}

const sampleNotifications: Notification[] = [
    {
        id: 'NT-001',
        type: 'system',
        message: 'SYSTEM UPDATE v2.4.1 COMPLETED. NEURAL INTERFACE OPTIMIZED.',
        timestamp: '18:42:01',
        read: false,
        isPriority: true,
    },
    {
        id: 'NT-002',
        type: 'info',
        message: 'NEW MISSION AVAILABLE: "NEON DISTRICT INFILTRATION".',
        timestamp: '17:15:22',
        read: false,
        isPriority: false,
    },
    {
        id: 'NT-003',
        type: 'success',
        message: 'ACHIEVEMENT UNLOCKED: "CIRCUIT BREAKER".',
        timestamp: '14:33:07',
        read: true,
        isPriority: false,
    },
    {
        id: 'NT-004',
        type: 'warning',
        message: 'NETWORK STABILITY AT 67%. FIREWALL DEGRADATION DETECTED.',
        timestamp: '12:05:49',
        read: true,
        isPriority: true,
    },
    {
        id: 'NT-005',
        type: 'error',
        message: 'CONNECTION TO MAINFRAME LOST. ATTEMPTING RECONNECTION...',
        timestamp: '09:28:33',
        read: true,
        isPriority: true,
    },
];

// Animations
const appear = keyframes`
  0% { opacity: 0; transform: translateY(20px); }
  100% { opacity: 1; transform: translateY(0); }
`;

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
  0% { opacity: 0.6; }
  50% { opacity: 1; }
  100% { opacity: 0.6; }
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

const borderFlow = keyframes`
  0% { background-position: 0% 0%; }
  100% { background-position: 200% 0%; }
`;

// Styled Components
const NotificationsContainer = styled.div`
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  background-color: rgba(0, 0, 0, 0.7);
  border: 1px solid var(--primary);
  border-radius: 5px;
  padding: 1.5rem;
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
        rgba(var(--primary-rgb), 0.03) 1px, 
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
    height: 50px;
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

const NotificationsHeader = styled.div`
  position: relative;
  padding-bottom: 1rem;
  margin-bottom: 1.5rem;
  
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

const Title = styled.h2`
  font-size: 1.8rem;
  color: var(--primary);
  margin: 0 0 0.5rem 0;
  text-transform: uppercase;
  letter-spacing: 3px;
  font-weight: 800;
  text-shadow: 0 0 10px var(--primary);
  position: relative;
  display: inline-block;
  
  &::before {
    content: 'LIVE FEED';
    position: absolute;
    top: -15px;
    left: 0;
    font-size: 0.7rem;
    color: var(--secondary);
    letter-spacing: 2px;
    font-weight: 400;
    opacity: 0.7;
  }
`;

const NotificationCounter = styled.div`
  position: absolute;
  top: 5px;
  right: 0;
  font-size: 0.8rem;
  color: var(--text-secondary);
  font-family: monospace;
  
  span {
    color: var(--primary);
    font-weight: 600;
  }
`;

const NotificationsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

interface NotificationItemProps {
    type: 'info' | 'success' | 'warning' | 'error' | 'system';
    read: boolean;
    isPriority: boolean;
}

const getNotificationColor = (type: string) => {
    switch (type) {
        case 'info': return 'var(--info, #36a3f7)';
        case 'success': return 'var(--success, #0cce6b)';
        case 'warning': return 'var(--warning, #ffc107)';
        case 'error': return 'var(--error, #ff3e5e)';
        case 'system': return 'var(--primary)';
        default: return 'var(--text-primary)';
    }
};

const NotificationItem = styled.div<NotificationItemProps>`
  position: relative;
  padding: 1rem 1rem 1rem 3rem;
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 3px;
  transition: all 0.3s ease;
  animation: ${css`${appear}`} 0.3s ease-out;
  border-left: 3px solid ${props => getNotificationColor(props.type)};
  opacity: ${props => props.read ? 0.7 : 1};
  
  ${props => props.isPriority && css`
    position: relative;
    overflow: hidden;
    
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: ${`linear-gradient(90deg, 
        transparent, 
        rgba(${props.type === 'error' ? 'var(--error-rgb, 255,62,94)' :
            props.type === 'warning' ? 'var(--warning-rgb, 255,193,7)' :
                'var(--primary-rgb)'}, 0.1), 
        transparent)`};
      animation: ${css`${borderFlow}`} 2s linear infinite;
      z-index: 0;
    }
    
    &::after {
      content: 'PRIORITY';
      position: absolute;
      top: 5px;
      right: 10px;
      font-size: 0.6rem;
      color: ${getNotificationColor(props.type)};
      text-transform: uppercase;
      letter-spacing: 1px;
      font-weight: 400;
      animation: ${css`${flicker}`} 3s infinite;
    }
  `}

  &:hover {
    transform: translateX(5px);
    background-color: rgba(0, 0, 0, 0.5);
  }
  
  &:hover::before {
    animation: ${css`${glitch}`} 0.2s forwards;
  }
`;

const NotificationIcon = styled.div<{ type: string }>`
  position: absolute;
  left: 10px;
  top: 50%;
  transform: translateY(-50%);
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: rgba(${props => {
        switch (props.type) {
            case 'info': return 'var(--info-rgb, 54,163,247)';
            case 'success': return 'var(--success-rgb, 12,206,107)';
            case 'warning': return 'var(--warning-rgb, 255,193,7)';
            case 'error': return 'var(--error-rgb, 255,62,94)';
            case 'system': return 'var(--primary-rgb)';
            default: return 'var(--primary-rgb)';
        }
    }}, 0.2);
  color: ${props => getNotificationColor(props.type)};
  font-size: 0.9rem;
  
  animation: ${css`${pulse}`} 2s infinite;
`;

const NotificationMessage = styled.div`
  font-size: 0.9rem;
  color: var(--text-primary);
  letter-spacing: 1px;
  font-weight: 400;
  margin-bottom: 0.3rem;
  position: relative;
  z-index: 2;
`;

const NotificationTimestamp = styled.div`
  font-size: 0.7rem;
  color: var(--text-secondary);
  font-family: monospace;
  letter-spacing: 1px;
  position: relative;
  z-index: 2;
`;

const NotificationControls = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1.5rem;
  padding-top: 1rem;
  border-top: 1px solid rgba(var(--primary-rgb), 0.3);
`;

const ActionButton = styled.button`
  background-color: rgba(var(--primary-rgb), 0.1);
  color: var(--primary);
  border: 1px solid var(--primary);
  border-radius: 3px;
  padding: 0.5rem 1rem;
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: rgba(var(--primary-rgb), 0.3);
    box-shadow: 0 0 10px var(--primary);
  }
`;

const NotificationBadge = styled.div`
  position: absolute;
  top: -8px;
  right: -8px;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: var(--error);
  color: white;
  font-size: 0.7rem;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${css`${pulse}`} 2s infinite;
`;

// Helper function to get the icon for each notification type
const getIconForType = (type: string) => {
    switch (type) {
        case 'info': return 'ℹ';
        case 'success': return '✓';
        case 'warning': return '⚠';
        case 'error': return '✗';
        case 'system': return '⚙';
        default: return '•';
    }
};

interface HolographicNotificationsProps {
    onlyShowUnread?: boolean;
    maxNotifications?: number;
}

const HolographicNotifications: React.FC<HolographicNotificationsProps> = ({
    onlyShowUnread = false,
    maxNotifications = 5
}) => {
    const [notifications, setNotifications] = useState<Notification[]>(sampleNotifications);
    const [showOnlyUnread, setShowOnlyUnread] = useState(onlyShowUnread);

    const unreadCount = notifications.filter(n => !n.read).length;

    const displayedNotifications = showOnlyUnread
        ? notifications.filter(n => !n.read).slice(0, maxNotifications)
        : notifications.slice(0, maxNotifications);

    const markAllAsRead = () => {
        setNotifications(notifications.map(n => ({ ...n, read: true })));
    };

    const toggleReadFilter = () => {
        setShowOnlyUnread(!showOnlyUnread);
    };

    return (
        <NotificationsContainer>
            <NotificationsHeader>
                <Title>NOTIFICATIONS</Title>
                <NotificationCounter>
                    <span>{unreadCount}</span> UNREAD / {notifications.length} TOTAL
                </NotificationCounter>
            </NotificationsHeader>

            <NotificationsList>
                {displayedNotifications.length > 0 ? (
                    displayedNotifications.map(notification => (
                        <NotificationItem
                            key={notification.id}
                            type={notification.type}
                            read={notification.read}
                            isPriority={notification.isPriority}
                        >
                            <NotificationIcon type={notification.type}>
                                {getIconForType(notification.type)}
                            </NotificationIcon>
                            <NotificationMessage>
                                {notification.message}
                            </NotificationMessage>
                            <NotificationTimestamp>
                                {notification.timestamp}
                            </NotificationTimestamp>
                            {!notification.read && <NotificationBadge />}
                        </NotificationItem>
                    ))
                ) : (
                    <NotificationItem
                        type="info"
                        read={false}
                        isPriority={false}
                    >
                        <NotificationIcon type="info">ℹ</NotificationIcon>
                        <NotificationMessage>
                            NO ACTIVE NOTIFICATIONS FOUND
                        </NotificationMessage>
                        <NotificationTimestamp>
                            SYSTEM CLEAR
                        </NotificationTimestamp>
                    </NotificationItem>
                )}
            </NotificationsList>

            <NotificationControls>
                <ActionButton onClick={toggleReadFilter}>
                    {showOnlyUnread ? 'SHOW ALL' : 'SHOW UNREAD'}
                </ActionButton>
                <ActionButton onClick={markAllAsRead}>
                    MARK ALL READ
                </ActionButton>
            </NotificationControls>
        </NotificationsContainer>
    );
};

export default HolographicNotifications; 