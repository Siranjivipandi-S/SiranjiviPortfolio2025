import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Copy, Mail, Github, Linkedin, Check } from "lucide-react";

export const Footer = () => {
  const email = "siranjivipandi@gmail.com";
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // reset after 2 seconds
  };

  return (
    <footer className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="pt-8 border-t border-border">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            {/* Left Side */}
            <div className="flex items-center gap-3 text-sm text-muted-foreground">
              <span className="text-muted-foreground">
                © 2025 Siranjivipandi S
              </span>
              <span>•</span>
              <span>Built with React, Vite & Tailwind CSS</span>
            </div>

            {/* Right Side */}
            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                size="sm"
                onClick={copyEmail}
                className="text-muted-foreground hover:text-foreground px-2 flex items-center"
              >
                <Mail className="h-4 w-4 mr-1" />
                {copied ? (
                  <>
                    <span>Copied!</span>
                    <Check className="h-4 w-4 ml-1 text-green-500" />
                  </>
                ) : (
                  <>
                    <span>Copy Email</span>
                    {/* <Copy className="h-4 w-4 ml-1" /> */}
                  </>
                )}
              </Button>

              <a
                href="https://github.com/Siranjivipandi-S"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition"
              >
                <Github className="h-5 w-5" />
              </a>

              <a
                href="https://linkedin.com/in/siranjivipandi-s-24717a24b/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
