import Image from "next/image"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ExternalLink, Mic2, Star } from "lucide-react"

export default function OurTeamPage() {
  const team = [
    {
      name: "Sohail",
      role: "Host, Non Stop Hungama",
      bio: "Bringing you non-stop entertainment and energy.",
      featured: true,
      image: "/images/hosts/Non Stop Hungama.jpg",
    },
    {
      name: "Raj Persaud",
      role: "Host, Morning Commute",
      bio: "Raj is the creative force behind our digital presence and manages our social media.",
      featured: true,
      image: "/images/hosts/Chai Pe CharCha.jpg",
    },
    {
      name: "Vaishnavi Palleda",
      role: "Vice President & Host",
      bio: "CEO of Vault Productions™ and host of Hello Vaishnavi.",
      featured: true,
      image: "/images/hosts/Hello Vaishnavi.jpg",
    },
    {
      name: "Vishal The Khushhal",
      role: "Host, Desh Pradesh",
      bio: "Vishal is here for your afternoon excitement - our vibrant host.",
      featured: true,
      image: "/images/hosts/Desh ParDesh.jpg",
    },
    {
      name: "Shivani",
      role: "Host, Nirvana Nights",
      bio: "The voice of your evenings on Nirvana Nights.",
      image: "/images/hosts/Nirvana Nights.jpg",
    },
    {
      name: "Monika Joshi",
      role: "Host, Triangle Tunes & Talks",
      bio: "Catch her vibrant energy every night from 10:00pm - 1:00am.",
      image: "/images/hosts/Triangle Tunes.jpg",
    },
    {
      name: "Kanthi",
      role: "Host, Mana Muchatlu",
      bio: "Our lovely host on the Telugu channel, every Thursday.",
      image: "/images/hosts/Chinna Mata.jpg",
    },
    {
      name: "Jyoti",
      role: "Host, Dil Se Desi",
      bio: "Your vibrant host of Dil Se Desi, every Friday evening.",
      image: "/images/hosts/Dil Se Desi.jpg",
    },
    {
      name: "Arpit Tandon",
      role: "Host, Idhar Udhar Ki Baatein",
      bio: "Talks about... vaghera vaghera! Join him on Wednesdays.",
      image: "/images/hosts/Idhar Udhar Ki Baatein.jpg",
    },
    {
      name: "Aayushii Rode",
      role: "Host, Zara Muskurao",
      bio: "Start your weekday mornings with a smile with Aayushii.",
      image: "/images/hosts/Zara Muskurao.jpg",
    },
    {
      name: "Aditi",
      role: "Host, Unfiltered Gup Shup",
      bio: "Your gentle Saturday morning wake up show host.",
      image: "/images/hosts/Kuch Tum Kaho,Kuch Hum Kahein.jpg",
    },
    {
      name: "Bharti Rathore",
      role: "Host, Bollywood Bliss",
      bio: "Diving into the latest gossip and drama in the world of Bollywood.",
      image: "/images/hosts/Bollywood Bliss.jpg",
    },
    {
      name: "Dr. John Caldwell",
      role: "Host, Geet Bazaar",
      bio: "Co-host of Geet Bazaar, bringing soulful music to the airwaves.",
      image: "/images/hosts/geet-bazaar.jpg",
    },
    {
      name: "Dr. Afroz Taj",
      role: "Host, Geet Bazaar",
      bio: "Partnering with Dr. Caldwell to present the best of Geet Bazaar.",
      image: "/images/hosts/geet-bazaar.jpg",
    },
    {
      name: "Aarav V Bogadapati",
      role: "Marketing & AI Strategy",
      bio: "Focuses on business marketing and leveraging AI to automate workflows.",
      image: "/placeholder-user.jpg",
    },
  ]

  return (
    <div className="min-h-screen bg-background font-sans selection:bg-primary selection:text-primary-foreground">
      <Navigation />

      <main>
        {/* Header Section */}
        <section className="py-20 bg-primary/5 border-b border-primary/10 text-center">
          <div className="container mx-auto px-4">
            <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter mb-6 text-primary italic">
              The Team
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground uppercase tracking-widest max-w-2xl mx-auto font-bold opacity-80">
              The Voices & Energy Behind Radio Nyra
            </p>
          </div>
        </section>

        <section className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, idx) => (
                <div key={idx} className="group relative bg-card border border-border hover:border-primary transition-all duration-300 rounded-sm overflow-hidden shadow-sm">
                  {/* Image Wrapper */}
                  <Link href="/schedule">
                    <div className="relative aspect-square overflow-hidden bg-black">
                      <Image
                        src={member.image || `/placeholder-user.jpg`}
                        alt={member.name}
                        fill
                        className="object-contain transition-transform duration-700 group-hover:scale-110"
                      />
                      {member.featured && (
                        <div className="absolute top-0 left-0 bg-primary text-white text-[10px] font-black px-3 py-1.5 uppercase tracking-widest">
                          Featured
                        </div>
                      )}
                    </div>
                  </Link>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-2xl font-black uppercase tracking-tight mb-1 group-hover:text-primary transition-colors italic">{member.name}</h3>
                    <p className="text-[10px] font-black uppercase text-primary tracking-widest mb-4 opacity-80">{member.role}</p>
                    <p className="text-sm font-medium text-muted-foreground mb-6 line-clamp-3 leading-relaxed">
                      {member.bio}
                    </p>

                    <Link href="/schedule" className="inline-flex items-center text-[10px] font-black uppercase tracking-[0.2em] text-foreground hover:text-primary transition-colors border-b-2 border-primary/20 hover:border-primary pb-1">
                      Full Profile <ExternalLink className="ml-2 w-3 h-3" />
                    </Link>
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
