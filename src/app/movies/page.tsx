import Container from "@/components/common/Container"
import MovieList from "@/components/products/movies/MovieList"
import { Suspense } from "react"

export default function page() {
  return (
    <>
      <Container>
        <Suspense>
          <MovieList />
        </Suspense>
      </Container>
    </>
  )
}
