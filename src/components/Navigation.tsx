"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { Briefcase, FolderOpen, GraduationCap, Home } from "lucide-react";
import { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast, Toaster } from "sonner"; // Import Sonner toast
import emailjs from "emailjs-com";

export const Navigation = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const [isMobile, setIsMobile] = useState(false);

  // Contact form states
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [messageError, setMessageError] = useState(false);

  const [dialogOpen, setDialogOpen] = useState(false);

  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth < 640);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    setNameError(false);
    setEmailError(false);
    setMessageError(false);

    let hasError = false;
    if (name.trim() === "") {
      setNameError(true);
      hasError = true;
    }
    if (email.trim() === "") {
      setEmailError(true);
      hasError = true;
    }
    if (message.trim() === "") {
      setMessageError(true);
      hasError = true;
    }
    if (hasError) return;

    const templateParams = { name, email, message };

    emailjs.then(
      () => {
        setName("");
        setEmail("");
        setMessage("");
        toast.success("Message sent successfully!");
        setDialogOpen(false);
      },
      (error) => {
        console.error("Email sending failed:", error);
        toast.error("Failed to send the message. Please try again.");
      }
    );
  };

  const containerVariants = {
    hidden: {
      opacity: 0,
      y: -100,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 300,
        delayChildren: 0.2,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: -20,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 400,
      },
    },
  };

  const buttonHover = {
    scale: 1.05,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10,
    },
  };

  const buttonTap = {
    scale: 0.95,
  };

  const hireMeVariants = {
    hidden: {
      opacity: 0,
      x: 50,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 300,
        delay: 0.8,
      },
    },
  };

  return (
    <div className="flex items-center justify-center">
      <motion.nav
        className={`fixed flex items-center justify-center z-50  ${
          isMobile ? "top-4" : "top-6"
        }`}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          className={`flex items-center ${
            isMobile ? "gap-2 px-3 py-2" : "gap-1 px-3 py-2"
          } bg-card/80 backdrop-blur-md border border-border rounded-full shadow-subtle`}
          whileHover={{
            boxShadow:
              "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
            transition: { duration: 0.2 },
          }}
        >
          {/* Home */}
          <motion.div variants={itemVariants}>
            <motion.div whileHover={buttonHover} whileTap={buttonTap}>
              <Button
                variant="ghost"
                size="sm"
                className={`h-8 ${isMobile ? "px-2" : "px-3"} rounded-full`}
                onClick={() => scrollToSection("hero")}
              >
                <motion.div
                  initial={{ rotate: -180 }}
                  animate={{ rotate: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                >
                  <Home className="h-4 w-4" />
                </motion.div>
                {!isMobile && (
                  <motion.span
                    className="ml-2"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    Home
                  </motion.span>
                )}
              </Button>
            </motion.div>
          </motion.div>

          {/* Experience */}
          <motion.div variants={itemVariants}>
            <motion.div whileHover={buttonHover} whileTap={buttonTap}>
              <Button
                variant="ghost"
                size="sm"
                className={`h-8 ${isMobile ? "px-2" : "px-3"} rounded-full`}
                onClick={() => scrollToSection("experience")}
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.4, type: "spring", stiffness: 300 }}
                >
                  <Briefcase className="h-4 w-4" />
                </motion.div>
                {!isMobile && (
                  <motion.span
                    className="ml-2"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    Experience
                  </motion.span>
                )}
              </Button>
            </motion.div>
          </motion.div>

          {/* Education */}
          <motion.div variants={itemVariants}>
            <motion.div whileHover={buttonHover} whileTap={buttonTap}>
              <Button
                variant="ghost"
                size="sm"
                className={`h-8 ${isMobile ? "px-2" : "px-3"} rounded-full`}
                onClick={() => scrollToSection("education")}
              >
                <motion.div
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5, type: "spring", stiffness: 300 }}
                >
                  <GraduationCap className="h-4 w-4" />
                </motion.div>
                {!isMobile && (
                  <motion.span
                    className="ml-2"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 }}
                  >
                    Education
                  </motion.span>
                )}
              </Button>
            </motion.div>
          </motion.div>

          {/* Projects */}
          <motion.div variants={itemVariants}>
            <motion.div whileHover={buttonHover} whileTap={buttonTap}>
              <Button
                variant="ghost"
                size="sm"
                className={`h-8 ${isMobile ? "px-2" : "px-3"} rounded-full`}
                onClick={() => scrollToSection("projects")}
              >
                <motion.div
                  initial={{ rotateY: 180, opacity: 0 }}
                  animate={{ rotateY: 0, opacity: 1 }}
                  transition={{ delay: 0.6, duration: 0.6 }}
                >
                  <FolderOpen className="h-4 w-4" />
                </motion.div>
                {!isMobile && (
                  <motion.span
                    className="ml-2"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.7 }}
                  >
                    Projects
                  </motion.span>
                )}
              </Button>
            </motion.div>
          </motion.div>

          {/* Divider */}
          <motion.div
            className="w-px h-4 bg-border mx-2"
            initial={{ scaleY: 0, opacity: 0 }}
            animate={{ scaleY: 1, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.3 }}
          />

          {/* Theme Toggle */}
          <motion.div
            variants={itemVariants}
            whileHover={buttonHover}
            whileTap={buttonTap}
          >
            <ThemeToggle />
          </motion.div>

          {/* Hire Me with Dialog */}
          <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
            <DialogTrigger asChild>
              <motion.div
                variants={hireMeVariants}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 8px 25px -8px rgba(0, 0, 0, 0.3)",
                }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size="sm"
                  className={`ml-2 h-8 ${
                    isMobile ? "px-3 text-xs" : "px-4"
                  } rounded-full bg-primary text-primary-foreground relative overflow-hidden`}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    initial={{ x: "-100%" }}
                    animate={{ x: "100%" }}
                    transition={{
                      delay: 1.2,
                      duration: 0.8,
                      ease: "easeInOut",
                    }}
                  />
                  <motion.span
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.9 }}
                  >
                    Hire Me
                  </motion.span>
                </Button>
              </motion.div>
            </DialogTrigger>
            <DialogContent className="w-full max-w-sm sm:max-w-md rounded-2xl bg-white dark:bg-gray-800 p-4 sm:p-6 shadow-xl">
              <DialogHeader>
                <DialogTitle className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
                  Contact Me
                </DialogTitle>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Ready to build impactful solutions? Let's connect.
                </p>
              </DialogHeader>
              <form className="space-y-5" onSubmit={handleSubmit}>
                <Input
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className={`rounded-lg border transition focus:ring-2 ${
                    nameError
                      ? "border-red-600 focus:border-red-600 focus:ring-red-300"
                      : "border-gray-300 focus:border-blue-500 focus:ring-blue-300"
                  }`}
                />
                <Input
                  type="email"
                  placeholder="Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={`rounded-lg border transition focus:ring-2 ${
                    emailError
                      ? "border-red-600 focus:border-red-600 focus:ring-red-300"
                      : "border-gray-300 focus:border-blue-500 focus:ring-blue-300"
                  }`}
                />
                <div>
                  <Textarea
                    placeholder="Your Message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={4}
                    className={`rounded-lg border resize-none transition focus:ring-2 ${
                      messageError
                        ? "border-red-600 focus:border-red-600 focus:ring-red-300"
                        : "border-gray-300 focus:border-blue-500 focus:ring-blue-300"
                    }`}
                  />
                  <p className="text-xs text-gray-400 mt-1">
                    Share details so I can help you better
                  </p>
                </div>
                <Button
                  type="submit"
                  className="w-full bg-black text-white rounded-full shadow-md transition duration-300"
                >
                  Send Message
                </Button>
              </form>
            </DialogContent>
          </Dialog>
        </motion.div>
      </motion.nav>
    </div>
  );
};
