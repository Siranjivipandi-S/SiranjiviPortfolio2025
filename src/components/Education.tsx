import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

export const Education = () => {
  const education = [
    {
      degree: "Master of Computer Applications (MCA)",
      major: "Computer Applications",
      school: "Madurai Kamaraj University",
      period: "June 2023 - June 2025",
      location: "Madurai, India",
      description:
        "Completed Master’s degree focusing on software development, data structures, and computer networks with a CGPA of 8.2/10.",
      achievements: [
        "Consistent academic performer",
        "Relevant projects in web & backend development",
      ],
    },
    {
      degree: "Bachelor of Computer Science",
      major: "Computer Science",
      school: "Mannar Thirumalai Naicker College",
      period: "June 2020 - May 2023",
      location: "Madurai, India",
      description:
        "Completed undergraduate studies focusing on programming, databases, and algorithms with CGPA 8.6/10.",
      achievements: ["Top 5% in class", "Led coding club activities"],
    },
  ];

  const certifications = [
    "DevOps Internship – Internship Studio (June 2024)",
    "Cisco Certified Network Associate (CCNA) - Elysium Academy (2022)",
    "Software Engineering Virtual Experience - Blackbird via Forage (2022)",
    "Java Programming (A+) - Kalam Institute (2022)",
    "C and C++ Programming (A+) - Kalam Institute (2021)",
    "Certified Hacking Defender",
    "MySQL Database Fundamentals",
  ];

  // Animation variants
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section id="education" className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <div className="h-2 w-2 bg-muted-foreground rounded-full"></div>
          <h2 className="text-xl font-semibold text-foreground">
            Education & Certifications
          </h2>
        </div>

        <motion.div className="space-y-8">
          {/* Education */}
          <motion.div className="space-y-6">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
              >
                <Card className="p-6 border border-border/50 bg-card">
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold text-foreground text-lg">
                        {edu.degree}
                      </h3>
                      <p className="text-muted-foreground">{edu.major}</p>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 mt-2 text-sm text-muted-foreground">
                        <span className="font-medium">{edu.school}</span>
                        <span className="hidden sm:inline">•</span>
                        <span>{edu.period}</span>
                        <span className="hidden sm:inline">•</span>
                        <span>{edu.location}</span>
                      </div>
                    </div>

                    <p className="text-muted-foreground leading-relaxed">
                      {edu.description}
                    </p>

                    <div>
                      <h4 className="font-medium text-foreground mb-2">
                        Achievements
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {edu.achievements.map((achievement, achIndex) => (
                          <Badge
                            key={achIndex}
                            variant="secondary"
                            className="text-xs"
                          >
                            {achievement}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Certifications */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <h3 className="text-lg font-bold text-foreground mb-4 tracking-wide">
              <span className="inline-block bg-gradient-to-r from-blue-500 to-cyan-500 text-foreground bg-clip-text">
                Certifications
              </span>
            </h3>
            <div className="flex flex-wrap gap-3">
              {certifications.map((cert, index) => (
                <span
                  key={index}
                  className="text-xs px-3 py-1 rounded-full border border-white/20 bg-white/10 backdrop-blur-md shadow-md hover:shadow-blue-500/30 transition-all duration-300 text-foreground whitespace-nowrap"
                >
                  {cert}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
