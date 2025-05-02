import React, { useState, useEffect, useRef } from 'react';
import styled, { keyframes, css } from 'styled-components';

// Sample terminal commands and responses
const COMMANDS = {
  help: 'Available commands: help, clear, status, scan, connect, list, info, exit',
  clear: 'Terminal cleared.',
  status: 'SYSTEM STATUS: ONLINE\nNETWORK: CONNECTED\nFIREWALL: ACTIVE\nENCRYPTION: ENABLED\nTHREAT LEVEL: LOW',
  scan: 'Scanning network...\nFound 5 nodes\nScan complete: No threats detected',
  connect: 'Establishing secure connection...\nConnection established. Welcome to the MAINFRAME.',
  list: 'Available nodes:\n- CENTRAL_NODE [SECURED]\n- DATA_VAULT [RESTRICTED]\n- NEON_DISTRICT [UNLOCKED]\n- BLACK_MARKET [HAZARDOUS]\n- NEURAL_NET [ENCRYPTED]',
  info: 'CYBERNET v4.2.1\nBuild date: 2077-05-12\nEncryption: AES-4096\nProtocol: QUANTUM-TCP',
  exit: 'Disconnecting from terminal...\nConnection terminated.'
};

// Animations
const blink = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
`;

const scanline = keyframes`
  0% { transform: translateY(-100%); }
  100% { transform: translateY(100%); }
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

const typing = keyframes`
  from { width: 0 }
  to { width: 100% }
`;

const glitch = keyframes`
  0% { transform: translate(0); }
  20% { transform: translate(-2px, 2px); }
  40% { transform: translate(-2px, -2px); }
  60% { transform: translate(2px, 2px); }
  80% { transform: translate(2px, -2px); }
  100% { transform: translate(0); }
`;

const pulse = keyframes`
  0% { box-shadow: 0 0 5px var(--primary); }
  50% { box-shadow: 0 0 15px var(--primary); }
  100% { box-shadow: 0 0 5px var(--primary); }
`;

// Styled Components
const TerminalContainer = styled.div`
  width: 100%;
  max-width: 800px;
  height: 500px;
  margin: 0 auto;
  background-color: rgba(0, 0, 0, 0.85);
  border: 1px solid var(--primary);
  border-radius: 5px;
  overflow: hidden;
  position: relative;
  font-family: monospace;
  color: var(--primary);
  box-shadow: 0 0 20px rgba(var(--primary-rgb), 0.3);
  animation: ${css`${pulse}`} 4s infinite;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: 
      repeating-linear-gradient(
        0deg,
        rgba(var(--primary-rgb), 0.03) 1px, 
        transparent 2px, 
        transparent 4px
      );
    pointer-events: none;
    z-index: 1;
    opacity: 0.2;
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
      rgba(var(--primary-rgb), 0.05),
      transparent
    );
    animation: ${css`${scanline}`} 8s linear infinite;
    pointer-events: none;
    z-index: 1;
    opacity: 0.3;
  }
`;

const TerminalHeader = styled.div`
  background-color: rgba(var(--primary-rgb), 0.2);
  padding: 0.5rem 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid var(--primary);
  user-select: none;
`;

const HeaderTitle = styled.div`
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: var(--primary);
  
  span {
    color: var(--secondary);
    animation: ${css`${flicker}`} 3s infinite;
  }
`;

const HeaderControls = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const HeaderButton = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: rgba(var(--primary-rgb), 0.4);
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: var(--primary);
  }
`;

const TerminalContent = styled.div`
  height: calc(100% - 70px);
  padding: 1rem;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  
  /* Scrollbar styling */
  &::-webkit-scrollbar {
    width: 5px;
  }
  
  &::-webkit-scrollbar-track {
    background: rgba(0, 0, 0, 0.3);
  }
  
  &::-webkit-scrollbar-thumb {
    background: var(--primary);
    border-radius: 5px;
  }
`;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const TerminalWelcome = styled.div`
  color: var(--secondary);
  margin-bottom: 1rem;
  font-size: 0.9rem;
  line-height: 1.5;
`;

interface TerminalLineProps {
  isInput?: boolean;
  isOutput?: boolean;
  isError?: boolean;
  typing?: boolean;
}

const TerminalLine = styled.div<TerminalLineProps>`
  margin-bottom: 0.5rem;
  line-height: 1.4;
  font-size: 0.9rem;
  color: ${props =>
    props.isError ? 'var(--error)' :
      props.isInput ? 'var(--primary)' :
        props.isOutput ? 'var(--text-primary)' :
          'var(--primary)'
  };
  position: relative;
  
  ${props => props.typing && css`
    white-space: nowrap;
    overflow: hidden;
    border-right: 2px solid var(--primary);
    animation: 
      ${css`${typing}`} 2s steps(40, end),
      ${css`${blink}`} 0.75s step-end infinite;
  `}
  
  &:hover {
    animation: ${css`${glitch}`} 0.2s forwards;
  }
`;

const TerminalPrompt = styled.span`
  color: var(--secondary);
  margin-right: 0.5rem;
  user-select: none;
`;

const TerminalInput = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

const InputField = styled.input`
  width: 100%;
  background-color: transparent;
  border: none;
  color: var(--primary);
  font-family: monospace;
  font-size: 0.9rem;
  outline: none;
  padding: 0.5rem 0;
  caret-color: var(--primary);
`;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const InputCursor = styled.div`
  width: 8px;
  height: 1.2rem;
  background-color: var(--primary);
  margin-left: 0.3rem;
  animation: ${css`${blink}`} 1s infinite;
`;

const StatusIndicator = styled.div`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: var(--secondary);
  animation: ${css`${pulse}`} 2s infinite;
  
  &::after {
    content: 'ONLINE';
    position: absolute;
    top: -2px;
    right: 12px;
    font-size: 0.7rem;
    color: var(--secondary);
    text-transform: uppercase;
    white-space: nowrap;
  }
`;

const CommandSuggestions = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.9);
  border: 1px solid var(--primary);
  z-index: 10;
  max-height: 150px;
  overflow-y: auto;
`;

const SuggestionItem = styled.div<{ isSelected: boolean }>`
  padding: 0.5rem 1rem;
  cursor: pointer;
  
  ${props => props.isSelected && css`
    background-color: rgba(var(--primary-rgb), 0.2);
  `}
  
  &:hover {
    background-color: rgba(var(--primary-rgb), 0.2);
  }
`;

interface TerminalOutput {
  id: number;
  content: string;
  type: 'input' | 'output' | 'error' | 'system';
}

const formatCommandResponse = (command: string, response: string) => {
  // Process command output with simulated typing delay logic
  return response;
};

interface CyberTerminalProps {
  isMinimized?: boolean;
  onMinimize?: () => void;
  onMaximize?: () => void;
  onClose?: () => void;
}

const CyberTerminal: React.FC<CyberTerminalProps> = ({
  isMinimized = false,
  onMinimize,
  onMaximize,
  onClose
}) => {
  const [inputValue, setInputValue] = useState('');
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [output, setOutput] = useState<TerminalOutput[]>([
    {
      id: 0,
      content: 'CYBERNET TERMINAL v4.2.1\nEstablishing secure connection...\nConnection established.\nType "help" for available commands.',
      type: 'system'
    }
  ]);
  const [nextId, setNextId] = useState(1);
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [selectedSuggestion, setSelectedSuggestion] = useState(0);

  const contentRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Focus input on mount
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  // Scroll to bottom when new output is added
  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.scrollTop = contentRef.current.scrollHeight;
    }
  }, [output]);

  // Filter command suggestions
  useEffect(() => {
    if (inputValue.trim()) {
      const validCommands = Object.keys(COMMANDS);
      const filtered = validCommands.filter(cmd =>
        cmd.startsWith(inputValue.toLowerCase())
      );
      setSuggestions(filtered);
      setSelectedSuggestion(0);
    } else {
      setSuggestions([]);
    }
  }, [inputValue]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const addOutput = (content: string, type: 'input' | 'output' | 'error' | 'system') => {
    setOutput(prev => [...prev, { id: nextId, content, type }]);
    setNextId(prev => prev + 1);
  };

  const processCommand = (command: string) => {
    const cmd = command.trim().toLowerCase();

    // Add command to history
    setCommandHistory(prev => [cmd, ...prev].slice(0, 20));
    setHistoryIndex(-1);

    // Process command
    if (cmd in COMMANDS) {
      const response = formatCommandResponse(cmd, COMMANDS[cmd as keyof typeof COMMANDS]);

      // Special handling for "clear" command
      if (cmd === 'clear') {
        setOutput([{ id: nextId, content: response, type: 'system' }]);
        setNextId(prev => prev + 1);
        return;
      }

      addOutput(response, 'output');
    } else if (cmd) {
      addOutput(`Command not found: ${cmd}`, 'error');
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    // Handle command history navigation
    if (e.key === 'ArrowUp') {
      e.preventDefault();

      if (suggestions.length > 0) {
        setSelectedSuggestion(prev => (prev > 0 ? prev - 1 : prev));
      } else if (commandHistory.length > 0 && historyIndex < commandHistory.length - 1) {
        const newIndex = historyIndex + 1;
        setHistoryIndex(newIndex);
        setInputValue(commandHistory[newIndex]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();

      if (suggestions.length > 0) {
        setSelectedSuggestion(prev => (prev < suggestions.length - 1 ? prev + 1 : prev));
      } else if (historyIndex > 0) {
        const newIndex = historyIndex - 1;
        setHistoryIndex(newIndex);
        setInputValue(commandHistory[newIndex]);
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setInputValue('');
      }
    } else if (e.key === 'Tab') {
      e.preventDefault();

      if (suggestions.length > 0) {
        setInputValue(suggestions[selectedSuggestion]);
      }
    } else if (e.key === 'Enter') {
      const command = inputValue.trim();

      if (command) {
        addOutput(`> ${command}`, 'input');
        processCommand(command);
        setInputValue('');
        setSuggestions([]);
      }
    } else if (e.key === 'Escape') {
      setSuggestions([]);
    }
  };

  const handleSuggestionClick = (suggestion: string) => {
    setInputValue(suggestion);
    setSuggestions([]);
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <TerminalContainer>
      <TerminalHeader>
        <HeaderTitle>CYBERNET <span>TERMINAL</span></HeaderTitle>
        <HeaderControls>
          <HeaderButton onClick={onMinimize} />
          <HeaderButton onClick={onMaximize} />
          <HeaderButton onClick={onClose} />
        </HeaderControls>
      </TerminalHeader>

      <TerminalContent ref={contentRef}>
        {output.map(line => (
          <TerminalLine
            key={line.id}
            isInput={line.type === 'input'}
            isOutput={line.type === 'output'}
            isError={line.type === 'error'}
          >
            {line.type === 'input' ? (
              line.content
            ) : (
              line.content.split('\n').map((text, i) => (
                <div key={i}>{text}</div>
              ))
            )}
          </TerminalLine>
        ))}

        <TerminalInput>
          <TerminalPrompt>&gt;</TerminalPrompt>
          <InputField
            ref={inputRef}
            value={inputValue}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            placeholder="Enter command..."
          />

          {suggestions.length > 0 && (
            <CommandSuggestions>
              {suggestions.map((suggestion, index) => (
                <SuggestionItem
                  key={suggestion}
                  isSelected={index === selectedSuggestion}
                  onClick={() => handleSuggestionClick(suggestion)}
                >
                  {suggestion}
                </SuggestionItem>
              ))}
            </CommandSuggestions>
          )}
        </TerminalInput>
      </TerminalContent>

      <StatusIndicator />
    </TerminalContainer>
  );
};

export default CyberTerminal; 