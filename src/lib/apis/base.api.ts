export const baseURL = process.env.NEXT_PUBLIC_API_URL ?? ""
export const smallImgURL = process.env.NEXT_PUBLIC_IMG_URL ?? ""
export const largeImgURL = process.env.NEXT_PUBLIC_IMG_LG_URL ?? ""
export const token = process.env.TMDB_TOKEN ?? ""

export function getApiOptions(
  method: "GET" | "POST" | "PUT" | "PATCH" | "DELETE",
  revalidate: number = 3600
) {
  
  const options = {
    method,
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${token}`
    },
    next: {revalidate}
  }

  return options
}