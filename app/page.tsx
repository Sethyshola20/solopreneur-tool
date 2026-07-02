import { FileText, Receipt, ShieldCheck, Users } from "lucide-react";
import { ConnectionForm } from "./connection-form";
import { ThemeToggle } from "@/components/theme-toggle";

const pillars = [
  {
    icon: FileText,
    title: "Devis",
    description: "Créez et envoyez des devis en quelques minutes.",
  },
  {
    icon: Receipt,
    title: "Factures",
    description: "Facturez et suivez les paiements sans tableur.",
  },
  {
    icon: Users,
    title: "Clients",
    description: "Gardez toutes vos coordonnées client à jour.",
  },
];

function BrandMark({ className }: { className?: string }) {
  return (
    <div className={className}>
      <span className="flex size-8 items-center justify-center rounded-lg bg-foreground text-sm font-semibold text-background">
        S
      </span>
    </div>
  );
}

export default function LandingPage() {
  return (
    <div className="flex min-h-[100dvh] flex-col bg-background md:flex-row">
      <div className="fixed right-4 top-4 z-10 md:right-6 md:top-6">
        <ThemeToggle />
      </div>

      <div className="relative hidden overflow-hidden bg-zinc-950 md:flex md:w-[45%] md:flex-col md:justify-between lg:w-2/5">
        <div
          className="pointer-events-none absolute -left-24 -top-24 size-[26rem] rounded-full bg-emerald-500/20 blur-[100px]"
          style={{ animation: "drift-a 16s ease-in-out infinite alternate" }}
        />
        <div
          className="pointer-events-none absolute -bottom-32 -right-16 size-[22rem] rounded-full bg-emerald-400/10 blur-[110px]"
          style={{ animation: "drift-b 18s ease-in-out infinite alternate" }}
        />
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.04] mix-blend-overlay"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          }}
        />

        <div className="relative z-[1] px-10 pt-10 lg:px-14 lg:pt-14">
          <BrandMark />
        </div>

        <div className="relative z-[1] px-10 lg:px-14">
          <h1 className="max-w-sm text-4xl font-medium leading-tight tracking-tight text-white">
            Devis, factures et clients, au même endroit.
          </h1>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-zinc-400">
            Un espace privé pensé pour piloter votre activité sans jongler entre outils.
          </p>

          <div className="mt-10 space-y-5">
            {pillars.map(({ icon: Icon, title, description }, index) => (
              <div
                key={title}
                className="flex animate-in items-start gap-3 fade-in-0 slide-in-from-bottom-2 fill-mode-both duration-700"
                style={{ animationDelay: `${150 + index * 120}ms` }}
              >
                <span className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5">
                  <Icon className="size-4 text-emerald-400" strokeWidth={1.5} />
                </span>
                <div>
                  <p className="text-sm font-medium text-white">{title}</p>
                  <p className="text-sm text-zinc-500">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative z-[1] flex items-center gap-2 px-10 pb-10 text-xs text-zinc-500 lg:px-14 lg:pb-14">
          <ShieldCheck className="size-3.5" strokeWidth={1.5} />
          Paiements sécurisés via Stripe
        </div>
      </div>

      <div className="flex flex-1 items-center justify-center px-6 py-16">
        <div className="w-full max-w-sm">
          <BrandMark className="mb-8 md:hidden" />

          <p className="text-sm font-medium text-emerald-500">Solopreneur</p>
          <h2 className="mt-2 text-2xl font-medium tracking-tight text-foreground">
            Accédez à votre espace
          </h2>
          <p className="mt-1.5 text-sm text-muted-foreground">
            Gestion privée de micro-entreprise.
          </p>

          <div className="mt-8">
            <ConnectionForm />
          </div>
        </div>
      </div>
    </div>
  );
}
