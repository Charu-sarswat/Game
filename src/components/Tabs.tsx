import React from 'react';
import styled from 'styled-components';

interface Tab {
  id: string;
  label: string;
}

interface TabsProps {
  tabs: Tab[];
  activeTab: string;
  onChange: (tabId: string) => void;
}

const TabsContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
  border-bottom: 2px solid rgba(255, 255, 255, 0.05);
  position: relative;
  z-index: 1;
  overflow-x: auto;
  scrollbar-width: none; /* For Firefox */
  -ms-overflow-style: none; /* For Internet Explorer and Edge */
  
  &::-webkit-scrollbar {
    display: none; /* For Chrome, Safari, and Opera */
  }
  
  @media (max-width: 480px) {
    padding-bottom: 0.5rem;
  }
  
  &::before {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 1px;
    background: linear-gradient(90deg, 
      var(--background), 
      rgba(110, 72, 170, 0.3), 
      rgba(0, 200, 255, 0.3), 
      var(--background)
    );
    z-index: -1;
  }
`;

const TabItem = styled.button<{ active: boolean }>`
  background: none;
  border: none;
  padding: 0.75rem 1.5rem;
  font-size: 1.1rem;
  font-weight: ${(props: { active: boolean }) => props.active ? '600' : '400'};
  color: ${(props: { active: boolean }) => props.active ? 'var(--text-primary)' : 'var(--text-secondary)'};
  cursor: pointer;
  position: relative;
  transition: all 0.3s ease;
  font-family: inherit;
  text-transform: uppercase;
  letter-spacing: 1px;
  overflow: hidden;
  white-space: nowrap;
  flex-shrink: 0;
  
  @media (max-width: 480px) {
    padding: 0.6rem 1rem;
    font-size: 0.9rem;
  }
  
  @media (max-width: 350px) {
    padding: 0.5rem 0.8rem;
    font-size: 0.8rem;
    letter-spacing: 0.5px;
  }
  
  &:hover {
    color: ${(props: { active: boolean }) => props.active ? 'var(--text-primary)' : 'var(--text-primary)'};
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 100%;
    height: 3px;
    background: ${(props: { active: boolean }) => props.active ? 'var(--gradient-primary)' : 'transparent'};
    transform: scaleX(${(props: { active: boolean }) => props.active ? 1 : 0});
    transition: transform 0.3s ease;
    border-radius: 3px 3px 0 0;
  }
  
  &:hover::after {
    transform: scaleX(${(props: { active: boolean }) => props.active ? 1 : 0.3});
    background: ${(props: { active: boolean }) => props.active ? 'var(--gradient-primary)' : 'rgba(110, 72, 170, 0.3)'};
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${(props: { active: boolean }) => props.active ? 'radial-gradient(circle at center, rgba(110, 72, 170, 0.1), transparent 70%)' : 'transparent'};
    opacity: ${(props: { active: boolean }) => props.active ? 1 : 0};
    transition: opacity 0.3s ease;
    z-index: -1;
  }
  
  &:hover::before {
    opacity: 1;
  }
`;

const Tabs: React.FC<TabsProps> = ({ tabs, activeTab, onChange }) => {
  return (
    <TabsContainer>
      {tabs.map(tab => (
        <TabItem
          key={tab.id}
          active={tab.id === activeTab}
          onClick={() => onChange(tab.id)}
        >
          {tab.label}
        </TabItem>
      ))}
    </TabsContainer>
  );
};

export default Tabs; 