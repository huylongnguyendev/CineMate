"use client"

import { useRef } from "react"
import { Carousel, CarouselContent } from "../ui/carousel"
import Autoplay from "embla-carousel-autoplay"

interface AnimateCarouselProps {
  children: React.ReactNode
  delay?: number
  loop?: boolean
  duration?: number
}

export default function AnimateCarousel({
  children,
  delay = 0,
  loop = false,
  duration = 0,
}: AnimateCarouselProps) {

  const plugin = useRef(
    Autoplay({ delay, stopOnInteraction: true })
  )

  return (
    <>
      <Carousel
        opts={{ loop, duration }}
        plugins={[plugin.current]}
        className="relative w-full"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <div className="absolute w-1/3 h-full top-0 left-0 z-1 bg-linear-to-r from-background via-background/20 to-transparent pointer-events-none" />
        <div className="absolute w-1/3 h-full top-0 right-0 z-1 bg-linear-to-l from-background via-background/20 to-transparent pointer-events-none" />
        <CarouselContent>
          {children}
        </CarouselContent>
      </Carousel>
    </>
  )
}
