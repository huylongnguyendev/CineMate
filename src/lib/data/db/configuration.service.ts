import { tmdb } from "@/lib/apis/tmdb.api"
import { CountryType } from "@/lib/types/db/country.type"

export const configurationService = {
  getCountries: async () => {
    const res: CountryType = await tmdb.configuration.getCountries()
    return res
  }
}