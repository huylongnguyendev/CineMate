import { Button } from "@/components/ui/button"
import { ArrowUpLeftFromCircle, ArrowUpRightFromCircle } from "lucide-react"
import Link from "next/link"

export default function NotFound() {
  return (
    <>
      <div className="size-full flex flex-col justify-center items-center">
          <h1 className="text-2xl md:text-3xl mb-2 font-semibold">Không có phim bạn yêu thích</h1>
          <p className="text-lg text-muted-foreground text-center text-balance pb-8">Hãy khám phá và thêm vào danh sách yêu thích của bạn</p>
          <div className="flex max-md:flex-col items-center gap-4 max-md:w-full">
            <Button variant="default" className="max-md:w-full">
              <Link href="/movies" className="flex items-center justify-center gap-1.5">
                <ArrowUpLeftFromCircle />
                <p>Khám phá phim</p>
              </Link>
            </Button>
            <Button variant="secondary" className="max-md:w-full">
              <Link href="/movies" className="flex items-center justify-center gap-1.5">
                <ArrowUpRightFromCircle />
                <p>Khám phá phim</p>
              </Link>
            </Button>
          </div>
      </div>
    </>
  )
}
