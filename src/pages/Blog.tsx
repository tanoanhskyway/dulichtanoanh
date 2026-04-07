import { Link } from "react-router-dom";

const posts = [
  {
    slug: "kinh-nghiem-di-da-nang-tu-quang-tri",
    title: "Kinh nghiệm đi Đà Nẵng từ Quảng Trị tiết kiệm và thuận tiện",
    excerpt:
      "Gợi ý cách di chuyển từ Quảng Trị đi Đà Nẵng nhanh, tiết kiệm, phù hợp cho khách lẻ, gia đình và nhóm bạn.",
    image:
      "https://images2.thanhnien.vn/528068263637045248/2025/6/18/the-legend-danang-1-17502421275011965589401.jpg",
  },
  {
    slug: "gia-xe-quang-tri-di-hue",
    title: "Giá xe Quảng Trị đi Huế mới nhất",
    excerpt:
      "Cập nhật thông tin tham khảo về xe ghép Quảng Trị đi Huế, xe dịch vụ riêng và cách chọn phương án phù hợp.",
    image:
      "https://media.vietravel.com/images/Content/du-lich-song-huong-hue-1.jpg",
  },
  {
    slug: "nen-di-xe-ghep-hay-thue-xe",
    title: "Nên đi xe ghép hay thuê xe riêng?",
    excerpt:
      "So sánh ưu nhược điểm giữa xe ghép Quảng Trị và xe dịch vụ riêng để bạn dễ chọn theo nhu cầu thực tế.",
    image:
      "https://queenbus.com.vn/wp-content/uploads/2025/08/Cau-Rong-bieu-tuong-du-lich-Da-Nang-Anh-Suu-tam-1024x683.png",
  },
  {
    slug: "lich-trinh-du-lich-quang-tri-1-ngay",
    title: "Lịch trình du lịch Quảng Trị 1 ngày gợi ý chi tiết",
    excerpt:
      "Gợi ý lịch trình tham quan Thành cổ Quảng Trị, Địa đạo Vịnh Mốc, Cầu Hiền Lương và Biển Cửa Việt trong 1 ngày.",
    image:
      "https://cms.junglebosstours.com/assets/9dba0c19-b575-4fc7-b973-439dc1a6114f?format=webp",
  },
  {
    slug: "cach-dat-xe-ghep-quang-tri",
    title: "Cách đặt xe ghép Quảng Trị nhanh và tiện lợi",
    excerpt:
      "Hướng dẫn đặt xe ghép Quảng Trị qua điện thoại, Zalo và những lưu ý để chuyến đi thuận tiện hơn.",
    image:
      "https://luhanhvietnam.com.vn/du-lich/vnt_upload/news/05_2021/du-lich-bien-cua-viet-o-dau.jpg",
  },
  {
    slug: "top-dia-diem-du-lich-quang-tri",
    title: "Top địa điểm du lịch Quảng Trị nên đi",
    excerpt:
      "Tổng hợp các điểm đến nổi bật tại Quảng Trị như Thành cổ, Vịnh Mốc, La Vang, Cửa Việt và Cửa Tùng.",
    image:
      "https://imagevietnam.vnanet.vn//MediaUpload/Org/2024/10/24/2824-14-31-25.jpg",
  },
];

const Blog = () => {
  return (
    <>
      <section className="bg-primary py-16">
        <div className="container text-primary-foreground text-center">
          <h1 className="text-3xl sm:text-4xl font-extrabold mb-3">
            Blog du lịch & kinh nghiệm di chuyển
          </h1>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            Cập nhật kinh nghiệm du lịch miền Trung, mẹo đặt xe ghép Quảng Trị,
            xe dịch vụ Quảng Trị và các lịch trình tham quan tiện lợi.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="container max-w-6xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="bg-card border border-border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <Link to={`/blog/${post.slug}`}>
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-52 object-cover"
                    loading="lazy"
                  />
                </Link>

                <div className="p-5 space-y-3">
                  <h2 className="text-lg font-bold leading-7">
                    <Link
                      to={`/blog/${post.slug}`}
                      className="hover:text-primary transition-colors"
                    >
                      {post.title}
                    </Link>
                  </h2>

                  <p className="text-muted-foreground leading-7 text-sm">
                    {post.excerpt}
                  </p>

                  <Link
                    to={`/blog/${post.slug}`}
                    className="inline-flex text-primary font-semibold hover:underline"
                  >
                    Xem chi tiết →
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-10 bg-card border border-border rounded-xl p-6">
            <h2 className="text-xl font-bold mb-3">
              Dịch vụ xe du lịch Tân Oanh
            </h2>
            <p className="text-muted-foreground leading-7">
              Nếu bạn đang cần{" "}
              <Link to="/xe-ghep" className="text-primary font-medium hover:underline">
                xe ghép Quảng Trị
              </Link>{" "}
              hoặc{" "}
              <Link
                to="/xe-du-lich"
                className="text-primary font-medium hover:underline"
              >
                xe dịch vụ Quảng Trị
              </Link>
              , hãy liên hệ để được hỗ trợ đưa đón tận nơi, linh hoạt thời gian
              và tư vấn tuyến phù hợp.
            </p>

            <div className="mt-4 flex flex-col gap-2 text-sm">
              <a href="tel:0866600822" className="text-primary font-semibold">
                📞 Gọi ngay: 08.666.008.22
              </a>
              <a
                href="https://zalo.me/0866600822"
                target="_blank"
                rel="noreferrer"
                className="text-primary font-semibold"
              >
                💬 Chat Zalo đặt xe
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
