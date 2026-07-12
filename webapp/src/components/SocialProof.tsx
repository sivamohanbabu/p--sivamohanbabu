import { Card, CardContent } from "@/components/ui/card"
import { Quote, Award } from "lucide-react"
import Image from "next/image"

export function SocialProof() {
  return (
    <section className="w-full py-24 bg-background flex flex-col items-center px-4 border-t border-border/40">
      <div className="container max-w-6xl space-y-16">
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Trusted by Industry Leaders</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Feedback from corporate partners, student reviews, and official felicitations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-8">
          {/* Testimonials */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <Quote className="w-6 h-6 text-primary" />
              <h3 className="text-2xl font-semibold">Testimonials</h3>
            </div>
            
            <Card className="bg-muted/10 border-primary/10 shadow-sm overflow-hidden group">
              <CardContent className="p-0 relative aspect-video">
                <video 
                  controls
                  playsInline
                  className="w-full h-full object-cover bg-black"
                  poster=""
                >
                  <source src={encodeURI("/p--sivamohanbabu/assets/testimonials/Testimonial -1.mp4")} type="video/mp4" />
                </video>
              </CardContent>
            </Card>

            <Card className="bg-muted/10 border-primary/10 shadow-sm overflow-hidden group">
              <CardContent className="p-0 relative aspect-video">
                <video 
                  controls
                  playsInline
                  className="w-full h-full object-cover bg-black"
                  poster=""
                >
                  <source src={encodeURI("/p--sivamohanbabu/assets/testimonials/Testimonial-2.mp4")} type="video/mp4" />
                </video>
              </CardContent>
            </Card>
          </div>

          {/* Felicitations */}
          <div className="space-y-6 flex flex-col">
            <div className="flex items-center gap-3 mb-6">
              <Award className="w-6 h-6 text-primary" />
              <h3 className="text-2xl font-semibold">Felicitations</h3>
            </div>

            <Card className="bg-muted/10 border-primary/10 shadow-sm flex-1 flex flex-col overflow-hidden">
              <CardContent className="p-0 flex-1 flex flex-col">
                 <div className="relative aspect-[4/3] w-full">
                    <Image 
                      src={encodeURI("/assets/felicitation/WhatsApp Image 2026-07-12 at 11.25.49 PM.jpeg")}
                      alt="Felicitation Award"
                      fill
                      className="object-cover"
                    />
                 </div>
                 <div className="p-6 md:p-8 bg-gradient-to-b from-muted/50 to-transparent">
                   <p className="text-base text-center text-muted-foreground">
                     Recognized for excellence in technical education and outstanding contribution to faculty development programs across multiple institutions.
                   </p>
                 </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
