import { motion } from "framer-motion";
import { 
  Ban, 
  MessageSquare, 
  Shield, 
  Users, 
  Sword, 
  AlertTriangle,
  Heart,
  Handshake
} from "lucide-react";

const rules = [
  {
    icon: Ban,
    title: "No Griefing",
    description: "Respect other players' builds and creations. Destroying or modifying without permission is prohibited.",
  },
  {
    icon: MessageSquare,
    title: "Be Respectful",
    description: "No hate speech, harassment, or toxic behavior. Treat everyone with kindness and respect.",
  },
  {
    icon: Shield,
    title: "No Hacking",
    description: "Cheats, hacks, and exploit abuse are strictly forbidden. Play fair or face a permanent ban.",
  },
  {
    icon: Users,
    title: "No Spamming",
    description: "Keep chat clean and avoid excessive caps, spam, or advertising other servers.",
  },
  {
    icon: Sword,
    title: "Fair PvP",
    description: "PvP is allowed in designated areas only. No spawn camping or targeting new players.",
  },
  {
    icon: AlertTriangle,
    title: "Report Issues",
    description: "If you see rule violations or bugs, report them to staff immediately through Discord.",
  },
  {
    icon: Heart,
    title: "Help Newbies",
    description: "Welcome new players and help them get started. Our community thrives on kindness.",
  },
  {
    icon: Handshake,
    title: "Follow Staff",
    description: "Staff decisions are final. If you disagree, appeal through proper channels respectfully.",
  },
];

const Rules = () => {
  return (
    <section id="rules" className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-pixel text-2xl md:text-3xl text-accent mb-4">
            Server Rules
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Follow these rules to ensure a fun and fair experience for everyone
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {rules.map((rule, index) => (
            <motion.div
              key={rule.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="bg-card border border-border rounded-lg p-5 hover:border-accent/50 transition-colors"
            >
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <rule.icon className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-1">{rule.title}</h3>
                  <p className="text-sm text-muted-foreground">{rule.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Rules;
