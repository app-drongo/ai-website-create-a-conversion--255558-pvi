// Features Component
// Generated: 2025-08-28T10:50:55.441Z
// Template: features-c001
// Context: Homepage
// Position: pages.0.sections.1

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  Zap, 
  Smartphone, 
  Blocks, 
  Rocket, 
  BarChart3, 
  Palette,
  Database,
  Headphones,
  DollarSign
} from "lucide-react"

export default function Features() {
  const features = [
    {
      icon: Zap,
      title: "Rapid Prototyping",
      description: "Turn your ideas into working prototypes in hours, not weeks. Perfect for validating concepts quickly.",
      badge: "Speed"
    },
    {
      icon: Blocks,
      title: "Drag & Drop Builder",
      description: "Intuitive visual interface that lets you build complex apps without writing a single line of code.",
      badge: "No-Code"
    },
    {
      icon: Smartphone,
      title: "Multi-Platform Deploy",
      description: "Launch on web, iOS, and Android simultaneously from one build. Reach all your customers instantly.",
      badge: "Cross-Platform"
    },
    {
      icon: Database,
      title: "Smart Integrations",
      description: "Connect to payment processors, CRMs, and 100+ business tools with pre-built connectors.",
      badge: "Integrations"
    },
    {
      icon: BarChart3,
      title: "Business Analytics",
      description: "Track user behavior, conversion rates, and revenue metrics to optimize your app's performance.",
      badge: "Analytics"
    },
    {
      icon: Palette,
      title: "Brand Customization",
      description: "Match your brand perfectly with custom themes, colors, and layouts that reflect your business.",
      badge: "Branding"
    },
    {
      icon: Rocket,
      title: "Startup Templates",
      description: "Pre-built templates for common business models: e-commerce, SaaS, marketplaces, and more.",
      badge: "Templates"
    },
    {
      icon: Headphones,
      title: "Founder Support",
      description: "Get guidance from our team of startup veterans who understand the entrepreneurial journey.",
      badge: "Support"
    },
    {
      icon: DollarSign,
      title: "Cost Effective",
      description: "Save 90% on development costs compared to hiring developers. Bootstrap your way to success.",
      badge: "Savings"
    }
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            No-Code Power
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Everything Entrepreneurs Need to
            <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Launch & Scale Fast
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Built specifically for founders, startup teams, and business owners who need to move fast 
            and validate ideas without technical barriers.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <Card 
                key={index} 
                className="group relative overflow-hidden border-border/50 hover:border-primary/20 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
              >
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <CardHeader className="relative">
                  <div className="flex items-center gap-4 mb-2">
                    <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                      <Icon className="size-6 text-primary" />
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {feature.badge}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="relative">
                  <CardDescription className="text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 rounded-lg border border-transparent group-hover:border-primary/20 transition-colors duration-300" />
              </Card>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-4">
            Ready to transform your business idea into reality?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors">
              Start Building Free
            </button>
            <button className="px-6 py-3 border border-border rounded-lg font-medium hover:bg-accent transition-colors">
              Book Strategy Call
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}