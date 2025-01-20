"use client";

import { Header } from "@/app/components/header";
import { SocialMediaFooter } from "@/app/components/footer";
import KoFiWidget from "@/app/components/koFiWidget";
import ImageCarousel from "@/app/components/imageCarousel";

export default function GermanPage() {
    return (
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
            <Header />
            <main className="flex flex-col sm:flex-row gap-8 row-start-2 items-start w-full sm:w-1/2">
                <ImageCarousel />
                <div className="flex flex-col gap-4 w-full sm:w-1/2 text-background">
                    <div className="bg-gray-dark dark:bg-gray-light p-4 rounded-lg shadow-xl">
                        <h2 className="text-lg font-bold">Über mich</h2>
                        <p>
                            Ich bin Programmierer mit Erfahrung in Java, Kotlin, C#, React, TypeScript und Next.js. Ich spiele (und komponiere am) Klavier
                            und komme aus Österreich. Derzeit besuche ich eine HTL für Informatik.
                        </p>
                    </div>
                    <div className="bg-gray-dark dark:bg-gray-light p-4 rounded-lg shadow-xl">
                        <h2 className="text-lg font-bold">Diplomarbeit</h2>
                        <ul className="list-disc ml-4">
                            <li>Erstellung von 3D-Assets in Blockbench.</li>
                            <li>Grundlegende Animationen und UV-Mapping für kleinere Modelle mit HDRP-Shadern.</li>
                            <li>Implementierung von Interaktionen zwischen Tieren und Objekten.</li>
                            <li>Sounddesign: SFX, Ambient-Sounds und Musikkomposition.</li>
                            <li>Raumdesign: Umsetzung in Unity mit ProBuilder.</li>
                        </ul>
                    </div>
                    <div className="bg-gray-dark dark:bg-gray-light p-4 rounded-lg shadow-xl">
                        <h2 className="text-lg font-bold">Bewegungs- und Verhaltensimplementierung für meine DA</h2>
                        <p>
                            Eine Ente bewegt sich entlang einer kubischen Bézier-Kurve, die unendlich wirkt und kontinuierlich generiert wird.
                            Weitere Bewegungsmuster für ein Unity-GameObject nutzen Bézier-Kurven mit bis zu 3 Ankerpunkten und variierenden
                            Kontrollpunkten im selbst wählbaren Bereich (x und z).
                        </p>
                    </div>
                </div>
            </main>
            <KoFiWidget />
            <SocialMediaFooter />
        </div>
    );
}
