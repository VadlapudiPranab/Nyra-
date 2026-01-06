"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Newspaper, Bell, Share2 } from "lucide-react"

export default function NewsPage() {
    return (
        <div className="min-h-screen bg-background font-sans">
            <Navigation />

            <main>
                {/* HERO */}
                <section className="py-24 bg-primary text-primary-foreground text-center">
                    <div className="container mx-auto px-4 max-w-4xl">
                        <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter mb-4 italic">Nyra News</h1>
                        <p className="text-xl md:text-2xl font-bold uppercase tracking-[0.3em] opacity-80">
                            LATEST UPDATES & STORIES
                        </p>
                    </div>
                </section>

                {/* NEWS FEED PLACEHOLDER */}
                <section className="py-24 bg-background">
                    <div className="container mx-auto px-4 max-w-6xl">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[1, 2, 3].map((i) => (
                                <div key={i} className="group bg-card border border-border rounded-sm overflow-hidden hover:border-primary transition-all">
                                    <div className="h-48 bg-muted relative">
                                        <div className="absolute inset-0 flex items-center justify-center text-muted-foreground/20">
                                            <Newspaper className="w-12 h-12" />
                                        </div>
                                    </div>
                                    <div className="p-6">
                                        <div className="flex items-center gap-2 mb-4">
                                            <span className="px-2 py-0.5 bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-widest">Community</span>
                                            <span className="text-[10px] text-muted-foreground font-bold uppercase tracking-widest">Jan 06, 2026</span>
                                        </div>
                                        <h3 className="text-xl font-bold uppercase tracking-tight mb-3 group-hover:text-primary transition-colors leading-tight">
                                            Latest Community Spotlight & News Headlines
                                        </h3>
                                        <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                                            [Placeholder for the news excerpt. Radio Nyra will provide official updates, headlines, and community stories here.]
                                        </p>
                                        <button className="text-xs font-black uppercase tracking-[0.2em] text-primary border-b-2 border-primary/20 hover:border-primary transition-all pb-1">Read More</button>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-20 text-center p-12 border-2 border-dashed border-border rounded-lg bg-muted/20">
                            <Bell className="w-10 h-10 text-primary mx-auto mb-4 animate-bounce" />
                            <h2 className="text-2xl font-black uppercase tracking-widest mb-2">Stay Tuned!</h2>
                            <p className="text-muted-foreground font-bold uppercase tracking-widest text-xs">Official Radio Nyra news content is being prepared.</p>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    )
}
