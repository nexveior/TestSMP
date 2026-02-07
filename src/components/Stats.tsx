import { motion } from "framer-motion";
import { TrendingUp, Users, Clock, MapPin } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: "50,000+",
    label: "Registered Players",
    color: "text-primary",
  },
  {
    icon: TrendingUp,
    value: "99.9%",
    label: "Uptime",
    color: "text-secondary",
  },
  {
    icon: Clock,
    value: "24/7",
    label: "Active Staff",
    color: "text-accent",
  },
  {
    icon: MapPin,
    value: "5",
    label: "Unique Worlds",
    color: "text-primary",
  },
];

const Stats = () => {
  return (
    <section className="py-16 bg-muted/10 border-y border-border">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className={`w-12 h-12 rounded-lg bg-muted flex items-center justify-center mx-auto mb-3 ${stat.color}`}>
                <stat.icon className="w-6 h-6" />
              </div>
              <div className={`text-3xl md:text-4xl font-bold ${stat.color} mb-1`}>
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground uppercase tracking-wide">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
