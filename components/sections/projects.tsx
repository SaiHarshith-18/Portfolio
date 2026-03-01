"use client";

import { FadeIn } from "@/components/motion/fade-in";
import { StaggerContainer, StaggerItem } from "@/components/motion/stagger-container";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, Github, Smartphone, MapPin, Brain } from "lucide-react";

const projects = [
  {
    title: "Cliché Kings",
    description:
      "A React Native multiplayer mobile app with real-time gameplay, Firebase backend, and secure authentication. Designed cloud Firestore data model for multiplayer sessions with synchronized player state and scoring.",
    tech: ["React Native", "Firebase", "Cloud Functions", "TypeScript"],
    icon: Smartphone,
    highlights: [
      "End-to-end mobile client & backend",
      "Real-time multiplayer with Firebase listeners",
      "Optimized with caching & debouncing",
    ],
    status: "In Development",
  },
  {
    title: "Playground",
    description:
      "A mobile-first social app for creating and joining events with real-time chat. Shipped to TestFlight with 30 testers, featuring map-based event discovery and secure messaging.",
    tech: ["React Native", "Firebase", "Firestore", "Imgur API"],
    icon: MapPin,
    highlights: [
      "Real-time onSnapshot messaging",
      "Geolocation-based event discovery",
      "TestFlight deployment to 30 testers",
    ],
    status: "Completed",
    period: "Mar 2025 – Nov 2025",
  },
  {
    title: "Predictive Analytics Platform",
    description:
      "An ANN-based platform using ~2M historical records to estimate shooting involvement likelihood by location. Features geospatial MySQL pipelines and RESTful APIs for real-time predictions.",
    tech: ["Python", "scikit-learn", "MySQL", "React", "Node.js"],
    icon: Brain,
    highlights: [
      "ANN with 2M+ records",
      "5-mile radius geospatial queries",
      "Real-time JSON predictions API",
    ],
    status: "Completed",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-24 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-12 rounded-full" />
        </FadeIn>

        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <StaggerItem key={project.title}>
              <Card className="bg-background border-border hover:border-primary/50 transition-all duration-300 h-full group">
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <project.icon className="w-6 h-6 text-primary" />
                    </div>
                    <Badge
                      variant={
                        project.status === "In Development"
                          ? "default"
                          : "secondary"
                      }
                      className={
                        project.status === "In Development"
                          ? "bg-primary/20 text-primary"
                          : ""
                      }
                    >
                      {project.status}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                  {project.period && (
                    <p className="text-xs text-muted-foreground">
                      {project.period}
                    </p>
                  )}
                  <CardDescription className="text-muted-foreground mt-2">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {/* Highlights */}
                  <ul className="space-y-2 mb-4">
                    {project.highlights.map((highlight, i) => (
                      <li
                        key={i}
                        className="text-sm text-muted-foreground flex items-start"
                      >
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2 mt-2 flex-shrink-0" />
                        {highlight}
                      </li>
                    ))}
                  </ul>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <Badge
                        key={tech}
                        variant="outline"
                        className="text-xs border-border text-muted-foreground"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
