import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { Calendar, Clock, MapPin, Users, ArrowLeft, Share2, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { PageHeader } from '@/components/page-header'
import { cn } from '@/lib/utils'

type EventCategory = 'placement' | 'workshop' | 'seminar' | 'competition'

interface Event {
  id: number
  title: string
  description: string
  date: string
  time: string
  location: string
  category: EventCategory
  image: string
  status: 'upcoming' | 'ongoing' | 'completed'
  fullDescription?: string
  capacity?: number
  registeredCount?: number
  speakers?: string[]
  agenda?: Array<{ time: string; title: string; description: string }>
  prerequisites?: string[]
  contactEmail?: string
}

const events: Event[] = [
  {
    id: 1,
    title: 'Campus Placement Drive - TCS',
    description:
      'On-campus placement drive by Tata Consultancy Services for B.E. students across all branches.',
    fullDescription:
      'Join us for an exclusive on-campus placement drive by Tata Consultancy Services (TCS), one of India\'s leading IT companies. This is an excellent opportunity for final-year B.E. students across all branches to showcase their skills and secure their career with a global technology leader.\n\nThe day will kick off with a pre-placement talk where TCS representatives will share insights about the company culture, available positions, and the recruitment process. Following this, eligible candidates will take an online assessment covering logical reasoning, verbal ability, and programming concepts. Selected candidates will move forward to technical and HR interview rounds.\n\nTCS looks for candidates with strong problem-solving skills, good communication abilities, and a passion for technology. This is a golden opportunity to start your professional journey with a company known for innovation and employee development.',
    date: 'March 15, 2026',
    time: '9:00 AM - 5:00 PM',
    location: 'Main Auditorium, PHCET',
    category: 'placement',
    image: '/images/placement-drive.jpg',
    status: 'upcoming',
    capacity: 120,
    registeredCount: 85,
    speakers: ['Rajesh Kumar - HR Manager, TCS', 'Priya Singh - Technical Lead, TCS'],
    agenda: [
      {
        time: '9:00 AM - 9:30 AM',
        title: 'Registration & Breakfast',
        description: 'Early registration and refreshments',
      },
      {
        time: '9:30 AM - 10:30 AM',
        title: 'Pre-Placement Talk',
        description: 'TCS company overview, roles, and recruitment process',
      },
      {
        time: '10:30 AM - 12:30 PM',
        title: 'Online Assessment',
        description: 'Logical reasoning, verbal ability, and programming',
      },
      {
        time: '12:30 PM - 1:30 PM',
        title: 'Lunch Break',
        description: 'Lunch provided for all participants',
      },
      {
        time: '1:30 PM - 5:00 PM',
        title: 'Technical & HR Interviews',
        description: 'One-on-one interview rounds for selected candidates',
      },
    ],
    prerequisites: [
      '60% or above aggregate in all semesters',
      'No active backlogs',
      'Basic knowledge of programming concepts',
      'Good communication skills',
    ],
    contactEmail: 'tpc@phcet.ac.in',
  },
  {
    id: 2,
    title: 'Resume Building Workshop',
    description:
      'Learn to craft a compelling resume that stands out. Industry experts will guide you through best practices.',
    fullDescription:
      'Craft a resume that gets noticed! In this comprehensive workshop, industry experts will share proven strategies for creating a resume that stands out in a competitive job market.\n\nYou\'ll learn the latest resume formats, ATS optimization techniques, and how to highlight your skills and achievements effectively. Whether you\'re a first-year student or a final-year student about to enter the job market, this workshop is designed to help you at every stage.\n\nTopics covered include:\n- Resume structure and formatting\n- Quantifying your achievements\n- Tailoring your resume for different positions\n- Common resume mistakes to avoid\n- Personal branding through your resume\n- Digital presence and LinkedIn optimization\n\nParticipants will also receive personalized feedback on their resumes and tips for improvement.',
    date: 'March 8, 2026',
    time: '2:00 PM - 4:30 PM',
    location: 'Seminar Hall, Block B',
    category: 'workshop',
    image: '/images/event-workshop.jpg',
    status: 'upcoming',
    capacity: 80,
    registeredCount: 65,
    speakers: ['Dr. Arun Verma - HR Consultant, XYZ Solutions'],
    agenda: [
      {
        time: '2:00 PM - 2:15 PM',
        title: 'Introduction',
        description: 'Overview of workshop goals and agenda',
      },
      {
        time: '2:15 PM - 3:00 PM',
        title: 'Resume Fundamentals',
        description: 'Structure, format, and essential sections',
      },
      {
        time: '3:00 PM - 3:45 PM',
        title: 'ATS Optimization & Keywords',
        description: 'Making your resume ATS-friendly',
      },
      {
        time: '3:45 PM - 4:00 PM',
        title: 'Break',
        description: 'Short refreshment break',
      },
      {
        time: '4:00 PM - 4:30 PM',
        title: 'Q&A & Feedback',
        description: 'Personal resume review and feedback session',
      },
    ],
    prerequisites: ['Current resume or CV', 'Pen and notepad for notes', 'Active participation'],
    contactEmail: 'workshops@phcet.ac.in',
  },
  {
    id: 3,
    title: 'Tech Talk: AI in the Workplace',
    description:
      'An insightful seminar on how Artificial Intelligence is transforming the workplace. Featuring speakers from Google and Microsoft.',
    fullDescription:
      'Discover how Artificial Intelligence is reshaping the modern workplace in this engaging seminar featuring industry leaders from Google and Microsoft.\n\nArtificial Intelligence has transitioned from a futuristic concept to a present reality, revolutionizing how businesses operate and employees work. This seminar explores the latest trends, practical applications, and future implications of AI in various industries.\n\nLearn from experts who are at the forefront of AI innovation about:\n- Current AI applications in industry\n- How AI is augmenting human capabilities\n- Preparing for an AI-driven future\n- Ethical considerations in AI implementation\n- Career opportunities in AI and machine learning\n\nWhether you\'re interested in AI, data science, or simply want to understand how technology is shaping your future career, this talk is a must-attend.',
    date: 'February 28, 2026',
    time: '10:00 AM - 12:00 PM',
    location: 'Conference Room 1',
    category: 'seminar',
    image: '/images/hero-campus.jpg',
    status: 'upcoming',
    capacity: 200,
    registeredCount: 156,
    speakers: ['John Smith - AI Research Lead, Google', 'Sarah Johnson - AI Solutions Architect, Microsoft'],
    agenda: [
      {
        time: '10:00 AM - 10:15 AM',
        title: 'Welcome & Introduction',
        description: 'Session overview and speaker introduction',
      },
      {
        time: '10:15 AM - 10:50 AM',
        title: 'AI Applications in Industry',
        description: 'Real-world use cases and implementations',
      },
      {
        time: '10:50 AM - 11:25 AM',
        title: 'Future of AI & Career Opportunities',
        description: 'Emerging trends and job prospects',
      },
      {
        time: '11:25 AM - 11:40 AM',
        title: 'Break',
        description: 'Short refreshment break',
      },
      {
        time: '11:40 AM - 12:00 PM',
        title: 'Q&A Session',
        description: 'Interactive Q&A with speakers',
      },
    ],
    prerequisites: ['Basic understanding of technology', 'Interest in AI and future trends'],
    contactEmail: 'seminars@phcet.ac.in',
  },
  {
    id: 4,
    title: 'Code Sprint 2026',
    description:
      'A 24-hour coding competition open to all engineering students. Solve real-world problems and compete for prizes.',
    fullDescription:
      'Push your coding skills to the limit in Code Sprint 2026, an intense 24-hour competitive programming event!\n\nThis is your chance to tackle real-world algorithmic problems, showcase your problem-solving abilities, and compete against talented coders from across the institution. Whether you\'re a beginner or an experienced programmer, there are problems of varying difficulty levels for everyone.\n\nEvent Highlights:\n- 24-hour continuous coding competition\n- 8-10 challenging programming problems\n- Real-time leaderboard tracking\n- Multiple categories: Beginner, Intermediate, Advanced\n- Prizes and recognition for top performers\n- Free meals and refreshments throughout the event\n- Mentorship from experienced programmers\n\nThis is an excellent opportunity to enhance your coding skills, learn new algorithms and techniques, and have fun while competing with your peers. All you need is a laptop and your coding prowess!',
    date: 'February 20, 2026',
    time: '10:00 AM onwards',
    location: 'IT Lab, Block C',
    category: 'competition',
    image: '/images/team-meeting.jpg',
    status: 'ongoing',
    capacity: 150,
    registeredCount: 128,
    speakers: ['Prof. Vikram Patel - Faculty Advisor', 'Amit Sharma - Programming Coach'],
    agenda: [
      {
        time: '10:00 AM - 10:30 AM',
        title: 'Registration & Problem Distribution',
        description: 'Check-in and problem set distribution',
      },
      {
        time: '10:30 AM - 10:45 AM',
        title: 'Opening Ceremony',
        description: 'Competition kickoff and instructions',
      },
      {
        time: '10:45 AM - 10:45 PM',
        title: 'Coding Marathon',
        description: '24-hour coding competition',
      },
      {
        time: '10:45 PM - 11:30 PM',
        title: 'Final Submissions',
        description: 'Last hour for code submissions',
      },
      {
        time: '11:30 PM - 12:00 AM',
        title: 'Awards & Closing Ceremony',
        description: 'Results announcement and prize distribution',
      },
    ],
    prerequisites: [
      'Valid student ID',
      'Laptop with development tools installed',
      'Programming knowledge (at least one language)',
      'Team size: 1-3 members',
    ],
    contactEmail: 'codesprint@phcet.ac.in',
  },
  {
    id: 5,
    title: 'Infosys Pre-Placement Talk',
    description:
      'Pre-placement talk by Infosys for eligible final year students. Learn about company culture and recruitment process.',
    fullDescription:
      'Infosys, a global leader in IT services and consulting, invites final-year B.E. students to an exclusive pre-placement talk.\n\nDuring this session, Infosys representatives will provide comprehensive information about:\n- Company history, values, and work culture\n- Available positions and career paths\n- The recruitment and selection process\n- Expectations and requirements for Infosys employees\n- Benefits, compensation, and growth opportunities\n- Q&A with hiring managers\n\nThis is an ideal opportunity to get insider information about working at Infosys and to network with company representatives. Attendance is recommended for all eligible final-year students interested in exploring career opportunities with Infosys.',
    date: 'February 10, 2026',
    time: '11:00 AM - 1:00 PM',
    location: 'Main Auditorium, PHCET',
    category: 'placement',
    image: '/images/placement-drive.jpg',
    status: 'completed',
    capacity: 180,
    registeredCount: 175,
    speakers: ['Neha Desai - Campus Recruitment Lead, Infosys'],
    agenda: [
      {
        time: '11:00 AM - 11:15 AM',
        title: 'Welcome & Registration',
        description: 'Seating and final registrations',
      },
      {
        time: '11:15 AM - 12:00 PM',
        title: 'Company Presentation',
        description: 'Infosys overview and career opportunities',
      },
      {
        time: '12:00 PM - 12:30 PM',
        title: 'Recruitment Process Overview',
        description: 'Detailed explanation of selection criteria',
      },
      {
        time: '12:30 PM - 1:00 PM',
        title: 'Q&A Session',
        description: 'Interactive questions and answers',
      },
    ],
    prerequisites: ['Final year student', 'Registered placement candidate', 'Valid student ID'],
    contactEmail: 'tpc@phcet.ac.in',
  },
  {
    id: 6,
    title: 'Soft Skills Development Program',
    description:
      'A week-long program focusing on communication skills, group discussion techniques, and interview etiquette.',
    fullDescription:
      'Master the soft skills that employers value most! This comprehensive week-long program is designed to equip you with the communication and interpersonal skills essential for career success.\n\nProgram Overview:\nDuring this week, you\'ll engage in practical training sessions covering:\n- Verbal and non-verbal communication\n- Group discussion techniques and strategies\n- Mock interview sessions with feedback\n- Professional etiquette and presentation skills\n- Confidence building and public speaking\n- Problem-solving and critical thinking\n- Team collaboration and leadership basics\n\nEach session combines theory with practical exercises, ensuring you can immediately apply what you learn. Industry experts will share real-world examples and interview experiences.\n\nBy the end of the program, you\'ll have the confidence and skills to excel in any interview or group discussion round. Perfect for pre-final year students preparing for placements!',
    date: 'January 25, 2026',
    time: '3:00 PM - 5:00 PM',
    location: 'Seminar Hall, Block A',
    category: 'workshop',
    image: '/images/event-workshop.jpg',
    status: 'completed',
    capacity: 100,
    registeredCount: 98,
    speakers: [
      'Mrs. Priya Nair - Soft Skills Coach',
      'Mr. Rajesh Gupta - Interview Expert',
    ],
    agenda: [
      {
        time: 'Day 1',
        title: 'Communication Fundamentals',
        description: 'Verbal and non-verbal communication techniques',
      },
      {
        time: 'Day 2',
        title: 'Group Discussion Techniques',
        description: 'GD strategies and practice sessions',
      },
      {
        time: 'Day 3',
        title: 'Interview Preparation',
        description: 'Mock interviews and feedback',
      },
      {
        time: 'Day 4',
        title: 'Presentation & Public Speaking',
        description: 'Professional presentation skills',
      },
      {
        time: 'Day 5',
        title: 'Final Assessment & Certificates',
        description: 'Final mock interview and certification',
      },
    ],
    prerequisites: ['Pre-final year or final year student', 'Commitment to all 5 sessions'],
    contactEmail: 'training@phcet.ac.in',
  },
]

function StatusBadge({ status }: { status: Event['status'] }) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-medium',
        status === 'upcoming' && 'bg-primary/10 text-primary',
        status === 'ongoing' && 'bg-accent/10 text-accent',
        status === 'completed' && 'bg-muted text-muted-foreground',
      )}
    >
      <span
        className={cn(
          'h-2 w-2 rounded-full',
          status === 'upcoming' && 'bg-primary',
          status === 'ongoing' && 'animate-pulse bg-accent',
          status === 'completed' && 'bg-muted-foreground',
        )}
      />
      {status.charAt(0).toUpperCase() + status.slice(1)}
    </span>
  )
}

export default async function EventDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const eventId = parseInt(id)

  const event = events.find((e) => e.id === eventId)

  if (!event) {
    notFound()
  }

  const relatedEvents = events.filter(
    (e) => e.category === event.category && e.id !== event.id,
  )

  return (
    <>
      <PageHeader
        title={event.title}
        subtitle={event.description}
        badge={event.category.charAt(0).toUpperCase() + event.category.slice(1)}
      />

      <section className="mx-auto max-w-6xl px-4 py-8 lg:px-8">
        <div className="mb-8 flex items-center gap-4">
          <Link
            href="/events"
            className="flex items-center gap-2 text-sm text-primary/80 transition-colors hover:text-primary"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Events
          </Link>
          <button className="ml-auto flex items-center gap-2 rounded-lg border border-border/60 bg-secondary/30 px-4 py-2 text-sm text-foreground transition-colors hover:bg-secondary/50">
            <Share2 className="h-4 w-4" />
            Share Event
          </button>
        </div>

        {/* Event Hero */}
        <div className="institutional-border mb-8 overflow-hidden rounded-lg section-frame">
          <div className="relative aspect-[16/5] w-full overflow-hidden">
            <Image
              src={event.image}
              alt={event.title}
              fill
              className="object-cover"
            />
            <div className="absolute left-6 top-6">
              <StatusBadge status={event.status} />
            </div>
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Event Description */}
            <div className="institutional-border rounded-lg p-6 section-frame">
              <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
                About This Event
              </h2>
              <div className="space-y-4 text-sm lg:text-base leading-relaxed text-foreground/85">
                {event.fullDescription
                  ? event.fullDescription.split('\n\n').map((para, idx) => (
                    <p key={idx}>{para}</p>
                  ))
                  : event.description}
              </div>
            </div>

            {/* Agenda */}
            {event.agenda && event.agenda.length > 0 && (
              <div className="institutional-border rounded-lg p-6 section-frame">
                <h2 className="font-heading text-2xl font-bold text-foreground mb-6">
                  Event Agenda
                </h2>
                <div className="space-y-4">
                  {event.agenda.map((item, idx) => (
                    <div key={idx} className="flex gap-4 border-l-2 border-primary/30 pl-4">
                      <div className="pt-1">
                        <p className="text-sm font-semibold text-primary">{item.time}</p>
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">{item.title}</h3>
                        <p className="mt-1 text-sm text-foreground/70">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Prerequisites */}
            {event.prerequisites && event.prerequisites.length > 0 && (
              <div className="institutional-border rounded-lg p-6 section-frame">
                <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
                  Prerequisites
                </h2>
                <ul className="space-y-2">
                  {event.prerequisites.map((prereq, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm lg:text-base text-foreground/85">
                      <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-primary/60" />
                      {prereq}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Details */}
            <div className="institutional-border rounded-lg p-6 section-frame sticky top-20">
              <h3 className="font-heading text-lg font-bold text-foreground mb-5">
                Event Details
              </h3>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Calendar className="mt-1 h-5 w-5 shrink-0 text-primary" />
                  <div>
                    <p className="text-xs font-semibold uppercase text-primary/70">Date</p>
                    <p className="text-sm text-foreground">{event.date}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="mt-1 h-5 w-5 shrink-0 text-primary" />
                  <div>
                    <p className="text-xs font-semibold uppercase text-primary/70">Time</p>
                    <p className="text-sm text-foreground">{event.time}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="mt-1 h-5 w-5 shrink-0 text-primary" />
                  <div>
                    <p className="text-xs font-semibold uppercase text-primary/70">Location</p>
                    <p className="text-sm text-foreground">{event.location}</p>
                  </div>
                </div>

                {event.capacity && (
                  <div className="flex items-start gap-3">
                    <Users className="mt-1 h-5 w-5 shrink-0 text-primary" />
                    <div>
                      <p className="text-xs font-semibold uppercase text-primary/70">Capacity</p>
                      <p className="text-sm text-foreground">
                        {event.registeredCount}/{event.capacity} Registered
                      </p>
                      <div className="mt-2 h-2 w-full bg-secondary rounded-full overflow-hidden">
                        <div
                          className="h-full bg-primary transition-all"
                          style={{
                            width: `${((event.registeredCount || 0) / (event.capacity || 1)) * 100}%`,
                          }}
                        />
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div className="mt-6 border-t border-border/50 pt-6 space-y-3">
                {event.status !== 'completed' ? (
                  <>
                    <Button className="w-full gap-2 bg-primary text-primary-foreground hover:bg-primary/90">
                      Register Now
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full border-border/60"
                    >
                      Contact TPC
                    </Button>
                  </>
                ) : (
                  <div className="rounded-lg bg-muted/50 p-4 text-center">
                    <p className="text-sm text-muted-foreground">This event has ended</p>
                  </div>
                )}
              </div>
            </div>

            {/* Speakers */}
            {event.speakers && event.speakers.length > 0 && (
              <div className="institutional-border rounded-lg p-6 section-frame">
                <h3 className="font-heading text-lg font-bold text-foreground mb-4">
                  Speakers
                </h3>
                <div className="space-y-3">
                  {event.speakers.map((speaker, idx) => (
                    <div key={idx} className="flex items-center gap-3 text-sm">
                      <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <span className="text-xs font-semibold text-primary">
                          {speaker.charAt(0)}
                        </span>
                      </div>
                      <p className="text-foreground/85">{speaker}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Related Events */}
      {relatedEvents.length > 0 && (
        <section className="border-t border-border/50 mt-16 py-14">
          <div className="mx-auto max-w-6xl px-4 lg:px-8">
            <div className="mb-8">
              <h2 className="font-heading text-3xl font-bold text-foreground">
                Related Events
              </h2>
              <p className="mt-2 text-foreground/75">
                Explore more events in the {event.category} category
              </p>
            </div>

            <div className="institutional-border rounded-lg p-6 section-frame">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {relatedEvents.slice(0, 3).map((relEvent) => (
                  <Link
                    key={relEvent.id}
                    href={`/events/${relEvent.id}`}
                    className="group overflow-hidden rounded-lg border border-border/60 bg-secondary/30 transition-all hover:border-primary/40 hover:bg-secondary/50"
                  >
                    <div className="relative aspect-[16/9] overflow-hidden">
                      <Image
                        src={relEvent.image}
                        alt={relEvent.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-4">
                      <div className="mb-2 inline-flex rounded-md bg-muted px-2 py-1 text-xs font-medium capitalize text-muted-foreground">
                        {relEvent.category}
                      </div>
                      <h3 className="font-heading text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                        {relEvent.title}
                      </h3>
                      <p className="mt-2 text-xs text-muted-foreground">
                        {relEvent.date}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  )
}
