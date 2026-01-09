import Container from "../common/Container"
import HeroClient from "./HeroClient"

export default function Hero() {
  return (
    <>
      <section className="relative h-44 mt-18 text-center bg-primary z-10">
        <div className="absolute inset-0 bg-linear-to-t from-background via-background/20 to-transparent -z-10"/>
        <Container className="h-full">
          <HeroClient className="h-full flex flex-col items-center justify-center">
            <h1 className="text-xl md:text-2xl font-semibold">
              Chào mừng bạn
            </h1>
            <p className="text-lg md:text-xl text-balance max-w-3xl mx-auto">
              Hàng triệu bộ phim hot và chương trình độc đáo đang chờ bạn khám phá
            </p>
          </HeroClient>
        </Container>
      </section>
    </>
  )
}
