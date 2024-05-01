"use client";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MoveUpRight } from "lucide-react";
import { useTheme } from "next-themes";

const jobProjects = [
  {
    imagePath: "/portfolio1.jpg",
    title: "FootBalance: E-Commerce Platform",
    description:
      "It's an e-commerce platform built using Ruby on Rails. They had kiosks installed in different places to scan customers' feet and design an insole based on their feet size and needs.",
    skills: [
      "eCommerce",
      "Next.js",
      "Spring Boot",
      "Drupal",
      "Shopify",
      "MailJet",
      "Stripe",
      "Vercel",
    ],
    link: "https://footbalance.com",
  },
  {
    imagePath: "/portfolio2.jpg",
    title: "Betting Odds Comparison and Analysis",
    description:
      "Provides a comprehensive comparison and analysis of betting odds. It offers users the ability to compare odds from various bookmakers, helping them make informed decisions when placing bets.",
    skills: [
      "React.js",
      "MUI",
      "Django",
      "PostgreSQL",
      "Jest",
      "Cypress",
      "Git",
    ],
    link: "https://simpleodds.com",
  },
  {
    imagePath: "/portfolio3.jpg",
    title: "AI Colors: AI Palette Generator",
    description:
      "I was responsible for developing the user-friendly interface, robust APIs that can handle large volumes, and deploying machine learning models, making it easy to explore, customize, and implement beautiful color schemes seamlessly.",
    skills: [
      "AI Integration",
      "AngularJS",
      "Tailwind CSS",
      "CNN(convolutional neural network)",
      "RNN(recurrent neural network)",
      "Figma Design",
      "AWS",
      "Fastly",
    ],
    link: "https://aicolors.co",
  },
];

export default function Projects() {
  const theme = useTheme();

  return (
    <section id="projects" className="scroll-mt-16 lg:mt-16">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/0 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest lg:sr-only">
          Projects
        </h2>
      </div>
      <>
        {jobProjects.map((project, index) => (
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:cursor-pointer"
          >
            <Card className="group lg:p-6 mb-8 flex flex-col lg:flex-row w-full min-h-fit gap-0 lg:gap-5 border-transparent hover:border dark:lg:hover:border-t-blue-900 dark:lg:hover:bg-slate-800/50 lg:hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:hover:drop-shadow-lg lg:hover:bg-slate-100/50 lg:hover:border-t-blue-200">
              <CardHeader className="h-full w-full lg:w-1/3 mb-4 p-0">
                <img
                  src={project.imagePath}
                  className="bg-[#141414] mt-2 border border-muted-foreground rounded-[0.5rem]"
                />
              </CardHeader>
              <CardContent className="flex flex-col p-0 w-full lg:w-2/3">
                <p className="text-primary dark:text-slate-400 font-bold">
                  {project.title}{" "}
                  <MoveUpRight className="ml-1 inline-block h-5 w-5 shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 motion-reduce:transition-none" />
                </p>
                <CardDescription className="py-3 text-muted-foreground">
                  {project.description}
                </CardDescription>
                <CardFooter className="p-0 flex flex-wrap gap-2">
                  {project.skills.map((skill, index) => (
                    <Badge
                      key={index}
                      variant={
                        theme.theme === "light" ? "default" : "secondary"
                      }
                    >
                      {skill}
                    </Badge>
                  ))}
                </CardFooter>
              </CardContent>
            </Card>
          </a>
        ))}
      </>
    </section>
  );
}
