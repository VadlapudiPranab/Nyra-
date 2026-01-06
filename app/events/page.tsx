"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Lightbox } from "@/components/lightbox"

export default function EventsPage() {
    const [lightbox, setLightbox] = useState({ isOpen: false, index: 0 })

    const events = [
        { id: 1, title: "Radio Nyra Bollywood NYE 2026", image: "/images/event_nye_2026.jpg", date: "Dec 31, 2025" },
        { id: 2, title: "Triangle Got Talent", image: "/images/event_triangle_talent.jpg", date: "Nov 23, 2025" },
        { id: 3, title: "Hooky Cary Holiday VIP Showcase", image: "/images/event_hooky_cary.jpg", date: "Nov 18, 2025" },
        { id: 4, title: "Radio Nyra Diwali Mela", image: "/images/event_diwali_mela.jpg", date: "Nov 11, 2025" },
        { id: 5, title: "Hum Sub Diwali", image: "/images/event_hum_sub_diwali.jpg", date: "Nov 04, 2025" },
        { id: 6, title: "Garner India Fest", image: "/images/event_garner_fest.jpg", date: "Nov 04, 2025" },
        { id: 7, title: "IAFV Diwali Fest", image: "/images/event_iafv_diwali.jpg", date: "Oct 28, 2025" },
        { id: 8, title: "Zain Zohaib Qawwali Mehfil", image: "/images/event_zain_zohaib.jpg", date: "Nov 02, 2025" },
        { id: 9, title: "A.R. Rahman Concert in Raleigh", image: "/images/event_ar_rahman.jpg", date: "2025" },
    ]

    const openLightbox = (index: number) => {
        setLightbox({ isOpen: true, index })
    }

    const closeLightbox = () => {
        setLightbox({ ...lightbox, isOpen: false })
    }

    const navigateLightbox = (index: number) => {
        setLightbox({ ...lightbox, index })
    }

    const images = events.map(e => e.image)

    return (
        <div className="min-h-screen bg-background font-sans selection:bg-primary selection:text-white">
            <Navigation />

            <main className="pt-24 pb-20">
                <div className="container mx-auto px-4">
                    {/* Header */}
                    <div className="mb-12">
                        <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter italic border-l-8 border-primary pl-6">
                            Past Events
                        </h1>
                        <p className="mt-4 text-muted-foreground font-medium uppercase tracking-widest text-sm">
                            A gallery of our most memorable moments
                        </p>
                    </div>

                    {/* Gallery Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {events.map((event, idx) => (
                            <div
                                key={event.id}
                                className="group relative aspect-video bg-muted overflow-hidden cursor-pointer"
                                onClick={() => openLightbox(idx)}
                            >
                                {/* Thumbnail */}
                                <img
                                    src={event.image}
                                    alt={event.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    onError={(e) => {
                                        const target = e.target as HTMLImageElement;
                                        target.src = "https://placehold.co/600x400/000000/FFFFFF?text=Event+Image";
                                    }}
                                />

                                {/* Overlay */}
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-all duration-300 flex items-center justify-center">
                                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center px-4">
                                        <h3 className="text-white font-black uppercase tracking-tighter text-xl italic">{event.title}</h3>
                                        <span className="text-primary font-bold uppercase tracking-widest text-[10px] mt-2 block">Click to view</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </main>

            <Lightbox
                isOpen={lightbox.isOpen}
                onClose={closeLightbox}
                images={images}
                currentIndex={lightbox.index}
                onNavigate={navigateLightbox}
            />

            <Footer />
        </div>
    )
}
