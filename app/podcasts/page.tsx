"use client"

import Link from "next/link"
import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Play, Mic2, Calendar, CheckCircle2 } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

export default function PodcastsPage() {
    const podcasts = [
        { title: "Episode 1: The Beginning", host: "Sohail", show: "Non Stop Hungama", date: "Jan 03, 2026" },
        { title: "Episode 2: Bollywood Talk", host: "Bharti Rathore", show: "Bollywood Bliss", date: "Jan 04, 2026" },
        { title: "Episode 3: Morning Vibes", host: "Raj Persaud", show: "Morning Commute", date: "Jan 05, 2026" },
    ]

    const [submitted, setSubmitted] = useState(false)
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        company: "",
        role: "",
        businessModel: "",
        techCompanyDesc: "",
        primarilyServe: "",
        operatingTime: "",
        problemSolved: "",
        growthOpportunity: "",
        biggestChallenge: "",
        mainStory: ""
    })

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        setSubmitted(true)
        // Smooth scroll to the success message/calendly
        const formElement = document.getElementById('guest-form')
        if (formElement) {
            formElement.scrollIntoView({ behavior: 'smooth' })
        }
    }

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

                {/* Episodes Section */}
                <section className="py-24 bg-background">
                    <div className="container mx-auto px-4 max-w-6xl">
                        <h2 className="text-3xl font-black uppercase tracking-tighter mb-12 border-l-4 border-primary pl-4 italic">Recent Episodes</h2>
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

                {/* Podcast Application Section */}
                <section id="guest-form" className="py-24 bg-muted/20 border-t border-border">
                    <div className="container mx-auto px-4 max-w-4xl">
                        {!submitted ? (
                            <div className="bg-card border border-border p-8 md:p-12 shadow-2xl rounded-sm">
                                <div className="text-center mb-10">
                                    <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter mb-2 italic">Join Us as a Guest!</h2>
                                    <p className="text-muted-foreground font-bold uppercase tracking-widest text-xs">Schedule Your Podcast Today!</p>
                                </div>

                                <form onSubmit={handleSubmit} className="space-y-8">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <Label htmlFor="firstName">First Name*</Label>
                                            <Input id="firstName" required value={formData.firstName} onChange={(e) => setFormData({ ...formData, firstName: e.target.value })} className="rounded-none border-border focus:border-primary bg-background" />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="lastName">Last Name*</Label>
                                            <Input id="lastName" required value={formData.lastName} onChange={(e) => setFormData({ ...formData, lastName: e.target.value })} className="rounded-none border-border focus:border-primary bg-background" />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="phone">Phone Number*</Label>
                                            <Input id="phone" type="tel" required value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className="rounded-none border-border focus:border-primary bg-background" />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="email">Email*</Label>
                                            <Input id="email" type="email" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="rounded-none border-border focus:border-primary bg-background" />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="company">Company*</Label>
                                        <Input id="company" required value={formData.company} onChange={(e) => setFormData({ ...formData, company: e.target.value })} className="rounded-none border-border focus:border-primary bg-background" />
                                    </div>

                                    <div className="space-y-3">
                                        <Label>What’s your role in your business?*</Label>
                                        <RadioGroup required onValueChange={(v) => setFormData({ ...formData, role: v })}>
                                            <div className="flex items-center space-x-2">
                                                <RadioGroupItem value="owner" id="r1" />
                                                <Label htmlFor="r1">I’m the owner/operator</Label>
                                            </div>
                                            <div className="flex items-center space-x-2">
                                                <RadioGroupItem value="partner" id="r2" />
                                                <Label htmlFor="r2">I’m a partner or co-owner</Label>
                                            </div>
                                            <div className="flex items-center space-x-2">
                                                <RadioGroupItem value="leadership" id="r3" />
                                                <Label htmlFor="r3">I’m part of the leadership team</Label>
                                            </div>
                                            <div className="flex items-center space-x-2">
                                                <RadioGroupItem value="lead" id="r4" />
                                                <Label htmlFor="r4">I’m an acquisitions or operations lead</Label>
                                            </div>
                                            <div className="flex items-center space-x-2">
                                                <RadioGroupItem value="other" id="r5" />
                                                <Label htmlFor="r5">Other</Label>
                                            </div>
                                        </RadioGroup>
                                    </div>

                                    <div className="space-y-2">
                                        <Label>What best describes your primary business model?*</Label>
                                        <Select required onValueChange={(v) => setFormData({ ...formData, businessModel: v })}>
                                            <SelectTrigger className="rounded-none border-border bg-background">
                                                <SelectValue placeholder="Select an option" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="sfr">Single Family Residential Real Estate Investing</SelectItem>
                                                <SelectItem value="commercial">Commercial / Large Multifamily / New Development</SelectItem>
                                                <SelectItem value="lending">Lending or Private Capital</SelectItem>
                                                <SelectItem value="construction">Construction or Renovation Services</SelectItem>
                                                <SelectItem value="title">Title, Insurance, TC, Legal or Compliance Services</SelectItem>
                                                <SelectItem value="tech">Technology or Software for Real Estate Investing</SelectItem>
                                                <SelectItem value="lead">Lead Provider (PPL, PPC, Skip Tracing, etc.)</SelectItem>
                                                <SelectItem value="other">Other</SelectItem>
                                            </SelectContent>
                                        </Select>
                                        {formData.businessModel === "other" && (
                                            <Input className="mt-2 rounded-none border-border bg-background" placeholder="Please specify" onChange={(e) => setFormData({ ...formData, businessModel: e.target.value })} />
                                        )}
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="techDesc">Which best describes your technology or software company?*</Label>
                                        <Input id="techDesc" required value={formData.techCompanyDesc} onChange={(e) => setFormData({ ...formData, techCompanyDesc: e.target.value })} className="rounded-none border-border bg-background" />
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="serve">Who do you primarily serve?*</Label>
                                        <Input id="serve" required value={formData.primarilyServe} onChange={(e) => setFormData({ ...formData, primarilyServe: e.target.value })} className="rounded-none border-border bg-background" />
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="operating">How long has your company been operating?*</Label>
                                        <Input id="operating" required value={formData.operatingTime} onChange={(e) => setFormData({ ...formData, operatingTime: e.target.value })} className="rounded-none border-border bg-background" />
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="problem">What problem does your product solve for real estate professionals or investors?*</Label>
                                        <Textarea id="problem" required value={formData.problemSolved} onChange={(e) => setFormData({ ...formData, problemSolved: e.target.value })} className="rounded-none border-border bg-background min-h-[100px]" />
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="growth">What’s your biggest opportunity for growth right now?*</Label>
                                        <Textarea id="growth" required value={formData.growthOpportunity} onChange={(e) => setFormData({ ...formData, growthOpportunity: e.target.value })} className="rounded-none border-border bg-background min-h-[100px]" />
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="challenge">What’s your biggest challenge in the current market?*</Label>
                                        <Textarea id="challenge" required value={formData.biggestChallenge} onChange={(e) => setFormData({ ...formData, biggestChallenge: e.target.value })} className="rounded-none border-border bg-background min-h-[100px]" />
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="story">If you were to be featured on our podcast, what’s the main story, strategy, or lesson you’d want to highlight?*</Label>
                                        <Textarea id="story" required value={formData.mainStory} onChange={(e) => setFormData({ ...formData, mainStory: e.target.value })} className="rounded-none border-border bg-background min-h-[100px]" />
                                    </div>

                                    <Button type="submit" className="w-full h-16 text-lg font-black uppercase tracking-widest bg-primary hover:bg-primary/90 text-white rounded-none shadow-xl transition-all">
                                        Submit Application
                                    </Button>
                                </form>
                            </div>
                        ) : (
                            <div className="text-center py-20 animate-in fade-in zoom-in duration-500">
                                <div className="mb-12">
                                    <CheckCircle2 className="w-20 h-20 text-green-500 mx-auto mb-6" />
                                    <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-4 italic">
                                        ✅ You're Approved!
                                    </h2>
                                    <p className="text-2xl font-bold text-primary uppercase tracking-widest">
                                        Book Your Podcast Slot Below!!!
                                    </p>
                                </div>

                                <div className="bg-card border border-border rounded-sm overflow-hidden min-h-[600px] shadow-2xl">
                                    <iframe
                                        src="https://calendly.com/radionyra/30min"
                                        width="100%"
                                        height="600"
                                        frameBorder="0"
                                        className="w-full"
                                    ></iframe>
                                </div>
                                <Button onClick={() => setSubmitted(false)} variant="link" className="mt-8 text-muted-foreground uppercase tracking-widest text-[10px] font-black hover:text-primary transition-colors">
                                    ← Back to application
                                </Button>
                            </div>
                        )}
                    </div>
                </section>

                <section className="py-24 bg-primary text-white text-center">
                    <div className="container mx-auto px-4">
                        <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-4 italic">Never Miss an Episode</h2>
                        <p className="text-white/80 font-bold uppercase tracking-widest text-xs mb-10">Subscribe to our newsletter for weekly podcast highlights.</p>
                        <Button className="h-16 px-12 text-lg font-black uppercase tracking-widest bg-white hover:bg-white/90 text-primary rounded-none shadow-xl transition-all" asChild>
                            <Link href="https://radionyra.com/">Subscribe Now</Link>
                        </Button>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    )
}
