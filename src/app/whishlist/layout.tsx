import Container from "@/components/common/Container"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Danh sách phim yêu thích",
}

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Container className="h-[calc(100dvh-76px)]">
        {children}
      </Container>
    </>
  )
}
