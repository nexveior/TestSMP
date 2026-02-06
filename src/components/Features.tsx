import { motion } from "framer-motion";
import { Sword, Shield, Users, Map, Gem, Zap } from "lucide-react";

const features = [
  {
    icon: Sword,
    title: "PvP Arenas",
    description: "Battle other players in custom-built arenas with unique challenges and rewards.",
    color: "text-destructive",
  },
  {
    icon: Shield,
    title: "Land Protection",
    description: "Claim and protect your builds with our advanced land claiming system.",
    color: "text-secondary",
  },
  {
    icon: Users,
    title: "Active Community",
    description: "Join thousands of players in our friendly and welcoming community.",
    color: "text-primary",
  },
  {
    icon: Map,
    title: "Custom World",
    description: "Explore our unique world with custom biomes, structures, and secrets.",
    color: "text-accent",
  },
  {
    icon: Gem,
    title: "Economy System",
    description: "Trade with players, set up shops, and build your fortune.",
    color: "text-secondary",
  },
  {
    icon: Zap,
    title: "Custom Plugins",
    description: "Enjoy unique gameplay features with our custom-developed plugins.",
    color: "text-primary",
  },
];

const Features = () => {
  return (
    <section id="features" className="py-20 bg-gradient-dark">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-pixel text-2xl md:text-3xl text-primary mb-4">
            Server Features
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Discover what makes TEST SMP the best Minecraft experience
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-gradient-card border border-border rounded-xl p-6 card-hover"
            >
              <div className={`w-12 h-12 rounded-lg bg-muted flex items-center justify-center mb-4 group-hover:scale-110 transition-transform ${feature.color}`}>
                <feature.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
