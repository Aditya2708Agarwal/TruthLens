import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";
export async function generateMetadata():Promise<Metadata>{
  const requestHeaders=await headers();
  const host=requestHeaders.get("x-forwarded-host")??requestHeaders.get("host")??"localhost:3000";
  const protocol=requestHeaders.get("x-forwarded-proto")??(host.startsWith("localhost")?"http":"https");
  const origin=new URL(`${protocol}://${host}`);
  const title="TruthLens AI — Verify AI Answers Before You Trust Them";
  const description="Claim-level evidence and clear reliability scores for AI-generated answers.";
  return{metadataBase:origin,title:{default:title,template:"%s · TruthLens AI"},description,icons:{icon:"/favicon.svg"},openGraph:{title,description,type:"website",images:[{url:new URL("/og.png",origin),width:1792,height:921,alt:"TruthLens AI claim verification report"}]},twitter:{card:"summary_large_image",title,description,images:[new URL("/og.png",origin)]}};
}
export default function RootLayout({ children }:Readonly<{children:React.ReactNode}>) { return <html lang="en" suppressHydrationWarning><body><script dangerouslySetInnerHTML={{__html:`try{const t=localStorage.getItem('truthlens-theme');document.documentElement.classList.toggle('dark',t==='dark'||(!t&&matchMedia('(prefers-color-scheme: dark)').matches))}catch{}`}}/>{children}</body></html>; }
