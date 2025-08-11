import { ProductCard } from "./ProductCard"

export const Products = () => {
  const products = [
    {
      title: "Portafo",
      subtitle: "FRAMER TEMPLATE",
      icon: "P",
      color: "#000000"
    },
    {
      title: "Faktur Invoice",
      subtitle: "FRAMER TEMPLATE", 
      icon: "F",
      color: "#6366f1"
    },
    {
      title: "Goven",
      subtitle: "FRAMER TEMPLATE",
      icon: "G",
      color: "#10b981"
    },
    {
      title: "Subtle Folio",
      subtitle: "FRAMER TEMPLATE",
      icon: "S",
      color: "#f59e0b"
    }
  ]

  return (
    <section id="products" className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <div className="h-2 w-2 bg-muted-foreground rounded-full"></div>
          <h2 className="text-xl font-semibold text-foreground">Products</h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
      </div>
    </section>
  )
}