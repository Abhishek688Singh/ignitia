import React from "react";

const stats = [
    { value: "50+", label: "Events" },
    { value: "100+", label: "Artists" },
    { value: "10K+", label: "Attendees" },
    { value: "2", label: "Days" },
];

export const AboutIgnitia: React.FC = () => {
    return (
        <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-12 px-4 sm:px-6 lg:flex-row lg:items-center lg:gap-16 lg:px-8">

            {/* Left Emblem */}
            <div className="flex w-full justify-center lg:w-auto lg:pr-28">
                <div className="relative h-64 w-64 sm:h-80 sm:w-80">
                    <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_center,rgba(0,0,0,0)_40%,rgba(0,0,0,0.9)_100%)]" />
                    <div className="absolute -inset-4 rounded-full border border-amber-300/60 shadow-[0_0_60px_rgba(255,193,7,0.7)]" />

                    <div className="absolute inset-4 rounded-full bg-gradient-to-br from-yellow-300 via-amber-500 to-orange-600 p-[4px] shadow-[0_0_45px_rgba(255,193,7,0.8)]">
                        <div className="flex h-full w-full items-center justify-center rounded-full bg-[#050010]">
                            <div className="relative h-[60%] w-[28%]">
                                <div className="absolute inset-0 bg-gradient-to-b from-yellow-200 via-amber-400 to-orange-500 blur-sm" />
                                <svg
                                    viewBox="0 0 64 128"
                                    className="relative h-full w-full fill-yellow-300 drop-shadow-[0_0_18px_rgba(255,215,0,0.9)]"
                                >
                                    <path d="M32 0C20 18 14 32 14 44c0 11 6 18 12 24-6 4-10 11-10 20 0 16 10 26 16 40 6-14 16-24 16-40 0-9-4-16-10-20 6-6 12-13 12-24C50 32 44 18 32 0z" />
                                </svg>
                            </div>
                        </div>
                    </div>

                    <div className="pointer-events-none absolute -inset-8 rounded-full border border-amber-400/50 opacity-80 [box-shadow:0_0_40px_rgba(255,193,7,0.8)]" />
                </div>
            </div>

            {/* Right Text */}
            <div className="w-full max-w-xl text-center lg:text-left">
                <div className="inline-block bg-gradient-to-r from-yellow-300 via-amber-400 to-orange-500 bg-clip-text text-3xl font-extrabold tracking-wide text-transparent sm:text-4xl lg:text-5xl">
                    About IGNITIA
                </div>

                <p className="mt-3 text-sm font-semibold uppercase tracking-[0.2em] text-amber-300/80">
                    Managed by SAHYOG JANKALYAN SAMITI
                </p>

                <p className="mt-6 text-base leading-relaxed text-amber-50/80 sm:text-[0.98rem]">
                    Ignitia 2026, PSIT&apos;s flagship techno-cultural fest, is a celebration of
                    innovation, art, and limitless energy. Across two unforgettable days, the campus
                    transforms into a vibrant arena of performances, competitions, and immersive
                    experiences—giving students a platform to showcase their talent, leadership, and
                    creativity on a grand stage.
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {stats.map((item) => (
                        <div
                            key={item.label}
                            className="group flex flex-col items-center justify-center rounded-2xl border border-amber-400/40 bg-white/5 px-6 py-4 shadow-[0_0_24px_rgba(0,0,0,0.6)] backdrop-blur-md transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_0_40px_rgba(255,193,7,0.9)]"
                        >
                            <div className="text-2xl font-extrabold text-amber-300 drop-shadow-[0_0_14px_rgba(255,215,0,0.9)]">
                                {item.value}
                            </div>
                            <div className="mt-1 text-sm font-medium text-amber-100/80">
                                {item.label}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
};
