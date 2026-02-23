"use client"

import { useEffect, useRef, useState } from "react"
import { TrendingUp, Award, Building2, GraduationCap } from "lucide-react"

const stats = [
  {
    icon: GraduationCap,
    value: 500,
    suffix: "+",
    label: "Students Placed",
    description: "Across multiple domains",
  },
  {
    icon: Building2,
    value: 100,
    suffix: "+",
    label: "Recruiting Companies",
    description: "Top MNCs and startups",
  },
  {
    icon: TrendingUp,
    value: 12,
    suffix: " LPA",
    label: "Highest Package",
    description: "Record-breaking offers",
  },
  {
    icon: Award,
    value: 95,
    suffix: "%",
    label: "Placement Rate",
    description: "Consistent year over year",
  },
]

function AnimatedCounter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true
          const duration = 2000
          const steps = 60
          const increment = target / steps
          let current = 0
          const timer = setInterval(() => {
            current += increment
            if (current >= target) {
              setCount(target)
              clearInterval(timer)
            } else {
              setCount(Math.floor(current))
            }
          }, duration / steps)
        }
      },
      { threshold: 0.3 }
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [target])

  return (
    <div ref={ref} className="font-heading text-3xl font-bold text-foreground lg:text-4xl">
      {count}
      {suffix}
    </div>
  )
}

export function StatsSection() {
  return (
    <section className="relative -mt-20 z-20 mx-auto max-w-6xl px-4 lg:px-8 mb-4">
      <div className="institutional-border rounded-lg p-6 section-frame">
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="group flex flex-col rounded-lg border border-border/70 bg-secondary/30 p-5 transition-all hover-lift hover:border-primary/40 hover:bg-secondary/50"
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-md bg-primary/10 text-primary transition-all group-hover:bg-primary/15">
                <stat.icon className="h-5 w-5" />
              </div>
              <AnimatedCounter target={stat.value} suffix={stat.suffix} />
              <p className="mt-2 text-sm font-semibold text-foreground">{stat.label}</p>
              <p className="mt-0.5 text-xs text-foreground/70">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
