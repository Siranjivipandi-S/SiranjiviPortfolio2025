import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

export const Experience = () => {
  const experiences = [
    {
      company: "PraVyuha Tech Solutions LLP",
      location: "Chennai, India",
      roles: [
        {
          title: "Associate Software Engineer",
          period: "Jul 2025 – Present",
          description: [
            "Promoted to Associate Engineer within 6 months for exceptional technical contributions and leadership.",
            "Built scalable apps with React.js, Redux, and Spring Boot, handled critical production issues, ensuring stability, quick resolutions, and minimal downtime.",
            "Optimized performance and load times through strategic refactoring, achieving up to 35% improvement in application speed.",
          ],
          skills: [
            "React.js",
            "Redux",
            "Spring Boot",
            "Performance Optimization",
            "Production Issue Handling",
          ],
        },
        {
          title: "Trainee Software Development Engineer",
          period: "Jan 2025 – Jun 2025",
          description: [
            "Handled bug fixes and contributed to the development of complex modules.",
            "Designed and implemented multiple interactive dashboards for data visualization. Learned and applied Spring Boot for backend service integration.",
            "Created a POC for dynamic report generation on the front end while collaborating with cross-functional teams to ensure high-quality solution delivery.",
          ],
          skills: [
            "Bug Fixes",
            "Dashboard Design",
            "Spring Boot",
            "POC Development",
            "Cross-functional Collaboration",
          ],
        },
      ],
    },
    {
      title: "MERN Stack Developer - Intern",
      company: "DSR Groups of Companies",
      location: "Remote",
      period: "Jun 2024 – Sep 2024",
      description: [
        "Spearheaded development of two live MERN stack applications, earning 95% positive client feedback.",
        "Engineered robust, scalable CRUD APIs handling 1,000+ daily transactions with high reliability.",
        "Boosted mobile user retention by 60% through optimized, responsive UI using Tailwind CSS.",
      ],
      skills: [
        "MERN Stack",
        "API Development",
        "Tailwind CSS",
        "Client Feedback",
        "Mobile Optimization",
      ],
    },
    {
      title: "Full Stack Developer - Intern",
      company: "Calanjiyam Consultancies and Technologies",
      location: "Remote",
      period: "Jul 2024 – Sep 2024",
      description: [
        "Built a MERN stack-based quotation management app.",
        "Led a small dev team, handled frontend and backend development, and delivered functional, tested modules.",
      ],
      skills: [
        "React.js",
        "Node.js",
        "MongoDB",
        "Team Leadership",
        "Mongoose",
        "REST APIs",
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
                          {idx === 1 && (
                            <span className="text-xs bg-primary/20 text-primary rounded-full px-2 py-0.5 font-semibold">
                              Promoted
                            </span>
                          )}
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
