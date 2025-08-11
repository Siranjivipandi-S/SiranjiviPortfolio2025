import { useState } from "react";
import { toast, Toaster } from "sonner"; // Import Sonner toast
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Copy, Check } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import profileAvatar from "@/assets/Avatar.jpg";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
};

const fadeInDown = {
  initial: { opacity: 0, y: -30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: "easeOut" },
};

const fadeInLeft = {
  initial: { opacity: 0, x: -50 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
};

const fadeInRight = {
  initial: { opacity: 0, x: 50 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
};

const scaleIn = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.5, ease: "easeOut" },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const staggerItem = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.4, ease: "easeOut" },
};
export const Hero = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [messageError, setMessageError] = useState(false);

  const [copied, setCopied] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("siranjivipandi@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

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

    const templateParams = {
      name,
      email,
      message,
    };

    emailjs
      .send(
        "service_kc0103l", // from EmailJS dashboard
        "template_h3xsb16", // from EmailJS dashboard
        templateParams,
        "gUneoDng6_vnHje3O" // from EmailJS account
      )
      .then(
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

  return (
    <section id="hero" className="pt-24 lg:mt-5 pb-12 px-4 sm:pt-32 sm:pb-16">
      {/* Sonner Toaster */}
      <Toaster richColors />

      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-8 sm:gap-12">
          {/* Text Content */}
          <motion.div
            className="flex-1 text-center lg:text-left"
            initial="initial"
            animate="animate"
            variants={staggerContainer}
          >
            {/* Tag & Availability */}
            <motion.div
              className="flex flex-wrap justify-center lg:justify-start items-center gap-3 mb-4 sm:mb-6"
              variants={staggerItem}
            >
              <motion.div
                className="h-2 w-2 bg-muted-foreground rounded-full"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5, duration: 0.3, ease: "easeOut" }}
              />
              <motion.span
                className="text-xs sm:text-sm text-muted-foreground font-medium"
                variants={fadeInDown}
              >
                Associate Software Engineer
              </motion.span>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6, duration: 0.4, ease: "easeOut" }}
              >
                <Badge
                  variant="secondary"
                  className="bg-green-100 text-green-600 border-green-300"
                >
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8, duration: 0.3 }}
                  >
                    AVAILABLE FOR WORK
                  </motion.span>
                </Badge>
              </motion.div>
            </motion.div>

            {/* Name */}
            <motion.h1
              className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 text-foreground"
              variants={fadeInUp}
              initial="initial"
              animate="animate"
              transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
            >
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                Hi, I'm{" "}
              </motion.span>
              <motion.span
                initial={{ opacity: 0, color: "#6366f1" }}
                animate={{ opacity: 1, color: "inherit" }}
                transition={{ delay: 0.7, duration: 0.8 }}
                className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
              >
                Siranjivipandi S
              </motion.span>
            </motion.h1>

            {/* Summary */}
            <motion.p
              className="text-base sm:text-lg text-muted-foreground mb-4 sm:mb-6 leading-relaxed"
              variants={fadeInUp}
              initial="initial"
              animate="animate"
              transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }}
            >
              Passionate Full Stack Developer from Madurai, India with 1 year of
              coding experience. Currently building scalable web solutions at{" "}
              <motion.span
                className="text-foreground font-medium"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                Pravyuha Tech Solutions
              </motion.span>
              . Skilled in MERN stack, Spring Boot, and DevOps tools like Docker
              and AWS.
            </motion.p>

            {/* Quick Highlight */}
            <motion.p
              className="text-sm sm:text-base text-muted-foreground mb-6 sm:mb-8"
              variants={fadeInUp}
              initial="initial"
              animate="animate"
              transition={{ delay: 0.6, duration: 0.6, ease: "easeOut" }}
            >
              With a strong foundation in both frontend and backend
              technologies, I love transforming ideas into user-friendly
              products. Whether it's crafting responsive UIs, managing
              databases, or deploying apps — I'm all in.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              variants={fadeInUp}
              initial="initial"
              animate="animate"
              transition={{ delay: 0.8, duration: 0.6, ease: "easeOut" }}
            >
              <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
                <DialogTrigger asChild>
                  <motion.div
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
                    }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Button size="lg" className="rounded-full w-full sm:w-auto">
                      <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1, duration: 0.3 }}
                      >
                        Hire Me
                      </motion.span>
                    </Button>
                  </motion.div>
                </DialogTrigger>

                <DialogContent className="max-w-md rounded-2xl bg-white dark:bg-gray-800 p-6 shadow-xl">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  >
                    <DialogHeader>
                      <DialogTitle className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
                        Contact Me
                      </DialogTitle>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Ready to build impactful solutions? Let's connect.
                      </p>
                    </DialogHeader>

                    <motion.div
                      className="space-y-5 mt-4"
                      initial="initial"
                      animate="animate"
                      variants={staggerContainer}
                    >
                      <motion.div variants={staggerItem}>
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
                      </motion.div>

                      <motion.div variants={staggerItem}>
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
                      </motion.div>

                      <motion.div variants={staggerItem}>
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
                      </motion.div>

                      <motion.div variants={staggerItem}>
                        <motion.div
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          transition={{ duration: 0.2 }}
                        >
                          <Button
                            onClick={handleSubmit}
                            className="w-full bg-black hover:bg-gray-900 text-white rounded-full shadow-md transition duration-300"
                          >
                            Send Message
                          </Button>
                        </motion.div>
                      </motion.div>
                    </motion.div>
                  </motion.div>
                </DialogContent>
              </Dialog>

              <motion.div
                whileHover={{
                  scale: 1.05,
                  borderColor: "#6366f1",
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="rounded-full w-full sm:w-auto"
                  onClick={copyEmail}
                >
                  <motion.div
                    className="flex items-center gap-2"
                    animate={copied ? { scale: [1, 1.1, 1] } : {}}
                    transition={{ duration: 0.3 }}
                  >
                    {copied ? (
                      <>
                        <motion.div
                          initial={{ scale: 0, rotate: -180 }}
                          animate={{ scale: 1, rotate: 0 }}
                          transition={{ duration: 0.3, ease: "backOut" }}
                        >
                          <Check className="h-5 w-5 text-green-500" />
                        </motion.div>
                        <span className="font-medium">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="h-5 w-5" />
                        <span className="font-medium">Copy Email</span>
                      </>
                    )}
                  </motion.div>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            className="flex-shrink-0"
            initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "backOut",
              scale: { duration: 0.6 },
              rotate: { duration: 0.8 },
            }}
          >
            <div className="relative flex justify-center">
              <motion.div
                whileHover={{
                  scale: 1.05,
                  rotate: 2,
                  boxShadow: "0 20px 40px -10px rgba(0, 0, 0, 0.15)",
                }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="relative"
              >
                <motion.div
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 opacity-20"
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.2, 0.3, 0.2],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                <img
                  src={profileAvatar}
                  alt="Siranjivipandi S"
                  className="relative w-28 h-28 sm:w-36 sm:h-36 lg:w-52 lg:h-52 rounded-full object-cover shadow-subtle"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
