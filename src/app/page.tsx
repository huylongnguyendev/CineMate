import Banner from "@/components/banner/Banner"
import Section from "@/components/sections/Section"

interface HomeProps {
  searchParams: { [key: string]: string | string[] | undefined }
}

export default function Home({ searchParams }: HomeProps) {
  return (
    <>
      <main className="space-y-20">
        <Banner />
        <Section
          title="Xu Hướng"
          type="trending"
          filter
          searchParams={searchParams} // Truyền params để lấy trending=day/week
        />

        {/* Mục Phổ biến: Không cần filter, param mặc định */}
        <Section
          title="Phim Phổ Biến"
          type="popular"
        />

        {/* Mục Đánh giá cao */}
        <Section
          title="Top Rated"
          type="top_rated"
        />
      </main>
    </>
  )
}
