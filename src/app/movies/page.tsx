import Container from "@/components/Container"
import MovieList, { MovieSearchParams } from "@/components/movie/MovieList"

export default function page({ searchParams }: { searchParams: Promise<MovieSearchParams> }) {
  return (
    <>
      <Container>
        <MovieList searchParams={searchParams} />
      </Container>
    </>
  )
}
