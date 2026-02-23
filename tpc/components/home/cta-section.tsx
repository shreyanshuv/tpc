import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function CtaSection() {
  return (
    <section className="bg-primary border-t border-primary/40">
      <div className="mx-auto max-w-6xl px-4 py-16 lg:px-8">
        <div className="flex flex-col items-center gap-6 text-center">
          <h2 className="font-heading text-3xl font-bold text-primary-foreground lg:text-4xl">
            <span className="text-balance">
              Ready to Shape Your Career?
            </span>
          </h2>
          <p className="max-w-xl text-base leading-relaxed text-primary-foreground/90">
            Whether you are a student looking for placement support or a
            recruiter searching for top talent, TPC-PHCET is here to help. Get
            in touch with us today.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="gap-2 bg-background text-foreground hover:bg-background/90 transition-colors hover-lift"
            >
              <Link href="/contact">
                Contact Us
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="gap-2 border-primary-foreground/35 bg-transparent text-primary-foreground hover:bg-primary-foreground/15 hover:text-primary-foreground transition-colors hover-lift"
            >
              <Link href="/events">View Upcoming Events</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
