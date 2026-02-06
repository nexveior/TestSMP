import { motion } from "framer-motion";
import { Crown, Shield, Wrench, Headphones } from "lucide-react";

const staffMembers = [
  {
    name: "Nexveior",
    role: "Owner",
    icon: Crown,
    color: "text-accent",
    bgColor: "bg-accent/10",
    description: "Server founder and lead developer",
  },
  {
    name: "Nexveior",
    role: "Admin",
    icon: Shield,
    color: "text-secondary",
    bgColor: "bg-secondary/10",
    description: "Community manager and moderator",
  },
  {
    name: "Nexveior",
    role: "Developer",
    icon: Wrench,
    color: "text-primary",
    bgColor: "bg-primary/10",
    description: "Plugin developer and technical support",
  },
  {
    name: "Nexveior",
    role: "Support",
    icon: Headphones,
    color: "text-primary",
    bgColor: "bg-primary/10",
    description: "Player support and ticket management",
  },
];

const Staff = () => {
  return (
    <section id="staff" className="py-20 bg-gradient-dark">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-pixel text-2xl md:text-3xl text-secondary mb-4">
            Our Staff Team
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Meet the dedicated team keeping TEST SMP running smoothly
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {staffMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-card border border-border rounded-xl p-6 text-center card-hover"
            >
              <div className={`w-20 h-20 rounded-full ${member.bgColor} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                <member.icon className={`w-10 h-10 ${member.color}`} />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-1">
                {member.name}
              </h3>
              <p className={`text-sm font-semibold ${member.color} mb-2`}>
                {member.role}
              </p>
              <p className="text-sm text-muted-foreground">
                {member.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Staff;
