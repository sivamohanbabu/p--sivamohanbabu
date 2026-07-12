import { Card, CardDescription, CardTitle } from "@/components/ui/card"
import { Building2, Laptop, Users, GraduationCap } from "lucide-react"
import Image from "next/image"

export function TrainingDomains() {
  return (
    <section className="w-full py-20 bg-muted/30 flex flex-col items-center px-4">
      <div className="container max-w-6xl space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Training Domains & Methodologies</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Delivering high-impact technical training across multiple environments, tailored to organizational needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[250px] md:auto-rows-[300px]">
          {/* Corporate Training (Large Feature) */}
          <Card className="md:col-span-2 md:row-span-2 flex flex-col justify-end relative overflow-hidden group border-primary/10">
            <Image 
              src={encodeURI("/assets/corporatetraining/WhatsApp Image 2026-07-12 at 11.26.40 PM.jpeg")}
              alt="Corporate Training Session"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="relative z-10 p-6 md:p-8 bg-gradient-to-t from-background via-background/90 to-transparent pt-32 mt-auto">
              <Building2 className="w-10 h-10 text-primary mb-4" />
              <CardTitle className="text-2xl mb-2">Corporate Training</CardTitle>
              <CardDescription className="text-base text-foreground/90">
                Customized upskilling programs for enterprise teams. Specializing in transitioning teams to modern Full-Stack architectures, Data Analytics, and AI/RAG pipelines.
              </CardDescription>
            </div>
          </Card>

          {/* Online Bootcamps */}
          <Card className="relative overflow-hidden group border-primary/10">
            <Image 
              src={encodeURI("/assets/online_training/image (3).png")}
              alt="Online Bootcamp"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="relative z-10 h-full p-6 flex flex-col justify-end bg-gradient-to-t from-background via-background/90 to-background/20">
              <Laptop className="w-8 h-8 text-primary mb-3" />
              <CardTitle className="text-xl mb-1">Online Bootcamps</CardTitle>
              <CardDescription className="text-sm text-foreground/90">
                Intensive, hands-on virtual cohorts focusing on practical implementation.
              </CardDescription>
            </div>
          </Card>

          {/* Classroom Sessions */}
          <Card className="relative overflow-hidden group border-primary/10">
            <video 
              autoPlay 
              loop 
              muted 
              playsInline
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            >
              <source src={encodeURI("/assets/classroom/VID-20260420-WA0014.mp4")} type="video/mp4" />
            </video>
            <div className="relative z-10 h-full p-6 flex flex-col justify-end bg-gradient-to-t from-background via-background/90 to-background/20">
              <Users className="w-8 h-8 text-primary mb-3" />
              <CardTitle className="text-xl mb-1">In-Classroom Sessions</CardTitle>
              <CardDescription className="text-sm text-foreground/90">
                High-energy, interactive physical workshops maximizing engagement.
              </CardDescription>
            </div>
          </Card>

          {/* Faculty Development Programs (FDP) */}
          <Card className="md:col-span-3 relative overflow-hidden group border-primary/10">
            <Image 
              src={encodeURI("/assets/fdp/Screenshot (1).png")}
              alt="Faculty Development Programs"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="relative z-10 h-full p-6 md:p-8 flex flex-col md:flex-row items-start md:items-end justify-between bg-gradient-to-t md:bg-gradient-to-r from-background via-background/90 to-background/20">
              <div className="max-w-xl">
                <GraduationCap className="w-10 h-10 text-primary mb-4" />
                <CardTitle className="text-2xl mb-2">Faculty Development Programs</CardTitle>
                <CardDescription className="text-base text-foreground/90">
                  Empowering educators with industry-aligned curriculums and modern pedagogical approaches for teaching software engineering.
                </CardDescription>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
