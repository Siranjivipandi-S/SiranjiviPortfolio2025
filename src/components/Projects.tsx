"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ProjectCard } from "./ProjectCard";
import { ChevronRight, ChevronDown, ExternalLink } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

export const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: "Food Ordering App",
      description: "MERN + TypeScript | Stripe | Redux | Zod",
      details:
        "A fully responsive food ordering app built using the MERN stack and TypeScript. Integrated with Stripe for secure payments and Zod for form validation. Redux Toolkit is used for state management, ensuring optimal performance across the UI.",
      icon: "🍔",
      color: "#16a34a",
      link: "https://github.com/Siranjivipandi-S/FoodApp.git",
    },
    {
      title: "Video Upload App",
      description: "React | Node.js | MongoDB GridFS",
      details:
        "This application enables users to upload and stream videos using GridFS in MongoDB. Backend is built with Node.js and Express, and video storage is handled via the fs module. Frontend is crafted with React for a seamless experience.",
      icon: "🎥",
      color: "#f97316",
      link: "https://github.com/Siranjivipandi-S/MongoDBVideoUpload.git",
    },
    {
      title: "NestJS + Prisma App",
      description: "NestJS | PostgreSQL | Prisma ORM",
      details:
        "A backend API built with NestJS and Prisma, connected to a PostgreSQL database. Implements role-based authentication, DTO validation, modular services, and scalable architecture patterns.",
      icon: "🧱",
      color: "#6366f1",
      link: "https://github.com/Siranjivipandi-S/NestJs-Prisma.git",
    },
    {
      title: "Blog Post CRUD",
      description: "React | Node.js | Express | MongoDB",
      details:
        "A blog management system that supports full CRUD operations. Built using React for the frontend and Express + MongoDB for the backend. Includes post creation, edit, delete, and list features with a clean UI.",
      icon: "📝",
      color: "#0ea5e9",
      link: "https://github.com/Siranjivipandi-S/CrudifyPostProject.git",
    },
    {
      title: "Quotation Management System",
      description: "PHP | MySQL | jQuery",
      details:
        "Developed a dynamic web-based quotation system using PHP and MySQL. Users can generate, edit, and download quotes. Includes form validation, clean UI with jQuery, and responsive layout.",
      icon: "📄",
      color: "#eab308",
      link: "https://github.com/Siranjivipandi-S/Quotation-Management.git",
    },
    {
      title: "Real-Time Chat App",
      description: "Socket.io | Node.js | React",
      details:
        "A real-time chat application using WebSockets via Socket.io. Built on Node.js and Express backend with a React frontend, supporting multiple users, live message updates, and typing indicators.",
      icon: "💬",
      color: "#14b8a6",
      link: "https://github.com/Siranjivipandi-S/ChatApp.git",
    },
    {
      title: "Todo App",
      description: "React | Local Storage | Clean UI",
      details:
        "A simple and elegant to-do list app made with React. Tasks are stored in browser local storage for persistence. Features include add, delete, mark-complete, and responsive UI.",
      icon: "✅",
      color: "#3b82f6",
      link: "https://github.com/Siranjivipandi-S/TodoApp.git",
    },
    {
      title: "Network Infrastructure Design",
      description: "Cisco Packet Tracer | Campus Setup",
      details:
        "Designed and simulated a network infrastructure for a college campus using Cisco Packet Tracer. Included routing, VLANs, IP addressing, and switch configuration for lab and admin blocks.",
      icon: "🌐",
      color: "#7c3aed",
      link: "https://github.com/Siranjivipandi-S/DESIGNING-A-NETWORK-INFRASTRUCTURE-FOR-COLLEGE-CAMPUS.git",
    },
  ];

  const visibleProjects = showAll ? projects : projects.slice(0, 4);

  return (
    <section id="projects" className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <div className="h-2 w-2 bg-muted-foreground rounded-full"></div>
            <h2 className="text-xl font-semibold text-foreground">Projects</h2>
          </div>
          <Button
            variant="ghost"
            className="text-muted-foreground hover:text-foreground flex items-center"
            onClick={() => setShowAll(!showAll)}
            aria-expanded={showAll}
            aria-label={showAll ? "Show less projects" : "View all projects"}
          >
            {showAll ? "Show Less" : "View All"}
            {showAll ? (
              <ChevronDown className="h-4 w-4 ml-1" />
            ) : (
              <ChevronRight className="h-4 w-4 ml-1" />
            )}
          </Button>
        </div>

        <div className="space-y-4">
          {visibleProjects.map((project, index) => (
            <button
              key={index}
              onClick={() => setSelectedProject(project)}
              className="cursor-pointer w-full text-left transform transition duration-200 hover:scale-[1.02] hover:shadow-lg rounded-lg"
              aria-label={`View details for project ${project.title}`}
              type="button"
            >
              <ProjectCard {...project} />
            </button>
          ))}
        </div>
      </div>

      {selectedProject && (
        <Dialog
          open={!!selectedProject}
          onOpenChange={() => setSelectedProject(null)}
        >
          <DialogContent className="max-w-lg bg-background border border-white/10 backdrop-blur-md rounded-2xl">
            <DialogHeader>
              <DialogTitle className="text-xl flex items-center gap-2">
                <span
                  className="text-2xl"
                  style={{ color: selectedProject.color }}
                >
                  {selectedProject.icon}
                </span>
                {selectedProject.title}
              </DialogTitle>
              <DialogDescription className="text-muted-foreground">
                {selectedProject.description}
              </DialogDescription>
            </DialogHeader>

            <div className="mt-4 text-sm leading-relaxed text-foreground">
              {selectedProject.details}
            </div>

            <div className="mt-6 flex justify-between items-center">
              <Button
                variant="ghost"
                className="text-blue-500 hover:text-blue-700"
                onClick={() => window.open(selectedProject.link, "_blank")}
              >
                <ExternalLink className="h-4 w-4 mr-1" />
                View on GitHub
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </section>
  );
};
