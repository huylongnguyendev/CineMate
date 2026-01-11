import { cn, setColor } from "@/lib/utils"
import { Star, StarHalf } from "lucide-react"

export default function Stars({ score }: { score: number }) {
  const rateStar = (score * 0.5).toFixed(1)

  const color = setColor(score)

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
