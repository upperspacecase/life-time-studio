"use client";

import Link from "next/link";
import { useState } from "react";

export default function Page() {
  const [activeSection, setActiveSection] = useState(0);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Image - Fixed */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/hero-bg.png')",
        }}
      >
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Logo - Fixed position, aligned with content */}
      <header className="absolute top-6 md:top-8 left-6 md:left-16 lg:left-24 z-20">
        <img
          src="/life.svg"
          alt="Life Time"
          className="h-24 md:h-28 lg:h-32"
        />
      </header>

      {/* Content Sections - Stacked vertically, animated */}
      <div
        className="absolute inset-0 z-10 transition-transform duration-700 ease-in-out"
        style={{ transform: `translateY(${activeSection * -100}vh)` }}
      >
        {/* Section 1: Mission - Full viewport */}
        <section className="h-screen w-full flex items-center px-6 md:px-16 lg:px-24">
          <div className="max-w-2xl">
            <p className="text-white text-xl md:text-2xl lg:text-3xl leading-relaxed tracking-wide lowercase font-serif">
              time is humanity&apos;s most precious resource.
              <br /><br />
              we build tools that simplify daily life, deepen real relationships, and reclaim moments for what truly matters.
              <br /><br />
              <em className="italic">Time well lived.</em>
            </p>

            <Link
              href="/dashboard"
              className="inline-block mt-8 text-amber-400 hover:text-amber-300 transition-colors text-lg tracking-wide font-serif"
            >
              Explore
            </Link>
          </div>
        </section>

        {/* Section 2: About - Full viewport */}
        <section className="h-screen w-full flex items-center px-6 md:px-16 lg:px-24">
          <div className="max-w-xl space-y-5">
            <div>
              <h2 className="text-amber-400 text-sm md:text-base font-serif mb-2">About Life-Time</h2>
              <p className="text-white text-sm md:text-base lg:text-lg leading-relaxed tracking-wide font-serif">
                We help you make the most of time - through tools that simplify daily life, deepen real relationships, and reclaim moments for what truly matters.
              </p>
            </div>

            <div>
              <h2 className="text-amber-400 text-sm md:text-base font-serif mb-2">Vision</h2>
              <p className="text-white text-sm md:text-base lg:text-lg leading-relaxed tracking-wide font-serif">
                We imagine a world where technology gracefully serves life instead of consuming it—where people have more time for genuine connection, unexpected joy, and the pursuits that make them truly feel alive.
              </p>
            </div>

            <div>
              <h2 className="text-amber-400 text-sm md:text-base font-serif mb-2">About Us</h2>
              <p className="text-white text-sm md:text-base lg:text-lg leading-relaxed tracking-wide font-serif">
                Just a couple of unique monkey&apos;s building the best tools we can.
              </p>
              <p className="text-white text-sm md:text-base lg:text-lg leading-relaxed tracking-wide font-serif mt-3">
                With Love.<br />
                <span className="text-amber-400">Tay & River</span>
              </p>
              <p className="text-white/70 text-xs md:text-sm leading-relaxed tracking-wide font-serif mt-4">
                Reach out if you want to build with us —{" "}
                <a href="mailto:hi@life-time.co" className="text-amber-400 hover:text-amber-300 transition-colors">
                  hi@life-time.co
                </a>
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* Dot Navigation - Fixed */}
      <nav className="absolute right-6 md:right-10 top-1/2 -translate-y-1/2 z-20 flex flex-col gap-3">
        <button
          onClick={() => setActiveSection(0)}
          className={`w-2.5 h-2.5 rounded-full transition-colors ${activeSection === 0 ? 'bg-amber-400' : 'bg-white/40 hover:bg-white'
            }`}
          aria-label="Mission"
        />
        <button
          onClick={() => setActiveSection(1)}
          className={`w-2.5 h-2.5 rounded-full transition-colors ${activeSection === 1 ? 'bg-amber-400' : 'bg-white/40 hover:bg-white'
            }`}
          aria-label="About"
        />
      </nav>
    </div>
  );
}
