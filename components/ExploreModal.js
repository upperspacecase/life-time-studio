"use client";

import { useState } from "react";

const projects = [
    {
        id: 1,
        title: "Life-Time",
        subtitle: "Time Management",
        url: "https://life-time.co",
        image: "/projects/life-time.png", // We'll need to add this image
    },
    // Add more projects here as needed
];

export default function ExploreModal({ isOpen, onClose }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    if (!isOpen) return null;

    const handleNext = () => {
        setCurrentIndex((prev) => (prev + 1) % projects.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
    };

    const handleProjectClick = (url) => {
        window.open(url, "_blank");
    };

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center"
            onClick={onClose}
        >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/90 backdrop-blur-sm"></div>

            {/* Modal Content */}
            <div
                className="relative z-10 w-full max-w-5xl px-6 md:px-12"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Header */}
                <div className="flex items-center justify-between mb-8">
                    <h2 className="text-white text-lg md:text-xl tracking-widest uppercase font-serif">
                        Discover Our Projects
                    </h2>
                    <button
                        onClick={onClose}
                        className="text-amber-400 hover:text-amber-300 transition-colors text-sm tracking-wider uppercase font-serif"
                    >
                        Close
                    </button>
                </div>

                {/* Projects Carousel */}
                <div className="relative flex items-center">
                    {/* Left Arrow */}
                    {projects.length > 1 && (
                        <button
                            onClick={handlePrev}
                            className="absolute -left-4 md:-left-12 z-10 text-white/50 hover:text-white transition-colors"
                            aria-label="Previous"
                        >
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>
                    )}

                    {/* Project Cards */}
                    <div className="flex gap-4 md:gap-6 overflow-hidden justify-center w-full">
                        {projects.map((project, index) => (
                            <div
                                key={project.id}
                                onClick={() => handleProjectClick(project.url)}
                                className={`relative flex-shrink-0 w-40 md:w-52 aspect-[3/4] rounded-lg overflow-hidden cursor-pointer group transition-all duration-300 ${index === currentIndex
                                        ? 'ring-2 ring-amber-400 scale-105'
                                        : 'opacity-70 hover:opacity-100'
                                    }`}
                            >
                                {/* Project Image Placeholder */}
                                <div className="absolute inset-0 bg-gradient-to-b from-neutral-700 to-neutral-900 flex items-end p-4">
                                    <div>
                                        <h3 className="text-white text-lg md:text-xl font-serif font-semibold">
                                            {project.title}
                                        </h3>
                                        <p className="text-white/60 text-xs md:text-sm font-serif">
                                            {project.subtitle}
                                        </p>
                                    </div>
                                </div>

                                {/* Hover Overlay */}
                                <div className="absolute inset-0 bg-amber-400/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            </div>
                        ))}
                    </div>

                    {/* Right Arrow */}
                    {projects.length > 1 && (
                        <button
                            onClick={handleNext}
                            className="absolute -right-4 md:-right-12 z-10 text-white/50 hover:text-white transition-colors"
                            aria-label="Next"
                        >
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    )}
                </div>

                {/* Tap hint */}
                <p className="text-center text-white/40 text-sm mt-8 font-serif">
                    Tap a project to visit
                </p>
            </div>
        </div>
    );
}
