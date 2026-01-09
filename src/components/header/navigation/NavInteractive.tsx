import MenuToggle from "@/components/toggles/MenuToggle"
import { ModeToggle } from "@/components/toggles/ModeTogle"
import { AlignRight } from "lucide-react"

export default function NavInteractive() {
  return (
    <>
      <div className="flex items-center gap-2">
        <ModeToggle />
        <MenuToggle>
          <AlignRight />
        </MenuToggle>
      </div>
    </>
  )
}
