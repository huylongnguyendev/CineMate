import { cn } from "@/lib/utils"

interface HeadingProps {
  children: React.ReactNode
  className?: string
  level?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
}

export default function Heading({ children, className, level = "h2" }: HeadingProps) {
  const Tag = level
  return (
    <>
      <Tag className={cn("font-semibold text-lg", className)}>{children}</Tag>
    </>
  )
}
