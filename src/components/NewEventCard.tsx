// import Image from "next/image";
// import { Calendar, MapPin, Clock, User, Ticket } from "lucide-react";

// export default function EventCard({ event, index }: any) {
//     const imgSrc =
//         event.imageUrl && event.imageUrl.trim() !== ""
//             ? event.imageUrl
//             : "/events/placeholder.jpg"; 
//     return (
//         <article
//             className="group relative flex flex-col overflow-hidden rounded-3xl border border-[#f4c76b]/18 bg-[#090317] shadow-[0_0_25px_rgba(0,0,0,0.9)]
//       transition-transform transition-shadow duration-300 hover:-translate-y-2 hover:shadow-[0_0_40px_rgba(255,215,0,0.5)]
//       animate-fade-in"
//             style={{ animationDelay: `${(index % 6) * 0.1}s` }}
//         >
//             {/* Poster */}
//             <div className="relative h-64 sm:h-72 md:h-64 lg:h-72 overflow-hidden">
//                 <Image
//                     // src={event.imageUrl}
//                     src="/events/placeholder.jpg"
//                     alt={event.title}
//                     fill
//                     className="object-cover transition-transform duration-500 group-hover:scale-[1.05]"
//                 />
//                 <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#090317] via-transparent to-transparent opacity-70 mix-blend-screen" />
//             </div>

//             {/* Card Body */}
//             <div className="flex flex-col flex-1 px-4 pb-4 pt-3 sm:px-5 sm:pb-5 sm:pt-4">
//                 <h3 className="mb-2 line-clamp-2 text-base sm:text-lg font-semibold tracking-tight text-[#f9e6b5]">
//                     {event.title}
//                 </h3>

//                 <div className="mb-3 flex items-center gap-2 text-xs sm:text-sm text-[#d2c8ff]/80">
//                     <Calendar className="h-4 w-4 text-[#f4c76b]" />
//                     <span>{event.dateLabel}</span>
//                 </div>

//                 <div className="space-y-1.5 text-xs sm:text-sm text-[#c8bdf9]/85">
//                     <div className="flex items-center gap-2">
//                         <MapPin className="h-4 w-4 text-[#f4c76b]" />
//                         <span className="line-clamp-1">{event.venue}</span>
//                     </div>

//                     <div className="flex items-center gap-2">
//                         <Clock className="h-4 w-4 text-[#f4c76b]" />
//                         <span>{event.time}</span>
//                     </div>

//                     <div className="flex items-center gap-2">
//                         <User className="h-4 w-4 text-[#f4c76b]" />
//                         <span className="line-clamp-1">Coordinator: {event.coordinator}</span>
//                     </div>
//                 </div>

//                 {/* Footer */}
//                 <div className="mt-4 flex items-center justify-between gap-3 border-t border-[#43357b]/70 pt-3">
//                     <div className="flex flex-col">
//                         <span className="text-[11px] uppercase tracking-wide text-[#a497ff]/75">
//                             Entry Fee
//                         </span>
//                         <span className="text-base font-semibold text-[#ffdf91]">
//                             ₹{event.price}
//                         </span>
//                     </div>

//                     <button className="inline-flex items-center gap-2 rounded-full border border-[#f4c76b]/70 bg-[#f4c76b]/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-wide text-[#ffdf91] shadow-[0_0_20px_rgba(255,215,0,0.5)] transition-all hover:bg-[#f4c76b]/25">
//                         <Ticket className="h-4 w-4" />
//                         <span>Tickets</span>
//                     </button>
//                 </div>
//             </div>

//             {/* Glow */}
//             <div className="pointer-events-none absolute inset-0 rounded-3xl border border-transparent group-hover:border-[#f4c76b]/50 
//       group-hover:shadow-[0_0_45px_rgba(255,215,0,0.75)] transition-all duration-300" />
//         </article>)
// }

"use client";

import { useState } from "react";
import Image from "next/image";
import { Calendar, MapPin, Clock, User, Ticket } from "lucide-react";

export default function EventCard({ event, index }: any) {
    const [offset, setOffset] = useState({ x: 0, y: 0 });

    const isReversed = index % 2 === 1;

    const handleParallax = (e: any) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width - 0.5) * 12;
        const y = ((e.clientY - rect.top) / rect.height - 0.5) * 12;
        setOffset({ x, y });
    };

    const imgSrc =
        event.imageUrl && event.imageUrl.trim() !== ""
            ? event.imageUrl
            : "/events/placeholder.jpg";

    return (
        <article
            onMouseMove={handleParallax}
            className={`
                group relative flex flex-col lg:flex-row 
                ${isReversed ? "lg:flex-row-reverse" : ""}
                overflow-hidden rounded-3xl 
                border border-[#f4c76b]/20 
                bg-[#0a0318]/80 backdrop-blur-xl
                shadow-[0_0_40px_rgba(0,0,0,0.7)]
                transition-all duration-300 hover:-translate-y-2
                hover:shadow-[0_0_45px_rgba(255,215,0,0.4)]
                animate-fade-in
            `}
            style={{
                animationDelay: `${(index % 6) * 0.1}s`,
            }}
        >
            {/* Image Section */}
            <div
                className={`
                relative h-64 sm:h-72 lg:h-auto lg:w-1/2 
                overflow-hidden transition-transform duration-300
                `}
                style={{
                    transform: `translate(${offset.x}px, ${offset.y}px) scale(1.04)`,
                }}
            >
                <Image
                    // src={imgSrc}
                    src="/events/placeholder.jpg"
                    alt={event.title}
                    fill
                    className="
                        object-cover 
                        transition-all duration-700 
                        group-hover:scale-[1.12]
                    "
                />

                {/* Smooth Diagonal Cut */}
                <div
                    className={`
                        hidden lg:block absolute top-0 bottom-0 
                        ${isReversed ? "right-0" : "left-0"} 
                        w-24 bg-[#0a0318]
                        opacity-90
                        `}
                    style={{
                        clipPath: isReversed
                            ? "polygon(0 0, 100% 0, 100% 100%, 0 0)"
                            : "polygon(0 0, 100% 0, 0 100%, 0 0)",
                    }}
                />

                {/* Glass Glow Overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr 
                    from-[#f4c76b]/10 via-transparent to-[#d3b4ff]/10 
                    mix-blend-screen" />
            </div>

            {/* Content Section */}
            <div
                className="
                flex flex-col flex-1 px-6 py-6 lg:w-1/2 
                relative"
            >
                {/* Glass Backdrop */}
                <div className="
                    absolute inset-0 pointer-events-none
                    bg-gradient-to-b from-white/5 to-white/0
                    backdrop-blur-xl rounded-3xl opacity-40
                " />

                <h3 className="relative mb-2 line-clamp-2 text-lg font-semibold tracking-tight text-[#f9e6b5]">
                    {event.title}
                </h3>

                <div className="relative mb-3 flex items-center gap-2 text-sm text-[#d2c8ff]/80">
                    <Calendar className="h-4 w-4 text-[#f4c76b]" />
                    <span>{event.dateLabel}</span>
                </div>

                <div className="relative space-y-2 text-sm text-[#c8bdf9]/85">
                    <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-[#f4c76b]" />
                        <span>{event.venue}</span>
                    </div>

                    <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-[#f4c76b]" />
                        <span>{event.time}</span>
                    </div>

                    <div className="flex items-center gap-2">
                        <User className="h-4 w-4 text-[#f4c76b]" />
                        <span>Coordinator: {event.coordinator}</span>
                    </div>
                </div>

                {/* Footer */}
                <div className="relative mt-6 flex items-center justify-between border-t border-[#43357b]/70 pt-4">
                    <div>
                        <p className="text-[11px] uppercase tracking-wide text-[#a497ff]/75">
                            Entry Fee
                        </p>
                        <p className="text-xl font-semibold text-[#ffdf91]">
                            ₹{event.price}
                        </p>
                    </div>

                    <button className="
                        inline-flex items-center gap-2 px-5 py-1.5 
                        rounded-full border border-[#f4c76b]/60 
                        bg-[#f4c76b]/10 text-[#ffdf91]
                        shadow-[0_0_20px_rgba(255,215,0,0.4)]
                        hover:bg-[#f4c76b]/25 transition-all
                    ">
                        <Ticket className="h-4 w-4" />
                        Tickets
                    </button>
                </div>
            </div>

            {/* Glow Ring */}
            <div className="pointer-events-none absolute inset-0 rounded-3xl border border-transparent group-hover:border-[#f4c76b]/50 group-hover:shadow-[0_0_40px_rgba(255,215,0,0.6)] transition-all duration-300" />
        </article>
    );
}
