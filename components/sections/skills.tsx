"use client";

import { FadeIn } from "@/components/motion/fade-in";
import { StaggerContainer, StaggerItem } from "@/components/motion/stagger-container";
import { Badge } from "@/components/ui/badge";

const skillCategories = [
  {
    title: "Languages",
    skills: ["C", "C++", "Python", "JavaScript", "TypeScript"],
  },
  {
    title: "Frontend",
    skills: ["React", "React Native", "HTML/CSS", "Redux", "Custom Hooks", "Jest", "SPA"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express.js", "REST APIs", "GraphQL", "WebSockets", "Middleware"],
  },
  {
    title: "DevOps & Data",
    skills: ["MongoDB", "MySQL", "Firebase", "Firestore", "Docker", "GitLab", "CI/CD", "Jenkins", "Splunk", "Postman"],
  },
  {
    title: "Cloud & Certifications",
    skills: ["Microsoft Azure AZ-900", "Oracle OCI GenAI Professional", "Cloud Computing"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
            Skills & <span className="text-primary">Technologies</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-12 rounded-full" />
        </FadeIn>

        <div className="space-y-10">
          {skillCategories.map((category, categoryIndex) => (
            <FadeIn key={category.title} delay={categoryIndex * 0.1}>
              <div className="bg-card rounded-2xl p-6 border border-border">
                <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3" />
                  {category.title}
                </h3>
                <StaggerContainer className="flex flex-wrap gap-3">
                  {category.skills.map((skill) => (
                    <StaggerItem key={skill}>
                      <Badge
                        variant="secondary"
                        className="px-4 py-2 text-sm hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                      >
                        {skill}
                      </Badge>
                    </StaggerItem>
                  ))}
                </StaggerContainer>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
