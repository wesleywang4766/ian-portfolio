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

const jobPositions = [
  {
    timeline: "Oct 2020 — Present",
    currentPosition: "Senior Software Engineer",
    place: "QualityIT",
    logo: "qualityit",
    previousPositions: [""],
    description:
      "Led development of a web-based peer-to-peer lending platform, implemented serverless solutions on AWS, and managed a team to improve system efficiency and cost-effectiveness.",
    skills: [
      "Full-stack development",
      "Cloud architecture",
      "AI Integration",
      "Project management",
      "Planning",
      "Leadership",
      "Mentoring",
      "Testing & QA",
    ],
  },
  {
    timeline: "Aug 2017 — Sep 2020",
    currentPosition: "Full Stack Developer",
    place: "Simple Odds",
    logo: "simpleodds",
    previousPositions: [],
    description:
      "Enhanced application integrations for payments and social media, optimized web pages for search engines, and developed scalable sports betting platform.",
    skills: [
      "Front-end development",
      "Back-end development",
      "Mobile app development",
      "Third-party Integration",
      "SEO Optimization",
      "Scalable software solutions",
      "Team collaboration",
    ],
  },
  {
    timeline: "Apr 2014 - Jul 2017",
    currentPosition: "Backend Developer",
    place: "Vention",
    logo: "vention",
    previousPositions: [""],
    description:
      "Participated in migrating to a microservice architecture, implemented authentication and authorization, demonstrated strong teamwork, and communication skills, examined system flow, and analyzed runtime performance to ensure system efficiency and availability.",
    skills: [
      "Microservice Architecture",
      "Auth Implementation",
      "Agile Development",
      "Teamwork & Communication",
      "Performance Optimization",
      "Version migration",
      "System Analysis",
    ],
  },
  {
    timeline: "Sep 2012 - Nov 2015",
    currentPosition: "Backend Developer",
    place: "Fortunes Tech",
    logo: "fortunestech",
    previousPositions: [""],
    description:
      "Developed web applications using JavaScript frameworks, Laravel, Django, Flask, Spring, Drupal, and WordPress, ensuring pixel-perfect design implementation, responsive pages, adherence to best practices, and clean, well-documented code.",
    skills: [
      "MERN Stack",
      "Responsive web development",
      "Pixel-perfect design implementation",
      "Client-side scripting",
      "CMS customization",
      "eCommerce development",
      "Cross-browser compatibility",
    ],
  },
];

export default function Experience() {
  const theme = useTheme();

  return (
    <section id="experience" className="scroll-mt-16 lg:mt-16">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/0 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest lg:sr-only">
          Experience
        </h2>
      </div>
      <>
        {jobPositions.map((job, index) => (
          <Card
            key={index}
            className="lg:p-6 mb-8 flex flex-col lg:flex-row w-full min-h-fit gap-0 lg:gap-5 border-transparent hover:border dark:lg:hover:border-t-blue-900 dark:lg:hover:bg-slate-800/50 lg:hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:hover:drop-shadow-lg lg:hover:bg-slate-100/50 lg:hover:border-t-blue-200"
          >
            <CardHeader className="h-full w-full p-0">
              <CardTitle className="text-base text-primary dark:text-slate-400 whitespace-nowrap">
                {job.timeline}
                <Avatar className="w-24 lg:w-36 h-auto my-3 border-0">
                  <AvatarImage src={`./${job.logo}.png`} />
                  <AvatarFallback className="w-24 h-24 lg:w-36 lg:h-36 rounded-full border-1 border-primary">
                    {job.place}
                  </AvatarFallback>
                </Avatar>
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col p-0">
              <p className="text-primary dark:text-slate-400 font-bold">
                {job.currentPosition} • {job.place}
              </p>
              {job.previousPositions.map((position, index) => (
                <p
                  key={index}
                  className="text-primary dark:text-slate-400 text-sm font-bold"
                >
                  {position}
                </p>
              ))}
              <CardDescription className="py-3 text-muted-foreground">
                {job.description}
              </CardDescription>
              <CardFooter className="p-0 flex flex-wrap gap-2">
                {job.skills.map((skill, index) => (
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
    </section>
  );
}
