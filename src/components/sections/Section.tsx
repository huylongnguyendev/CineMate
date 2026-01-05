import { cn } from "@/lib/utils"
import Container from "../Container"
import SectionTitle, { TitleProps } from "./SectionTitle"
import CarouselWrapper from "../carousels/CarouselWrapper"
import Content, { ContentProps } from "../carousels/Content"
import { Suspense } from "react"

type SectionProps = TitleProps & Omit<ContentProps, "param"> & {
  className?: string
  searchParams?: { [key: string]: string | string[] | undefined }
}

export default async function Section({
  title,
  filter = false,
  className,
  type,
  searchParams
}: { searchParams?: { [key: string]: string | string[] | undefined } } & SectionProps) {
  const sParams = await searchParams
  const currentParam = (sParams?.trending as string) || "day"

  return (
    <>
      <Container className={cn("mt-5 space-y-4", className)}>
        <SectionTitle title={title} filter={filter} />
        <CarouselWrapper>
          <Suspense key={currentParam}>
            <Content type={type} param={currentParam} />
          </Suspense>
        </CarouselWrapper>
      </Container>
    </>
  )
}
