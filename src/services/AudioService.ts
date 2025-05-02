/**
 * Audio Service for game sound effects management
 */

// Define sound effects paths
const SOUNDS = {
    hover: '/sounds/hover.mp3',
    click: '/sounds/click.mp3',
    achievement: '/sounds/achievement.mp3',
    cardFlip: '/sounds/card-flip.mp3',
    levelUp: '/sounds/level-up.mp3',
    success: '/sounds/success.mp3',
    themeChange: '/sounds/theme-change.mp3',
    activate: '/sounds/activate.mp3',
    deactivate: '/sounds/deactivate.mp3'
};

// Placeholder MP3 data URI for testing when actual audio files aren't available
const PLACEHOLDER_AUDIO = 'data:audio/mp3;base64,SUQzBAAAAAAAI1RTU0UAAAAPAAADTGF2ZjU4Ljc2LjEwMAAAAAAAAAAAAAAA//tQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAASW5mbwAAAA8AAAASAAAeMwAUFBQUFCIiIiIiIjAwMDAwMD09PT09PUlJSUlJSVZWVlZWVmJiYmJiYm9vb29vb3t7e3t7e4iIiIiIiJSUlJSUlKCgoKCgoKysrKysrLi4uLi4uMTExMTExNDQ0NDQ0NfX19fX19jY2NjY2N/f39/f3+bm5ubm5vLy8vLy8v7+/v7+/v////////////////////////////////8AAAAATGF2YzU4LjEzAAAAAAAAAAAAAAAAJAYBF//6EAAAAAAAAAAAAAAAAAAA';

class AudioService {
    private static instance: AudioService;
    private audioMap: Map<string, HTMLAudioElement> = new Map();
    private _volume: number = 0.5;
    private _muted: boolean = false;
    private _soundsLoaded: boolean = false;

    private constructor() {
        this.preloadSounds();
    }

    /**
     * Get the singleton instance of AudioService
     */
    public static getInstance(): AudioService {
        if (!AudioService.instance) {
            AudioService.instance = new AudioService();
        }
        return AudioService.instance;
    }

    /**
     * Preload all sound effects
     */
    private preloadSounds(): void {
        // Check if running in a browser environment
        if (typeof window === 'undefined') return;

        // Use the placeholder for testing when actual files aren't available
        const usePlaceholder = true; // Set to false when real audio files are available

        Object.entries(SOUNDS).forEach(([key, path]) => {
            const audio = new Audio(usePlaceholder ? PLACEHOLDER_AUDIO : path);
            audio.volume = this._volume;
            audio.preload = 'auto';

            // Load the audio file
            audio.load();

            // Store in the map
            this.audioMap.set(key, audio);
        });

        this._soundsLoaded = true;
    }

    /**
     * Play a sound effect
     * @param sound - The sound key to play
     * @returns true if successfully played, false otherwise
     */
    public play(sound: keyof typeof SOUNDS): boolean {
        if (this._muted || !this._soundsLoaded) return false;

        const audio = this.audioMap.get(sound);
        if (!audio) return false;

        // Reset and play
        audio.currentTime = 0;

        // Handle play promise (browsers may block autoplay)
        const playPromise = audio.play();
        if (playPromise !== undefined) {
            playPromise.catch(error => {
                console.error(`Audio playback failed: ${error}`);
            });
        }

        return true;
    }

    /**
     * Set the volume for all sound effects
     * @param value - Volume level (0.0 to 1.0)
     */
    public setVolume(value: number): void {
        this._volume = Math.max(0, Math.min(1, value));

        // Update volume for all audio elements
        this.audioMap.forEach(audio => {
            audio.volume = this._volume;
        });
    }

    /**
     * Get the current volume level
     */
    public get volume(): number {
        return this._volume;
    }

    /**
     * Mute or unmute all sounds
     * @param muted - Whether to mute sounds
     */
    public setMuted(muted: boolean): void {
        this._muted = muted;
    }

    /**
     * Check if sounds are currently muted
     */
    public get muted(): boolean {
        return this._muted;
    }
}

export default AudioService.getInstance(); 