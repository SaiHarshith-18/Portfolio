"use client";

import { FadeIn } from "@/components/motion/fade-in";
import { Badge } from "@/components/ui/badge";
import { Briefcase, GraduationCap } from "lucide-react";

const experiences = [
  {
    type: "work",
    title: "Founding Engineer",
    company: "Qurious Qoll LLC",
    location: "Cincinnati, OH",
    period: "Aug 2025 – Present",
    description: [
      "Designed and built Cliché Kings, a React Native multiplayer mobile app, owning the mobile client and Firebase backend end-to-end",
      "Architected Cloud Firestore data model for multiplayer sessions with synchronized player state, scoring, and inventory",
      "Implemented Firebase Auth, Cloud Functions, and Security Rules for secure validation",
      "Built core gameplay flows with real-time updates using Firebase listeners; improved responsiveness via caching and query optimization",
    ],
  },
  {
    type: "work",
    title: "Full Stack Developer",
    company: "UCPD - IT Analytics Center (Co-op)",
    location: "Cincinnati, OH",
    period: "Oct 2024 – Sep 2025",
    description: [
      "Engineered a predictive analytics platform using an ANN and ~2,000,000 historical records to estimate shooting involvement likelihood",
      "Implemented geospatial MySQL data pipelines with optimized 5-mile radius queries for incident aggregation",
      "Integrated pre-trained scikit-learn model into RESTful APIs for real-time JSON predictions",
      "Built React + Node.js stakeholder workflows with modular separation of data access and feature engineering",
    ],
  },
  {
    type: "work",
    title: "Full Stack Developer",
    company: "U.S. Bank",
    location: "",
    period: "Jan 2022 – Jul 2024",
    description: [
      "Built and maintained React + Node.js applications for 50K+ users; improved page load time 40% and engagement 15%",
      "Integrated Qualtrics and Venafi APIs to automate compliance workflows; reduced manual certificate processing 90%",
      "Improved responsiveness 25% via REST/GraphQL optimizations and WebSocket notifications",
      "Supported Azure production releases using GitLab CI/CD, Jenkins, Docker, and Splunk observability",
    ],
  },
  {
    type: "education",
    title: "Master of Science in Information Technology",
    company: "University of Cincinnati",
    location: "Cincinnati, OH",
    period: "Aug 2024 – Dec 2025",
    description: [
      "GPA: 4.0/4.0",
      "Relevant Coursework: HCI, Azure Data Engineering, Tech for Mobile Apps, Machine Learning, Cloud Computing",
    ],
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
            Professional <span className="text-primary">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-12 rounded-full" />
        </FadeIn>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-border" />

          {/* Timeline items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <FadeIn
                key={index}
                direction={index % 2 === 0 ? "left" : "right"}
                delay={index * 0.1}
              >
                <div
                  className={`relative flex flex-col md:flex-row gap-8 ${
                    index % 2 === 0 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background z-10" />

                  {/* Content card */}
                  <div
                    className={`ml-8 md:ml-0 md:w-1/2 ${
                      index % 2 === 0 ? "md:pr-12" : "md:pl-12"
                    }`}
                  >
                    <div className="bg-card p-6 rounded-2xl border border-border hover:border-primary/50 transition-colors">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                          {exp.type === "education" ? (
                            <GraduationCap className="w-5 h-5 text-primary" />
                          ) : (
                            <Briefcase className="w-5 h-5 text-primary" />
                          )}
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-foreground">
                            {exp.title}
                          </h3>
                          <p className="text-primary font-medium">
                            {exp.company}
                          </p>
                          <div className="flex flex-wrap items-center gap-2 mt-1">
                            <Badge variant="secondary" className="text-xs">
                              {exp.period}
                            </Badge>
                            {exp.location && (
                              <span className="text-xs text-muted-foreground">
                                {exp.location}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>

                      <ul className="space-y-2">
                        {exp.description.map((item, i) => (
                          <li
                            key={i}
                            className="text-sm text-muted-foreground flex items-start"
                          >
                            <span className="w-1.5 h-1.5 bg-primary/60 rounded-full mr-2 mt-2 flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="hidden md:block md:w-1/2" />
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
