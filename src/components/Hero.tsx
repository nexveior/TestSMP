import { motion } from "framer-motion";
import { Copy, Check, Users } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";
import { Link } from "react-router-dom";

const Hero = () => {
  const [copied, setCopied] = useState(false);
  const serverIP = "play.testsmp.net";
  const onlinePlayers = 127;
  const maxPlayers = 500;

  const copyIP = () => {
    navigator.clipboard.writeText(serverIP);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />
      
      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-primary/30 rounded-full"
            initial={{ 
              x: Math.random() * window.innerWidth, 
              y: window.innerHeight + 20 
            }}
            animate={{ 
              y: -20,
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "linear"
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Server Status Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-primary/20 border border-primary/50 rounded-full px-4 py-2 mb-8"
          >
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <Users className="w-4 h-4 text-primary" />
            <span className="text-primary font-semibold">
              {onlinePlayers}/{maxPlayers} Players Online
            </span>
          </motion.div>

          {/* Title */}
          <h1 className="font-pixel text-4xl md:text-6xl lg:text-7xl mb-4 text-glow-primary">
            <span className="text-primary">TEST</span>{" "}
            <span className="text-foreground">SMP</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join the ultimate Minecraft survival experience. Build, explore, and conquer with our amazing community!
          </p>

          {/* Server IP Copy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8"
          >
            <div className="flex items-center gap-2 bg-card border border-border rounded-lg px-6 py-3">
              <span className="text-muted-foreground">Server IP:</span>
              <span className="font-mono text-lg text-primary font-bold">{serverIP}</span>
            </div>
            <Button
              variant="copy"
              size="lg"
              onClick={copyIP}
              className="min-w-[140px]"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4" />
                  Copied!
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  Copy IP
                </>
              )}
            </Button>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button variant="hero" size="xl">
              <Link to="/under-development">
              Start Playing
              </Link>
            </Button>
            <Button variant="discord" size="xl" onClick={() => window.open("https://discord.com/users/nexveior", "_blank")}>
              Join Discord
            </Button>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-muted-foreground rounded-full flex items-start justify-center p-2"
          >
            <div className="w-1 h-2 bg-primary rounded-full" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
