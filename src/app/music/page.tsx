"use client";

import { Header } from "@/app/components/header";
import { SocialMediaFooter } from "@/app/components/footer";
import AudioPlayer from "@/app/components/audioplayer";
import AudioTrackItem from "@/app/components/trackListItem";
import { useState, useEffect } from "react";

// List of audio files
const audioFiles = [
    "/music/orion/Orion.wav",
    "/music/orion/Hope.wav",
    "/music/orion/Memory.wav",
    "/music/orion/Peace.wav",
    "/music/orion/Echo.wav",
];

export default function Music() {
    const [selectedTrack, setSelectedTrack] = useState(audioFiles[0]); // Default to the first track
    const [durations, setDurations] = useState<{ [key: string]: string }>({}); // Store durations for each audio file

    useEffect(() => {
        // Load each audio file and store its duration
        audioFiles.forEach((file) => {
            const audio = new Audio(file);
            audio.addEventListener("loadedmetadata", () => {
                setDurations((prev) => ({
                    ...prev,
                    [file]: formatDuration(audio.duration),
                }));
            });
        });
    }, []);

    // Helper function to format duration in mm:ss
    const formatDuration = (seconds: number) => {
        const minutes = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
    };

    return (
        <div
            className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">

            <Header/>

            <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
                <ul className="list-none w-full">
                    {audioFiles.map((file) => (
                        <AudioTrackItem
                            key={file}
                            file={file}
                            isSelected={file === selectedTrack}
                            duration={durations[file] || "Loading..."}
                            onSelect={() => setSelectedTrack(file)}
                        />
                    ))}
                </ul>
                {/* Ensure that AudioPlayer resets by using a key tied to the selected track */}
                <AudioPlayer key={selectedTrack} src={selectedTrack} />
            </main>

            <SocialMediaFooter/>
        </div>
    );
}
