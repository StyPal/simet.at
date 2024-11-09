"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";

interface AudioPlayerProps {
    src: string; // The audio file source URL
}

const AudioPlayer: React.FC<AudioPlayerProps> = ({ src }) => {
    const audioRef = useRef<HTMLAudioElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [isMuted, setIsMuted] = useState(false);
    const [error, setError] = useState<string | null>(null); // State to track errors
    const [projectName, setProjectName] = useState(""); // State for project name

    if (!src) {
        return <div className="text-center text-red">No Audio Selected</div>;
    }

    useEffect(() => {
        // Logic to set the project name based on the URL
        const urlParts = src.split("/");
        if (urlParts[urlParts.length - 2] === "orion") {
            setProjectName("OST - The Orion Project");
        } else {
            setProjectName(""); // Reset if not "orion"
        }
    }, [src]); // Run effect when the `src` changes

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
        const urlParts = url.split("/");
        return urlParts[urlParts.length - 1]; // Return the file name from the URL
    }

    return (
        <div className="flex flex-col items-center justify-center border-2 rounded-xl p-6 border-foreground bg-gray">
            {/* Display error if any */}
            {error && <div className="text-center text-red">{error}</div>}

            {/* Display audio name */}
            <div id="audioInfo" className="text-center mb-4 text-foreground text-lg font-bold">
                <label>{audioRef.current ? getAudioFileName(src) : ""}</label>
            </div>

            {/* Display project name */}
            {projectName && (
                <div className="text-center mb-4">
                    <label>{projectName}</label>
                </div>
            )}

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
                <button onClick={handlePlayPause} className="w-full mx-2">
                    <Image
                        src={isPlaying ? "/music/pause-button.svg" : "/music/play-button.svg"}
                        alt={isPlaying ? "pause" : "play"}
                        height="20"
                        width="20"
                        className="dark:invert"
                    />
                </button>
                <label className="font-mono">{convertTime(currentTime)}</label>
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
                    className="accent-red mx-2 cursor-pointer max-w-32 sm:max-w-xl"
                />
                <label className="font-mono">{convertTime(duration)}</label>
                <button onClick={handleMute} className="w-full mx-2">
                    <Image
                        src={isMuted ? "/music/audio-off.svg" : "/music/audio-high.svg"}
                        alt={isMuted ? "unmute" : "mute"}
                        height="25"
                        width="25"
                        className="dark:invert"
                    />
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
