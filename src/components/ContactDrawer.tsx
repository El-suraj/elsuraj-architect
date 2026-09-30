import { useState } from "react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription } from "@/components/ui/sheet";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Clock } from "lucide-react";
import { toast } from "sonner";

const scopes = ["0 → 1 Architecture", "Scale Audit", "Technical Advisory", "Rescue Mission"];

type Props = {
  open: boolean;
  onOpenChange: (v: boolean) => void;
};

const ContactDrawer = ({ open, onOpenChange }: Props) => {
  const [scope, setScope] = useState(scopes[0]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [brief, setBrief] = useState("");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !brief.trim()) {
      toast.error("Please fill in your name, email, and a short brief.");
      return;
    }
    toast.success("Inquiry noted", { description: "Expect a reply within 24 hours." });
    setName("");
    setEmail("");
    setBrief("");
    onOpenChange(false);
  };

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent side="right" className="w-full sm:max-w-md border-border bg-background overflow-y-auto">
        <SheetHeader className="text-left">
          <SheetTitle className="font-display text-2xl tracking-tight">Start a conversation</SheetTitle>
          <SheetDescription className="font-body">
            Tell me what you're building. Short and direct works best.
          </SheetDescription>
        </SheetHeader>

        <form onSubmit={submit} className="mt-8 space-y-6">
          <div>
            <p className="text-xs font-mono text-primary tracking-[0.2em] uppercase mb-3">Scope</p>
            <div className="flex flex-wrap gap-2">
              {scopes.map((s) => (
                <button
                  key={s}
                  type="button"
                  onClick={() => setScope(s)}
                  className={`rounded-full px-3 py-1.5 text-xs font-mono border transition-colors ${
                    scope === s
                      ? "border-primary bg-primary/10 text-primary"
                      : "border-border text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          <Input placeholder="Your name" value={name} onChange={(e) => setName(e.target.value)} />
          <Input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <Textarea
            placeholder="What are you building, and what's in the way?"
            rows={5}
            value={brief}
            onChange={(e) => setBrief(e.target.value)}
          />

          <button
            type="submit"
            className="w-full rounded-full bg-primary text-primary-foreground font-mono text-sm py-3 hover:opacity-90 transition-opacity glow-primary"
          >
            Send inquiry
          </button>

          <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground">
            <Clock className="w-3.5 h-3.5" />
            Typical response &lt; 24 hours (Lagos, WAT)
          </div>
        </form>
      </SheetContent>
    </Sheet>
  );
};

export default ContactDrawer;
