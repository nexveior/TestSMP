import { motion } from "framer-motion";
import { MessageCircle, Mail, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="py-12 bg-card border-t border-border">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Logo & Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="font-pixel text-lg mb-4">
              <span className="text-primary">TEST</span>{" "}
              <span className="text-foreground">SMP</span>
            </h3>
            <p className="text-muted-foreground mb-4">
              The ultimate Minecraft survival multiplayer experience. Join thousands of players today!
            </p>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              Server Status: Online
            </div>
            <br></br>
            <p className="text-muted-foreground mb-4">
              Developer: Nexveior
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="text-lg font-bold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {["Home", "Features", "Rules", "Staff", "How to Join"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase().replace(" ", "")}`}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Connect */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="text-lg font-bold text-foreground mb-4">Connect With Us</h4>
            <div className="flex flex-col gap-3">
              <Button variant="discord" className="justify-start" onClick={() => window.open("https://discord.com/users/nexveior", "_blank")}>
                <MessageCircle className="w-4 h-4 mr-2" />
                Join Discord
              </Button>
              <Button variant="outline" className="justify-start">
                <Twitter className="w-4 h-4 mr-2" />
                  <Link to="/under-development">
                    Follow on Twitter
                  </Link>
              </Button>
              <Button variant="outline" className="justify-start">
                <Mail className="w-4 h-4 mr-2" />
                <Link to="/under-development">
                Contact Support
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © 2024 TEST SMP. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-primary transition-colors">Store</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
