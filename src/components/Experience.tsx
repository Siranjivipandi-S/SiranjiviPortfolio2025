import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

export const Experience = () => {
  const experiences = [
    {
      company: "AntStack",
      location: "Banglore, India",
      roles: [
        {
          title: "Member of Technical Staff – I (Frontend Engineer)",
          period: "Dec 2025 – Present",
          description: [
            "Building high-performance, scalable frontend applications using React, Next.js, and Astro.",
            "Developing SEO-friendly and component-driven UI architectures with a strong focus on performance and accessibility.",
            "Integrated headless CMS solutions using Strapi and GraphQL for dynamic content management.",
            "Deployed and managed frontend applications using Netlify and AWS Amplify with CI/CD pipelines.",
            "Collaborating closely with backend, design, and product teams to deliver production-ready features.",
          ],
          skills: [
            "React.js",
            "Next.js",
            "Astro",
            "GraphQL",
            "Strapi",
            "Netlify",
            "AWS Amplify",
            "Frontend Performance",
          ],
        },
      ],
    },
    {
      company: "PraVyuha Tech Solutions LLP",
      location: "Chennai, India",
      roles: [
        {
          title: "Associate Software Development Engineer",
          period: "Jan 2025 – Dec 2025",
          description: [
            "Promoted to Associate SDE within 6 months for strong technical contributions and ownership.",
            "Built and maintained scalable web applications using React.js, Redux, and Spring Boot.",
            "Handled critical production issues, ensuring application stability and quick resolutions.",
            "Designed interactive dashboards and developed POCs for dynamic report generation.",
            "Optimized frontend performance through refactoring, achieving up to 35% faster load times.",
          ],
          skills: [
            "React.js",
            "Redux",
            "Spring Boot",
            "Frontend Performance Optimization",
            "Production Support",
            "Dashboard Development",
            "Cross-functional Collaboration",
          ],
        },
      ],
    },
    {
      title: "MERN Stack Developer – Intern",
      company: "DSR Groups of Companies",
      location: "Remote",
      period: "Jun 2024 – Sep 2024",
      description: [
        "Developed two live MERN stack applications with high client satisfaction.",
        "Built scalable REST APIs handling 1,000+ daily transactions.",
        "Improved mobile user engagement through responsive UI with Tailwind CSS.",
      ],
      skills: [
        "MongoDB",
        "Express.js",
        "React.js",
        "Node.js",
        "Tailwind CSS",
        "API Development",
      ],
    },
    {
      title: "Full Stack Developer – Intern",
      company: "Calanjiyam Consultancies and Technologies",
      location: "Remote",
      period: "Jul 2024 – Sep 2024",
      description: [
        "Built a MERN-based quotation management system.",
        "Led a small team and delivered fully tested frontend and backend modules.",
      ],
      skills: [
        "React.js",
        "Node.js",
        "MongoDB",
        "REST APIs",
        "Team Leadership",
      ],
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section id="experience" className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <div className="h-2 w-2 bg-muted-foreground rounded-full"></div>
          <h2 className="text-xl font-semibold text-foreground">Experience</h2>
        </div>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <Card className="p-6 border border-border/50 bg-card">
                <div className="flex flex-col gap-4">
                  <div className="flex flex-col gap-1">
                    <h3 className="text-lg font-semibold text-foreground">
                      {exp.company}
                    </h3>
                    <span className="text-sm text-muted-foreground">
                      {exp.location}
                    </span>
                  </div>

                  {"roles" in exp ? (
                    exp.roles.map((role, idx) => (
                      <div
                        key={idx}
                        className="border-l-2 border-primary pl-4 mt-4 relative"
                      >
                        <div className="absolute w-3 h-3 bg-primary rounded-full -left-1.5 top-1" />
                        <div className="flex items-center gap-2 mb-2">
                          <h4 className="font-medium text-foreground">
                            {role.title}
                          </h4>
                          {/* {idx === 1 && (
                            <span className="text-xs bg-primary/20 text-primary rounded-full px-2 py-0.5 font-semibold">
                              Promoted
                            </span>
                          )} */}
                        </div>
                        <span className="text-sm text-muted-foreground">
                          {role.period}
                        </span>
                        <ul className="list-disc list-inside text-sm text-muted-foreground mt-2 mb-4 space-y-1">
                          {role.description.map((point, i) => (
                            <li key={i}>{point}</li>
                          ))}
                        </ul>
                        <div className="flex flex-wrap gap-2">
                          {role.skills.map((skill, i) => (
                            <Badge
                              key={i}
                              variant="outline"
                              className="text-xs"
                            >
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    ))
                  ) : (
                    <>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
                        <h3 className="font-semibold text-foreground">
                          {exp.title}
                        </h3>
                      </div>

                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 -mt-4 text-sm text-muted-foreground">
                        <span>{exp.period}</span>
                      </div>

                      <ul className="list-disc list-inside text-sm text-muted-foreground  space-y-1">
                        {exp.description.map((point, i) => (
                          <li key={i}>{point}</li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill, i) => (
                          <Badge key={i} variant="outline" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </>
                  )}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
