'use client'

import { PageHeader } from '@/components/page-header'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Building2, Calendar, Users } from 'lucide-react'

const placementData = {
  '2024': {
    companies: [
      { name: 'TCS', branches: 'All', date: 'Sept 2024', salary: '4.5 LPA' },
      { name: 'Infosys', branches: 'CSE/IT', date: 'Sept 2024', salary: '4.2 LPA' },
      { name: 'Wipro', branches: 'All', date: 'Sept 2024', salary: '4.0 LPA' },
      { name: 'Capgemini', branches: 'CSE/IT/ECE', date: 'Sept 2024', salary: '4.8 LPA' },
      { name: 'L&T Infotech', branches: 'All', date: 'Aug 2024', salary: '4.3 LPA' },
      { name: 'HCL Technologies', branches: 'All', date: 'Aug 2024', salary: '4.1 LPA' },
      { name: 'Goldman Sachs', branches: 'CSE/IT', date: 'Aug 2024', salary: '12 LPA' },
      { name: 'Cognizant', branches: 'All', date: 'July 2024', salary: '3.8 LPA' },
      { name: 'Accenture', branches: 'All', date: 'July 2024', salary: '4.2 LPA' },
      { name: 'DHL Supply Chain', branches: 'Mech/Auto', date: 'July 2024', salary: '4.5 LPA' },
      { name: 'Zomato', branches: 'CSE/IT', date: 'June 2024', salary: '10 LPA' },
      { name: 'Hexaware', branches: 'All', date: 'June 2024', salary: '3.5 LPA' },
    ],
    stats: {
      placementRate: '95%',
      totalStudents: '520',
      averagePackage: '5.2 LPA',
      highestPackage: '12 LPA',
    },
  },
  '2023': {
    companies: [
      { name: 'TCS', branches: 'All', date: 'Sept 2023', salary: '4.2 LPA' },
      { name: 'Infosys', branches: 'CSE/IT', date: 'Sept 2023', salary: '4.0 LPA' },
      { name: 'Wipro', branches: 'All', date: 'Aug 2023', salary: '3.8 LPA' },
      { name: 'Capgemini', branches: 'CSE/IT/ECE', date: 'Aug 2023', salary: '4.5 LPA' },
      { name: 'L&T Infotech', branches: 'All', date: 'Aug 2023', salary: '4.0 LPA' },
      { name: 'Cognizant', branches: 'All', date: 'July 2023', salary: '3.6 LPA' },
      { name: 'Accenture', branches: 'All', date: 'July 2023', salary: '4.0 LPA' },
      { name: 'HCL Technologies', branches: 'All', date: 'June 2023', salary: '3.9 LPA' },
    ],
    stats: {
      placementRate: '92%',
      totalStudents: '485',
      averagePackage: '4.8 LPA',
      highestPackage: '10 LPA',
    },
  },
  '2022': {
    companies: [
      { name: 'TCS', branches: 'All', date: 'Sept 2022', salary: '4.0 LPA' },
      { name: 'Infosys', branches: 'CSE/IT', date: 'Sept 2022', salary: '3.8 LPA' },
      { name: 'Wipro', branches: 'All', date: 'Aug 2022', salary: '3.6 LPA' },
      { name: 'Capgemini', branches: 'All', date: 'Aug 2022', salary: '4.2 LPA' },
      { name: 'Cognizant', branches: 'All', date: 'July 2022', salary: '3.5 LPA' },
    ],
    stats: {
      placementRate: '88%',
      totalStudents: '450',
      averagePackage: '4.2 LPA',
      highestPackage: '8.5 LPA',
    },
  },
}

export default function PlacementsPage() {
  return (
    <>
      <PageHeader
        title="Placements"
        description="Comprehensive placement statistics and recruitment details"
        breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Placements' }]}
      />

      <section className="py-12 md:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="2024" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="2024">2024 Batch</TabsTrigger>
              <TabsTrigger value="2023">2023 Batch</TabsTrigger>
              <TabsTrigger value="2022">2022 Batch</TabsTrigger>
            </TabsList>

            {Object.entries(placementData).map(([year, data]) => (
              <TabsContent key={year} value={year} className="space-y-8">
                {/* Stats Grid */}
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                  <Card>
                    <CardHeader className="pb-3">
                      <CardTitle className="text-sm font-medium text-muted-foreground">
                        Placement Rate
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-2xl font-bold text-primary">
                        {data.stats.placementRate}
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-3">
                      <CardTitle className="text-sm font-medium text-muted-foreground">
                        Total Students
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-2xl font-bold text-primary">
                        {data.stats.totalStudents}
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-3">
                      <CardTitle className="text-sm font-medium text-muted-foreground">
                        Average Package
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-2xl font-bold text-accent">
                        {data.stats.averagePackage}
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-3">
                      <CardTitle className="text-sm font-medium text-muted-foreground">
                        Highest Package
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-2xl font-bold text-accent">
                        {data.stats.highestPackage}
                      </p>
                    </CardContent>
                  </Card>
                </div>

                {/* Companies Table */}
                <Card>
                  <CardHeader>
                    <CardTitle>Recruiting Companies ({data.companies.length})</CardTitle>
                    <CardDescription>
                      List of companies that recruited from {year} batch
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm">
                        <thead className="border-b">
                          <tr className="bg-muted/50">
                            <th className="px-4 py-3 text-left font-medium">Company</th>
                            <th className="px-4 py-3 text-left font-medium">Branches</th>
                            <th className="px-4 py-3 text-left font-medium">Drive Date</th>
                            <th className="px-4 py-3 text-left font-medium">CTC</th>
                          </tr>
                        </thead>
                        <tbody>
                          {data.companies.map((company, idx) => (
                            <tr key={idx} className="border-b hover:bg-muted/30">
                              <td className="px-4 py-3 font-medium">{company.name}</td>
                              <td className="px-4 py-3">
                                <Badge variant="secondary">{company.branches}</Badge>
                              </td>
                              <td className="px-4 py-3 text-muted-foreground">
                                {company.date}
                              </td>
                              <td className="px-4 py-3 font-medium text-primary">
                                {company.salary}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Placement Process */}
      <section className="bg-muted/50 py-12 md:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-4 mb-12">
            <h2 className="text-3xl font-bold md:text-4xl">Placement Process</h2>
            <p className="text-lg text-muted-foreground">
              Our structured approach to preparing students for successful career placements
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: 'Aptitude Training',
                description: 'Comprehensive training in logical reasoning, quantitative analysis, and verbal skills',
              },
              {
                title: 'Technical Workshops',
                description: 'Industry-relevant technical skills through hands-on workshops and seminars',
              },
              {
                title: 'Soft Skills Development',
                description: 'Communication, interview preparation, and personality development programs',
              },
              {
                title: 'Campus Recruitment',
                description: 'Direct recruitment drives with pre-placement talks and final rounds',
              },
            ].map((step, idx) => (
              <Card key={idx}>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-bold">
                      {idx + 1}
                    </div>
                    <CardTitle className="text-lg">{step.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
