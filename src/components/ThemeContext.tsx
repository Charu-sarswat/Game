import React, { createContext, useState, useContext, useEffect } from 'react';

// Define theme types
export type ThemeType = 'default' | 'dark' | 'neon' | 'retro' | 'fantasy';

// Theme properties interface
interface ThemeProperties {
    primary: string;
    secondary: string;
    background: string;
    text: string;
    accent: string;
    gradientStart: string;
    gradientEnd: string;
}

// Theme data
const themeData: Record<ThemeType, ThemeProperties> = {
    default: {
        primary: '#00c8ff',
        secondary: '#92fe9d',
        background: '#1e1e28',
        text: '#ffffff',
        accent: '#6e48aa',
        gradientStart: '#00c8ff',
        gradientEnd: '#92fe9d'
    },
    dark: {
        primary: '#7928ca',
        secondary: '#ff0080',
        background: '#111111',
        text: '#f0f0f0',
        accent: '#ff0080',
        gradientStart: '#7928ca',
        gradientEnd: '#ff0080'
    },
    neon: {
        primary: '#00ff00',
        secondary: '#ffff00',
        background: '#0f0f2d',
        text: '#ffffff',
        accent: '#ff00ff',
        gradientStart: '#00ff66',
        gradientEnd: '#ff00ff'
    },
    retro: {
        primary: '#ff7700',
        secondary: '#ffcc00',
        background: '#1a2e3b',
        text: '#f0f0f0',
        accent: '#ff3300',
        gradientStart: '#ff3300',
        gradientEnd: '#ffcc00'
    },
    fantasy: {
        primary: '#a786df',
        secondary: '#ffc0cb',
        background: '#2d2b55',
        text: '#ffffff',
        accent: '#ff9d00',
        gradientStart: '#a786df',
        gradientEnd: '#ffc0cb'
    }
};

// Theme context interface
interface ThemeContextType {
    currentTheme: ThemeType;
    themeColors: ThemeProperties;
    changeTheme: (theme: ThemeType) => void;
    unlockTheme: (theme: ThemeType) => void;
    unlockedThemes: ThemeType[];
}

// Create the context
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Theme provider component
export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [currentTheme, setCurrentTheme] = useState<ThemeType>('default');
    const [unlockedThemes, setUnlockedThemes] = useState<ThemeType[]>(['default']);

    // Check for saved themes in localStorage
    useEffect(() => {
        const savedTheme = localStorage.getItem('gameTheme') as ThemeType;
        const savedUnlocked = localStorage.getItem('unlockedThemes');

        if (savedTheme && Object.keys(themeData).includes(savedTheme)) {
            setCurrentTheme(savedTheme);
        }

        if (savedUnlocked) {
            try {
                const parsedUnlocked = JSON.parse(savedUnlocked) as ThemeType[];
                setUnlockedThemes(parsedUnlocked);
            } catch (e) {
                console.error('Failed to parse unlocked themes:', e);
            }
        }

        // Apply CSS variables to root - verify savedTheme or use default
        const themeToUse = savedTheme && Object.keys(themeData).includes(savedTheme)
            ? savedTheme
            : 'default';
        updateCssVariables(themeToUse);
    }, []);

    // Update CSS variables when theme changes
    const updateCssVariables = (theme: ThemeType) => {
        // Make sure theme is one of our valid values
        const validTheme = Object.keys(themeData).includes(theme) ? theme : 'default';

        // Now we know colors will be defined
        const colors = themeData[validTheme];

        if (!colors) {
            console.error(`Theme data for "${validTheme}" not found`);
            return;
        }

        const root = document.documentElement;

        root.style.setProperty('--primary', colors.primary);
        root.style.setProperty('--secondary', colors.secondary);
        root.style.setProperty('--background', colors.background);
        root.style.setProperty('--text-primary', colors.text);
        root.style.setProperty('--accent', colors.accent);
        root.style.setProperty('--gradient-start', colors.gradientStart);
        root.style.setProperty('--gradient-end', colors.gradientEnd);
        root.style.setProperty('--gradient-primary', `linear-gradient(90deg, ${colors.gradientStart}, ${colors.gradientEnd})`);
    };

    // Change current theme
    const changeTheme = (theme: ThemeType) => {
        if (unlockedThemes.includes(theme)) {
            setCurrentTheme(theme);
            localStorage.setItem('gameTheme', theme);
            updateCssVariables(theme);
        }
    };

    // Unlock a new theme
    const unlockTheme = (theme: ThemeType) => {
        if (!unlockedThemes.includes(theme)) {
            const newUnlocked = [...unlockedThemes, theme];
            setUnlockedThemes(newUnlocked);
            localStorage.setItem('unlockedThemes', JSON.stringify(newUnlocked));
        }
    };

    return (
        <ThemeContext.Provider value={{
            currentTheme,
            themeColors: themeData[currentTheme],
            changeTheme,
            unlockTheme,
            unlockedThemes
        }}>
            {children}
        </ThemeContext.Provider>
    );
};

// Custom hook to use the theme context
export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (context === undefined) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};

export default ThemeContext; 