interface PageHeaderProps {
  title: string
  subtitle: string
  badge?: string
}

export function PageHeader({ title, subtitle, badge }: PageHeaderProps) {
  return (
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
          {badge && (
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5">
              <span className="h-2 w-2 rounded-full bg-primary" />
              <span className="text-xs font-medium text-foreground">
                {badge}
              </span>
            </div>
          )}
          <h1 className="font-heading text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            <span className="text-balance">{title}</span>
          </h1>
          <p className="mt-3 text-sm lg:text-base leading-relaxed text-muted-foreground">
            {subtitle}
          </p>
        </div>
      </div>
    </section>
  )
}
