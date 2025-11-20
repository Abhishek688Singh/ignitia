import Image from "next/image";
import { Calendar, MapPin, Clock, User, Ticket } from "lucide-react";

export default function EventCard({ event, index }: any) {
    const imgSrc =
        event.imageUrl && event.imageUrl.trim() !== ""
            ? event.imageUrl
            : "/events/placeholder.jpg"; 
    return (
        <article
            className="group relative flex flex-col overflow-hidden rounded-3xl border border-[#f4c76b]/18 bg-[#090317] shadow-[0_0_25px_rgba(0,0,0,0.9)]
      transition-transform transition-shadow duration-300 hover:-translate-y-2 hover:shadow-[0_0_40px_rgba(255,215,0,0.5)]
      animate-fade-in"
            style={{ animationDelay: `${(index % 6) * 0.1}s` }}
        >
            {/* Poster */}
            <div className="relative h-64 sm:h-72 md:h-64 lg:h-72 overflow-hidden">
                <Image
                    // src={event.imageUrl}
                    src="/events/placeholder.jpg"
                    alt={event.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.05]"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#090317] via-transparent to-transparent opacity-70 mix-blend-screen" />
            </div>

            {/* Card Body */}
            <div className="flex flex-col flex-1 px-4 pb-4 pt-3 sm:px-5 sm:pb-5 sm:pt-4">
                <h3 className="mb-2 line-clamp-2 text-base sm:text-lg font-semibold tracking-tight text-[#f9e6b5]">
                    {event.title}
                </h3>

                <div className="mb-3 flex items-center gap-2 text-xs sm:text-sm text-[#d2c8ff]/80">
                    <Calendar className="h-4 w-4 text-[#f4c76b]" />
                    <span>{event.dateLabel}</span>
                </div>

                <div className="space-y-1.5 text-xs sm:text-sm text-[#c8bdf9]/85">
                    <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-[#f4c76b]" />
                        <span className="line-clamp-1">{event.venue}</span>
                    </div>

                    <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-[#f4c76b]" />
                        <span>{event.time}</span>
                    </div>

                    <div className="flex items-center gap-2">
                        <User className="h-4 w-4 text-[#f4c76b]" />
                        <span className="line-clamp-1">Coordinator: {event.coordinator}</span>
                    </div>
                </div>

                {/* Footer */}
                <div className="mt-4 flex items-center justify-between gap-3 border-t border-[#43357b]/70 pt-3">
                    <div className="flex flex-col">
                        <span className="text-[11px] uppercase tracking-wide text-[#a497ff]/75">
                            Entry Fee
                        </span>
                        <span className="text-base font-semibold text-[#ffdf91]">
                            ₹{event.price}
                        </span>
                    </div>

                    <button className="inline-flex items-center gap-2 rounded-full border border-[#f4c76b]/70 bg-[#f4c76b]/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-wide text-[#ffdf91] shadow-[0_0_20px_rgba(255,215,0,0.5)] transition-all hover:bg-[#f4c76b]/25">
                        <Ticket className="h-4 w-4" />
                        <span>Tickets</span>
                    </button>
                </div>
            </div>

            {/* Glow */}
            <div className="pointer-events-none absolute inset-0 rounded-3xl border border-transparent group-hover:border-[#f4c76b]/50 
      group-hover:shadow-[0_0_45px_rgba(255,215,0,0.75)] transition-all duration-300" />
        </article>)
}
