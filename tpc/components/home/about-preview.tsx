import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"

const highlights = [
  "Industry-aligned training programs",
  "Mock interviews & resume building workshops",
  "Dedicated placement support for every student",
  "Partnerships with 100+ top companies",
]

export function AboutPreview() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-14 lg:px-8 border-b border-border/50">
      <div className="institutional-border rounded-lg p-6 section-frame">
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-10">
          <div className="relative">
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg border border-border/70 bg-secondary/50">
              <Image
                src="/images/tpc_team.jpg"
                alt="Placement drive at PHCET"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 hidden rounded-lg border border-border/70 bg-secondary/60 backdrop-blur-sm p-3 lg:block institutional-border">
              <p className="font-heading text-xl font-bold text-primary">15+</p>
              <p className="text-xs text-foreground/75">Years of Excellence</p>
            </div>
          </div>

          <div className="space-y-5">
            <div className="space-y-2">
              <p className="text-xs font-semibold uppercase tracking-wider text-primary/85">
                About TPC
              </p>
              <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground text-balance">
                Empowering Students for Success
              </h2>
            </div>

            <p className="text-sm lg:text-base leading-relaxed text-foreground/80">
              The Training and Placement Cell (TPC) at PHCET bridges academia and industry, equipping students with industry-relevant skills and connecting them with top recruiters for meaningful careers.
            </p>

            <div className="space-y-3">
              {highlights.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-primary mt-0.5" />
                  <span className="text-sm text-foreground/85">{item}</span>
                </div>
              ))}
            </div>

            <Button asChild className="gap-2 bg-primary text-primary-foreground hover:bg-primary/90 hover-lift w-fit">
              <Link href="/about">
                Learn More
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
