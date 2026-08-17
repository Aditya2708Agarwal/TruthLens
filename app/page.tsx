import Link from "next/link";
import { ArrowRight, CheckCircle2, FileCheck2, Gauge, Quote, SearchCheck, ShieldCheck, Sparkles } from "lucide-react";
import { Navbar } from "@/components/truthlens/navbar";

const steps = [
  ["01", "Paste AI response", "Add the answer you want to verify."],
  ["02", "Extract factual claims", "TruthLens separates testable statements."],
  ["03", "Verify against evidence", "Each claim is checked against credible sources."],
  ["04", "Get reliability report", "Review verdicts, confidence, and evidence."],
] as const;
const features = [
  { icon: SearchCheck, title: "Claim-Level Verification", copy: "Break complex answers into precise, independently verifiable claims." },
  { icon: FileCheck2, title: "Evidence-Backed Results", copy: "See the passage and source behind every supported or challenged verdict." },
  { icon: Gauge, title: "Reliability Scoring", copy: "Understand answer quality at a glance with a transparent 0–100 score." },
  { icon: Quote, title: "Citation Checking", copy: "Evaluate whether cited sources actually support the claims they accompany." },
] as const;

export default function Home() {
  return <main className="min-h-screen bg-background text-foreground">
    <Navbar />
    <section className="relative overflow-hidden border-b border-border"><div className="hero-grid absolute inset-0 opacity-60" /><div className="relative mx-auto grid max-w-7xl gap-14 px-6 py-20 lg:grid-cols-[1.05fr_.95fr] lg:items-center lg:px-8 lg:py-28">
      <div><div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1.5 text-sm font-medium text-primary"><Sparkles className="size-3.5" /> AI answers, checked claim by claim</div><h1 className="max-w-3xl text-balance text-5xl font-semibold tracking-[-0.045em] sm:text-6xl lg:text-7xl">Verify AI Answers Before You Trust Them</h1><p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">TruthLens turns AI-generated responses into verifiable claims, checks each one against credible evidence, and delivers a clear reliability report.</p><div className="mt-9 flex flex-col gap-3 sm:flex-row"><Link className="button button-primary h-12 px-5" href="/analyze">Analyze a Response <ArrowRight className="size-4" /></Link><Link className="button button-secondary h-12 px-5" href="/report/report-001">View Demo</Link></div><div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground"><span className="flex items-center gap-2"><CheckCircle2 className="size-4 text-success" /> No account required</span><span className="flex items-center gap-2"><CheckCircle2 className="size-4 text-success" /> Evidence included</span></div></div>
      <div className="relative mx-auto w-full max-w-xl"><div className="absolute -inset-8 rounded-full bg-primary/10 blur-3xl" /><div className="relative rounded-2xl border border-border bg-card p-3 shadow-2xl shadow-slate-950/10"><div className="flex items-center justify-between border-b border-border px-3 pb-3"><div className="flex items-center gap-2 text-sm font-medium"><ShieldCheck className="size-4 text-primary" /> Verification preview</div><span className="rounded-full bg-success/10 px-2.5 py-1 text-xs font-semibold text-success">78 / 100</span></div><div className="space-y-3 p-3"><PreviewClaim color="green" label="Supported · 96%" text="BERT was introduced by Google in 2018." /><PreviewClaim color="red" label="Contradicted · 94%" text="BERT was trained on more than 100 languages." /><PreviewClaim color="amber" label="Uncertain · 72%" text="BERT remains the best NLP model today." /></div></div></div>
    </div></section>
    <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8"><div className="max-w-2xl"><p className="eyebrow">How it works</p><h2 className="section-title">From pasted answer to evidence-backed clarity</h2></div><div className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-2 lg:grid-cols-4">{steps.map(([num,title,copy]) => <div className="bg-card p-6" key={num}><span className="font-mono text-xs font-semibold text-primary">{num}</span><h3 className="mt-7 font-semibold">{title}</h3><p className="mt-2 text-sm leading-6 text-muted-foreground">{copy}</p></div>)}</div></section>
    <section className="border-y border-border bg-muted/40"><div className="mx-auto max-w-7xl px-6 py-20 lg:px-8"><div className="max-w-2xl"><p className="eyebrow">Built for trustworthy work</p><h2 className="section-title">Know what holds up—and what needs a second look</h2></div><div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{features.map(({icon:Icon,title,copy}) => <article className="card p-6" key={title}><div className="grid size-10 place-items-center rounded-lg border border-primary/15 bg-primary/5 text-primary"><Icon className="size-5" /></div><h3 className="mt-5 font-semibold">{title}</h3><p className="mt-2 text-sm leading-6 text-muted-foreground">{copy}</p></article>)}</div></div></section>
    <footer className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-8 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between lg:px-8"><span>© 2026 TruthLens AI</span><span>Truth, with the evidence attached.</span></footer>
  </main>;
}

function PreviewClaim({ color, label, text }: { color:"green"|"red"|"amber"; label:string; text:string }) { const classes={green:"border-success/20 bg-success/5 text-success",red:"border-danger/20 bg-danger/5 text-danger",amber:"border-warning/25 bg-warning/5 text-warning"}; return <div className={`rounded-xl border p-4 ${classes[color]}`}><div className="text-xs font-semibold">{label}</div><p className="mt-2 text-sm leading-6 text-foreground">{text}</p></div>; }
