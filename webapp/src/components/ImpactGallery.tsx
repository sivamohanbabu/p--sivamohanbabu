"use client"

import * as React from "react"
import { galleryImages } from "@/lib/gallery-images"

export function ImpactGallery() {
  return (
    <section className="w-full py-24 bg-background flex flex-col items-center px-4 overflow-hidden border-y border-border/40">
      <div className="container max-w-7xl space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Impact & Gallery</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive look at over 60 interactive sessions, group cohorts, and student success stories.
          </p>
        </div>

        {/* Responsive CSS Columns Masonry Grid */}
        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-6 space-y-6 w-full pb-10">
          {galleryImages.map((src, index) => (
            <div 
              key={index} 
              className="relative break-inside-avoid overflow-hidden rounded-xl border border-primary/20 shadow-sm group bg-muted flex items-center justify-center min-h-[100px]"
            >
              {/* Using standard img for native aspect-ratio handling in CSS columns */}
              <img 
                src={src}
                alt={`Training and Group picture ${index + 1}`}
                loading="lazy"
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none mix-blend-overlay" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
