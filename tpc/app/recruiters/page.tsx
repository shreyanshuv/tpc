"use client"

import { useState } from "react"
import { Search, Building2, Globe, MapPin } from "lucide-react"
import { PageHeader } from "@/components/page-header"
import { cn } from "@/lib/utils"

type Sector = "all" | "it" | "core" | "consulting" | "finance" | "startup"

interface Recruiter {
  name: string
  sector: Sector
  type: string
  location: string
  roles: string[]
  initials: string
}

const recruiters: Recruiter[] = [
  {
    name: "Tata Consultancy Services",
    sector: "it",
    type: "MNC",
    location: "Mumbai, India",
    roles: ["Software Engineer", "System Engineer", "Data Analyst"],
    initials: "TCS",
  },
  {
    name: "Infosys",
    sector: "it",
    type: "MNC",
    location: "Bangalore, India",
    roles: ["Systems Engineer", "Technology Analyst"],
    initials: "INF",
  },
  {
    name: "Wipro",
    sector: "it",
    type: "MNC",
    location: "Bangalore, India",
    roles: ["Project Engineer", "Software Developer"],
    initials: "WIP",
  },
  {
    name: "Cognizant",
    sector: "it",
    type: "MNC",
    location: "Chennai, India",
    roles: ["Programmer Analyst", "Full Stack Developer"],
    initials: "COG",
  },
  {
    name: "Accenture",
    sector: "consulting",
    type: "MNC",
    location: "Mumbai, India",
    roles: ["Associate Software Engineer", "Analyst"],
    initials: "ACC",
  },
  {
    name: "Capgemini",
    sector: "consulting",
    type: "MNC",
    location: "Mumbai, India",
    roles: ["Senior Analyst", "Software Engineer"],
    initials: "CAP",
  },
  {
    name: "LTIMindtree",
    sector: "it",
    type: "MNC",
    location: "Mumbai, India",
    roles: ["Graduate Engineer Trainee", "Developer"],
    initials: "LTI",
  },
  {
    name: "Tech Mahindra",
    sector: "it",
    type: "MNC",
    location: "Pune, India",
    roles: ["Software Engineer", "Associate"],
    initials: "TM",
  },
  {
    name: "Godrej & Boyce",
    sector: "core",
    type: "Conglomerate",
    location: "Mumbai, India",
    roles: ["Graduate Engineer Trainee", "Design Engineer"],
    initials: "G&B",
  },
  {
    name: "L&T Construction",
    sector: "core",
    type: "MNC",
    location: "Mumbai, India",
    roles: ["Graduate Engineer Trainee", "Site Engineer"],
    initials: "L&T",
  },
  {
    name: "JSW Steel",
    sector: "core",
    type: "Enterprise",
    location: "Mumbai, India",
    roles: ["Management Trainee", "Engineer"],
    initials: "JSW",
  },
  {
    name: "Persistent Systems",
    sector: "it",
    type: "MNC",
    location: "Pune, India",
    roles: ["Software Engineer", "QA Engineer"],
    initials: "PSL",
  },
  {
    name: "Hexaware Technologies",
    sector: "it",
    type: "MNC",
    location: "Mumbai, India",
    roles: ["Software Engineer", "Associate"],
    initials: "HEX",
  },
  {
    name: "HDFC Bank",
    sector: "finance",
    type: "Enterprise",
    location: "Mumbai, India",
    roles: ["Management Trainee", "Analyst"],
    initials: "HDB",
  },
  {
    name: "ICICI Bank",
    sector: "finance",
    type: "Enterprise",
    location: "Mumbai, India",
    roles: ["Probationary Officer", "IT Officer"],
    initials: "ICI",
  },
  {
    name: "Reliance Industries",
    sector: "core",
    type: "Conglomerate",
    location: "Mumbai, India",
    roles: ["Graduate Engineer Trainee", "Process Engineer"],
    initials: "RIL",
  },
  {
    name: "Zeta Suite",
    sector: "startup",
    type: "Startup",
    location: "Mumbai, India",
    roles: ["Software Engineer", "Frontend Developer"],
    initials: "ZET",
  },
  {
    name: "Comprinno Technologies",
    sector: "startup",
    type: "Startup",
    location: "Navi Mumbai, India",
    roles: ["Junior Developer", "Cloud Engineer"],
    initials: "CMP",
  },
]

const sectors: { value: Sector; label: string }[] = [
  { value: "all", label: "All Sectors" },
  { value: "it", label: "IT / Software" },
  { value: "core", label: "Core Engineering" },
  { value: "consulting", label: "Consulting" },
  { value: "finance", label: "Finance" },
  { value: "startup", label: "Startups" },
]

export default function RecruitersPage() {
  const [activeSector, setActiveSector] = useState<Sector>("all")
  const [searchQuery, setSearchQuery] = useState("")

  const filtered = recruiters.filter((r) => {
    const matchesSector = activeSector === "all" || r.sector === activeSector
    const matchesSearch = r.name.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesSector && matchesSearch
  })

  return (
    <>
      <PageHeader
        title="Our Recruiters"
        subtitle="Over 100 leading companies across IT, core engineering, consulting, and finance recruit from PHCET every year."
        badge="Industry Partners"
      />

      {/* Search and Filter */}
      <section className="sticky top-16 z-30 border-b border-border bg-background/80 backdrop-blur-xl">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="flex flex-col gap-4 py-4 md:flex-row md:items-center">
            <div className="relative flex-1 md:max-w-sm">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search companies..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="h-10 w-full rounded-lg border border-input bg-background pl-10 pr-4 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              />
            </div>
            <div className="flex items-center gap-2 overflow-x-auto">
              {sectors.map((sector) => (
                <button
                  key={sector.value}
                  onClick={() => setActiveSector(sector.value)}
                  className={cn(
                    "shrink-0 rounded-full px-4 py-2 text-sm font-medium transition-colors",
                    activeSector === sector.value
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground"
                  )}
                >
                  {sector.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Recruiters Grid */}
      <section className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
        <p className="mb-8 text-sm text-muted-foreground">
          Showing {filtered.length} {filtered.length === 1 ? "company" : "companies"}
        </p>

        {filtered.length === 0 ? (
          <div className="py-20 text-center">
            <Building2 className="mx-auto h-12 w-12 text-muted-foreground/40" />
            <p className="mt-4 text-lg text-muted-foreground">
              No companies found matching your criteria.
            </p>
          </div>
        ) : (
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((recruiter) => (
              <div
                key={recruiter.name}
                className="group rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/30 hover:shadow-md"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-primary/10 font-heading text-sm font-bold text-primary">
                    {recruiter.initials}
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="truncate font-heading text-base font-semibold text-foreground">
                      {recruiter.name}
                    </h3>
                    <div className="mt-1 flex items-center gap-3">
                      <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
                        <Globe className="h-3 w-3" />
                        {recruiter.type}
                      </span>
                      <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
                        <MapPin className="h-3 w-3" />
                        {recruiter.location}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {recruiter.roles.map((role) => (
                    <span
                      key={role}
                      className="rounded-md bg-muted px-2 py-1 text-xs font-medium text-muted-foreground"
                    >
                      {role}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </>
  )
}
