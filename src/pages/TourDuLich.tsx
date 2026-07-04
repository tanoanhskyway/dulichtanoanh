import { Link } from "react-router-dom";
import { ArrowRight, Building2, CalendarCheck, Camera, Landmark, Mountain, Sun, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import destQT from "@/assets/dest-quangtri.jpg";
import destQB from "@/assets/dest-quangbinh.jpg";
import destHue from "@/assets/dest-hue.jpg";
import destDN from "@/assets/dest-danang.jpg";

const articles = [
  {
    id: "quang-tri",
    img: destQT,
    icon: Landmark,
    province: "Quảng Trị",
    title: "Tour doanh nghiệp tại Quảng Trị – Lịch sử, biển và trải nghiệm địa phương",
    intro:
      "Phù hợp cho đoàn công tác, chuyên gia, đối tác và khách VIP muốn tham quan trong ngày sau lịch làm việc tại Quảng Trị.",
    highlights: [
      { name: "Thành cổ Quảng Trị", slug: "thanh-co-quang-tri", desc: "Điểm đến lịch sử quan trọng, phù hợp cho lịch trình trang trọng và ý nghĩa." },
      { name: "Địa đạo Vịnh Mốc", slug: "dia-dao-vinh-moc", desc: "Trải nghiệm lịch sử độc đáo, thường được chọn cho khách nước ngoài." },
      { name: "Cầu Hiền Lương – Sông Bến Hải", slug: "cau-hien-luong-ben-hai", desc: "Biểu tượng lịch sử chia cắt hai miền, dễ kết hợp cùng Vịnh Mốc." },
      { name: "Bãi biển Cửa Việt", slug: "bien-cua-viet", desc: "Phù hợp ăn trưa, nghỉ ngơi, tiếp khách và trải nghiệm hải sản địa phương." },
    ],
    suitable: "Đoàn 4–16 khách, lịch trình nửa ngày hoặc 1 ngày.",
  },
  {
    id: "quang-binh",
    img: destQB,
    icon: Mountain,
    province: "Quảng Bình",
    title: "Tour Quảng Bình cho đoàn công tác – Phong Nha, Thiên Đường, Suối Moọc",
    intro:
      "Lựa chọn phù hợp cho chuyên gia và đối tác lưu trú tại Quảng Trị muốn có chuyến đi cuối tuần chất lượng.",
    highlights: [
      { name: "Phong Nha – Kẻ Bàng", slug: "phong-nha-ke-bang", desc: "Di sản thiên nhiên thế giới, phù hợp cho khách quốc tế và đoàn doanh nghiệp." },
      { name: "Động Thiên Đường", slug: "dong-thien-duong", desc: "Hang động nổi bật, lịch trình dễ tổ chức trong ngày." },
      { name: "Suối Moọc", slug: "suoi-mooc", desc: "Không gian thiên nhiên thư giãn, phù hợp tour cuối tuần." },
      { name: "Bãi biển Nhật Lệ", slug: "bien-nhat-le", desc: "Có thể kết hợp nghỉ dưỡng và ăn tối tại Đồng Hới." },
    ],
    suitable: "Đoàn chuyên gia, khách nước ngoài, tour cuối tuần.",
  },
  {
    id: "hue",
    img: destHue,
    icon: Landmark,
    province: "Huế",
    title: "Tour Huế kết hợp đưa đón sân bay Phú Bài",
    intro:
      "Phù hợp cho khách công tác, lãnh đạo hoặc đối tác cần kết hợp đưa đón sân bay với tham quan cố đô.",
    highlights: [
      { name: "Đại Nội Huế", slug: "dai-noi-hue", desc: "Điểm tham quan biểu tượng, phù hợp cho khách VIP và khách quốc tế." },
      { name: "Chùa Thiên Mụ", slug: "chua-thien-mu", desc: "Điểm dừng ngắn, đẹp và dễ kết hợp trong lịch trình." },
      { name: "Sông Hương", slug: "song-huong-hue", desc: "Có thể kết hợp ăn tối, du thuyền hoặc nghỉ dưỡng." },
      { name: "Biển Lăng Cô", slug: "bien-lang-co", desc: "Phù hợp tuyến Huế – Đà Nẵng hoặc lịch trình nghỉ dưỡng." },
    ],
    suitable: "Đón tiễn sân bay, đoàn lãnh đạo, khách công tác.",
  },
  {
    id: "da-nang",
    img: destDN,
    icon: Sun,
    province: "Đà Nẵng",
    title: "Tour Đà Nẵng – Hội An cho đoàn doanh nghiệp",
    intro:
      "Phù hợp cho khách công tác cần di chuyển sân bay Đà Nẵng, hội nghị, sự kiện hoặc lịch trình tiếp khách miền Trung.",
    highlights: [
      { name: "Bà Nà Hills – Cầu Vàng", slug: "ba-na-hills", desc: "Điểm đến nổi bật cho đoàn khách muốn trải nghiệm trọn ngày." },
      { name: "Bãi biển Mỹ Khê", slug: "bien-my-khe", desc: "Phù hợp nghỉ dưỡng, ăn tối và gặp gỡ đối tác." },
      { name: "Phố cổ Hội An", slug: "pho-co-hoi-an", desc: "Lịch trình tối rất phù hợp cho khách doanh nghiệp." },
      { name: "Bán đảo Sơn Trà", slug: "ban-dao-son-tra", desc: "Điểm tham quan ngắn, cảnh quan đẹp, dễ sắp xếp." },
    ],
    suitable: "Sự kiện, hội nghị, đón tiễn sân bay Đà Nẵng.",
  },
];

const TourDuLich = () => (
  <>
    <section className="bg-gradient-to-br from-foreground via-foreground to-primary py-16">
      <div className="container text-primary-foreground">
        <div className="max-w-3xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-accent">
            Tour & Travel Solutions
          </p>
          <h1 className="text-3xl sm:text-5xl font-extrabold mb-4 leading-tight">
            Tour doanh nghiệp và lịch trình tham quan cho đối tác tại miền Trung
          </h1>
          <p className="text-lg opacity-90 leading-8">
            Tân Oanh Transport không chỉ cung cấp xe doanh nghiệp, mà còn hỗ trợ
            lịch trình tham quan cho chuyên gia, khách công tác, đoàn sự kiện và đối tác VIP.
          </p>
        </div>
      </div>
    </section>

    <section className="py-12 bg-secondary/40">
      <div className="container">
        <div className="grid md:grid-cols-3 gap-5">
          <div className="bg-card border border-border rounded-2xl p-6 shadow-sm">
            <Building2 className="h-8 w-8 text-primary mb-3" />
            <h2 className="font-bold text-lg mb-2">Phục vụ đoàn doanh nghiệp</h2>
            <p className="text-sm text-muted-foreground leading-6">
              Lịch trình phù hợp chuyên gia, nhà đầu tư, đối tác và khách công tác.
            </p>
          </div>
          <div className="bg-card border border-border rounded-2xl p-6 shadow-sm">
            <CalendarCheck className="h-8 w-8 text-primary mb-3" />
            <h2 className="font-bold text-lg mb-2">Linh hoạt theo lịch làm việc</h2>
            <p className="text-sm text-muted-foreground leading-6">
              Có thể đi nửa ngày, 1 ngày, cuối tuần hoặc kết hợp đưa đón sân bay.
            </p>
          </div>
          <div className="bg-card border border-border rounded-2xl p-6 shadow-sm">
            <Users className="h-8 w-8 text-primary mb-3" />
            <h2 className="font-bold text-lg mb-2">Xe và tài xế đồng bộ</h2>
            <p className="text-sm text-muted-foreground leading-6">
              Điều phối xe 4–16 chỗ, tài xế lịch sự, đúng giờ và hỗ trợ đoàn trong suốt hành trình.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section className="py-14">
      <div className="container max-w-5xl space-y-14">
        {articles.map((article) => (
          <article key={article.id} id={article.id} className="bg-card border border-border rounded-3xl overflow-hidden shadow-sm">
            <img
              src={article.img}
              alt={article.title}
              className="w-full h-[260px] sm:h-[340px] object-cover"
              loading="lazy"
            />
            <div className="p-6 sm:p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-11 w-11 rounded-xl bg-primary/10 flex items-center justify-center">
                  <article.icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-primary font-semibold uppercase tracking-[0.18em]">{article.province}</p>
                  <p className="text-xs text-muted-foreground">{article.suitable}</p>
                </div>
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold mb-3 text-foreground">{article.title}</h2>
              <p className="text-muted-foreground mb-6 leading-7">{article.intro}</p>

              <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                <Camera className="h-5 w-5 text-primary" /> Điểm đến có thể kết hợp
              </h3>

              <div className="grid sm:grid-cols-2 gap-4 mb-6">
                {article.highlights.map((h) => (
                  <div key={h.slug} className="bg-secondary/70 rounded-2xl border border-border p-5">
                    <h4 className="font-bold text-lg mb-1">
                      <Link to={`/dia-diem/${h.slug}`} className="hover:text-primary">
                        {h.name}
                      </Link>
                    </h4>
                    <p className="text-sm text-muted-foreground leading-6">{h.desc}</p>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <Link to="/lien-he">
                  <Button className="gap-2">
                    Nhận tư vấn tour <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
                <a href="tel:0866600822">
                  <Button variant="outline">Gọi 08.666.008.22</Button>
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  </>
);

export default TourDuLich;
