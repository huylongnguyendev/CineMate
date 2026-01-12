import { Carousel, CarouselContent, CarouselNext, CarouselPrevious } from "../ui/carousel"

export default function StaticCarousel({ children }: { children: React.ReactNode }) {
  return (
    <Carousel className="w-full">
      <CarouselContent>
        {children}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
