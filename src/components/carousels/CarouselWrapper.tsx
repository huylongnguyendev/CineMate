"use client"

import Autoplay from "embla-carousel-autoplay"
import { Carousel } from "../ui/carousel"
import { useRef } from "react"

export default function CarouselWrapper({ children }: { children: React.ReactNode }) {
  const plugin = useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  )

  return (
    <>
      <Carousel
        opts={{ align: "start", loop: true, duration: 3000 }}
        plugins={[plugin.current]}
        className="w-full"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        {children}
      </Carousel>
    </>
  )
}
