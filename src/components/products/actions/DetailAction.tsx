import { Button } from "@/components/ui/button"
import { DialogTrigger } from "@/components/ui/dialog"
import { Film } from "lucide-react"
import Whisthlist from "./Whisthlist"
import { IMovieDetailItem } from "@/lib/types/db/movie/detail.type"
import { IShowDetailItem } from "@/lib/types/db/tv/detail.type"

export default function DetailAction({ item }: { item: IMovieDetailItem | IShowDetailItem }) {
  return (
    <>
      <div className="flex items-center gap-2 py-2">
        <Whisthlist item={item} />
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
