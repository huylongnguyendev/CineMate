import { Button } from "@/components/ui/button"
import { DialogTrigger } from "@/components/ui/dialog"
import { Film } from "lucide-react"
import Whisthlist from "./Whisthlist"

export default function DetailAction({id}:{id: number}) {
  return (
    <>
      <div className="flex items-center gap-2 py-2">
        <Whisthlist id={id.toString()} />
        <DialogTrigger asChild>
          <Button>
            <Film />
            <p className="capitalize">xem trailer</p>
          </Button>
        </DialogTrigger>
      </div>
    </>
  )
}
