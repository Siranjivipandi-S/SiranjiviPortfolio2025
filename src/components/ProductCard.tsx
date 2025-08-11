import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ChevronRight } from "lucide-react"

interface ProductCardProps {
  title: string
  subtitle: string
  icon: React.ReactNode
  color: string
}

export const ProductCard = ({ title, subtitle, icon, color }: ProductCardProps) => {
  return (
    <Card className="group p-6 hover:shadow-md transition-all duration-200 cursor-pointer border border-border/50 bg-card">
      <div className="flex items-center gap-4">
        <div 
          className="flex items-center justify-center w-12 h-12 rounded-xl text-white font-bold text-lg"
          style={{ backgroundColor: color }}
        >
          {icon}
        </div>
        
        <div className="flex-1">
          <h3 className="font-semibold text-foreground mb-1">{title}</h3>
          <Badge variant="secondary" className="text-xs">
            {subtitle}
          </Badge>
        </div>
        
        <ChevronRight className="h-4 w-4 text-muted-foreground group-hover:text-foreground transition-colors" />
      </div>
    </Card>
  )
}