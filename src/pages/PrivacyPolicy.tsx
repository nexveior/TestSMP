import { useNavigate } from "react-router-dom";
import { ArrowLeft, ShieldCheck } from "lucide-react";

export default function PrivacyPolicy() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-background to-black px-6">
      <div
        className="
          relative max-w-4xl w-full
          bg-card/80 backdrop-blur-xl
          border border-green-500/20
          rounded-2xl p-10 pt-16
          shadow-[0_0_60px_rgba(34,197,94,0.15)]
          animate-fade-in
        "
      >
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="
            group absolute top-4 left-4
            flex items-center gap-2
            rounded-full px-4 py-2
            bg-green-500/10 text-green-400
            border border-green-500/30
            transition-all duration-300
            hover:bg-green-500/20
            hover:shadow-[0_0_20px_rgba(34,197,94,0.4)]
            hover:-translate-y-0.5
            active:scale-95
          "
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span className="text-sm font-medium">Back</span>
        </button>

        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <ShieldCheck className="w-7 h-7 text-green-400" />
          <h1 className="text-3xl font-bold text-green-400">
            Privacy Policy
          </h1>
        </div>

        {/* Content */}
        <div className="space-y-5 text-muted-foreground leading-relaxed">
          <p>
            This Privacy Policy explains how <b className="text-green-400">TestSMP</b> collects,
            uses, and protects your information when you use our Minecraft server and website.
          </p>

          <p>
            We do <b className="text-green-400">not</b> collect personal information such as real
            names, addresses, or payment data unless explicitly required for a feature.
          </p>

          <p>
            Any data collected (such as usernames, IP addresses, or server logs) is used strictly
            to improve server performance, security, and user experience.
          </p>

          <p>
            We never sell or share your data with third parties. Your data stays safe within
            TestSMP.
          </p>

          <p>
            By using our services, you agree to this Privacy Policy. This policy may be updated
            in the future to reflect improvements or changes.
          </p>

          <p className="text-sm text-green-400/70">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>
      </div>
    </div>
  );
}