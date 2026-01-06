import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, Mic2 } from "lucide-react"

export default function SchedulePage() {
    const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

    return (
        <div className="min-h-screen bg-background font-sans selection:bg-primary selection:text-primary-foreground text-foreground">
            <Navigation />

            <main>
                {/* Header Section */}
                <section className="py-20 bg-primary/5 border-b border-primary/10 text-center">
                    <div className="container mx-auto px-4">
                        <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter mb-6 text-primary italic">
                            The Schedule
                        </h1>
                        <p className="text-xl md:text-2xl text-muted-foreground uppercase tracking-widest max-w-2xl mx-auto font-bold opacity-80">
                            Your Daily Dose of Rhythms & Stories
                        </p>
                    </div>
                </section>

                {/* SCHEDULE SECTION */}
                <section className="py-24 bg-background">
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                            {days.map((day) => (
                                <Card key={day} className="bg-card border border-border rounded-sm hover:border-primary transition-all duration-300 shadow-sm overflow-hidden">
                                    <div className="bg-primary/5 p-6 border-b border-border">
                                        <h2 className="text-3xl font-black uppercase tracking-tighter text-primary italic">{day}</h2>
                                    </div>
                                    <CardContent className="p-8 space-y-8">
                                        <div className="group border-l-2 border-primary/20 pl-4 hover:border-primary transition-colors">
                                            <div className="flex items-center justify-between mb-2">
                                                <span className="text-[10px] font-black font-mono text-muted-foreground uppercase tracking-widest flex items-center gap-1.5 opacity-60 group-hover:opacity-100 transition-opacity">
                                                    <Clock className="w-3 h-3" /> 08:00 AM
                                                </span>
                                                <Badge className="text-[8px] bg-primary text-white border-none rounded-none px-1.5 py-0 uppercase font-black">Live</Badge>
                                            </div>
                                            <h3 className="text-lg font-black uppercase tracking-tight leading-none group-hover:text-primary transition-colors italic">Morning Drive</h3>
                                            <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mt-1">with Raj Persaud</p>
                                        </div>

                                        <div className="group border-l-2 border-primary/20 pl-4 hover:border-primary transition-colors">
                                            <div className="flex items-center justify-between mb-2">
                                                <span className="text-[10px] font-black font-mono text-muted-foreground uppercase tracking-widest flex items-center gap-1.5 opacity-60 group-hover:opacity-100 transition-opacity">
                                                    <Clock className="w-3 h-3" /> 01:00 PM
                                                </span>
                                            </div>
                                            <h3 className="text-lg font-black uppercase tracking-tight leading-none group-hover:text-primary transition-colors italic">Bollywood Bliss</h3>
                                            <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mt-1">with Bharti</p>
                                        </div>

                                        <div className="group border-l-2 border-primary/20 pl-4 hover:border-primary transition-colors">
                                            <div className="flex items-center justify-between mb-2">
                                                <span className="text-[10px] font-black font-mono text-muted-foreground uppercase tracking-widest flex items-center gap-1.5 opacity-60 group-hover:opacity-100 transition-opacity">
                                                    <Clock className="w-3 h-3" /> 05:00 PM
                                                </span>
                                                <Badge className="text-[8px] bg-primary text-white border-none rounded-none px-1.5 py-0 uppercase font-black">Live</Badge>
                                            </div>
                                            <h3 className="text-lg font-black uppercase tracking-tight leading-none group-hover:text-primary transition-colors italic">Desh Pradesh</h3>
                                            <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mt-1">with Vishal</p>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="py-24 bg-muted/20 border-t border-border">
                    <div className="container mx-auto px-4 text-center max-w-2xl">
                        <h2 className="text-4xl font-black uppercase tracking-tighter mb-4 italic">Tune In Anywhere</h2>
                        <p className="text-muted-foreground font-bold uppercase tracking-widest text-xs mb-10 leading-loose">
                            Radio Nyra is available 24/7. Don't miss out on our special weekend programs and exclusive community segments.
                        </p>
                        <Button className="h-16 px-12 text-lg font-black uppercase tracking-widest bg-primary hover:bg-primary/90 text-white rounded-none shadow-xl transition-all" asChild>
                            <Link href="https://radionyra.com/">Set Reminder</Link>
                        </Button>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    )
}
