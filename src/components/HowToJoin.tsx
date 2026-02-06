import { motion } from "framer-motion";
import { Download, Server, Play, CheckCircle } from "lucide-react";

const steps = [
  {
    step: 1,
    icon: Download,
    title: "Get Minecraft",
    description: "Make sure you have Minecraft Java Edition installed. We support versions 1.19 - 1.21.",
  },
  {
    step: 2,
    icon: Server,
    title: "Add Server",
    description: "Open Minecraft, go to Multiplayer, and click 'Add Server'. Enter our IP: play.testsmp.net",
  },
  {
    step: 3,
    icon: Play,
    title: "Join & Play",
    description: "Click on TEST SMP in your server list and join! Complete the quick tutorial to get started.",
  },
  {
    step: 4,
    icon: CheckCircle,
    title: "Have Fun!",
    description: "Explore, build, and make friends. Don't forget to join our Discord for updates!",
  },
];

const HowToJoin = () => {
  return (
    <section id="join" className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-pixel text-2xl md:text-3xl text-primary mb-4">
            How To Join
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Get started in just a few simple steps
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Connection line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden md:block" />

            {steps.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative flex items-start gap-6 mb-8 last:mb-0"
              >
                {/* Step number */}
                <div className="relative z-10 w-16 h-16 rounded-full bg-primary flex items-center justify-center flex-shrink-0 glow-primary">
                  <item.icon className="w-7 h-7 text-primary-foreground" />
                </div>

                {/* Content */}
                <div className="flex-1 bg-card border border-border rounded-xl p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-sm font-bold text-primary">Step {item.step}</span>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowToJoin;
