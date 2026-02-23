import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const companies = [
  { name: "Infosys", category: "IT", logo: "/logos/infosys.svg" },
  { name: "TCS", category: "IT", logo: "/logos/tcs.svg" },
  { name: "Cognizant", category: "IT", logo: "/logos/cognizant.svg" },
  { name: "Wipro", category: "IT", logo: "/logos/wipro.svg" },
  { name: "HCL Technologies", category: "IT", logo: "/logos/hcl.svg" },
  { name: "Accenture", category: "IT", logo: "/logos/accenture.svg" },
  { name: "Capgemini", category: "IT", logo: "/logos/capgemini.svg" },
  { name: "Tech Mahindra", category: "IT", logo: "/logos/techmahindra.svg" },
  { name: "Reliance Industries", category: "Energy", logo: "/logos/reliance.svg" },
  { name: "KPMG", category: "Consulting", logo: "/logos/kpmg.svg" },
  { name: "Deloitte", category: "Consulting", logo: "/logos/deloitte.svg" },
  { name: "Goldman Sachs", category: "Finance", logo: "/logos/goldmansachs.svg" },
]

export function RecruitersSection() {
  // Duplicate companies for seamless carousel looping
  const carouselCompanies = [...companies, ...companies]

  return (
    <section className="py-14 md:py-16 border-b border-border/50">
      <div className="mx-auto max-w-6xl px-4 lg:px-8">
        <div className="space-y-2 mb-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            <span className="text-balance">
              Trusted by Leading Companies
            </span>
          </h2>
          <p className="max-w-2xl mx-auto text-sm lg:text-base text-foreground/80">
            Our students are recruited by top companies across IT, consulting, finance, and core engineering sectors.
          </p>
        </div>

        <div className="space-y-6">
          {/* First Carousel - Moving Left */}
          <div className="carousel-container">
            <div className="carousel-track carousel-scroll-left">
              {carouselCompanies.map((company, idx) => (
                <div
                  key={`carousel-1-${idx}`}
                  className="group flex flex-col items-center justify-center gap-2 rounded-lg bg-secondary/20 p-6 transition-all hover:bg-green-300 hover:scale-110 min-w-max"
                >
                  <div className="relative h-16 w-36 flex items-center justify-center">
                    <Image
                      src={company.logo}
                      alt={company.name}
                      width={128}
                      height={48}
                      className="object-contain max-h-16 opacity-90 group-hover:opacity-100 transition-opacity"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Second Carousel - Moving Right */}
          <div className="carousel-container">
            <div className="carousel-track carousel-scroll-right">
              {carouselCompanies.map((company, idx) => (
                <div
                  key={`carousel-2-${idx}`}
                  className="group flex flex-col items-center justify-center gap-2 rounded-lg bg-secondary/20 p-6 transition-all hover:bg-green-300 hover:scale-110 min-w-max"
                >
                  <div className="relative h-16 w-36 flex items-center justify-center">
                    <Image
                      src={company.logo}
                      alt={company.name}
                      width={128}
                      height={48}
                      className="object-contain max-h-16 opacity-90 group-hover:opacity-100 transition-opacity"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 flex justify-center">
          <Button asChild size="lg" className="gap-2 bg-primary text-primary-foreground hover:bg-primary/90 hover-lift">
            <Link href="/recruiters">
              View All Recruiters
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
