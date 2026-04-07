import { useEffect } from "react";
import { Clock, MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import BookingForm from "@/components/BookingForm";
import car4 from "@/assets/car-4seat.jpg";
import car7 from "@/assets/car-7seat.jpg";

const schedule = [
  { time: "05:00", route: "Đông Hà → Đà Nẵng" },
  { time: "07:00", route: "Đông Hà → Đà Nẵng" },
  { time: "09:00", route: "Đông Hà → Đà Nẵng" },
  { time: "12:00", route: "Đà Nẵng → Đông Hà" },
  { time: "14:00", route: "Đà Nẵng → Đông Hà" },
  { time: "17:00", route: "Đà Nẵng → Đông Hà" },
];

const pricing = [
  { route: "Đông Hà – Đà Nẵng", price: "400.000đ/khách" },
  { route: "Cửa Việt – Đà Nẵng", price: "450.000đ/khách" },
  { route: "Đông Hà – Sân bay Phú Bài", price: "250.000đ/khách" },
  { route: "Cửa Tùng – Sân bay Phú bài", price: "300.000đ/khách" },
];

const XeGhep = () => {
  useEffect(() => {
    document.title = "Xe ghép Quảng Trị – Đà Nẵng | Giá rẻ 24/7 | Tân Oanh";

    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute(
        "content",
        "Dịch vụ xe ghép Quảng Trị đi Đà Nẵng, Huế, sân bay Phú Bài. Đưa đón tận nơi, giá tiết kiệm, xe đời mới, khởi hành hàng ngày. Liên hệ Tân Oanh để đặt xe nhanh."
      );
    }

    let canonical = document.querySelector(
      'link[rel="canonical"]'
    ) as HTMLLinkElement | null;

    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }

    canonical.setAttribute("href", "https://dulichtanoanh.com/xe-ghep");

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute("content", "Xe ghép Quảng Trị – Đà Nẵng | Tân Oanh");
    }

    const ogDescription = document.querySelector(
      'meta[property="og:description"]'
    );
    if (ogDescription) {
      ogDescription.setAttribute(
        "content",
        "Xe ghép Quảng Trị đi Đà Nẵng, đưa đón tận nơi, giá rẻ, lịch chạy hàng ngày."
      );
    }

    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) {
      ogUrl.setAttribute("content", "https://dulichtanoanh.com/xe-ghep");
    }
  }, []);

  return (
    <>
      <section className="bg-primary py-16">
        <div className="container text-primary-foreground text-center">
          <h1 className="text-3xl sm:text-4xl font-extrabold mb-3">Xe Ghép Quảng Trị – Đà Nẵng</h1>
          <p className="text-lg opacity-90 max-w-xl mx-auto">Tuyến cố định hàng ngày, đưa đón tận nơi, giá tiết kiệm</p>
        </div>
      </section>

      <section className="py-12">
        <div className="container grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">Dịch vụ xe ghép</h2>
              <p className="text-muted-foreground leading-relaxed">
                Xe ghép tuyến Quảng Trị - Đà Nẵng hoạt động hàng ngày với nhiều chuyến trong ngày. 
                Đón/trả tận nơi trong nội thành, xe đời mới, máy lạnh, thoải mái. 
                Phù hợp cho cá nhân, nhóm nhỏ cần di chuyển tiết kiệm.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <img src={car4} alt="Xe ghép Quảng Trị 4 chỗ" className="rounded-xl w-full h-48 object-cover shadow-sm" loading="lazy" width={800} height={600} />
              <img src={car7} alt="Xe ghép Quảng Trị 7 chỗ" className="rounded-xl w-full h-48 object-cover shadow-sm" loading="lazy" width={800} height={600} />
            </div>

            <div>
              <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                <Clock className="h-5 w-5 text-primary" /> Lịch chạy trong ngày
              </h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {schedule.map((s, i) => (
                  <div key={i} className="bg-card rounded-lg p-4 border border-border flex items-center gap-3">
                    <span className="bg-primary text-primary-foreground rounded-md px-3 py-1 text-sm font-bold">{s.time}</span>
                    <span className="text-sm text-foreground">{s.route}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                <MapPin className="h-5 w-5 text-primary" /> Giá tham khảo
              </h2>
              <div className="space-y-3">
                {pricing.map((p) => (
                  <div key={p.route} className="bg-card rounded-lg p-4 border border-border flex items-center justify-between">
                    <span className="text-foreground font-medium">{p.route}</span>
                    <span className="text-primary font-bold text-lg">{p.price}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-card rounded-xl p-6 border border-border space-y-3">
              <h2 className="text-xl font-bold text-foreground">Xe ghép Quảng Trị tiện lợi, tiết kiệm</h2>
              <p className="text-muted-foreground leading-relaxed">
                Dịch vụ xe ghép Quảng Trị phù hợp cho khách đi lẻ, nhóm nhỏ hoặc hành khách cần di chuyển giữa Quảng Trị, Huế và Đà Nẵng với chi phí hợp lý. 
                Nhờ lịch chạy cố định, đưa đón tận nơi và xe đời mới, đây là lựa chọn được nhiều khách hàng ưu tiên khi cần di chuyển nhanh, an toàn và thuận tiện.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Nếu bạn đang tìm kiếm xe ghép Quảng Trị đi Đà Nẵng, xe ghép Quảng Trị đi sân bay hoặc xe ghép Quảng Trị đi Huế, Tân Oanh luôn sẵn sàng hỗ trợ với lịch trình linh hoạt và tư vấn nhanh chóng.
              </p>
            </div>

            <a href="tel:0866600822">
              <Button size="lg" className="w-full sm:w-auto cta-shadow h-12 px-8 text-base font-semibold gap-2 mt-4">
                Đặt xe ngay <ArrowRight className="h-4 w-4" />
              </Button>
            </a>
          </div>

          <div className="lg:sticky lg:top-24 lg:self-start">
            <BookingForm />
          </div>
        </div>
      </section>
    </>
  );
};

export default XeGhep;
