'use client'

import { PageHeader } from '@/components/page-header'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { BookOpen, Users, Lightbulb, Briefcase, Code, Target } from 'lucide-react'

const trainingPrograms = [
  {
    id: 1,
    title: 'Aptitude Training',
    description: 'Comprehensive training in logical reasoning, quantitative aptitude, verbal ability, and data interpretation.',
    icon: Target,
    activities: [
      'Weekly aptitude tests',
      'Personalized feedback sessions',
      'Online practice portal access',
      'Mock CAT/GRE preparation',
    ],
    frequency: 'Ongoing throughout the year',
  },
  {
    id: 2,
    title: 'Soft Skills Development',
    description: 'Build essential communication, leadership, and interpersonal skills required in professional environments.',
    icon: Users,
    activities: [
      'Communication workshops',
      'Group discussion training',
      'Interview preparation',
      'Personality development classes',
      'Presentation skills',
    ],
    frequency: 'Weekly sessions',
  },
  {
    id: 3,
    title: 'Technical Workshops',
    description: 'Industry-relevant technical training in programming languages, frameworks, and emerging technologies.',
    icon: Code,
    activities: [
      'Java & Python programming',
      '.NET development',
      'Web technologies (HTML, CSS, JavaScript)',
      'Database management (SQL, Oracle)',
      'Cloud technologies (AWS, Azure)',
    ],
    frequency: 'Monthly sessions',
  },
  {
    id: 4,
    title: 'CV & Resume Writing',
    description: 'Professional guidance on creating impactful resumes and CVs that stand out to recruiters.',
    icon: Briefcase,
    activities: [
      'CV structure and formatting',
      'Content optimization',
      'Keyword placement',
      'One-on-one review sessions',
      'LinkedIn profile building',
    ],
    frequency: 'As needed',
  },
  {
    id: 5,
    title: 'Career Guidance Seminars',
    description: 'Expert talks and seminars on various career paths, industries, and professional opportunities.',
    icon: Lightbulb,
    activities: [
      'Industry expert lectures',
      'Career pathway sessions',
      'GATE/CAT preparation guidance',
      'Higher studies consultation',
      'Startup opportunities discussion',
    ],
    frequency: 'Bi-weekly',
  },
  {
    id: 6,
    title: 'Industrial Visits',
    description: 'Exposure to real-world industrial environments and manufacturing/IT processes.',
    icon: BookOpen,
    activities: [
      'Manufacturing facility tours',
      'IT company visits',
      'R&D center exploration',
      'Internship opportunities',
      'Networking with professionals',
    ],
    frequency: 'Semester-wise',
  },
]

const upcomingActivities = [
  {
    date: 'Jan 25, 2025',
    title: 'Aptitude Test Series - Round 1',
    category: 'Assessment',
    venue: 'Main Campus',
  },
  {
    date: 'Jan 28, 2025',
    title: 'Soft Skills Workshop - Communication',
    category: 'Workshop',
    venue: 'Seminar Hall',
  },
  {
    date: 'Feb 01, 2025',
    title: 'TCS Campus Recruitment Drive',
    category: 'Placement',
    venue: 'Placement Center',
  },
  {
    date: 'Feb 05, 2025',
    title: 'Industrial Visit to Manufacturing Plant',
    category: 'Industrial Visit',
    venue: 'Off-campus',
  },
  {
    date: 'Feb 10, 2025',
    title: 'CV Writing Workshop & Review',
    category: 'Workshop',
    venue: 'Training Room',
  },
  {
    date: 'Feb 15, 2025',
    title: 'Guest Lecture - AI in Industry',
    category: 'Seminar',
    venue: 'Auditorium',
  },
]

export default function TrainingPage() {
  return (
    <>
      <PageHeader
        title="Training & Development"
        description="Comprehensive programs designed to prepare students for successful careers"
        breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Training' }]}
      />

      {/* Training Programs Grid */}
      <section className="py-12 md:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-4 mb-12">
            <h2 className="text-3xl font-bold md:text-4xl">Our Training Programs</h2>
            <p className="text-lg text-muted-foreground">
              Comprehensive skill development and career preparation programs
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {trainingPrograms.map((program) => {
              const Icon = program.icon
              return (
                <Card key={program.id} className="flex flex-col hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <CardTitle className="flex items-center gap-2">
                          <Icon className="h-5 w-5 text-accent" />
                          {program.title}
                        </CardTitle>
                        <CardDescription className="mt-2">
                          {program.description}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-sm mb-2">Key Activities:</h4>
                        <ul className="text-sm space-y-1">
                          {program.activities.map((activity, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-muted-foreground">
                              <span className="text-accent mt-1">•</span>
                              <span>{activity}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="pt-4 border-t">
                        <p className="text-xs text-muted-foreground">
                          <strong>Frequency:</strong> {program.frequency}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Upcoming Activities */}
      <section className="bg-muted/50 py-12 md:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-4 mb-12">
            <h2 className="text-3xl font-bold md:text-4xl">Upcoming Activities</h2>
            <p className="text-lg text-muted-foreground">
              Important training programs and placement drives scheduled this month
            </p>
          </div>

          <div className="space-y-4">
            {upcomingActivities.map((activity, idx) => (
              <Card key={idx} className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <Badge variant="outline">{activity.date}</Badge>
                        <Badge className="bg-accent/10 text-accent border-accent/30">
                          {activity.category}
                        </Badge>
                      </div>
                      <h3 className="font-semibold text-lg">{activity.title}</h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        📍 {activity.venue}
                      </p>
                    </div>
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      →
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
