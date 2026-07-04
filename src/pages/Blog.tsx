import { Link } from "react-router-dom";
import { ArrowRight, BriefcaseBusiness, Factory, Plane, Route } from "lucide-react";
import { Button } from "@/components/ui/button";

const posts = [
  {
    slug: "nen-di-xe-ghep-hay-thue-xe",
    category: "Doanh nghiệp",
    title: "Thuê xe riêng hay xe ghép khi đi công tác tại Quảng Trị?",
    excerpt:
      "Gợi ý lựa chọn phương tiện phù hợp cho chuyên gia, kỹ sư, khách công tác và doanh nghiệp cần lịch trình riêng tư, đúng giờ.",
    image:
      "https://images.unsplash.com/photo-1549924231-f129b911e442?q=80&w=1200&auto=format&fit=crop",
  },
  {
    slug: "gia-xe-quang-tri-di-hue",
    category: "Sân bay",
    title: "Kinh nghiệm đặt xe công tác từ Quảng Trị đi Huế, Đà Nẵng",
    excerpt:
      "Các lưu ý khi đặt xe đưa đón sân bay, xe đi họp, xe đón đối tác và xe phục vụ lịch trình công tác trong ngày.",
    image:
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=1200&auto=format&fit=crop",
  },
  {
    slug: "kinh-nghiem-di-da-nang-tu-quang-tri",
    category: "Chuyên gia",
    title: "Tiêu chí chọn xe đưa đón chuyên gia và đối tác nước ngoài",
    excerpt:
      "Doanh nghiệp nên ưu tiên xe sạch, tài xế lịch sự, đúng giờ, có hợp đồng rõ ràng và phương án dự phòng khi phát sinh.",
    image:
      "https://images.unsplash.com/photo-1485739139909-d0d1783a7196?q=80&w=1200&auto=format&fit=crop",
  },
  {
    slug: "lich-trinh-du-lich-quang-tri-1-ngay",
    category: "Tour doanh nghiệp",
    title: "Gợi ý lịch trình tiếp khách, tham quan Quảng Trị trong 1 ngày",
    excerpt:
      "Kết hợp Thành Cổ, Vịnh Mốc, Cầu Hiền Lương, Cửa Việt cho đoàn công tác hoặc đối tác sau lịch làm việc.",
    image:
      "https://cms.junglebosstours.com/assets/9dba0c19-b575-4fc7-b973-439dc1a6114f?format=webp",
  },
  {
    slug: "top-dia-diem-du-lich-quang-tri",
    category: "Du lịch",
    title: "Những địa điểm nên đưa đối tác đi tham quan tại Quảng Trị",
    excerpt:
      "Các điểm đến phù hợp cho đoàn doanh nghiệp, khách VIP, chuyên gia nước ngoài và khách công tác lưu trú ngắn ngày.",
    image:
      "https://imagevietnam.vnanet.vn//MediaUpload/Org/2024/10/24/2824-14-31-25.jpg",
  },
  {
    slug: "cach-dat-xe-ghep-quang-tri",
    category: "Đặt xe",
    title: "Cách đặt xe nhanh cho doanh nghiệp khi có lịch gấp",
    excerpt:
      "Chuẩn bị thông tin điểm đón, điểm trả, số người, loại xe, thời gian chờ và yêu cầu hóa đơn để báo giá nhanh hơn.",
    image:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1200&auto=format&fit=crop",
  },
];

const focusTopics = [
  { icon: BriefcaseBusiness, title: "Xe doanh nghiệp", text: "Kinh nghiệm thuê xe công tác, xe tháng, xe phục vụ lãnh đạo và nhân sự." },
  { icon: Factory, title: "Khu công nghiệp", text: "Nội dung về di chuyển đến KCN, nhà máy, công trình và khu kinh tế." },
  { icon: Plane, title: "Sân bay", text: "Đưa đón sân bay Huế, Đà Nẵng và chuẩn bị cho sân bay Quảng Trị." },
  { icon: Route, title: "Tour doanh nghiệp", text: "Gợi ý lịch trình tham quan, tiếp khách và du lịch kết hợp công tác." },
];

const Blog = () => {
  return (
    <>
      <section className="bg-gradient-to-br from-foreground via-foreground to-primary py-16">
        <div className="container text-primary-foreground">
          <div className="max-w-3xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-accent">
              Tân Oanh Transport Blog
            </p>
            <h1 className="text-3xl sm:text-5xl font-extrabold mb-4 leading-tight">
              Kiến thức di chuyển, công tác và du lịch doanh nghiệp tại Quảng Trị
            </h1>
            <p className="text-lg opacity-90 leading-8">
              Cập nhật kinh nghiệm thuê xe doanh nghiệp, xe đưa đón chuyên gia,
              xe sân bay, lịch trình công tác và các điểm đến phù hợp cho khách hàng doanh nghiệp.
            </p>
          </div>
        </div>
      </section>

      <section className="py-14 bg-secondary/40">
        <div className="container">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {focusTopics.map((item) => (
              <div key={item.title} className="bg-card border border-border rounded-2xl p-5 shadow-sm">
                <div className="h-11 w-11 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <item.icon className="h-5 w-5 text-primary" />
                </div>
                <h2 className="font-bold text-foreground mb-2">{item.title}</h2>
                <p className="text-sm text-muted-foreground leading-6">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14">
        <div className="container max-w-6xl">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
            <div>
              <p className="text-sm font-semibold text-primary uppercase tracking-[0.2em] mb-2">Bài viết mới</p>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground">
                Nội dung hỗ trợ khách doanh nghiệp & khách công tác
              </h2>
            </div>
            <Link to="/lien-he">
              <Button className="gap-2">
                Tư vấn lịch trình <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="bg-card border border-border rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
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
                  <span className="inline-flex rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-primary">
                    {post.category}
                  </span>
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
                    className="inline-flex items-center gap-1 text-primary font-semibold hover:underline"
                  >
                    Xem chi tiết <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-10 bg-primary rounded-2xl p-6 sm:p-8 text-primary-foreground flex flex-col lg:flex-row gap-6 lg:items-center lg:justify-between">
            <div>
              <h2 className="text-2xl font-extrabold mb-2">
                Cần xe cho chuyên gia, đối tác hoặc đoàn công tác?
              </h2>
              <p className="opacity-90 leading-7 max-w-2xl">
                Tân Oanh Transport hỗ trợ xe đưa đón chuyên gia, xe doanh nghiệp,
                xe hợp đồng dài hạn, xe sân bay và tour doanh nghiệp tại Quảng Trị.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a href="tel:0866600822">
                <Button className="bg-accent text-accent-foreground hover:bg-accent/90 font-bold">
                  Gọi 08.666.008.22
                </Button>
              </a>
              <Link to="/lien-he">
                <Button variant="outline" className="border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10">
                  Nhận báo giá
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
