import { Link } from "react-router-dom";
import { ArrowRight, BriefcaseBusiness, MapPin, Route } from "lucide-react";
import { Button } from "@/components/ui/button";
import destQT from "@/assets/dest-quangtri.jpg";
import destQB from "@/assets/dest-quangbinh.jpg";
import destHue from "@/assets/dest-hue.jpg";
import destDN from "@/assets/dest-danang.jpg";

const destinations = [
  {
    img: destQT,
    name: "Quảng Trị",
    desc: "Thành Cổ, Địa đạo Vịnh Mốc, Cầu Hiền Lương, Cửa Việt, Cửa Tùng – phù hợp cho đoàn doanh nghiệp tham quan trong ngày.",
    transport: "Xe 4–16 chỗ, lịch trình linh hoạt cho chuyên gia, đối tác và đoàn công tác.",
    link: "/tour-du-lich#quang-tri",
  },
  {
    img: destQB,
    name: "Quảng Bình",
    desc: "Phong Nha – Kẻ Bàng, Động Thiên Đường, Suối Moọc – phù hợp cho tour cuối tuần sau lịch làm việc tại Quảng Trị.",
    transport: "Xe riêng từ Quảng Trị đi Quảng Bình, phù hợp nhóm chuyên gia và khách VIP.",
    link: "/tour-du-lich#quang-binh",
  },
  {
    img: destHue,
    name: "Huế",
    desc: "Đại Nội, lăng tẩm, sông Hương, sân bay Phú Bài – tuyến quan trọng cho khách công tác và đưa đón sân bay.",
    transport: "Xe đưa đón Quảng Trị – Huế, xe sân bay Phú Bài, xe công tác trong ngày.",
    link: "/tour-du-lich#hue",
  },
  {
    img: destDN,
    name: "Đà Nẵng",
    desc: "Sân bay Đà Nẵng, Bà Nà Hills, Hội An, trung tâm hội nghị – phù hợp cho lịch trình công tác kết hợp nghỉ dưỡng.",
    transport: "Xe Quảng Trị – Đà Nẵng, đón tiễn sân bay, xe phục vụ đối tác và đoàn sự kiện.",
    link: "/tour-du-lich#da-nang",
  },
];

const featuredPlaces = [
  "Thành Cổ Quảng Trị",
  "Địa đạo Vịnh Mốc",
  "Cầu Hiền Lương – Sông Bến Hải",
  "Biển Cửa Việt",
  "Biển Cửa Tùng",
  "Thánh địa La Vang",
];

const DiaDiem = () => (
  <>
    <section className="bg-gradient-to-br from-foreground via-foreground to-primary py-16">
      <div className="container text-primary-foreground">
        <div className="max-w-3xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-accent">
            Điểm đến & lịch trình
          </p>
          <h1 className="text-3xl sm:text-5xl font-extrabold mb-4 leading-tight">
            Địa điểm du lịch phù hợp cho khách doanh nghiệp và chuyên gia
          </h1>
          <p className="text-lg opacity-90 leading-8">
            Tân Oanh Transport hỗ trợ xây dựng lịch trình tham quan Quảng Trị,
            Huế, Quảng Bình, Đà Nẵng cho đoàn công tác, đối tác, chuyên gia và khách VIP.
          </p>
        </div>
      </div>
    </section>

    <section className="py-12 bg-secondary/40">
      <div className="container">
        <div className="grid md:grid-cols-3 gap-5">
          <div className="bg-card border border-border rounded-2xl p-6 shadow-sm">
            <BriefcaseBusiness className="h-8 w-8 text-primary mb-3" />
            <h2 className="font-bold text-lg mb-2">Phù hợp khách doanh nghiệp</h2>
            <p className="text-sm text-muted-foreground leading-6">
              Lịch trình gọn, đúng giờ, ưu tiên trải nghiệm lịch sự và thuận tiện cho đối tác.
            </p>
          </div>
          <div className="bg-card border border-border rounded-2xl p-6 shadow-sm">
            <Route className="h-8 w-8 text-primary mb-3" />
            <h2 className="font-bold text-lg mb-2">Kết hợp công tác & tham quan</h2>
            <p className="text-sm text-muted-foreground leading-6">
              Có thể thiết kế lịch trình nửa ngày, 1 ngày hoặc cuối tuần sau thời gian làm việc.
            </p>
          </div>
          <div className="bg-card border border-border rounded-2xl p-6 shadow-sm">
            <MapPin className="h-8 w-8 text-primary mb-3" />
            <h2 className="font-bold text-lg mb-2">Phục vụ miền Trung</h2>
            <p className="text-sm text-muted-foreground leading-6">
              Quảng Trị, Huế, Quảng Bình, Đà Nẵng và các tuyến đưa đón sân bay quan trọng.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section className="py-14">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <p className="text-sm font-semibold text-primary uppercase tracking-[0.2em] mb-2">Khu vực phục vụ</p>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground">
            Các điểm đến nổi bật cho đoàn công tác và khách du lịch
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {destinations.map((d) => (
            <article key={d.name} className="bg-card rounded-2xl overflow-hidden border border-border shadow-sm hover:shadow-lg transition-shadow">
              <img src={d.img} alt={`Du lịch ${d.name}`} className="w-full h-56 object-cover" loading="lazy" width={800} height={600} />
              <div className="p-6">
                <h2 className="text-xl font-bold text-foreground flex items-center gap-2 mb-2">
                  <MapPin className="h-5 w-5 text-primary" /> {d.name}
                </h2>
                <p className="text-sm text-muted-foreground mb-4 leading-6">{d.desc}</p>
                <div className="bg-secondary rounded-xl p-4 text-sm mb-4">
                  <p className="font-medium text-secondary-foreground">🚗 {d.transport}</p>
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link to={d.link} className="flex-1">
                    <Button variant="outline" size="sm" className="w-full gap-2">
                      Xem lịch trình <ArrowRight className="h-3 w-3" />
                    </Button>
                  </Link>
                  <a href="tel:0866600822" className="flex-1">
                    <Button size="sm" className="w-full">Tư vấn xe</Button>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>

    <section className="py-14 bg-secondary/40">
      <div className="container max-w-5xl">
        <div className="bg-card border border-border rounded-2xl p-6 sm:p-8">
          <h2 className="text-2xl font-extrabold mb-4">Điểm tham quan thường được chọn tại Quảng Trị</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {featuredPlaces.map((place) => (
              <div key={place} className="rounded-xl bg-secondary p-4 text-sm font-semibold text-secondary-foreground">
                {place}
              </div>
            ))}
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link to="/tour-du-lich">
              <Button variant="outline">Xem tour gợi ý</Button>
            </Link>
            <Link to="/lien-he">
              <Button>Nhận tư vấn lịch trình</Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  </>
);

export default DiaDiem;
