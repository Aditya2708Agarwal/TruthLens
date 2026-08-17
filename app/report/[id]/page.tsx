import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { AppShell } from "@/components/truthlens/app-shell";
import { ReportWorkspace } from "@/components/truthlens/report-workspace";
import { mockReport } from "@/lib/mock-data";
export async function generateMetadata({params}:{params:Promise<{id:string}>}):Promise<Metadata>{const{id}=await params;if(id!==mockReport.id)return{title:"Report not found"};const title=`Verification report: ${mockReport.reliabilityScore}/100`;const description=`Claim-level verification of ${mockReport.claims.length} claims in an AI-generated response.`;return{title,description,openGraph:{title,description,images:[]},twitter:{card:"summary",title,description,images:[]}}}
export default async function ReportPage({params}:{params:Promise<{id:string}>}){const{id}=await params;if(id!==mockReport.id)notFound();return <AppShell title="Verification report" description={`Report ${mockReport.id} · General Verification`}><ReportWorkspace report={mockReport}/></AppShell>}

