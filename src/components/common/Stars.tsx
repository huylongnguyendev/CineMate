import { cn } from "@/lib/utils"
import { Star, StarHalf } from "lucide-react"

export default function Stars({ score }: { score: number }) {
  const rateStar = (score * 0.5).toFixed(1)
  function setColor() {
    if (score < 4)
      return "text-red-600"
    if (score < 6)
      return "text-amber-600"
    if (score < 8)
      return "text-yellow-600"
    return "text-green-600"
  }

  const color = setColor()

  return (
    <>
      <div className={cn("flex items-center gap-1 [&_svg]:size-4", color)}>
        {
          Array.from({ length: parseInt(rateStar.charAt(0)) }).map((_, index) => (
            <Star key={"start" + index} />
          ))
        }
        {
          Number(rateStar) % 1 !== 0 && <StarHalf />
        }
      </div>
    </>
  )
}
