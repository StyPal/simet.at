"use client";

import Image from "next/image";
import { useState } from "react";

const images = [
    "/Side.jpg",
    "/Night.jpg",
    "/Outside.jpg",
];

export default function ImageCarousel() {
    const [currentImage, setCurrentImage] = useState(0);

    const handleNextImage = () => setCurrentImage((prev) => (prev + 1) % images.length);
    const handlePrevImage = () => setCurrentImage((prev) => (prev - 1 + images.length) % images.length);

    return (
        <div className="relative w-full sm:w-1/2 max-w-lg">
            <Image
                alt={`Carousel Image ${currentImage + 1}`}
                src={images[currentImage]}
                width={640}
                height={360}
                className="rounded-lg"
            />
            <button
                onClick={handlePrevImage}
                className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-blue text-background font-extrabold p-3 rounded-br-2xl rounded-tr-2xl"
            >
                &lt;
            </button>
            <button
                onClick={handleNextImage}
                className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-red text-background font-extrabold p-3 rounded-bl-2xl rounded-tl-2xl"
            >
                &gt;
            </button>
        </div>
    );
}
