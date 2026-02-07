import { useNavigate } from "react-router-dom";
import { ArrowLeft, FileText } from "lucide-react";

export default function TermsOfService() {
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
          <FileText className="w-7 h-7 text-green-400" />
          <h1 className="text-3xl font-bold text-green-400">
            Terms of Service
          </h1>
        </div>

        {/* Content */}
        <div className="space-y-5 text-muted-foreground leading-relaxed">
          <p>
            Welcome to <b className="text-green-400">TestSMP</b>. By accessing or playing on our
            Minecraft server, you agree to these Terms of Service.
          </p>

          <p>
            You must follow all server rules, respect other players, and avoid exploiting bugs,
            cheats, or unfair advantages.
          </p>

          <p>
            Any form of harassment, griefing, or malicious behavior may result in warnings,
            temporary bans, or permanent bans.
          </p>

          <p>
            We reserve the right to modify or terminate services at any time to ensure a safe and
            enjoyable experience for all players.
          </p>

          <p>
            These terms may change at any time. Continued use of TestSMP means you accept any
            updated terms.
          </p>

          <p className="text-sm text-green-400/70">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>
      </div>
    </div>
  );
}