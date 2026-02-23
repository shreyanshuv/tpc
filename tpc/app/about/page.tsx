import React from "react"
import Image from "next/image"
import type { Metadata } from "next"
import {
  Target,
  Eye,
  Lightbulb,
  BookOpen,
  Users,
  Briefcase,
  Award,
  TrendingUp,
} from "lucide-react"
import { PageHeader } from "@/components/page-header"

export const metadata: Metadata = {
  title: "About Us | TPC - PHCET",
  description:
    "Learn about the Training and Placement Cell of Pillai HOC College of Engineering and Technology.",
}

const values = [
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "Encouraging creative thinking and problem-solving to prepare students for real-world challenges.",
  },
  {
    icon: BookOpen,
    title: "Excellence",
    description:
      "Striving for the highest standards in training, placement processes, and student development.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description:
      "Fostering strong partnerships between students, faculty, and industry professionals.",
  },
  {
    icon: Award,
    title: "Integrity",
    description:
      "Maintaining transparent, ethical practices in all placement and recruitment activities.",
  },
]

const timeline = [
  {
    year: "2009",
    title: "Foundation",
    description:
      "PHCET was established, and the Training and Placement Cell was formed to support student careers from day one.",
  },
  {
    year: "2012",
    title: "First Placement Drive",
    description:
      "Organized the first major on-campus placement drive with leading IT companies participating.",
  },
  {
    year: "2016",
    title: "100+ Recruiters Milestone",
    description:
      "Achieved the milestone of having over 100 companies as active recruiting partners.",
  },
  {
    year: "2020",
    title: "Virtual Placements",
    description:
      "Successfully transitioned to virtual placement drives during the pandemic, maintaining high placement rates.",
  },
  {
    year: "2024",
    title: "Record Placements",
    description:
      "Achieved record-breaking placement statistics with highest packages and maximum students placed.",
  },
]

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="About TPC"
        subtitle="Empowering students with the skills, confidence, and opportunities they need to build successful careers."
        badge="Who We Are"
      />

      {/* Mission & Vision */}
      <section className="mx-auto max-w-7xl px-4 py-24 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-2xl border border-border bg-card p-8 lg:p-10">
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <Target className="h-7 w-7" />
            </div>
            <h2 className="font-heading text-2xl font-bold text-foreground">
              Our Mission
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              To bridge the gap between academic knowledge and industry
              requirements by providing comprehensive training, mentorship, and
              placement opportunities. We aim to develop well-rounded
              professionals who can contribute meaningfully to the global
              workforce and create value in their chosen fields.
            </p>
          </div>

          <div className="rounded-2xl border border-border bg-card p-8 lg:p-10">
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-accent/10 text-accent">
              <Eye className="h-7 w-7" />
            </div>
            <h2 className="font-heading text-2xl font-bold text-foreground">
              Our Vision
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              To be a leading placement cell that consistently produces
              industry-ready graduates, recognized for our commitment to
              excellence in training, our strong industry partnerships, and our
              unwavering dedication to student success and career development.
            </p>
          </div>
        </div>
      </section>

      {/* About Image Section */}
      <section className="bg-card py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <div className="space-y-6">
              <div className="space-y-2">
                <p className="text-sm font-semibold uppercase tracking-wider text-primary">
                  Our Story
                </p>
                <h2 className="font-heading text-3xl font-bold text-foreground lg:text-4xl">
                  <span className="text-balance">
                    A Legacy of Excellence in Placements
                  </span>
                </h2>
              </div>
              <p className="text-base leading-relaxed text-muted-foreground">
                Since the inception of PHCET in 2009, the Training and Placement
                Cell has been at the forefront of student development and
                career building. Over the years, we have built strong
                relationships with top companies across IT, core engineering,
                consulting, and more.
              </p>
              <p className="text-base leading-relaxed text-muted-foreground">
                Our dedicated team of faculty coordinators and student
                volunteers work year-round to organize training sessions,
                workshops, mock interviews, and placement drives that prepare
                students for the competitive job market.
              </p>
              <div className="grid grid-cols-2 gap-6 pt-4">
                <div>
                  <div className="flex items-center gap-2">
                    <Briefcase className="h-5 w-5 text-primary" />
                    <p className="font-heading text-2xl font-bold text-foreground">
                      100+
                    </p>
                  </div>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Partner Companies
                  </p>
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <TrendingUp className="h-5 w-5 text-accent" />
                    <p className="font-heading text-2xl font-bold text-foreground">
                      15+
                    </p>
                  </div>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Years of Excellence
                  </p>
                </div>
              </div>
            </div>

            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <Image
                src="/images/tpc_team.jpg"
                alt="TPC team meeting"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="mx-auto max-w-7xl px-4 py-24 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">
            Our Values
          </p>
          <h2 className="mt-2 font-heading text-3xl font-bold text-foreground lg:text-4xl">
            What Drives Us Forward
          </h2>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {values.map((value) => (
            <div
              key={value.title}
              className="group text-center"
            >
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <value.icon className="h-7 w-7" />
              </div>
              <h3 className="font-heading text-lg font-semibold text-foreground">
                {value.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Timeline */}
     <section className="bg-card py-24">
  <div className="mx-auto max-w-7xl px-4 lg:px-8">
    <div className="mx-auto max-w-2xl text-center">
      <p className="text-sm font-semibold uppercase tracking-wider text-primary">
        Our Journey
      </p>
      <h2 className="mt-2 font-heading text-3xl font-bold text-foreground lg:text-4xl">
        Milestones Along the Way
      </h2>
    </div>

    <div className="relative mt-16">
      {/* Center Line */}
      <div className="absolute left-1/2 top-0 h-full w-[2px] -translate-x-1/2 bg-border" />

      <div className="space-y-12">
        {timeline.map((item, i) => (
          <div key={item.year} className="relative flex items-center">
            
            {/* LEFT SIDE */}
            <div className={`w-1/2 pr-8 ${i % 2 !== 0 && "invisible"}`}>
              <div className="rounded-xl border border-border bg-background p-6">
                <span className="text-sm font-bold text-primary">
                  {item.year}
                </span>
                <h3 className="mt-2 text-lg font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </div>

            {/* DOT */}
            <div className="absolute left-1/2 h-4 w-4 -translate-x-1/2 rounded-full border-4 border-primary bg-background" />

            {/* RIGHT SIDE */}
            <div className={`w-1/2 pl-8 ${i % 2 === 0 && "invisible"}`}>
              <div className="rounded-xl border border-border bg-background p-6">
                <span className="text-sm font-bold text-primary">
                  {item.year}
                </span>
                <h3 className="mt-2 text-lg font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </div>

          </div>
        ))}
      </div>
    </div>
  </div>
</section>
    </>
  )
}
