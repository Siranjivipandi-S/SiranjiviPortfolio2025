import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { useState, useRef, useEffect } from "react";

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const categoryVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const badgeVariant = {
  hidden: { opacity: 0, scale: 0.8, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.3, ease: "backOut" },
  },
};

export const TechSkills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  // Custom intersection observer for scroll-triggered animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
        rootMargin: "-50px 0px -50px 0px",
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);
  const frontendSkills = [
    "Astro",
    "Next.js",
    "React.js",
    "Tailwind CSS",
    "Redux",
    "Zustand",
    "JavaScript",
    "HTML5",
    "CSS3",
    "Bootstrap",
  ];

  const backendSkills = [
    "Node.js",
    "Express.js",
    "NestJS",
    "GraphQL",
    "Java",
    "Spring Boot",
    "PHP",
    "Prisma",
    "Strapi",
  ];

  const databaseAndCloud = [
    "MongoDB",
    "MySQL",
    "Firebase",
    "AWS",
    "AWS Amplify",
    "Docker",
    "Netlify",
  ];

  const toolsAndOthers = [
    "Git",
    "GitHub",
    "VS Code",
    "Postman",
    "Jenkins",
    "Zod",
    "Figma",
  ];

  // Skill category colors for visual variety
  const getCategoryColor = (title: string) => {
    switch (title) {
      case "Frontend":
        return "from-blue-500 to-cyan-500";
      case "Backend":
        return "from-green-500 to-emerald-500";
      case "Database & Cloud":
        return "from-purple-500 to-pink-500";
      case "Tools & Others":
        return "from-orange-500 to-red-500";
      default:
        return "from-gray-500 to-gray-600";
    }
  };

  const SkillCategory = ({
    title,
    skills,
    index,
  }: {
    title: string;
    skills: string[];
    index: number;
  }) => (
    <motion.div className="space-y-3" variants={categoryVariant} custom={index}>
      <motion.div
        className="flex items-center gap-3"
        initial={{ opacity: 0, x: -20 }}
        animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
        transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
      >
        <motion.div
          className={`h-3 w-3 rounded-full bg-gradient-to-r ${getCategoryColor(
            title
          )}`}
          initial={{ scale: 0 }}
          animate={isVisible ? { scale: 1 } : { scale: 0 }}
          transition={{
            delay: 0.4 + index * 0.1,
            duration: 0.3,
            ease: "backOut",
          }}
        />
        <motion.h4
          className="font-semibold text-foreground"
          whileHover={{
            scale: 1.05,
            color: "#6366f1",
          }}
          transition={{ duration: 0.2 }}
        >
          {title}
        </motion.h4>
      </motion.div>

      <motion.div
        className="flex flex-wrap gap-2"
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.05,
              delayChildren: 0.5 + index * 0.1,
            },
          },
        }}
      >
        {skills.map((skill, skillIndex) => (
          <motion.div
            key={skillIndex}
            variants={badgeVariant}
            whileHover={{
              scale: 1.1,
              rotate: 2,
              boxShadow: "0 5px 15px rgba(99, 102, 241, 0.3)",
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="cursor-pointer"
          >
            <Badge
              variant="secondary"
              className={`text-xs transition-all duration-200 hover:bg-gradient-to-r hover:${getCategoryColor(
                title
              )} hover:border-transparent`}
            >
              <motion.span
                initial={{ opacity: 0 }}
                animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
                transition={{
                  delay: 0.7 + index * 0.1 + skillIndex * 0.05,
                  duration: 0.3,
                }}
              >
                {skill}
              </motion.span>
            </Badge>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );

  return (
    <section id="skills" className="py-16 px-4" ref={ref}>
      <div className="max-w-4xl mx-auto">
        {/* Section Title */}
        <motion.div
          className="flex items-center gap-3 mb-8"
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={fadeInUp}
        >
          <motion.div
            className="h-2 w-2 bg-muted-foreground rounded-full"
            initial={{ scale: 0 }}
            animate={isVisible ? { scale: 1 } : { scale: 0 }}
            transition={{ delay: 0.2, duration: 0.3, ease: "easeOut" }}
          />
          <motion.h2
            className="text-xl font-semibold text-foreground"
            initial={{ opacity: 0, x: -20 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ delay: 0.1, duration: 0.5, ease: "easeOut" }}
          >
            <motion.span
              className="text-foreground"
              initial={{ backgroundPosition: "200% center" }}
              animate={
                isVisible
                  ? { backgroundPosition: "0% center" }
                  : { backgroundPosition: "200% center" }
              }
              transition={{ delay: 0.3, duration: 1, ease: "easeOut" }}
            >
              Tech Skills
            </motion.span>
          </motion.h2>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={staggerContainer}
        >
          <SkillCategory title="Frontend" skills={frontendSkills} index={0} />
          <SkillCategory title="Backend" skills={backendSkills} index={1} />
          <SkillCategory
            title="Database & Cloud"
            skills={databaseAndCloud}
            index={2}
          />
          <SkillCategory
            title="Tools & Others"
            skills={toolsAndOthers}
            index={3}
          />
        </motion.div>

        {/* Floating Elements for Visual Interest */}
        <motion.div
          className="absolute top-10 right-10 w-20 h-20 bg-gradient-to-r from-blue-400 to-purple-600 rounded-full opacity-10 blur-xl"
          animate={{
            y: [0, -20, 0],
            x: [0, 10, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-10 left-10 w-16 h-16 bg-gradient-to-r from-green-400 to-cyan-600 rounded-full opacity-10 blur-xl"
          animate={{
            y: [0, 20, 0],
            x: [0, -10, 0],
            scale: [1, 0.9, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
      </div>
    </section>
  );
};
