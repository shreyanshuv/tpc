"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Calendar, Clock, MapPin, ArrowRight, Filter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { PageHeader } from "@/components/page-header"
import { cn } from "@/lib/utils"

type EventCategory = "all" | "placement" | "workshop" | "seminar" | "competition"

interface Event {
  id: number
  title: string
  description: string
  date: string
  time: string
  location: string
  category: EventCategory
  image: string
  status: "upcoming" | "ongoing" | "completed"
}

const events: Event[] = [
  {
    id: 1,
    title: "Campus Placement Drive - TCS",
    description:
      "On-campus placement drive by Tata Consultancy Services for B.E. students across all branches. Pre-placement talk followed by online assessment and interviews.",
    date: "March 15, 2026",
    time: "9:00 AM - 5:00 PM",
    location: "Main Auditorium, PHCET",
    category: "placement",
    image: "/images/placement-drive.jpg",
    status: "upcoming",
  },
  {
    id: 2,
    title: "Resume Building Workshop",
    description:
      "Learn to craft a compelling resume that stands out. Industry experts will guide you through best practices, ATS optimization, and personal branding.",
    date: "March 8, 2026",
    time: "2:00 PM - 4:30 PM",
    location: "Seminar Hall, Block B",
    category: "workshop",
    image: "/images/event-workshop.jpg",
    status: "upcoming",
  },
  {
    id: 3,
    title: "Tech Talk: AI in the Workplace",
    description:
      "An insightful seminar on how Artificial Intelligence is transforming the workplace. Featuring speakers from Google and Microsoft.",
    date: "February 28, 2026",
    time: "10:00 AM - 12:00 PM",
    location: "Conference Room 1",
    category: "seminar",
    image: "/images/hero-campus.jpg",
    status: "upcoming",
  },
  {
    id: 4,
    title: "Code Sprint 2026",
    description:
      "A 24-hour coding competition open to all engineering students. Solve real-world problems, compete for prizes, and showcase your skills.",
    date: "February 20, 2026",
    time: "10:00 AM onwards",
    location: "IT Lab, Block C",
    category: "competition",
    image: "/images/team-meeting.jpg",
    status: "ongoing",
  },
  {
    id: 5,
    title: "Infosys Pre-Placement Talk",
    description:
      "Pre-placement talk by Infosys for eligible final year students. Learn about company culture, roles, and the recruitment process.",
    date: "February 10, 2026",
    time: "11:00 AM - 1:00 PM",
    location: "Main Auditorium, PHCET",
    category: "placement",
    image: "/images/placement-drive.jpg",
    status: "completed",
  },
  {
    id: 6,
    title: "Soft Skills Development Program",
    description:
      "A week-long program focusing on communication skills, group discussion techniques, and interview etiquette for pre-final year students.",
    date: "January 25, 2026",
    time: "3:00 PM - 5:00 PM",
    location: "Seminar Hall, Block A",
    category: "workshop",
    image: "/images/event-workshop.jpg",
    status: "completed",
  },
]

const categories: { value: EventCategory; label: string }[] = [
  { value: "all", label: "All Events" },
  { value: "placement", label: "Placement Drives" },
  { value: "workshop", label: "Workshops" },
  { value: "seminar", label: "Seminars" },
  { value: "competition", label: "Competitions" },
]

function StatusBadge({ status }: { status: Event["status"] }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium",
        status === "upcoming" && "bg-primary/10 text-primary",
        status === "ongoing" && "bg-accent/10 text-accent",
        status === "completed" && "bg-muted text-muted-foreground"
      )}
    >
      <span
        className={cn(
          "h-1.5 w-1.5 rounded-full",
          status === "upcoming" && "bg-primary",
          status === "ongoing" && "animate-pulse bg-accent",
          status === "completed" && "bg-muted-foreground"
        )}
      />
      {status.charAt(0).toUpperCase() + status.slice(1)}
    </span>
  )
}

export default function EventsPage() {
  const [activeCategory, setActiveCategory] = useState<EventCategory>("all")

  const filteredEvents =
    activeCategory === "all"
      ? events
      : events.filter((e) => e.category === activeCategory)

  return (
    <>
      <PageHeader
        title="Events"
        subtitle="Stay updated with the latest placement drives, workshops, seminars, and competitions organized by TPC-PHCET."
        badge="Stay Updated"
      />

      {/* Filters */}
      <section className="sticky top-16 z-30 border-b border-border bg-background/80 backdrop-blur-xl">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="flex items-center gap-4 overflow-x-auto py-4">
            <Filter className="h-4 w-4 shrink-0 text-muted-foreground" />
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setActiveCategory(cat.value)}
                className={cn(
                  "shrink-0 rounded-full px-4 py-2 text-sm font-medium transition-colors",
                  activeCategory === cat.value
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground"
                )}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Events Grid */}
      <section className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
        {filteredEvents.length === 0 ? (
          <div className="py-20 text-center">
            <p className="text-lg text-muted-foreground">
              No events found in this category.
            </p>
          </div>
        ) : (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredEvents.map((event) => (
              <Link
                key={event.id}
                href={`/events/${event.id}`}
                className="group"
              >
                <article className="overflow-hidden rounded-xl border border-border bg-card transition-all hover:border-primary/30 hover:shadow-md h-full flex flex-col">
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <Image
                      src={event.image}
                      alt={event.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute left-3 top-3">
                      <StatusBadge status={event.status} />
                    </div>
                  </div>

                  <div className="p-6 flex-1 flex flex-col">
                    <div className="mb-3 inline-flex rounded-md bg-muted px-2.5 py-1 text-xs font-medium capitalize text-muted-foreground w-fit">
                      {event.category}
                    </div>

                    <h3 className="font-heading text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                      {event.title}
                    </h3>

                    <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-muted-foreground">
                      {event.description}
                    </p>

                    <div className="mt-4 space-y-2 flex-1">
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <Calendar className="h-3.5 w-3.5" />
                        {event.date}
                      </div>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <Clock className="h-3.5 w-3.5" />
                        {event.time}
                      </div>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <MapPin className="h-3.5 w-3.5" />
                        {event.location}
                      </div>
                    </div>

                    {event.status !== "completed" && (
                      <Button
                        variant="ghost"
                        size="sm"
                        className="mt-4 gap-1 px-0 text-primary hover:bg-transparent hover:text-primary/80 justify-start"
                      >
                        Learn More
                        <ArrowRight className="h-3.5 w-3.5" />
                      </Button>
                    )}
                  </div>
                </article>
              </Link>
            ))}
          </div>
        )}
      </section>
    </>
  )
}
