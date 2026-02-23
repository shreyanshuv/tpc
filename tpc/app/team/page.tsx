'use client'

import Image from "next/image"
import { Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"

interface TeamMember {
  name: string
  role: string
  department?: string
  initials: string
  color: string
  image?: string
}

const facultyAdvisors: TeamMember[] = [

  {
    name: "Dr. J. W. Bakal",
    role: "Principal",
    department: "Chief Patron",
    initials: "JB",
    color: "bg-primary",
    image: "/images/DR._J._W._Bakal.jpg",
  },
  {
    name: "Divya Nair",
    role: "Training & Placement Officer",
    department: "TPO Head",
    initials: "DN",
    color: "bg-accent",
    image: "/images/WhatsApp Image 2025-09-17 at 19.56.48_6c08c298 (1).jpg",
  },
  {
    name: "Dinesh Mande",
    role: "TPO Co-ordinator",
    department: "Training & Placement Cell",
    initials: "DM",
    color: "bg-primary",
    image: "/images/IMG_20250918_101456 (1).jpg",
  },
  {
    name: "Shrutika Khobragade",
    role: "Faculty Co-ordinator",
    department: "Computer Engineering",
    initials: "SK",
    color: "bg-accent",
  },
  {
    name: "Supriya Shigwan",
    role: "Faculty Co-ordinator",
    department: "Electrical Engineering",
    initials: "SS",
    color: "bg-primary",
  },
  {
    name: "Priya Tambe",
    role: "Faculty Co-ordinator",
    department: "EXTC Department",
    initials: "PT",
    color: "bg-accent",
  },
  {
    name: "Shamna Sadanand",
    role: "Faculty Co-ordinator",
    department: "Information Technology",
    initials: "SS",
    color: "bg-primary",
  },
  {
    name: "Sunil Singh Rajput",
    role: "Faculty Co-ordinator",
    department: "Mechanical Engineering",
    initials: "SR",
    color: "bg-accent",
  },

]

const studentCommittee: TeamMember[] = [

{
  name: "Aditya Pandey",
  role: "Chairperson",
  department: "BE - Computer Engineering",
  initials: "AP",
  color: "bg-primary",
  image: "/images/Aditya Pandey.jpg",
},
{
  name: "Simran Dhole",
  role: "Co-Chairperson",
  department: "BE - Electronics & Computer Science",
  initials: "SD",
  color: "bg-accent",
  image: "/images/Simran Dhole.jpg",
},
{
  name: "Amar Tiwari",
  role: "Vice-President",
  department: "TE - Computer Engineering",
  initials: "AT",
  color: "bg-primary",
  image: "/images/Amar tiwari_.jpg",
},

{
  name: "Shubham Gupta",
  role: "Technical Mentor",
  department: "BE - Computer Engineering",
  initials: "SG",
  color: "bg-accent",
  image: "/images/IMG_20250911_132709.jpg",
},
{
  name: "Atul D. Dubal",
  role: "Technical Head",
  department: "BE - Electronics & Computer Science",
  initials: "AD",
  color: "bg-primary",
  image: "/images/IMG_20250911_131602.jpg",
},
{
  name: "Sheryanshu Vichare",
  role: "Technical Head",
  department: "TE - Computer Engineering",
  initials: "SV",
  color: "bg-accent",
  image: "/images/Shreyanshu vichare Tech team.jpg",
},
{
  name: "Saloni Agalawe",
  role: "Tech Coordinator",
  department: "Computer Engineering",
  initials: "SA",
  color: "bg-primary",
  image: "/images/Saloni Agalawe.jpg",
},
{
  name: "Yashas Devadiga",
  role: "Tech Coordinator",
  department: "Computer Engineering",
  initials: "YD",
  color: "bg-accent",
  image: "/images/Yashas Devadiga.jpg",
},
{
  name: "Geethu Nair",
  role: "HR Coordinator",
  department: "Training & Placement Cell",
  initials: "GN",
  color: "bg-primary",
  image: "/images/Geethu Nair.jpg",
},
{
  name: "Aditya Maind",
  role: "HR Coordinator",
  department: "Training & Placement Cell",
  initials: "AM",
  color: "bg-accent",
  image: "/images/Aditya Maind_.jpg",
},

{
  name: "Midhun Mohandas",
  role: "Event & Marketing Mentor",
  department: "BE - Computer Engineering",
  initials: "MM",
  color: "bg-accent",
  image: "/images/Midhun Mohandas.png",
},
{
  name: "Mohammad Sonde",
  role: "Event & Marketing Head",
  department: "TE - Computer Engineering",
  initials: "MS",
  color: "bg-primary",
  image: "/images/Mohammad Sonde (1).jpg",
},
{
  name: "Harshada Nijampurkar",
  role: "Event & Marketing Head",
  department: "TE - Computer Engineering",
  initials: "HN",
  color: "bg-primary",
  image: "/images/Harshada Nijampurkar (1).jpg",
},
{
  name: "Bhargavi Jadhav",
  role: "Event Coordinator",
  department: "TPC Events Team",
  initials: "BJ",
  color: "bg-primary",
  image: "/images/Bhargavi Jadhav.jpg",
},
{
  name: "Arya",
  role: "Event Coordinator",
  department: "TPC Events Team",
  initials: "AR",
  color: "bg-accent",
  image: "/images/Arya.jpg",
},
{
  name: "Vedanti Patil",
  role: "Content Mentor",
  department: "BE - Computer Engineering",
  initials: "VP",
  color: "bg-accent",
  image: "/images/IMG_20250911_131652.jpg",
},
{
  name: "Kunal Mahajan",
  role: "Content Head",
  department: "TE - Computer Engineering",
  initials: "KM",
  color: "bg-primary",
  image: "/images/Kunal Mahajan (1).jpg",
},
{
  name: "Kandarp Choudhary",
  role: "Content Co-ordinator",
  department: "SE - Computer Engineering",
  initials: "KC",
  color: "bg-accent",
  image: "/images/Aryan Gole.jpg",
},
{
  name: "Sanskruti",
  role: "Content Coordinator",
  department: "TPC Content Team",
  initials: "SA",
  color: "bg-primary",
  image: "/images/Sanskruti.jpg",
},
{
  name: "Prachi Nigade",
  role: "Content Coordinator",
  department: "TPC Content Team",
  initials: "PN",
  color: "bg-accent",
  image: "/images/Prachiti Nigade.jpg",
},
{
  name: "Tejas Gadagoli",
  role: "Media Head",
  department: "TE - Mechanical Engineering",
  initials: "TG",
  color: "bg-primary",
  image: "/images/Tejas Gadagoli.png",
},

{
  name: "Parth Shinde",
  role: "Media Coordinator",
  department: "TPC Media Team",
  initials: "PS",
  color: "bg-primary",
  image: "/images/Parth Shinde.jpg",
},
{
  name: "Bhoomi Singh",
  role: "Media Coordinator",
  department: "TPC Media Team",
  initials: "BS",
  color: "bg-accent",
  image: "/images/Bhoomi Singh_.jpg",
},
{
  name: "Siddharth Darade",
  role: "Media Coordinator",
  department: "TPC Media Team",
  initials: "SD",
  color: "bg-primary",
  image: "/images/Siddharth Darade.jpg",
},
{
  name: "Shravni Gaikwad",
  role: "Media Coordinator",
  department: "TPC Media Team",
  initials: "SG",
  color: "bg-accent",
  image: "/images/Shravani Gaikwad .jpg",
},
{
  name: "Disha Naik",
  role: "Graphics Mentor",
  department: "BE - Computer Engineering",
  initials: "DN",
  color: "bg-accent",
  image: "/images/DishaNaik.heic",
},
{
  name: "Sarthak Gurav",
  role: "Graphics Head",
  department: "TE - Electrical & Computer Engineering",
  initials: "SG",
  color: "bg-primary",
  image: "/images/Sarthak Gurav.png",
},
{
  name: "Mansi Phalak",
  role: "Graphics Head",
  department: "TE - Computer Engineering",
  initials: "MP",
  color: "bg-accent",
  image: "/images/Mansi Phalak.jpg",
},
{
  name: "Kaustubh Gharat",
  role: "Graphics Coordinator",
  department: "TPC Design Team",
  initials: "KG",
  color: "bg-primary",
  image: "/images/Kaustubh Gharat.jpg",
},
{
  name: "Riya Bhavsar",
  role: "Graphics Coordinator",
  department: "TPC Design Team",
  initials: "RB",
  color: "bg-accent",
  image: "/images/Riya Bhavsar.jpg",
},

]

function TeamCard({ member }: { member: TeamMember }) {
  return (
    <div className="group overflow-hidden rounded-2xl border border-border bg-card transition-all hover:shadow-xl hover:-translate-y-1">
      
      {/* IMAGE SECTION */}
      {member.image && (
        <div className="relative h-72 w-full overflow-hidden">
          <Image
            src={member.image}
            alt={member.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      )}

      {/* CONTENT SECTION */}
      <div className="p-6 text-center">
        <h3 className="text-lg font-semibold text-foreground">
          {member.name}
        </h3>

        <p className="mt-1 text-primary font-medium">
          {member.role}
        </p>

        {member.department && (
          <p className="mt-1 text-sm text-muted-foreground">
            {member.department}
          </p>
        )}

        <div className="mt-4 flex justify-center gap-3">
          <a className="flex h-9 w-9 items-center justify-center rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-colors">
            <Linkedin className="h-4 w-4" />
          </a>
          <a className="flex h-9 w-9 items-center justify-center rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-colors">
            <Mail className="h-4 w-4" />
          </a>
        </div>
      </div>
    </div>
  )
}

export default function TeamPage() {
  const [activeTab, setActiveTab] = useState<'faculty' | 'student'>('faculty')

  return (
    <>
      {/* Header Section - Aligned with PageHeader */}
      <section className="relative overflow-hidden bg-background border-b border-border/60">
        <div className="absolute inset-0 opacity-[0.05]">
          <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="32" height="32" patternUnits="userSpaceOnUse">
                <path d="M 32 0 L 0 0 0 32" fill="none" stroke="hsl(var(--primary))" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        <div className="relative z-10 mx-auto max-w-6xl px-4 py-12 lg:px-8 lg:py-16">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="font-heading text-3xl font-bold tracking-tight md:text-4xl">
              <span className="text-foreground">Our </span>
              <span className="text-primary">Team</span>
            </h1>
            <p className="mt-3 text-sm lg:text-base leading-relaxed text-muted-foreground">
              One Team, One Vision, One Mission.
            </p>
          </div>
        </div>
      </section>

      {/* Tabs Section */}
      <section className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
        <div className="flex justify-center gap-4">
          <Button
            onClick={() => setActiveTab('faculty')}
            className={`px-8 py-2 rounded-lg font-semibold transition-all ${
              activeTab === 'faculty'
                ? 'bg-primary text-primary-foreground'
                : 'border-2 border-border bg-transparent text-foreground hover:border-primary/50'
            }`}
          >
            Faculty Coordinators
          </Button>
          <Button
            onClick={() => setActiveTab('student')}
            className={`px-8 py-2 rounded-lg font-semibold transition-all ${
              activeTab === 'student'
                ? 'bg-primary text-primary-foreground'
                : 'border-2 border-border bg-transparent text-foreground hover:border-primary/50'
            }`}
          >
            Student Committee
          </Button>
        </div>
      </section>

      {/* Description Section */}
      <section className="mx-auto max-w-7xl px-4 pb-16 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">
            {activeTab === 'faculty' ? 'Faculty Advisors' : 'Student Committee'}
          </p>
          <h2 className="mt-4 font-heading text-4xl font-bold text-foreground">
            {activeTab === 'faculty' ? 'Guided by Experience' : 'Driven by Passion'}
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            {activeTab === 'faculty'
              ? 'Our faculty advisors bring years of academic and industry experience to guide the placement cell and mentor students.'
              : 'Our student committee members are passionate leaders who coordinate events, manage operations, and ensure the smooth functioning of all placement activities.'}
          </p>
        </div>
      </section>

      {/* Team Members Grid */}
      <section className="mx-auto max-w-7xl px-4 pb-24 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {(activeTab === 'faculty' ? facultyAdvisors : studentCommittee).map((member) => (
            <TeamCard key={member.name} member={member} />
          ))}
        </div>
      </section>
    </>
  )
}
