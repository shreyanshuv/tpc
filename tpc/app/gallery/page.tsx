"use client"

import { useState } from "react"
import Image from "next/image"
import { X } from "lucide-react"
import { PageHeader } from "@/components/page-header"
import { cn } from "@/lib/utils"

type GalleryCategory = "all" | "placements" | "events" | "workshops" | "campus"

interface GalleryImage {
  id: number
  src: string
  alt: string
  category: GalleryCategory
  caption: string
  size: "normal" | "tall" | "wide"
}

const images: GalleryImage[] = [
  {
    id: 1,
    src: "/images/placement-drive.jpg",
    alt: "Campus Placement Drive 2025",
    category: "placements",
    caption: "TCS Campus Placement Drive - Over 200 students participated",
    size: "wide",
  },
  {
    id: 2,
    src: "/images/event-workshop.jpg",
    alt: "Technical Workshop",
    category: "workshops",
    caption: "Full Stack Development Workshop by industry experts",
    size: "normal",
  },
  {
    id: 3,
    src: "/images/gallery-seminar.jpg",
    alt: "Guest Lecture Seminar",
    category: "events",
    caption: "Guest Lecture on AI and Machine Learning trends",
    size: "tall",
  },
  {
    id: 4,
    src: "/images/gallery-award.jpg",
    alt: "Award Ceremony",
    category: "events",
    caption: "Annual Award Ceremony recognizing top placed students",
    size: "normal",
  },
  {
    id: 5,
    src: "/images/gallery-group.jpg",
    alt: "TPC Team Photo",
    category: "campus",
    caption: "TPC Student Committee 2025-26 group photograph",
    size: "wide",
  },
  {
    id: 6,
    src: "/images/gallery-hackathon.jpg",
    alt: "Hackathon Event",
    category: "events",
    caption: "Code Sprint 2025 - 24-hour hackathon competition",
    size: "normal",
  },
  {
    id: 7,
    src: "/images/team-meeting.jpg",
    alt: "Team Meeting",
    category: "campus",
    caption: "TPC planning meeting for upcoming placement season",
    size: "tall",
  },
  {
    id: 8,
    src: "/images/hero-campus.jpg",
    alt: "PHCET Campus",
    category: "campus",
    caption: "Beautiful PHCET campus - home of TPC",
    size: "wide",
  },
]

const categories: { value: GalleryCategory; label: string }[] = [
  { value: "all", label: "All" },
  { value: "placements", label: "Placements" },
  { value: "events", label: "Events" },
  { value: "workshops", label: "Workshops" },
  { value: "campus", label: "Campus Life" },
]

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>("all")
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null)

  const filtered =
    activeCategory === "all"
      ? images
      : images.filter((img) => img.category === activeCategory)

  return (
    <>
      <PageHeader
        title="Gallery"
        subtitle="A visual journey through our events, placement drives, workshops, and campus life at TPC-PHCET."
        badge="Moments Captured"
      />

      {/* Filters */}
      <section className="sticky top-16 z-30 border-b border-border bg-background/80 backdrop-blur-xl">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="flex items-center gap-2 overflow-x-auto py-4">
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

      {/* Gallery Grid */}
      <section className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
        <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
          {filtered.map((img) => (
            <button
              key={img.id}
              onClick={() => setSelectedImage(img)}
              className={cn(
                "group relative mb-4 block w-full overflow-hidden rounded-xl break-inside-avoid",
                img.size === "tall" ? "aspect-[3/4]" : img.size === "wide" ? "aspect-[16/10]" : "aspect-[4/3]"
              )}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-foreground/0 transition-colors group-hover:bg-foreground/40" />
              <div className="absolute inset-x-0 bottom-0 translate-y-full p-4 transition-transform duration-300 group-hover:translate-y-0">
                <p className="text-sm font-medium text-background">{img.caption}</p>
                <p className="mt-1 text-xs capitalize text-background/70">{img.category}</p>
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/90 p-4 backdrop-blur-sm"
          onClick={() => setSelectedImage(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Image preview"
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-background/10 text-background transition-colors hover:bg-background/20"
            aria-label="Close preview"
          >
            <X className="h-5 w-5" />
          </button>

          <div
            className="relative max-h-[85vh] w-full max-w-4xl overflow-hidden rounded-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-video">
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                fill
                className="object-cover"
              />
            </div>
            <div className="bg-card p-6">
              <p className="font-heading text-base font-semibold text-foreground">
                {selectedImage.caption}
              </p>
              <p className="mt-1 text-sm capitalize text-muted-foreground">
                {selectedImage.category}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
