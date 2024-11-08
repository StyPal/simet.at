"use client";

import {useRef, useState} from 'react';
import Image from "next/image";

interface AudioPlayerProps {
    src: string; // The audio file source URL
}

const AudioPlayer: React.FC<AudioPlayerProps> = ({src}) => {
    const audioRef = useRef<HTMLAudioElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [isMuted, setIsMuted] = useState(false);
    const [error, setError] = useState<string | null>(null); // State to track errors

    if (!src) {
        return <div className="text-center text-red">No Audio Selected</div>;
    }

    const handlePlayPause = () => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.pause();
            } else {
                audioRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    const handleMute = () => {
        if (audioRef.current) {
            audioRef.current.muted = !isMuted;
            setIsMuted(!isMuted);
        }
    };

    const handleTimeUpdate = () => {
        if (audioRef.current) {
            setCurrentTime(audioRef.current.currentTime);
        }
    };

    const handleLoadedMetadata = () => {
        if (audioRef.current) {
            setDuration(audioRef.current.duration);
        }
    };

    const handleError = () => {
        setError("No Audio Selected");
    };

    function getAudioFileName(url: string): string {
        const urlParts = url.split('/');
        return urlParts[urlParts.length - 1];
    }

    return (
        <div className="flex flex-col items-center justify-center">
            {/* Display error if any */}
            {error && <div className="text-center text-red">{error}</div>}

            {/* Display audio name */}
            <div id="audioInfo" className="text-center mb-4">{ error ?
                <label>{audioRef.current ? getAudioFileName(src) : ""}</label> : null }
            </div>

            {/* Audio player controls */}
            <div className="relative flex justify-between items-center">
                <audio
                    ref={audioRef}
                    src={src}
                    onTimeUpdate={handleTimeUpdate}
                    onLoadedMetadata={handleLoadedMetadata}
                    onEnded={() => setIsPlaying(false)}
                    onError={handleError}
                />
                <button
                    onClick={handlePlayPause}
                    className="w-full mx-2"
                >
                    <Image
                        src={isPlaying ? "/music/pause-button.svg" : "/music/play-button.svg"}
                        alt={isPlaying ? "pause" : "play"}
                        height="16" width="16"
                        className="dark:invert"/>
                </button>
                <code>{convertTime(currentTime)}</code>
                <input
                    type="range"
                    min="0"
                    max={duration}
                    step="0.1"
                    value={currentTime}
                    onChange={(e) => {
                        if (audioRef.current) {
                            audioRef.current.currentTime = parseFloat(e.target.value);
                        }
                        setCurrentTime(parseFloat(e.target.value));
                    }}
                    className="accent-red mx-2"
                />
                <code>{convertTime(duration)}</code>
                <button onClick={handleMute} className="w-full mx-2">
                    <Image
                        src={isMuted ? "/music/audio-off.svg" : "/music/audio-high.svg"}
                        alt={isMuted ? "unmute" : "mute"}
                        height="16" width="16"
                        className="dark:invert"/>
                </button>
            </div>
        </div>
    );

    function convertTime(totalSeconds: number): string {
        let seconds = Math.floor(totalSeconds % 60);
        let minutes = Math.floor(totalSeconds / 60);
        return seconds < 10 ? `${minutes}:0${seconds}` : `${minutes}:${seconds}`;
    }
};

export default AudioPlayer;
