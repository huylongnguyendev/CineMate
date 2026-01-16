import Container from "@/components/common/Container"
import Hero from "@/components/hero/Hero"
import TopicMovieSection from "@/components/sections/movie/TopicMovieSection"
import TrendingMovieSection from "@/components/sections/movie/TrendingMovieSection"
import TopicShowSection from "@/components/sections/show/TopicShowSection"
import TrendingShowSection from "@/components/sections/show/TrendingShowSection"


export default function Home() {
  return (
    <>
      <Hero />
      <Container className="mt-4 space-y-8 py-4">
        <div className="space-y-8">
          <h4 className="font-semibold text-muted-foreground">Phim chiếu rạp</h4>
          <TrendingMovieSection />
          <TopicMovieSection title="phim đang chiếu" topic="now_playing" />
          <TopicMovieSection title="phim sắp chiếu" topic="upcoming" />
          <TopicMovieSection title="Top Rated" topic="top_rated" />
        </div>
        <div className="space-y-8">
          <h4 className="font-semibold text-muted-foreground">Phim bộ và Chương trình truyền hình</h4>
          <TrendingShowSection />
          <TopicShowSection title="phát sóng hôm nay" topic="airing_today" />
          <TopicShowSection title="phim đang phát sóng" topic="on_the_air" />
          <TopicShowSection title="Top Rated" topic="top_rated" />
        </div>
      </Container>
    </>
  )
}
