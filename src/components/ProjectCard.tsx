import { ChevronRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";

interface ProjectCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
}

export const ProjectCard = ({
  title,
  description,
  icon,
  color,
}: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      whileHover={{ scale: 1.03 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      tabIndex={0}
      role="button"
      aria-label={`View details for project: ${title}`}
      className="cursor-pointer outline-none"
    >
      <Card className="group p-6 border border-border/50 bg-card shadow-none hover:shadow-md transition-shadow duration-200">
        <div className="flex items-center gap-4">
          <div
            className="flex items-center justify-center w-12 h-12 rounded-xl text-white font-bold text-lg flex-shrink-0"
            style={{ backgroundColor: color }}
          >
            {icon}
          </div>

          <div className="flex-1">
            <h3 className="font-semibold text-foreground mb-1">{title}</h3>
            <p className="text-sm text-muted-foreground">{description}</p>
          </div>

          <ChevronRight className="h-4 w-4 text-muted-foreground group-hover:text-foreground transition-colors" />
        </div>
      </Card>
    </motion.div>
  );
};
