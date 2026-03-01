"use client";

import { FadeIn } from "@/components/motion/fade-in";
import { Code2, Users, Cloud, Award } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    label: "3+ Years",
    description: "Full Stack Experience",
  },
  {
    icon: Users,
    label: "50K+",
    description: "Users Impacted",
  },
  {
    icon: Cloud,
    label: "Azure",
    description: "Cloud Certified",
  },
  {
    icon: Award,
    label: "4.0 GPA",
    description: "MS in IT",
  },
];

export function About() {
  return (
    <section id="about" className="py-24 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
            About <span className="text-primary">Me</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-12 rounded-full" />
        </FadeIn>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <FadeIn direction="left">
            <div className="space-y-6">
              <p className="text-muted-foreground text-lg leading-relaxed">
                I&apos;m a <span className="text-foreground font-medium">Full Stack Engineer</span> with 
                a passion for building scalable, real-time applications that make a difference. 
                Currently pursuing my Master&apos;s in Information Technology at the{" "}
                <span className="text-primary">University of Cincinnati</span> with a perfect 4.0 GPA.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                At <span className="text-foreground font-medium">U.S. Bank</span>, I built and maintained 
                applications serving 50K+ users, improving page load times by 40% and automating 
                compliance workflows that reduced manual processing by 90%.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                I thrive at the intersection of frontend elegance and backend robustness, 
                leveraging technologies like <span className="text-primary">React Native</span>,{" "}
                <span className="text-primary">Node.js</span>,{" "}
                <span className="text-primary">Firebase</span>, and{" "}
                <span className="text-primary">Azure</span> to deliver exceptional user experiences.
              </p>
            </div>
          </FadeIn>

          {/* Highlights grid */}
          <FadeIn direction="right" delay={0.2}>
            <div className="grid grid-cols-2 gap-6">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="bg-background p-6 rounded-2xl border border-border hover:border-primary/50 transition-colors group"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-1">
                    {item.label}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
