"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Play, CheckCircle2 } from "lucide-react"

export default function PodcastPage() {
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
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    const podcasts = [
        { title: "Episode 1: The Beginning", host: "Sohail", show: "Non Stop Hungama" },
        { title: "Episode 2: Bollywood Talk", host: "Bharti Rathore", show: "Bollywood Bliss" },
        { title: "Episode 3: Morning Vibes", host: "Raj Persaud", show: "Morning Commute" },
    ]

    return (
        <div className="min-h-screen bg-background font-sans">
            <Navigation />

            <main>
                {/* Section 1: Hero Text */}
                <section className="py-20 bg-muted/30">
                    <div className="container mx-auto px-4 text-center">
                        <h1 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter mb-4">
                            All Business Professionals: Join Us!
                        </h1>
                        <p className="text-xl md:text-2xl text-muted-foreground uppercase tracking-tight mb-2">
                            Let Us Showcase Your Expertise as a Show Guest!
                        </p>
                        <p className="text-lg font-bold text-primary uppercase tracking-widest">
                            Schedule Your Podcast Today!
                        </p>
                    </div>
                </section>

                <div className="container mx-auto px-4 py-16 max-w-4xl">
                    {!submitted ? (
                        <section>
                            {/* Section 2: Podcast Application Form */}
                            <div className="bg-card border border-border p-8 md:p-12 shadow-2xl rounded-sm">
                                <h2 className="text-3xl font-bold uppercase tracking-tighter mb-8 border-l-4 border-primary pl-4">Podcast Application Form</h2>
                                <form onSubmit={handleSubmit} className="space-y-8">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <Label htmlFor="firstName">First Name*</Label>
                                            <Input id="firstName" required value={formData.firstName} onChange={(e) => setFormData({ ...formData, firstName: e.target.value })} />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="lastName">Last Name*</Label>
                                            <Input id="lastName" required value={formData.lastName} onChange={(e) => setFormData({ ...formData, lastName: e.target.value })} />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="phone">Phone Number*</Label>
                                            <Input id="phone" type="tel" required value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="email">Email*</Label>
                                            <Input id="email" type="email" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="company">Company*</Label>
                                        <Input id="company" required value={formData.company} onChange={(e) => setFormData({ ...formData, company: e.target.value })} />
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
                                            <SelectTrigger>
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
                                            <Input className="mt-2" placeholder="Please specify" onChange={(e) => setFormData({ ...formData, businessModel: e.target.value })} />
                                        )}
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="techDesc">Which best describes your technology or software company?*</Label>
                                        <Input id="techDesc" required value={formData.techCompanyDesc} onChange={(e) => setFormData({ ...formData, techCompanyDesc: e.target.value })} />
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="serve">Who do you primarily serve?*</Label>
                                        <Input id="serve" required value={formData.primarilyServe} onChange={(e) => setFormData({ ...formData, primarilyServe: e.target.value })} />
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="operating">How long has your company been operating?*</Label>
                                        <Input id="operating" required value={formData.operatingTime} onChange={(e) => setFormData({ ...formData, operatingTime: e.target.value })} />
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="problem">What problem does your product solve for real estate professionals or investors?*</Label>
                                        <Textarea id="problem" required value={formData.problemSolved} onChange={(e) => setFormData({ ...formData, problemSolved: e.target.value })} />
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="growth">What’s your biggest opportunity for growth right now?*</Label>
                                        <Textarea id="growth" required value={formData.growthOpportunity} onChange={(e) => setFormData({ ...formData, growthOpportunity: e.target.value })} />
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="challenge">What’s your biggest challenge in the current market?*</Label>
                                        <Textarea id="challenge" required value={formData.biggestChallenge} onChange={(e) => setFormData({ ...formData, biggestChallenge: e.target.value })} />
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="story">If you were to be featured on our podcast, what’s the main story, strategy, or lesson you’d want to highlight?*</Label>
                                        <Textarea id="story" required value={formData.mainStory} onChange={(e) => setFormData({ ...formData, mainStory: e.target.value })} />
                                    </div>

                                    <Button type="submit" className="w-full h-14 text-lg font-bold uppercase tracking-widest bg-primary hover:bg-primary/90">
                                        Submit Application
                                    </Button>
                                </form>
                            </div>
                        </section>
                    ) : (
                        <section className="text-center py-20 animate-in fade-in zoom-in duration-500">
                            {/* Section 3: Approval Message + Calendly */}
                            <div className="mb-12">
                                <CheckCircle2 className="w-20 h-20 text-green-500 mx-auto mb-6" />
                                <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-4">
                                    ✅ You're Approved!
                                </h2>
                                <p className="text-2xl font-bold text-primary uppercase tracking-widest">
                                    Book Your Podcast Slot Below!!!
                                </p>
                            </div>

                            <div className="bg-card border border-border rounded-lg overflow-hidden min-h-[600px] shadow-2xl">
                                <iframe
                                    src="https://calendly.com/radionyra/30min"
                                    width="100%"
                                    height="600"
                                    frameBorder="0"
                                    className="w-full"
                                ></iframe>
                            </div>
                        </section>
                    )}
                </div>

                {/* Section 4: Our Podcasts */}
                <section className="py-20 border-t border-border bg-muted/20">
                    <div className="container mx-auto px-4">
                        <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tighter mb-12 border-l-8 border-primary pl-6">Our Podcasts</h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {podcasts.map((pod, i) => (
                                <div key={i} className="bg-card border border-border overflow-hidden hover:shadow-xl transition-all group cursor-pointer">
                                    <div className="relative aspect-video bg-black/80 flex items-center justify-center">
                                        <div className="w-16 h-16 rounded-full bg-primary/80 flex items-center justify-center group-hover:scale-110 transition-transform">
                                            <Play className="fill-white text-white ml-1" />
                                        </div>
                                    </div>
                                    <div className="p-6">
                                        <div className="text-xs font-bold uppercase tracking-widest text-primary mb-2">{pod.show}</div>
                                        <h3 className="text-xl font-bold uppercase tracking-tight mb-2">{pod.title}</h3>
                                        <p className="text-muted-foreground text-sm leading-relaxed">
                                            Join {pod.host} for an engaging episode of {pod.show} where we dive deep into {pod.title}.
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    )
}
