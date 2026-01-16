import { Button } from "@/components/ui/button"
import { BookMarked } from "lucide-react"
import Link from "next/link"

export default function NavWhishlist() {
  return (
    <>
      <Button
        variant="outline"
        size="icon"
      >
        <Link
          href="/whishlist"
          className="flex justify-center items-center size-full"
        >
          <BookMarked />
        </Link>
      </Button>
    </>
  )
}
