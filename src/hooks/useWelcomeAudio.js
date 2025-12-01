import { useEffect, useState } from 'react';

const useWelcomeAudio = () => {
    const [hasPlayed, setHasPlayed] = useState(false);

    useEffect(() => {
        const playAudio = () => {
            if (hasPlayed) return;

            const utterance = new SpeechSynthesisUtterance("Welcome to the Portfolio of Santosh");
            utterance.volume = 1;
            utterance.rate = 0.9; // Slightly slower for dramatic effect
            utterance.pitch = 1;

            // Select a good voice if available
            const voices = window.speechSynthesis.getVoices();
            const preferredVoice = voices.find(voice => voice.name.includes('Google US English') || voice.name.includes('Microsoft David'));
            if (preferredVoice) utterance.voice = preferredVoice;

            window.speechSynthesis.speak(utterance);
            setHasPlayed(true);
        };

        const handleInteraction = () => {
            playAudio();
            // Remove listeners after first interaction
            window.removeEventListener('click', handleInteraction);
            window.removeEventListener('scroll', handleInteraction);
            window.removeEventListener('keydown', handleInteraction);
        };

        window.addEventListener('click', handleInteraction);
        window.addEventListener('scroll', handleInteraction);
        window.addEventListener('keydown', handleInteraction);

        return () => {
            window.removeEventListener('click', handleInteraction);
            window.removeEventListener('scroll', handleInteraction);
            window.removeEventListener('keydown', handleInteraction);
        };
    }, [hasPlayed]);

    return hasPlayed;
};

export default useWelcomeAudio;
