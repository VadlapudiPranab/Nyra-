"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Users, Target, Zap, Award } from "lucide-react"

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-background font-sans">
            <Navigation />

            <main>
                {/* HERO */}
                <section className="py-24 bg-primary text-primary-foreground text-center">
                    <div className="container mx-auto px-4 max-w-4xl">
                        <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter mb-8 italic">About Radio Nyra</h1>
                        <p className="text-xl md:text-2xl font-bold uppercase tracking-[0.3em] opacity-80">
                            The Voice of India in USA
                        </p>
                    </div>
                </section>

                {/* PLACEHOLDER CONTENT */}
                <section className="py-24 bg-background">
                    <div className="container mx-auto px-4 max-w-4xl">
                        <div className="space-y-16">
                            <div className="text-center">
                                <h2 className="text-3xl font-black uppercase tracking-tight mb-6">Our Mission</h2>
                                <div className="w-16 h-1 bg-primary mx-auto mb-8" />
                                <p className="text-xl text-muted-foreground leading-relaxed italic">
                                    [Radio Nyra's official mission statement and vision go here. This section will describe our commitment to bridging cultural gaps and providing world-class entertainment and news to the Indian diaspora in the USA.]
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-12">
                                <div className="p-8 border border-border bg-card rounded-sm">
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                                            <Target className="w-5 h-5" />
                                        </div>
                                        <h3 className="text-xl font-bold uppercase tracking-tight">Broadcasting Excellence</h3>
                                    </div>
                                    <p className="text-muted-foreground leading-relaxed">
                                        [Content detailing our 24/7 broadcasting capabilities, frequencies, and digital reach across the Raleigh-Durham area and beyond.]
                                    </p>
                                </div>
                                <div className="p-8 border border-border bg-card rounded-sm">
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                                            <Users className="w-5 h-5" />
                                        </div>
                                        <h3 className="text-xl font-bold uppercase tracking-tight">Community Driven</h3>
                                    </div>
                                    <p className="text-muted-foreground leading-relaxed">
                                        [Information about our deep-rooted connection with the local Indian community, festivals we support, and voices we highlight.]
                                    </p>
                                </div>
                            </div>

                            <div className="bg-muted/30 p-12 border-y border-border text-center">
                                <h2 className="text-3xl font-black uppercase tracking-tight mb-8">Our Story</h2>
                                <div className="max-w-3xl mx-auto space-y-6 text-lg text-muted-foreground leading-relaxed italic">
                                    <p>
                                        Located in the lovely forest terrain of Durham North Carolina, is our first Radio Station – WDUR 1490 AM where the journey of AROHI MEDIA began in 2014. With our own tower and 1000W non-directional broadcasting channel, we launched 24/7 Desi News, Talk and Music format in Hindi for the rapidly growing South Asian population in Raleigh-Durham area.
                                    </p>
                                    <p>
                                        In no time we leased the HD-4 Channel of 99.9 WCMC-FM and eventually launched our FM translator on 101.9 FM. By then we had caught the attention of the rapidly expanding, influential Indian Subcontinent population in the Triangle.
                                    </p>
                                    <p>
                                        We bridge the gap between home and the United States with our quality news, music, entertainment, and cultural programming in Raleigh-Durham, NC.
                                    </p>
                                    <p className="font-bold text-primary not-italic">
                                        In July 2025, we launched our 24/7 Telugu channel on the HD3 Channel of 99.9 FM, right next to our Hindi HD Channel!
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    )
}
