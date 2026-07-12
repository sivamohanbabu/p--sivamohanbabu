"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, BookOpen, User } from "lucide-react"
import Image from "next/image"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"

export function HeroSection() {
  const groupPictures = [
    encodeURI("/p--sivamohanbabu/assets/group_pictures/IMG_7109.JPG"),
    encodeURI("/p--sivamohanbabu/assets/group_pictures/IMG_7113.JPG"),
    encodeURI("/p--sivamohanbabu/assets/group_pictures/WhatsApp Image 2026-05-01 at 8.08.34 AM.jpeg"),
  ]

  return (
    <section className="w-full relative overflow-hidden bg-background text-foreground flex flex-col items-center">
      {/* Background Carousel from Group Pictures */}
      <div className="absolute inset-0 w-full h-full opacity-50">
        <Carousel
          opts={{ loop: true, watchDrag: false }}
          plugins={[Autoplay({ delay: 5000 })]}
          className="w-full h-full"
        >
          <CarouselContent className="h-screen">
            {groupPictures.map((src, index) => (
              <CarouselItem key={index} className="relative w-full h-full">
                <Image
                  src={src}
                  alt={`Group training picture ${index + 1}`}
                  fill
                  className="object-cover"
                  priority={index === 0}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
      
      {/* Overlays for readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/30 z-0" />
      <div className="absolute inset-0 bg-primary/10 blur-[100px] z-0 pointer-events-none" />

      <div className="container max-w-5xl py-24 md:py-32 lg:py-48 space-y-8 flex flex-col items-center relative z-10 text-center px-4">
        {/* Logo and Photo */}
        <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-primary/20 mb-2 shadow-2xl bg-muted flex items-center justify-center">
          <Image 
            src="/p--sivamohanbabu/assets/logo_and_photo/headshot.jpg" 
            alt="Professional Trainer" 
            fill 
            className="object-cover"
            priority
          />
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-balance">
          Master Tech with <span className="text-primary">Real-World Storytelling</span>
        </h1>
        
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl text-balance">
          Professional technical trainer and instructional mentor with 7+ years of experience. 
          Specializing in Full-Stack Development, Data Analytics, and AI Engineering architectures 
          using practical analogies over bookish definitions.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 pt-4">
          <Button size="lg" className="gap-2 rounded-full px-8 shadow-lg">
            View Training Modules <BookOpen className="w-4 h-4" />
          </Button>
          <Button size="lg" variant="outline" className="gap-2 border-primary/20 hover:bg-primary/10 rounded-full px-8 bg-background/50 backdrop-blur-md">
            Book a Corporate Workshop <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}
