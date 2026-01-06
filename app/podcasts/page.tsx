import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Play, Mic2, Calendar } from "lucide-react"

export default function PodcastsPage() {
    const podcasts = [
        { title: "Episode 1: The Beginning", host: "Sohail", show: "Non Stop Hungama", date: "Jan 03, 2026" },
        { title: "Episode 2: Bollywood Talk", host: "Bharti Rathore", show: "Bollywood Bliss", date: "Jan 04, 2026" },
        { title: "Episode 3: Morning Vibes", host: "Raj Persaud", show: "Morning Commute", date: "Jan 05, 2026" },
    ]

    return (
        <div className="min-h-screen bg-background font-sans selection:bg-primary selection:text-primary-foreground text-foreground">
            <Navigation />

            <main>
                {/* Header Section */}
                <section className="py-20 bg-primary/5 border-b border-primary/10 text-center">
                    <div className="container mx-auto px-4">
                        <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter mb-6 text-primary italic">
                            Podcast
                        </h1>
                        <p className="text-xl md:text-2xl text-muted-foreground uppercase tracking-widest max-w-2xl mx-auto font-bold opacity-80">
                            Insights, Stories & Deep Dives
                        </p>
                    </div>
                </section>

                <section className="py-24 bg-background">
                    <div className="container mx-auto px-4 max-w-6xl">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {podcasts.map((pod, i) => (
                                <div key={i} className="group bg-card border border-border overflow-hidden hover:border-primary transition-all duration-300 rounded-sm shadow-sm">
                                    <div className="relative aspect-video bg-black flex items-center justify-center overflow-hidden">
                                        <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity z-10" />
                                        <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center group-hover:scale-110 transition-all z-20 shadow-2xl">
                                            <Play className="fill-white text-white ml-1 w-6 h-6" />
                                        </div>
                                        <div className="absolute bottom-4 left-4 z-20">
                                            <span className="text-[10px] font-black uppercase tracking-widest text-white/60 bg-black/40 px-2 py-1 backdrop-blur-sm">45:00 MIN</span>
                                        </div>
                                    </div>
                                    <div className="p-8">
                                        <div className="flex items-center justify-between mb-4">
                                            <span className="text-[10px] font-black uppercase tracking-widest text-primary italic">{pod.show}</span>
                                            <span className="text-[10px] font-black uppercase tracking-widest text-muted-foreground flex items-center gap-1.5 opacity-60">
                                                <Calendar className="w-3 h-3" /> {pod.date}
                                            </span>
                                        </div>
                                        <h3 className="text-2xl font-black uppercase tracking-tight mb-4 group-hover:text-primary transition-colors italic leading-tight">{pod.title}</h3>
                                        <div className="flex items-center gap-2 mb-8">
                                            <div className="w-6 h-6 rounded-full bg-muted flex items-center justify-center">
                                                <Mic2 className="w-3 h-3 text-muted-foreground" />
                                            </div>
                                            <p className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">Hosted by {pod.host}</p>
                                        </div>

                                        <Link href="https://radionyra.com/" className="inline-flex items-center text-[10px] font-black uppercase tracking-[0.2em] text-foreground hover:text-primary transition-colors border-b-2 border-primary/20 hover:border-primary pb-1">
                                            Watch Now
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="py-24 bg-muted/30 border-t border-border text-center">
                    <h2 className="text-4xl font-black uppercase tracking-tighter mb-4 italic">Never Miss an Episode</h2>
                    <p className="text-muted-foreground font-bold uppercase tracking-widest text-xs mb-10">Subscribe to our newsletter for weekly podcast highlights.</p>
                    <Button className="h-16 px-12 text-lg font-black uppercase tracking-widest bg-primary hover:bg-primary/90 text-white rounded-none shadow-xl transition-all" asChild>
                        <Link href="https://radionyra.com/">Subscribe Now</Link>
                    </Button>
                </section>
            </main>

            <Footer />
        </div>
    )
}
