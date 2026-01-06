"use client"

import { useState, useEffect } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { X } from "lucide-react"
import Image from "next/image"

interface Show {
    name: string
    image: string
}

export default function RadioShowsPage() {
    const [selectedImage, setSelectedImage] = useState<string | null>(null)

    const shows: Show[] = [
        { name: "Non Stop Hungama", image: "/images/hosts/non-stop-hungama.jpg" },
        { name: "Morning Commute", image: "/images/hosts/morning-commute.jpg" },
        { name: "Hello Vaishnavi", image: "/images/hosts/hello-vaishnavi.jpg" },
        { name: "Desh Pradesh", image: "/images/hosts/desh-pradesh.jpg" },
        { name: "Nirvana Nights", image: "/images/hosts/nirvana-nights.jpg" },
        { name: "Triangle Tunes", image: "/images/hosts/triangle-tunes.jpg" },
        { name: "Mana Muchatlu", image: "/images/hosts/mana-muchatlu.jpg" },
        { name: "Dil Se Desi", image: "/images/hosts/dil-se-desi.jpg" },
        { name: "Idhar Udhar Ki Baatein", image: "/images/hosts/idhar-udhar-ki-baatein.jpg" },
        { name: "Zara Muskurao", image: "/images/hosts/zara-muskurao.jpg" },
        { name: "Unfiltered Gup Shup", image: "/images/hosts/unfiltered-gup-shup.jpg" },
        { name: "Bollywood Bliss", image: "/images/hosts/bollywood-bliss.jpg" },
        { name: "Geet Bazaar", image: "/images/hosts/geet-bazaar.jpg" },
    ]

    // Close popup on ESC key
    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === "Escape") setSelectedImage(null)
        }
        window.addEventListener("keydown", handleEsc)
        return () => window.removeEventListener("keydown", handleEsc)
    }, [])

    return (
        <div className="min-h-screen bg-background font-sans selection:bg-primary selection:text-primary-foreground text-foreground">
            <Navigation />

            <main>
                {/* Header Section */}
                <section className="py-20 bg-primary/5 border-b border-primary/10 text-center">
                    <div className="container mx-auto px-4">
                        <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter mb-6 text-primary italic">
                            Radio Shows
                        </h1>
                        <p className="text-xl md:text-2xl text-muted-foreground uppercase tracking-widest max-w-2xl mx-auto font-bold opacity-80">
                            Meet Your Favorite Radio Hosts
                        </p>
                    </div>
                </section>

                {/* Shows Grid */}
                <section className="py-24 bg-background">
                    <div className="container mx-auto px-4 max-w-7xl">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
                            {shows.map((show, idx) => (
                                <div key={idx} className="group flex flex-col items-center">
                                    {/* Image Container */}
                                    <div
                                        onClick={() => setSelectedImage(show.image)}
                                        className="relative w-full aspect-square overflow-hidden rounded-[8px] cursor-pointer bg-muted shadow-sm transition-all duration-300 hover:scale-[1.05] hover:shadow-[0_12px_30px_rgba(0,0,0,0.3)]"
                                    >
                                        <Image
                                            src={show.image}
                                            alt={show.name}
                                            fill
                                            className="object-cover transition-transform duration-500 overflow-hidden"
                                        />
                                    </div>
                                    {/* Show Name */}
                                    <h3 className="mt-6 text-xl font-black uppercase tracking-tight text-center group-hover:text-primary transition-colors italic">
                                        {show.name}
                                    </h3>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>

            {/* Popup Preview */}
            {selectedImage && (
                <div
                    className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 animate-in fade-in duration-300"
                    onClick={() => setSelectedImage(null)}
                >
                    <div className="relative max-w-4xl max-h-screen animate-in zoom-in duration-300">
                        <button
                            className="absolute -top-12 right-0 text-white hover:text-primary transition-colors bg-white/10 p-2 rounded-full backdrop-blur-sm"
                            onClick={() => setSelectedImage(null)}
                        >
                            <X className="w-8 h-8" />
                        </button>
                        <div className="relative w-full h-full flex items-center justify-center overflow-hidden rounded-lg shadow-2xl border border-white/10">
                            <img
                                src={selectedImage}
                                alt="Full preview"
                                className="max-w-full max-h-[85vh] object-contain shadow-2xl"
                            />
                        </div>
                    </div>
                </div>
            )}

            <Footer />
        </div>
    )
}
