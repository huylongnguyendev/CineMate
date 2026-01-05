import { cn } from "@/lib/utils"
import SectionFilter from "./SectionFilter"

export interface TitleProps {
  title: string
  filter?: boolean
  className?: string
}

export default function SectionTitle({
  title,
  filter = false,
  className
}: TitleProps) {
  return (
    <>
      <div className="flex items-center gap-4">
        <h2 className={cn("text-lg font-semibold capitalize", className)}>{title}</h2>
        {filter && (<SectionFilter />)}
      </div>
    </>
  )
}
