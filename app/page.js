import Link from "next/link";
import Image from "next/image";

export default function Page() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/hero-bg.png')",
        }}
      >
        {/* Subtle dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Navigation */}
      <header className="relative z-10 p-6 md:p-8 flex items-center justify-between">
        <Image
          src="/life.svg"
          alt="Life Time"
          width={120}
          height={40}
          className="invert"
        />
        <button
          className="flex flex-col gap-1.5 group"
          aria-label="Menu"
        >
          <span className="w-6 h-0.5 bg-white transition-all group-hover:w-8"></span>
          <span className="w-8 h-0.5 bg-white"></span>
          <span className="w-5 h-0.5 bg-white transition-all group-hover:w-8"></span>
        </button>
      </header>

      {/* Hero Content */}
      <main className="relative z-10 flex items-center min-h-[calc(100vh-120px)] px-6 md:px-16 lg:px-24">
        <div className="max-w-2xl">
          <p className="text-white text-xl md:text-2xl lg:text-3xl leading-relaxed tracking-wide lowercase font-serif">
            time is humanity&apos;s most precious resource. we build tools that simplify daily life, deepen real relationships, and reclaim moments for what truly matters.{" "}
            <em className="italic">Time well lived.</em>
          </p>

          <Link
            href="/dashboard"
            className="inline-block mt-8 text-amber-400 hover:text-amber-300 transition-colors text-lg tracking-wide font-serif"
          >
            Explore
          </Link>
        </div>
      </main>

      {/* Dot Navigation */}
      <nav className="absolute right-6 md:right-10 top-1/2 -translate-y-1/2 z-10 flex flex-col gap-3">
        <button className="w-2.5 h-2.5 rounded-full bg-white/40 hover:bg-white transition-colors" aria-label="Section 1"></button>
        <button className="w-2.5 h-2.5 rounded-full bg-white/40 hover:bg-white transition-colors" aria-label="Section 2"></button>
        <button className="w-2.5 h-2.5 rounded-full bg-amber-400" aria-label="Section 3 (current)"></button>
      </nav>
    </div>
  );
}
