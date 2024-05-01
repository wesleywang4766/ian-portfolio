"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MoveRight } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { useTheme } from "next-themes";

const educations = [
  {
    timeline: "Aug 2010 — Aug 2012",
    lastDegree: "Master of Science in Computer Science",
    institution: "San Diego State University",
    logo: "SDSU",
    previousDegrees: [""],
    description:
      "Advanced algorithms, software architecture, data management, research methodologies, teamwork, technical writing.",
    skills: [
      "Advanced algorithms",
      "Software architecture",
      "Data management",
      "Research methodologies",
      "Teamwork",
      "Technical writing",
    ],
  },
  {
    timeline: "Sep 2004 — Sep 2008",
    lastDegree: "Bachelor of Science in Computer Science",
    institution: "Ontario Tech University",
    logo: "OTU",
    previousDegrees: [""],
    description:
      "Programming fundamentals, system analysis, software engineering principles, data structures, network security, effective communication.",
    skills: [
      "Programming fundamentals",
      "System analysis",
      "Software engineering principles",
      "Data structures",
      "Network security",
      "Effective communication",
    ],
  },
];

export default function Education() {
  const theme = useTheme();

  return (
    <section id="education" className="scroll-mt-16 lg:mt-16">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/0 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest lg:sr-only">
          Education
        </h2>
      </div>
      <>
        {educations.map((education, index) => (
          <Card
            key={index}
            className="lg:p-6 mb-8 flex flex-col lg:flex-row w-full min-h-fit gap-0 lg:gap-5 border-transparent hover:border dark:lg:hover:border-t-blue-900 dark:lg:hover:bg-slate-800/50 lg:hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:hover:drop-shadow-lg lg:hover:bg-slate-100/50 lg:hover:border-t-blue-200"
          >
            <CardHeader className="h-full w-full p-0">
              <CardTitle className="text-base text-primary dark:text-slate-400 whitespace-nowrap">
                {education.timeline}
                <Avatar className="w-24 lg:w-36 h-auto my-3 border-0">
                  <AvatarImage src={`./${education.logo}.jpg`} />
                  <AvatarFallback className="w-24 h-24 lg:w-36 lg:h-36 rounded-full border-1 border-primary">
                    {education.institution}
                  </AvatarFallback>
                </Avatar>
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col p-0">
              <p className="text-primary dark:text-slate-400 font-bold">
                {education.lastDegree} • {education.institution}
              </p>
              {education.previousDegrees.map((degree, index) => (
                <p
                  key={index}
                  className="text-primary dark:text-slate-400 text-sm font-bold"
                >
                  {degree}
                </p>
              ))}
              <CardDescription className="py-3 text-muted-foreground">
                {education.description}
              </CardDescription>
              <CardFooter className="p-0 flex my-2 flex-wrap gap-2">
                {education.skills.map((skill, index) => (
                  <Badge
                    key={index}
                    variant={theme.theme === "light" ? "default" : "secondary"}
                  >
                    {skill}
                  </Badge>
                ))}
              </CardFooter>
            </CardContent>
          </Card>
        ))}
      </>
      <div className="lg:px-12 mt-12">
        <a
          className="inline-flex items-center font-medium leading-tight text-foreground group"
          href="/am-resume-2024.pdf"
        >
          <span className="border-b border-transparent pb-px transition hover:border-primary motion-reduce:transition-none">
            View Full Resume
          </span>
          <MoveRight className="ml-1 inline-block h-5 w-5 shrink-0 -translate-y-px transition-transform group-hover:translate-x-2 group-focus-visible:translate-x-2 motion-reduce:transition-none" />
        </a>
      </div>
    </section>
  );
}
