import { cn } from "@/lib/utils"

export default function SectionTitle({ title, className }: { title: string, className?: string }) {
  return (
    <>
      <h2 className={cn("capitalize text-lg font-semibold", className)}>
        {title}
      </h2>
    </>
  )
}
