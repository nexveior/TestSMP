import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Wrench, Clock, ArrowLeft } from "lucide-react";

export default function UnderDevelopment() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-6">
      <div className="max-w-md w-full rounded-2xl border border-border bg-card p-8 text-center shadow-lg">
        
        {/* Icon */}
        <div className="flex justify-center mb-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-muted">
            <Wrench className="h-7 w-7 text-primary" />
          </div>
        </div>

        {/* Title */}
        <h1 className="text-2xl font-semibold tracking-tight">
          Under Development
        </h1>

        {/* Description */}
        <p className="mt-3 text-sm text-muted-foreground">
          This section is currently being worked on.
          We’re cooking something awesome — check back soon.
        </p>

        {/* Status */}
        <div className="mt-6 flex items-center justify-center gap-2 text-xs text-muted-foreground">
          <Clock className="h-4 w-4" />
          <span>Estimated release: Soon™</span>
        </div>

        {/* Action */}
        <div className="mt-8">
          <Link to="/">
            <Button variant="outline" className="gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Button>
          </Link>
        </div>

      </div>
    </div>
  );
}