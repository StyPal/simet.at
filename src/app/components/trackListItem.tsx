// components/AudioTrackItem.tsx
import React from "react";

interface AudioTrackItemProps {
    file: string;
    isSelected: boolean;
    duration: string;
    onSelect: () => void;
}

const AudioTrackItem: React.FC<AudioTrackItemProps> = ({ file, isSelected, duration, onSelect }) => {
    return (
        <li
            className={`flex justify-between items-center w-full mb-4 p-2 cursor-pointer rounded text-background ${
                isSelected ? ' bg-gray-light font-bold' : 'bg-gray'
            }`}
            onClick={onSelect}
        >
            <span>{file.split('/').pop()}</span> {/* Track name */}
            <span className="text-sm">{duration}</span>
        </li>
    );
};

export default AudioTrackItem;
