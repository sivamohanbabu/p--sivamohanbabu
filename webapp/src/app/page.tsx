import { HeroSection } from "@/components/HeroSection"
import { TrainingDomains } from "@/components/TrainingDomains"
import { ImpactGallery } from "@/components/ImpactGallery"
import { CaseStudies } from "@/components/CaseStudies"
import { SocialProof } from "@/components/SocialProof"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <HeroSection />
      <TrainingDomains />
      <ImpactGallery />
      <CaseStudies />
      <SocialProof />
      
      {/* Footer */}
      <footer className="w-full py-8 text-center bg-background border-t border-border/40">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Professional Technical Trainer. Built with Next.js, Tailwind, & Framer Motion.
        </p>
      </footer>
    </main>
  )
}
