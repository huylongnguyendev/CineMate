import { configurationService } from "@/lib/data/db/configuration.service"
import { DropdownMenu } from "../../ui/dropdown-menu"
import CountryTrigger from "./CountryTrigger"
import { Suspense } from "react"
import { Button } from "@/components/ui/button"
import { Globe } from "lucide-react"
import CountryContent from "./CountryContent"

export default async function CountryFilter() {
  "use cache"

  const data = await configurationService.getCountries()

  return (
    <>
      <Suspense fallback={
        <Button variant="outline" className="opacity-50 pointer-events-none">
          <Globe />
          <p>Quốc gia</p>
        </Button>}>
        <DropdownMenu>
          <CountryTrigger countries={data} />
          <CountryContent countries={data} />
        </DropdownMenu>
      </Suspense>
    </>
  )
}
