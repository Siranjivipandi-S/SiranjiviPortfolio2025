"use client";

import { motion, useInView } from "framer-motion";
import { Mail, Phone, Linkedin, Check } from "lucide-react";
import profileAvatar from "@/assets/Avatar.jpg";
import { useState, useRef, useEffect } from "react";

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const fadeInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
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

const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

const contactItemVariant = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

export const About = () => {
  const [copied, setCopied] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  // Custom intersection observer for more reliable triggering
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Stop observing once triggered
        }
      },
      {
        threshold: 0.1,
        rootMargin: "-50px 0px -50px 0px", // Trigger slightly before/after
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(text);
    setTimeout(() => setCopied(""), 2000); // reset after 2s
  };

  return (
    <section id="about" className="py-16 px-4 mt-2" ref={ref}>
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
            transition={{ delay: 0.3, duration: 0.3, ease: "easeOut" }}
          />
          <motion.h2
            className="text-xl font-semibold text-foreground"
            initial={{ opacity: 0, x: -20 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ delay: 0.2, duration: 0.5, ease: "easeOut" }}
          >
            About Me
          </motion.h2>
        </motion.div>

        {/* Main Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* About Text */}
          <motion.div
            className="lg:col-span-2"
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={staggerContainer}
          >
            <motion.h3
              className="text-2xl font-bold text-foreground mb-4"
              variants={fadeInLeft}
            >
              <motion.span
                initial={{ backgroundPosition: "200% center" }}
                animate={
                  isVisible
                    ? { backgroundPosition: "0% center" }
                    : { backgroundPosition: "200% center" }
                }
                transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
              >
                Full Stack Developer
              </motion.span>
            </motion.h3>

            <motion.p
              className="text-muted-foreground mb-4 leading-relaxed"
              variants={staggerItem}
            >
              I'm Siranjivipandi S, a Full Stack Developer from Madurai with
              strong skills in MERN stack, Spring Boot, and DevOps. I've
              completed my MCA and B.Sc. Computer Science and have hands-on
              experience through a 3-month MERN internship and 6 months as a
              Trainee SDE.
            </motion.p>

            <motion.p
              className="text-muted-foreground leading-relaxed mb-6"
              variants={staggerItem}
            >
              I'm currently working as an{" "}
              <motion.span
                className="text-foreground font-medium"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                Associate Software Development Engineer at Pravyuha Tech
                Solutions
              </motion.span>
              , building scalable web applications and continuously learning to
              deliver better solutions.
            </motion.p>

            {/* Contact Details */}
            <motion.div className="space-y-4" variants={staggerItem}>
              <motion.h4
                className="font-semibold text-foreground mb-4"
                initial={{ opacity: 0 }}
                animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
              >
                Contact
              </motion.h4>

              <motion.div
                className="space-y-4"
                initial="hidden"
                animate={isVisible ? "visible" : "hidden"}
                variants={staggerContainer}
              >
                {/* Email */}
                <motion.p
                  className="flex items-center gap-2 text-sm text-muted-foreground"
                  variants={contactItemVariant}
                >
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Mail
                      className="w-5 h-5 text-foreground cursor-pointer hover:text-primary"
                      onClick={() => handleCopy("siranjivipandi@gmail.com")}
                    />
                  </motion.div>
                  <a
                    href="mailto:siranjivipandi@gmail.com"
                    className="underline hover:text-foreground transition-colors duration-200"
                  >
                    siranjivipandi@gmail.com
                  </a>
                  <motion.span
                    initial={{ opacity: 0, scale: 0 }}
                    animate={
                      copied === "siranjivipandi@gmail.com"
                        ? { opacity: 1, scale: 1 }
                        : { opacity: 0, scale: 0 }
                    }
                    transition={{ duration: 0.2, ease: "backOut" }}
                    className="text-green-500 text-xs ml-2 flex items-center gap-1"
                  >
                    <Check className="w-3 h-3" />
                    Copied!
                  </motion.span>
                </motion.p>

                {/* Phone */}
                <motion.p
                  className="flex items-center gap-2 text-sm text-muted-foreground"
                  variants={contactItemVariant}
                >
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 15 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Phone
                      className="w-5 h-5 text-foreground cursor-pointer hover:text-primary"
                      onClick={() => handleCopy("+91-9384115735")}
                    />
                  </motion.div>
                  <a
                    href="tel:+919384115735"
                    className="underline hover:text-foreground transition-colors duration-200"
                  >
                    +91-9384115735
                  </a>
                  <motion.span
                    initial={{ opacity: 0, scale: 0 }}
                    animate={
                      copied === "+91-9384115735"
                        ? { opacity: 1, scale: 1 }
                        : { opacity: 0, scale: 0 }
                    }
                    transition={{ duration: 0.2, ease: "backOut" }}
                    className="text-green-500 text-xs ml-2 flex items-center gap-1"
                  >
                    <Check className="w-3 h-3" />
                    Copied!
                  </motion.span>
                </motion.p>

                {/* LinkedIn */}
                <motion.p
                  className="flex items-center gap-2 text-sm text-muted-foreground"
                  variants={contactItemVariant}
                >
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: -15 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Linkedin
                      className="w-5 h-5 text-foreground cursor-pointer hover:text-primary"
                      onClick={() =>
                        handleCopy("https://linkedin.com/in/siranjivipandi-s/")
                      }
                    />
                  </motion.div>
                  <a
                    href="https://linkedin.com/in/siranjivipandi-s/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-foreground transition-colors duration-200"
                  >
                    linkedin.com/in/siranjivipandi-s/
                  </a>
                  <motion.span
                    initial={{ opacity: 0, scale: 0 }}
                    animate={
                      copied === "https://linkedin.com/in/siranjivipandi-s/"
                        ? { opacity: 1, scale: 1 }
                        : { opacity: 0, scale: 0 }
                    }
                    transition={{ duration: 0.2, ease: "backOut" }}
                    className="text-green-500 text-xs ml-2 flex items-center gap-1"
                  >
                    <Check className="w-3 h-3" />
                    Copied!
                  </motion.span>
                </motion.p>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            className="flex justify-center lg:justify-start"
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={fadeInRight}
          >
            <motion.div
              className="relative"
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <motion.div
                className="absolute inset-0 rounded-xl  opacity-20 blur-lg"
                animate={{
                  scale: [1, 1.05, 1],
                  opacity: [0.2, 0.3, 0.2],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.img
                src={profileAvatar}
                alt="Siranjivipandi S"
                className="relative rounded-xl w-50 h-50 lg:w-100 lg:h-100 object-cover shadow-lg"
                initial={{ opacity: 0, scale: 0.8, rotateY: 25 }}
                animate={
                  isVisible
                    ? { opacity: 1, scale: 1, rotateY: 0 }
                    : { opacity: 0, scale: 0.8, rotateY: 25 }
                }
                transition={{ delay: 0.4, duration: 0.8, ease: "backOut" }}
              />
            </motion.div>
          </motion.div>
        </div>

        {/* Extra Info Boxes */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-4 gap-12 mt-12"
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={staggerContainer}
        >
          {[
            {
              title: "Philosophy",
              content: "Clean code, practical solutions, and continuous growth",
            },
            {
              title: "Location",
              content: "Madurai, India",
            },
            {
              title: "Languages",
              content: "English, Tamil",
            },
            {
              title: "Summary",
              content:
                "MCA, B.Sc. CS, MERN Internship (3 mo), Trainee SDE (6 mo), now Associate SDE",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.5,
                    ease: "easeOut",
                    delay: index * 0.1,
                  },
                },
              }}
              whileHover={{
                scale: 1.05,
                backgroundColor: "rgba(59, 130, 246, 0.05)",
              }}
              className="p-4 rounded-lg transition-all duration-300"
            >
              <motion.h4
                className="font-semibold text-foreground mb-2"
                initial={{ opacity: 0 }}
                animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: 1 + index * 0.1, duration: 0.3 }}
              >
                {item.title}
              </motion.h4>
              <motion.p
                className="text-sm text-muted-foreground"
                initial={{ opacity: 0 }}
                animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: 1.2 + index * 0.1, duration: 0.3 }}
              >
                {item.content}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
