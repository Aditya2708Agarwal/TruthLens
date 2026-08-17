import type { Metadata } from "next";
import { AppShell } from "@/components/truthlens/app-shell";
import { AnalyzeForm } from "@/components/truthlens/analyze-form";
export const metadata:Metadata={title:"Analyze",description:"Verify an AI-generated response claim by claim."};
export default function AnalyzePage(){return <AppShell title="Analyze a response" description="Paste an AI answer and choose how TruthLens should verify it."><AnalyzeForm/></AppShell>}

